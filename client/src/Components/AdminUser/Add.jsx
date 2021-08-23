import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { postProduct, editProduct } from "../../JS/actions/products";
import Loading from "../Loading/Loading"
const Add = () => {
  const [produit, setProduit] = useState({
    names: "",
    descriptions: "",
    images: "",
    prices: "",
    siteofficiel: "",
    categories: "",
    linkproducts: "",
    desponiblitys: "",
    logoofficiel: "",
  });

  const onePr = useSelector((state) => state.productReducer.produit);
  // console.log("dede", onePr);

  const edit = useSelector((state) => state.editReducer.edit);
  const loadProducts = useSelector(
    (state) => state.productReducer.loadProducts
  );
  useEffect(() => {
    edit
      ? setProduit(onePr)
      : // console.log("state", produit)
        setProduit({
          names: "",
          descriptions: "",
          images: "",
          prices: "",
          siteofficiel: "",
          categories: "",
          linkproducts: "",
          desponiblitys: "",
          logoofficiel: "",
        });
  }, [loadProducts]);
  const dispatch = useDispatch();
  // handelprodcut edit or post product
  const handelProduct = () => {
    if (!edit) {
      dispatch(postProduct(produit));
    } else {
      dispatch(editProduct(onePr._id, produit));
    }
  };

  // recupuer all data from interface
  const handelChange = (e) => {
    e.preventDefault();
    setProduit({ ...produit, [e.target.name]: e.target.value });
    console.log("satte2", produit);
  };

  return (
    <>
      {loadProducts ? (
        <Loading/>
      ) : (
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={produit.names}
                onChange={handelChange}
                name="names"
               required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Description"
                value={produit.descriptions}
                onChange={handelChange}
                name="descriptions"
                required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Link image Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link image Product"
                value={produit.images}
                onChange={handelChange}
                name="images"
                required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Prices</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Prices"
                value={produit.prices}
                onChange={handelChange}
                name="prices"
                required />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Officiel site Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Officiel Logo Product"
                value={produit.siteofficiel}
                onChange={handelChange}
                name="siteofficiel"
                required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
              </div>
              <select className="custom-select"  name="categories"  value={produit.categories} onChange={handelChange}  >
          <option selected >Choose...</option>
          <option value="Informatique">Informatique</option>
          <option value="Telephonie">Téléphonie</option>
          <option value="Image & Son">Image & Son</option>
          <option value="Electroménager">Electroménager</option>
          <option value="Photo & Caméra">Photo & Caméra</option>
          </select>
 {/*<Form.Label>Categories of Product</Form.Label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
                </select>
              <Form.Control
                type="text"
                placeholder="Categories of Product"
                value={produit.categories}
                onChange={handelChange}
                name="categories"
                required  />*/}
               
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Link Products</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link Products"
                value={produit.linkproducts}
                onChange={handelChange}
                name="linkproducts"
                required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Desponiblitys of Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Desponiblitys of Product"
                value={produit.desponiblitys}
                name="desponiblitys"
                onChange={handelChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Officiel Logo Product</Form.Label>
              <Form.Control
                type="text"
                placeholder="Officiel Logo Product"
                value={produit.logoofficiel}
                onChange={handelChange}
                name="logoofficiel"
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={handelProduct}>
            {edit ? "EDIT" : "SAVE"}
          </Button>
          {/*<Form>
          <Form.Field>
            <label>Product Name</label>
            <input
              placeholder="Product Names"
              value={produit.names}
              onChange={handelChange}
              name="names"
            />
          </Form.Field>
          <Form.Field>
            <label>Product Description</label>
            <input
              placeholder="Product Description"
              value={produit.descriptions}
              onChange={handelChange}
              name="descriptions"
            />
          </Form.Field>
          <Form.Field>
            <label>Link image Product</label>
            <input
              placeholder="Link image Product"
              value={produit.images}
              onChange={handelChange}
              name="images"
            />
          </Form.Field>
          <Form.Field>
            <label>Product Prices</label>
            <input
              placeholder="Product Prices"
              value={produit.prices}
              onChange={handelChange}
              name="prices"
            />
          </Form.Field>
          <Form.Field>
            <label>Officiel site Product</label>
            <input
              placeholder="Officiel Logo Product"
              value={produit.siteofficiel}
              onChange={handelChange}
              name="siteofficiel"
            />
          </Form.Field>
          <Form.Field>
            <label>Categories of Product</label>
            <input
              placeholder="Categories of Product"
              value={produit.categories}
              onChange={handelChange}
              name="categories"
            />
          </Form.Field>
          <Form.Field>
            <label>Link Products</label>
            <input
              placeholder="Link Products"
              value={produit.linkproducts}
              onChange={handelChange}
              name="linkproducts"
            />
          </Form.Field>
          <Form.Field>
            <label>Desponiblitys of Product</label>
            <input
              placeholder="Desponiblitys of Product"
              value={produit.desponiblitys}
              name="desponiblitys"
              onChange={handelChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Officiel Logo Product</label>
            <input
              placeholder="Officiel Logo Product"
              value={produit.logoofficiel}
              onChange={handelChange}
              name="logoofficiel"
            />
          </Form.Field>
          <Button type="submit" onClick={handelProduct}>
            {edit ? "EDIT" : "SAVE"}
          </Button>
        </Form>*/}
        </Form>
      )}
    </>
  );
};

export default Add;
