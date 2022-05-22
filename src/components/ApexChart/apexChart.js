import React, { Component, useContext, useState } from "react";
import Chart from "react-apexcharts";
import moment from 'moment';
import { AppContext } from "../../AppContext/appContext";


const ApexChart = (props) => {
    // context
    const { expenses } = useContext(AppContext);

    // state
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: moment.months()
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
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="bar"
                        width="500"
                    />
                </div>
            </div>
        </div>
    );
}

export default ApexChart;