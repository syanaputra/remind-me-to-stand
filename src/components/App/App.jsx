import React, { useReducer, useEffect } from 'react';
import About from '../Common/About';
import Footer from '../Common/Footer';
import Timer from '../Timer';
import TimePills from '../TimePills';
import Heading from '../Common/Heading';
import { initialState, reducer } from './reducer';
import { updateDocumentTitleBySecond, updateDocumentTitleWithSiteName, resetDocumentTitle } from '../../helpers/document';
import { requestNotification, notifyTimerFinished } from '../../helpers/desktop-notification';
import { initializeGA, sendTimerEvent } from '../../helpers/ga';
import useInterval from '../../hooks/useInterval';
import useAlarmSound from '../../hooks/useAlarmSound';
import '../../styles/scss/app.scss';

const App = (props) => {
  const { setup, clear } = useInterval();
  const { playSound, stopSound } = useAlarmSound();
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { timeLeft, status } = state;

  const setTimerRunner = () => {
    setup(() => {
      dispatch({
        type: 'REDUCE_TIME_BY_SECOND',
      });
    }, 1000);
  };

  const removeTimerRunner = () => {
    clear();
  };

  const timerAction = {
    start: () => {
      dispatch({
        type: 'START_TIMER'
      });
      
      setTimerRunner();
      sendTimerEvent('Start');
    },
    pause: () => {
      dispatch({
        type: 'PAUSE_TIMER'
      });

      removeTimerRunner();
      sendTimerEvent('Pause');
    },
    reset: () => {
      dispatch({
        type: 'RESET_TIMER'
      });

      stopSound();
      sendTimerEvent('Reset');
    },
    finish: (value) => {
      dispatch({
        type: 'FINISH_TIMER',
      });
      
      removeTimerRunner();
      sendTimerEvent('Finish');
    },
    modify: (value) => {
      dispatch({
        type: 'MODIFY_TIME',
        value: value
      });

      stopSound();
      removeTimerRunner();
      sendTimerEvent('Set Time', value);
    },
    setTime: (value) => {
      dispatch({
        type: 'SET_TIME',
        value: value
      });

      stopSound();
      setTimerRunner();
      sendTimerEvent('Set Time', value);
    },
  };

  const onAppClick = () => {
    if(status === 'finished') {
      timerAction.reset();
    }
  };

  // Effect
  // -------------
  // Handles all timer related
  useEffect(() => {
    if(status === 'active') {
      if(timeLeft > 0) {
        updateDocumentTitleBySecond(timeLeft);
      }
      else {
        timerAction.finish();
      }
    }
    else if(status === 'finished') {
      updateDocumentTitleWithSiteName(`Time's up`);

      // play music here
      playSound('bell');

      // send notification
      notifyTimerFinished(() => timerAction.reset());
    }
    else if(status === 'inactive') {
      resetDocumentTitle();
    }

    if (timeLeft <= 0) {
      removeTimerRunner();
    }
  }, [timeLeft, status]);

  // Request notification on the first time app loads
  useEffect(() => {
    requestNotification();
    initializeGA();
  }, []);

  return (
    <div className="app" onClick={onAppClick}>
      <div className="app__body">
        <div className="vspace">
          <Heading>remind me to stand after</Heading>
        </div>
        <div className="vspace">
          <Timer 
            data={state}
            timerAction={timerAction}
          />
        </div>
        <div className="vspace">
          <TimePills 
            timerAction={timerAction}
          />
        </div>
      </div>
      <Footer />
      <About />
    </div>
  );
}

export default App;
