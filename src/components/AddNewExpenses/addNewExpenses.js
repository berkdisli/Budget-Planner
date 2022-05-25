import React, { useState, useContext } from 'react';
import { AppContext } from '../../AppContext/appContext';
import { v4 as uuidv4 } from 'uuid';
import './addNewExpenses.css';



const AddNewExpenses = () => {
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
    const sequencedNames = [];

    const { expenses } = useContext(AppContext);

    // state
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: sequencedNames
        },
    });
    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: expenses.map(expense => expense.cost)
        }
    ]);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

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
                    <button
                        type='submit'
                        className='btn btn-primary mt-3'
                        onClick={() => setSeries(series + 1)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddNewExpenses;