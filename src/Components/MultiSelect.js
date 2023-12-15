// import Select from "react-select/dist/declarations/src/Select";

import { useState } from 'react';
import Select from 'react-select';

export const MultiSelect=(props)=>{
  const {value,options} = props;
     const handleChange = (value) => {
        props.onChange(value);
      };
    return (
        <>
        <Select
        value={value}
        onChange={handleChange}
        isMulti
        options={options}
        isClearable={true}
        defaultValue={props.defaultValue?props.defaultValue:''}
        />
        </>
    );
}