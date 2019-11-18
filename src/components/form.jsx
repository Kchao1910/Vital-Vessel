import React from 'react';

class Form extends React.Component {

  render() {
    const { systolic, diastolic, heartRate, date, onChange, onSubmit} = this.props;

    return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
          <label htmlFor="systolic">Systolic</label>
          <input type="number" name="systolic" id="systolic" min="0" max="200" placeholder="120" value={systolic} onChange={onChange}/>
          <label htmlFor="diastolic">Diastolic</label>
          <input type="number" name="diastolic" id="diastolic" min="0" max="200" placeholder="80" value={diastolic} onChange={onChange}/>
          <label htmlFor="heart-rate">Heart Rate</label>
          <input type="number" name="heartRate" id="heartRate" min="0" max="200" placeholder="60" value={heartRate} onChange={onChange}/>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" placeholder="dd/mm/yyyy" value={date} onChange={onChange}/>
          <input type="submit" value="Add Reading" id="submit-btn"/>
        </form>
      </React.Fragment>
    );
  }
}

export default Form