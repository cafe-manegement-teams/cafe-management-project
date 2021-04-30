import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

// import "./CreateGoods.css";

function CreateGoods() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [data, setData] = useState("");

  const good = {
    materialname: name,
    unitprice: price,
    unit: unit,
  };

  const createGood = (e) => {
    e.preventDefault();
    if (good.materialname === "" || good.unitprice === "" || good.unit === "") {
      alert("Input not valid");
      return;
    }
    // console.log(good);
    axiosClient.post("/material/create", good).then((data) => {
      // console.log(data.data);
      if (data.data) {
        setData(data.data);
        history.push("/goods");
      }
    });
  };

  return (
    <form className="create-staff">
      <h3>CREATE GOOD</h3>
      <input
        type="text"
        placeholder="Material Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Unit Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Unit"
        onChange={(e) => setUnit(e.target.value)}
      />

      {data && <p>{data}</p>}
      <button onClick={createGood}>Create</button>
      <button onClick={() => history.push("/goods")}>Cancel</button>
    </form>
  );
}

export default CreateGoods;
