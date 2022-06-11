import React, { useContext, useState } from "react";
import Chart from "react-apexcharts";
import { AppContext } from "../../AppContext/appContext";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const today = new Date();
//gives you year
const year = today.getFullYear();
//gives you month as number/index;
const month = today.getMonth();

//stores sequenced month names
const sequencedNames = [];

//creates June 2020 through December 2020
for (let i = month; i < monthNames.length; i++) {
    let monthName = monthNames[i];
    sequencedNames.push(monthName + " " + year)
}

//creates January 2021 through May 2021
for (let i = 0; i < month; i++) {
    let monthName = monthNames[i];
    sequencedNames.push(monthName + " " + (year + 1))
}
console.log(sequencedNames)

const ApexChart = (props) => {
    // context
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