import React from 'react';
import Tracker from './tracker'
import Reader from './reader'

class Interface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      systolic: "",
      diastolic: "",
      heartRate: "",
      date: "",
      logs: [],
      count: 0,
      dateData: [],
      sysData: [],
      diaData: [],
      hrData: []
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let {logs, count, systolic, diastolic, heartRate, date} = this.state;

    this.setState({count: count + 1});

    if (logs.length >= 1) {
      this.setState({ logs: logs.concat({ count, systolic, diastolic, heartRate, date })
      .sort((obj1, obj2) => (obj1.date > obj2.date) ? 1 : -1) });
    } else {
      this.setState({ logs: logs.concat({ count, systolic, diastolic, heartRate, date })});
    }

    this.setState({ dateData: logs.map(log => log.date),
      sysData: logs.map(log => log.systolic),
      diaData: logs.map(log => log.diastolic),
      hrData: logs.map(log => log.heartRate)
     });
  };

  render() {
    const { systolic, diastolic, heartRate, date, logs, dateData, sysData, diaData, hrData} = this.state;

    return (
      <React.Fragment>
        <Tracker dateData={dateData} sysData={sysData} diaData={diaData} hrData={hrData}></Tracker>
        <Reader onChange={this.handleChange} onSubmit={this.handleSubmit} systolic={systolic} diastolic={diastolic} heartRate={heartRate} date={date} logs={logs}></Reader>
      </React.Fragment>
    );  
  }
}

export default Interface