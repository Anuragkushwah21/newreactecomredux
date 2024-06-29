import React from "react";
import { Table,Button } from "react-bootstrap";

function Cart() {
  return (
    <>
      <div className="container mt-5">
        <h2>Your Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product 1</td>
              <td>$100</td>
              <td>2</td>
              <td>$200</td>
              <td>
                <Button variant="danger">Remove</Button>
                <Button variant="success m-2">Buy</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product 2</td>
              <td>$50</td>
              <td>1</td>
              <td>$50</td>
              <td>
                <Button variant="danger">Remove</Button>
                <Button variant="success m-2">Buy</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Product 3</td>
              <td>$200</td>
              <td>3</td>
              <td>$600</td>
              <td>
                <Button variant="danger">Remove</Button>
                <Button variant="success m-2">Buy</Button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">
                <strong>Total:</strong>
              </td>
              <td>$850</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </>
  );
}

export default Cart;
