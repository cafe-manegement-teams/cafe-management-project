import React, { useEffect, useState } from "react";
import "./CreateReceipt.css";
import axios from "../../api/axiosClient";
import MaterialItem from "../../components/Material/MaterialItem";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axiosClient from "../../api/axiosClient";
import { useHistory } from "react-router-dom";

function CreateReceipt() {
  let history = useHistory();
  const [material, setMaterial] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    function fetchMaterial() {
      axios.get("/material/all").then((data) => {
        if (data.data) {
          setMaterial(data.data);
        }
      });
    }

    fetchMaterial();
  }, [material, cart]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const remove = (item) => {
    setCart(cart.filter((x) => x.id !== item.id));
  };
  const submit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("No material selected!");
      return;
    }

    axiosClient.post("/receipt/create", cart).then((data) => {
      if (data.data) {
        history.push("/receipt");
      }
    });
  };

  return (
    <form className="receipt">
      <h3>RECEIPT</h3>
      <div>
        <div className="list__material">
          <p>List Material</p>
          {material.map((item) => (
            <MaterialItem
              key={item.id}
              name={item.materialname}
              price={item.unitprice}
              quantity={item.quantity}
              product={item}
              onAdd={onAdd}
            />
          ))}
        </div>
        <div className="material__selected">
          <p>List Item Selected</p>
          {cart.length === 0 && <p>Cart is empty</p>}
          {cart.map((item) => (
            <div className="material__selectedItem">
              <HighlightOffIcon onClick={() => remove(item)} />
              <p className="name">{item.materialname}</p>
              <p onClick={() => onAdd(item)} className="add">
                +
              </p>
              <p>{item.quantity}</p>
              <p onClick={() => onRemove(item)} className="sub">
                -
              </p>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="save" onClick={submit}>
        SAVE RECEIPT
      </button>
    </form>
  );
}

export default CreateReceipt;
