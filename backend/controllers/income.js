import IncomeSchema, { find, findByIdAndDelete } from "../models/IncomeModel";

export async function addIncome(req, res) {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
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
    await income.save()
    res.status(200).json({message: "Income added"})
  } catch (error) {
    res.status(500).json({message: "Server Error"})
  }
}

export async function getIncomes(req, res) {
  try {
    const incomes = await find().sort({createdAt: -1})
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({message: "Server Error"})
  }
}

export async function deleteIncome(req, res) {
  const {id} = req.params
  
  findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({message: "Income Deleted"})
    })
    .catch(() => {
      res.status(500).json({message: "Server Error"})
    })
}
