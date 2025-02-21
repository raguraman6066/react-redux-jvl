import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";
export const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  function deleteHandler(index) {
    dispatch(deleteCustomer(index));
  }
  return (
    <div>
      <h3>Customer list</h3>
      {
        <ul style={{ listStyle: "none" }}>
          {customers.map((c, i) => (
            <li>
              {c} <button onClick={() => deleteHandler(i)}>delete</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
