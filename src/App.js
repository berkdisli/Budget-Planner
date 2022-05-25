import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Budget from './components/Budget/budget';
import Remaining from './components/Remaining/remaining';
import Expenses from './components/Expenses/expenses';
import ExpenseList from './components/ExpenseList/expenseList';
import AddNewExpenses from './components/AddNewExpenses/addNewExpenses';
import ApexChart from './components/ApexChart/apexChart';
import LogoImage from "./img/budget.png";
import PieCharts from './components/PieChart/pieChart';

// import PieCharts from './components/PieChart/pieChart';

import { AppProvider } from './AppContext/appContext';
import { AppContext } from './AppContext/appContext';
import { PieChart } from 'react-minimal-pie-chart';
import { Card, Navbar, Nav, Button } from 'react-bootstrap';

export function CDate() {
  const cmonth = new Date().toLocaleString("en-US", { month: "long" })
  const cyear = new Date().getFullYear()
  return (<p>Add an expense to your {cmonth} {cyear} budget</p>)
}

function Remain() {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div >
      <p> You have €{budget - totalExpenses} left to spend until your next cycle!</p>
    </div>
  );
}

const App = () => {
  return (
    <AppProvider>
      <Navbar className="navbar-header" expand="lg">
        <Navbar.Brand className="navbar-logo" href="/">
          <img
            src={LogoImage}
            className="navbar-logo d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Button>
                Home
              </Button>
            </Nav.Link>
            <Nav.Link href="#logout">
              <Button
                href='#expenses'
              >
                Expenses
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='container'>
        <h2 className='mt-3 planner'>Budget Planner</h2>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Card className='card'>
              <Budget />
              <Remaining />
              <Expenses />
            </Card>
          </div>
        </div>
        <Card className='card'>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ApexChart />
            </div>

            <div className='col-sm'>
            </div>
            <div className='col-sm'>
              {/* < PieCharts /> */}

              {/* <PieChart
                width='100%'
                animation
                animationDuration={500}
                animationEasing="ease-out"
                center={[50, 50]}
                data={[
                  {
                    color: "#007FFF",
                    title: "Expenses",
                    value: 10,
                  },
                  {
                    color: "#E7ECF3",
                    title: "Remaining",
                    value: 15,
                  },
                ]}
                labelPosition={50}
                lengthAngle={360}
                lineWidth={15}
                paddingAngle={0}
                radius={50}
                startAngle={0}
                viewBoxSize={[100, 100]}
                segmentsStyle={{ width: '10px' }}
                labelStyle={{
                  fontSize: "10px",
                  fontColor: "FFFFFA",
                  fontWeight: "800",
                }}
              /> */}
            </div>
          </div>
        </Card>
        <h3 id='expenses' className='mt-3'>Expenses</h3>
        <h3 className="track">On track</h3>
        <Remain />
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add new expense</h3>
        <CDate />
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddNewExpenses />
          </div>
        </div>
      </div>

    </AppProvider >
  );
};

export default App;
