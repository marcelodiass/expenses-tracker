import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Incomes() {
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className='income-content'>
                    <div className='form-container'></div>
                    <div className='incomes'></div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Incomes