import React from 'react';
import './viewBudget.css'

const ViewBudget = (props) => {
    return (
        <>
            <span>Budget: €{props.budget}</span>
            <button type='button' class='btn btn-primary edit' onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    );
};

export default ViewBudget;