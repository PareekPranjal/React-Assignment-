import React from "react";
import TransastionHistory from "./TransastionHistory";

const recentOrderData = [
  {
    id: "Flyod Johntosan",
    product_status: "status",
    email: "asdasda",
    order_date: "2022-05-17T03:24:00",
    customer_invoice: "$100.00",
    customer_logo: "",
  },
  {
    id: "Flyod Johntosan",
    product_status: "status",
    email: "asdasda",
    order_date: "2022-05-17T03:24:00",
    customer_invoice: "$100.00",
    customer_logo: "",
  },
];

function ResentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-400 flex-1 ">
      <strong className="text-gray-700 font-medium">Resent Orders</strong>
      <div className="mt-3 text-gray-400">
        <table>
          <thead>
            <tr>
              <td>Customer</td>
              <td>Status</td>
              <td>Date</td>
              <td>Invoice</td>
              <td>People</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <div>
                    <div></div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </td>
                <td>{order.product_id}</td>
                <td>{order.customer_name}</td>
                <td>{new Date(order.order_date).toLocaleDateString}</td>
                <td>{order.order_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResentOrders;
