import React from 'react';
import './viewExpenseItem.css'

const ViewExpense = (props) => {
    return (
        <>
            <span>{props.edit}</span>
            <button class='edit-item' onClick={props.handleEditItem}>
                Edit
            </button>
        </>
    );
};

export default ViewExpense;