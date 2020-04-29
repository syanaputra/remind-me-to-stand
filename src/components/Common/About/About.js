import React, { useState } from 'react';
import SideModal from '../SideModal';

const About = (props) => {
    const [ modalStatus, setModalStatus ] = useState(false);

    return (
        <React.Fragment>
            <button className="about-btn" onClick={e => setModalStatus(true)}>About</button>
            <SideModal
                active={modalStatus}
                onCloseClick={e => setModalStatus(false)}
                Heading={
                    <h2 className="heading heading--lv1">About</h2>
                }
                Body={
                    <div className="text-box">
                        <h1 className="heading heading--lv3">Online Stand Up Reminder</h1>
                        <p>
                            Sitting behind your desk all day is bad for your health and experts have long been advising people to stand at 
                            their workstations for about 15 minutes an hour. A research by professor from University of Waterloo shows 
                            that people should be standing for at least <strong>30 minutes per hour</strong> to get health benefits.
                        </p>
                        <p>
                            <strong>Remind Me To Stand App</strong> is built to remind you to stand. You can think of this as a simple alarm web-app.
                            Now you don't have to get distracted by your phone just to setup an alarm.
                            Simply click the desired time, once the time is up, the alarm will ring.
                        </p>
                    </div>
                }
            />
        </React.Fragment>
    );
}

export default About;