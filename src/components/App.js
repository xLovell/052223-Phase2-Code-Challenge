import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";


const API = "http://localhost:8001/transactions"

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => fetch(API)
    .then(res => res.json())
    .then(setTransactions), [])

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} addNewTransaction={addNewTransaction} />
    </div>
  )

  function addNewTransaction(newTransaction) {
    fetch(API, {
      method: "POST",
      headers: {
        accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then(json => setTransactions([...transactions, json]))
  }
}

export default App;
