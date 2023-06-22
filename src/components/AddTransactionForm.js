import React, { useState } from "react";

function AddTransactionForm({ addNewTransaction }) {
  const [newDate, setNewDate] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [newAmount, setNewAmount] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const newTransaction = {
      "date": newDate,
      "description": newDescription,
      "category": newCategory,
      "amount": newAmount
    }
    addNewTransaction(newTransaction)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={event => handleSubmit(event)}>
        <div className="inline fields">
          <input type="date" name="date" value={newDate} onChange={e => setNewDate(e.target.value)} />
          <input type="text" name="description" value={newDescription} placeholder="Description" onChange={e => setNewDescription(e.target.value)} />
          <input type="text" name="category" value={newCategory} placeholder="Category" onChange={e => setNewCategory(e.target.value)} />
          <input type="number" name="amount" value={newAmount} placeholder="Amount" step="0.01" onChange={e => setNewAmount(parseFloat(e.target.value))} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
