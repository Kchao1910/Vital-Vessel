import React from 'react';
import LineGraph from './graph'

class Tracker extends React.Component {
  render() {
    const { dateData, sysData, diaData, hrData} = this.props;

    return (
      <React.Fragment>
        <h2>Blood Pressure History</h2>
        <LineGraph dateData={dateData} sysData={sysData} diaData={diaData} hrData={hrData}></LineGraph>
      </React.Fragment>
    );
  }
}

export default Tracker