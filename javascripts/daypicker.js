import React from "react";
import DayPicker from "react-day-picker";
import { isSameDay } from "./date_utils";


class SelectableDayExample extends React.Component {

  //static displayName = "SelectableDayExample"

  propTypes() {
    return {
      handleDateSelect: React.PropTypes.func,
      numberOfMonths: React.PropTypes.number
    }
  }

  constructor() {
    super();
    this.state = {
      selectedDay: new Date()
    };
  }

  render() {
    const { selectedDay } = this.state;

    const modifiers = {
      "selected": (day) => isSameDay(selectedDay, day)
    };

    return (
      <div>
        <h3 style={{textAlign: 'center'}}>
          Дата в react компоненте: { selectedDay.toLocaleDateString('ru-RU') }
        </h3>
        <DayPicker
          numberOfMonths={ this.props.numberOfMonths }
          enableOutsideDays={true}
          modifiers={ modifiers }
          onDayClick={ this.handleDayClick.bind(this) }
          />
      </div>
    );
  }


  //////////////////////

  handleDayClick(e, day) {
    if (typeof this.props.handleDateSelect === 'function'){
      this.props.handleDateSelect(day);
    }

    this.setState({
      selectedDay: day
    });
  }

}

export default SelectableDayExample;