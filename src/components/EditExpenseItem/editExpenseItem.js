import React, { useState } from 'react';
import './../ViewExpenseItem/viewExpenseItem.css'

const EditExpense = (props) => {
    const [value, setValue] = useState(props.edit);
    return (
        <>
            <input
                required='required'
                type='number'
                class='form-control mr-3'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button className='save-item'
                onClick={() => props.handleSaveItem(value)}
            >
                Save
            </button>
        </>
    );
};

export default EditExpense;