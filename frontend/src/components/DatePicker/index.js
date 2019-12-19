import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePick() {
  return (
    <DatePicker dateFormat='dd/MM/yyyy' selected={new Date()}/>
  );
}
