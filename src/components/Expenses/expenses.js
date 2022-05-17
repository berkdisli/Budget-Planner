import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/appContext';

const Expenses = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-danger'>
            <span>Expenses: €{totalExpenses}</span>
        </div>
    );
};

export default Expenses;