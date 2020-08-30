import React, {useState} from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
const DatePickerTool = ({startDate="", handleChange, showTimeInput=false, readonly=false, showDisabledMonthNavigation=false, mindate=""}) =>{
    const handleDateChangeRaw = (e) => {
        e.preventDefault();
      }
    
return (
    <>
        <DatePicker
            dateFormat={showTimeInput?"yyyy/MM/dd h:mm aa":"yyyy/MM/dd"}
            minDate={mindate}
            timeInputLabel="Time:"
            showTimeInput={showTimeInput}
            selected={startDate}
            onChange={handleChange}
            popperPlacement="bottom-end"
            disabledKeyboardNavigation={true}
            readOnly={readonly}
            onChangeRaw={handleDateChangeRaw}
            onKeyDown={true}
            showDisabledMonthNavigation={showDisabledMonthNavigation}
        />
    </>
);
}

export default DatePickerTool;