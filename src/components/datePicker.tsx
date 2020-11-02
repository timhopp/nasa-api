import React, { useState } from "react";
import  store  from "../app/store"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchPhotoByDate} from "../reducers/currentPhotoSlice"
import moment from "moment"

interface DateProps {
  startDate: Date;
 
}

export default class DateSelector extends React.Component <{}, DateProps>{
constructor(props : DateProps) {
  super(props);
  this.state = {
    startDate: new Date()
  };
  this.handleChange = this.handleChange.bind(this);
}


handleChange(date: Date) {
  let formattedDate = moment(date).format("yyyy-MM-DD")
  console.log('date is here!', formattedDate);
  store.dispatch(fetchPhotoByDate(formattedDate))
  this.setState({
    startDate: date });
  // this.props.changePhoto(date);
  }



render(){
  const {startDate } = this.state;
return ( 
    <DatePicker className="m-5"  dateFormat="yyyy/MM/dd" selected={startDate}
     onChange={this.handleChange}  
    showYearDropdown

    />
)
}
};


// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     changePhoto: (date: Date) => dispatch(fetchPhotoByDate(date))
//   }
// }

// export default connect(null, mapDispatchToProps)
// (DateSelector);
