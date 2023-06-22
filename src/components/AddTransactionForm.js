import React, { useState } from "react";

function AddTransactionForm({ addNewTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "", description: "", category: "", amount: 0,
  })

  function handleChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addNewTransaction(newTransaction)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={event => handleSubmit(event)}>
        <div className="inline fields">
          <input type="date" name="date" value={newTransaction.date} onChange={handleChange} />
          <input type="text" name="description" value={newTransaction.description} placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" value={newTransaction.category} placeholder="Category" onChange={handleChange} />
          <input type="number" name="amount" value={newTransaction.amount} placeholder="Amount" step="0.01" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
