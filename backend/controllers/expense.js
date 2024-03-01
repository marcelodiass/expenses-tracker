const ExpenseSchema = require('../models/ExpenseModel')

async function addExpense(req, res) {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number." });
    }
    await expense.save()
    res.status(200).json({message: "Expense added"})
  } catch (error) {
    res.status(500).json({message: "Server Error"})
  }
}

async function getExpenses(req, res) {
  try {
    const expenses = await find().sort({createdAt: -1})
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({message: "Server Error"})
  }
}

async function deleteExpenses(req, res) {
  const {id} = req.params
  
  findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({message: "Expense Deleted"})
    })
    .catch(() => {
      res.status(500).json({message: "Server Error"})
    })
}

export { addExpense, getExpenses, deleteExpenses }
