import React from "react";
import { useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { deleteProduct, getProduct } from "../../JS/actions/products";
import { toggleFalse, toggleTrue } from "../../JS/actions/edit";
import { Link } from "react-router-dom";

const AdminProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tbody>
        <tr key={product._id}>
          <td>
            <a href={product.linkproducts} target="_blank">
              <img
                src={product.images}
                alt={product.images}
                height="120"
                width="110"
              />
            </a>
          </td>

          <td>{product.names}</td>
          <td>{product.prices}</td>
          <td>{product.desponiblitys}</td>
          <td>
            <a href={product.linkproducts} target="_blank">
              <img src={product.logoofficiel} height="25" width="45" />
            </a>
          </td>
          <td>
            <Link to="/add">
              <Button variant="info" onClick={() => dispatch(toggleFalse())}>
                +
              </Button>
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteProduct(product._id))}
            >
              -
            </Button>
          </td>
          <td>
            <Link to="/edit/:id">
              <Button
                variant="warning"
                onClick={() => {
                  dispatch(getProduct(product._id));
                  dispatch(toggleTrue());
                  // console.log(getProduct());
                }}
              >
                §
              </Button>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AdminProduct;
