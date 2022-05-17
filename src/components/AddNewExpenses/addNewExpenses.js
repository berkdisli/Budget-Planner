import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext/appContext';
import { v4 as uuidv4 } from 'uuid';
import './addNewExpenses.css';

const AddNewExpenses = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div class='col-sm col-lg-4'>
                    <input
                        placeholder='Name of the expense'
                        required='required'
                        type='text'
                        class='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div class='col-sm col-lg-4'>
                    <input
                        placeholder='EUR 0'
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className='col-m'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddNewExpenses;