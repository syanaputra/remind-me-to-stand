import React, { useReducer, useEffect } from 'react';
import Footer from '../Common/Footer';
import Timer from '../Timer';
import TimePills from '../TimePills';
import Heading from '../Common/Heading';
import { initialState, reducer } from './reducer';
import { updateDocumentTitleBySecond, updateDocumentTitleWithSiteName, resetDocumentTitle } from '../../helpers/document';
import '../../styles/scss/app.scss';
import { playSound, stopSound } from '../../helpers/alarm-player';
import { requestNotification, notifyTimerFinished } from '../../helpers/desktop-notification';

let timerInterval;

const App = (props) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { timeLeft, status } = state;

  const setTimerRunner = () => {
    timerInterval = setInterval(() => {
      dispatch({
        type: 'REDUCE_TIME_BY_SECOND',
      });
    }, 1000);
  };
  const removeTimerRunner = () => {
    clearInterval(timerInterval);
    timerInterval = null;
  };

  const timerAction = {
    start: () => {
      dispatch({
        type: 'START_TIMER'
      });
      
      setTimerRunner();
    },
    pause: () => {
      dispatch({
        type: 'PAUSE_TIMER'
      });
    },
    reset: () => {
      dispatch({
        type: 'RESET_TIMER'
      });

      stopSound();
    },
    finish: (value) => {
      dispatch({
        type: 'FINISH_TIMER',
      });
      
      removeTimerRunner();
    },
    modify: (value) => {
      dispatch({
        type: 'MODIFY_TIME',
        value: value
      });

      removeTimerRunner();
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
      notifyTimerFinished(timerAction);
    }
    else if(status === 'inactive') {
      resetDocumentTitle();
    }
  }, [timeLeft, status]);

  // Request notification on the first time app loads
  useEffect(() => {
    requestNotification();
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
    </div>
  );
}

export default App;
