import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";
export const CustomerAdd = () => {
  const [customerName, addCustomerName] = useState("");
  const dispatch = useDispatch();
  // const [customers, setCustomer] = useState([]);
  function addCustomer() {
    if (customerName) {
      // setCustomer((previous) => [previous, customerName]);
      // console.log(customers);
      dispatch(addCustomerAction(customerName));
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
    </div>
  );
};
