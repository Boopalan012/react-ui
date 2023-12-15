import DateTimePicker from 'react-datetime-picker';
import { MultiSelect } from './MultiSelect';
import { Picklist } from './Picklist';
import { useState } from 'react';
import { DateTimePick } from './DateTimePick';

export const IndexPage = () => {
    const [picklistData, setPicklistData] = useState({});
    const PicklistOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    const [multiselectData, setMultiselectData] = useState(PicklistOptions);
    const onChangeHandlerPickList = async(value) => {
    await setPicklistData(value);
    }
    const onChangeHandlerMultiselect = async(value) => {
        setMultiselectData(value);
    }

    return (
        <>
            Picklist:
            <Picklist 
                options={PicklistOptions}
                onChange={onChangeHandlerPickList}
                value={picklistData}
            />
            MultiSelect:
            <MultiSelect
             options={PicklistOptions}
             value={multiselectData}
             onChange={onChangeHandlerMultiselect}
            />
            <DateTimePick></DateTimePick>
            
            PickListData:<h1>{picklistData.value}</h1>
            MultiselectData:<h1>{multiselectData.map(itm=>{return itm.value})}</h1>
           {/* {PicklistData} */}
           
        </>
    )
}
