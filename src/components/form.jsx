import React from 'react';

class Form extends React.Component {

  render() {
    const { systolic, diastolic, heartRate, dateTime, onChange, onSubmit} = this.props;

    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
          <label htmlFor="systolic">Systolic</label>
          <input type="number" name="systolic" id="systolic" min="0" max="200" placeholder="120" value={systolic} onChange={onChange}/>
          <label htmlFor="diastolic">Diastolic</label>
          <input type="number" name="diastolic" id="diastolic" min="0" max="200" placeholder="80" value={diastolic} onChange={onChange}/>
          <label htmlFor="heart-rate">Heart Rate</label>
          <input type="number" name="heartRate" id="heartRate" min="0" max="200" placeholder="60" value={heartRate} onChange={onChange}/>
          <label htmlFor="datetime">Date and Time</label>
          <input type="datetime-local" name="dateTime" id="dateTime" value={dateTime} onChange={onChange}/>
          <input type="submit" value="Add Reading" id="submit-btn"/>
        </form>
      </React.Fragment>
    );
  }
}

export default Form