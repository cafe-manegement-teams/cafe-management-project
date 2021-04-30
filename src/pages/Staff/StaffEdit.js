import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/axiosClient";

function StaffEdit() {
  let history = useHistory();

  let { staffId } = useParams();

  const [fullname, setFullName] = useState("");
  const [datebirth, setDateBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState("");

  const staff = {
    fullname,
    datebirth,
    phone,
    address,
  };

  const updateStaff = (e) => {
    e.preventDefault();

    if (
      staff.fullname === "" ||
      staff.datebirth === "" ||
      staff.phone === "" ||
      staff.address === ""
    ) {
      setErrors("Input not valid!");
      return;
    }

    axios.put(`/staff/${staffId}`, staff).then((data) => {
      if (data.data) {
        history.push("/staff");
      }
    });
  };

  return (
    <form className="create-staff">
      <h3>UPDATE STAFF</h3>
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
      {errors && <p>{errors}</p>}
      <button onClick={updateStaff}>UPDATE</button>
      <button onClick={() => history.push("/staff")}>Cancel</button>
    </form>
  );
}

export default StaffEdit;
