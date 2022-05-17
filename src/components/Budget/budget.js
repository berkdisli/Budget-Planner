import './budget.css';
import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext/appContext';
import EditBudget from '../Edit Budget/editBudget';
import ViewBudget from '../ViewBudget/viewBudget';


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div class='alert alert-primary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                // For part 1 render component inline rather than create a seperate one
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    );
};

export default Budget;