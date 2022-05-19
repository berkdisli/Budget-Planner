import React, { useState, useContext, useEffect } from 'react'
import ExpenseItems from '../ExpenseItems/expenseItems';
import { AppContext } from '../../AppContext/appContext';
import './expenseList.css';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setfilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value)
        );
        setfilteredExpenses(searchResults);
    };

    return (
        <>
            <input
                id='search'
                type='text'
                class='form-control mb-2 mr-sm-2'
                placeholder='Type to search your expense...'
                onChange={handleChange}
            />
            <ul id='items' class='list-group mt-3 mb-3'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItems
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList