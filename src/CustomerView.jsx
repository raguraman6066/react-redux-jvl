import React from "react";

export const CustomerView = ({ customers }) => {
  return (
    <div>
      <h3>Customer list</h3>
      <ul style={{ listStyle: "none" }}>
        {customers.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};
