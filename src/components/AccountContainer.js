import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, addNewTransaction }) {
  const [transactionSearch, setTransactionSearch] = useState("")

  return (
    <div>
      <Search setTransactionSearch={setTransactionSearch}/>
      <AddTransactionForm addNewTransaction={addNewTransaction} />
      <TransactionsList transactions={transactions.filter(t => t.description.toLocaleLowerCase().includes(transactionSearch.toLocaleLowerCase()))} />
    </div>
  );
}

export default AccountContainer;
