import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext/appContext';
import './expenseItems.css'
import EditExpense from '../EditExpenseItem/editExpenseItem';
import ViewExpense from '../ViewExpenseItem/viewExpenseItem';

const ExpenseItems = (props) => {
    const { edit, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_EXPENSE',
            payload: value,
        });
        setIsEditing(false);
    };
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };


    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='amount'>
                    -€{props.cost}
                </span>
                {isEditing ? (
                    <EditExpense handleSaveClick={handleSaveClick} edit={edit} />
                ) : (
                    // For part 1 render component inline rather than create a seperate one
                    <ViewExpense handleEditClick={handleEditClick} edit={edit} />
                )}
                <button className='delete' onClick={handleDeleteExpense}> Delete</button>
            </div>
        </li>
    );
};

export default ExpenseItems;