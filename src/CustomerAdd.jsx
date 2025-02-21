import React, { useState } from "react";
import { CustomerView } from "./CustomerView";

export const CustomerAdd = () => {
  const [customerName, addCustomerName] = useState("");
  const [customers, setCustomer] = useState([]);
  function addCustomer() {
    if (customerName) {
      setCustomer((previous) => [previous, customerName]);
      console.log(customers);
      addCustomerName("");
    }
  }
  return (
    <div>
      <div>
        <h3>Add new customer</h3>
        <input
          type="text"
          value={customerName}
          onChange={(event) => addCustomerName(event.target.value)}
        />
        <button onClick={addCustomer}>Add</button>
      </div>
      <CustomerView customers={customers} />
    </div>
  );
};
