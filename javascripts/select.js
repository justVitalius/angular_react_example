import React from "react";
import ReactSelect from "react-select";

class SelectableDayExample extends React.Component {

  //static displayName = "SelectableDayExample"

  propTypes() {
    return {
      options: React.PropTypes.array
    }
  }

  getDefaultProps(){
    return {
      options: [{value: 'label-default', label: 'label-default'}]
    }
  }

  render() {
    return (
      <div>
        <p>Rendered {this.props.options.length} items</p>
        <ReactSelect options={this.props.options} name='select-random-data' />
      </div>  
    );
  }

}

export default SelectableDayExample;