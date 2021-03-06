import React from 'react';
import Form from './form'

class Reader extends React.Component {
  render() {
    const { onChange, onSubmit, systolic, diastolic, heartRate, date, logs} = this.props;

    return (
      <React.Fragment>
        <section id="bp-log">
          <h2>Blood Pressure Log</h2>
          <ul>
            { logs.map(log => <li key={log.count}><span>Date: {log.date}</span>
            <span>Blood Pressure: {log.systolic}/{log.diastolic}</span>
            <span>Heart Rate: {log.heartRate}</span></li>
            )}
          </ul>
        </section>
        <section id="bp-reading">
          <h2>Blood Pressure Reading</h2>
          <Form onChange={onChange} onSubmit={onSubmit} systolic={systolic} diastolic={diastolic} heartRate={heartRate} date={date}></Form>
        </section>
      </React.Fragment>
    );  
  }
}

export default Reader