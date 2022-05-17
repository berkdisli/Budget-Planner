import React from 'react';
import './viewExpenseItem.css'

const ViewExpense = (props) => {
    return (
        <>
            <span>{props.budget}</span>
            <button class='edit-item' onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    );
};

export default ViewExpense;