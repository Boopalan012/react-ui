import React, { useState } from 'react';
import Select from 'react-select';
import { Select2 } from 'select2-react-component';


export const Picklist = (props) => {
    const {options} = props;
    const [selectedOption,setSelectedOption] =useState({});
    const onchangeHandler=(value) =>{
         setSelectedOption(value);
         props.onChange(value);
    }
    return (
        <>
        <Select
        value={props.value}
        onChange={onchangeHandler}
        options={options}
        defaultValue={props.defaultValue?props.defaultValue:''}
      />
        </>
    );
};
