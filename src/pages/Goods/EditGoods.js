import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

function EditGoods() {
  let history = useHistory();
  let { goodId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [data, setData] = useState("");

  const good = {
    materialname: name,
    unitprice: price,
    unit: unit,
  };

  const updateGood = (e) => {
    e.preventDefault();

    axiosClient.put(`/material/${goodId}`, good).then(() => {
      history.push("/goods");
    });
  };

  return (
    <form className="create-staff">
      <h3>EDIT GOOD</h3>
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
      <button onClick={updateGood}>UPDATE</button>
      <button onClick={() => history.push("/goods")}>Cancel</button>
    </form>
  );
}

export default EditGoods;
