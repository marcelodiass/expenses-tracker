import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../chart/chart.js';
import {dollar} from '../../utils/icons.js'
import { useGlobalContext } from '../../context/globalContext.js';
import History from '../history/history.js';

function Dashboard() {
    const {totalIncome, totalExpense, totalBalance, getIncomes, getExpenses} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    })

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All transactions</h1>
                <div className='stats-con'>
                    <div className='chart-con'>
                        <Chart />
                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className='expense'>
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='history-con'>
                        <History />
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard