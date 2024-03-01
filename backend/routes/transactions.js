import { addExpense, getExpenses, deleteExpenses } from '../controllers/expense'
import { addIncome, getIncomes, deleteIncome } from '../controllers/income'

const router = require('express').Router()

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpenses)

module.exports = router