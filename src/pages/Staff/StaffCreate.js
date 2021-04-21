import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axiosClient";
import "./StaffCreate.css";

function StaffCreate() {
  let history = useHistory();
  const [fullname, setFullName] = useState("");
  const [datebirth, setDateBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [position, sestPosition] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const staff = {
    fullname,
    datebirth,
    phone,
    address,
    position,
  };

  const createStaff = async (e) => {
    e.preventDefault();

    if (
      fullname === "" ||
      datebirth === "" ||
      phone === "" ||
      address === "" ||
      position === ""
    ) {
      setErrors("Input not empty!");
      return;
    }
    const resp = await axios.post("/staff/create", staff);

    setSuccess(resp.data);
  };

  return (
    <form className="create-staff">
      <h3>CREATE STAFF</h3>
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date Of Birth"
        onChange={(e) => setDateBirth(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        onChange={(e) => sestPosition(e.target.value)}
      />
      {errors && <p>{errors}</p>}
      {success && <p>{success}</p>}
      <button onClick={createStaff}>Create</button>
      <button onClick={() => history.push("/staff")}>Cancel</button>
    </form>
  );
}

export default StaffCreate;
