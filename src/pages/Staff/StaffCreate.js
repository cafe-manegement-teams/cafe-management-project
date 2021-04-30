import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../api/axiosClient";
import "./StaffCreate.css";

function StaffCreate() {
  let history = useHistory();
  const [fullname, setFullName] = useState("");
  const [datebirth, setDateBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [positionSelected, setPositionSelected] = useState(0);
  const [shiftSelected, setShiftSelected] = useState(0);
  const [errors, setErrors] = useState("");
  const [position, setPosition] = useState([]);
  const [shift, setShift] = useState([]);

  const staff = {
    fullname,
    datebirth,
    phone,
    address,
  };

  useEffect(() => {
    async function fetchPosition() {
      let positionData = await axios.get("/position/all");

      if (positionData.data) {
        setPosition(positionData.data);
        // console.log(positionData.data);
      }
    }
    async function fetchShift() {
      let shiftData = await axios.get("/shift/all");
      if (shiftData.data) {
        setShift(shiftData.data);
        // console.log(shiftData.data);
      }
    }
    fetchPosition();
    fetchShift();
  }, []);

  const createStaff = (e) => {
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
    if (shiftSelected === 0 || positionSelected === 0) {
      setErrors("You forget set  shift and position");
      return;
    }

    axios
      .post(
        `/shift/${shiftSelected}/position/${positionSelected}/staff/create`,
        staff
      )
      .then((data) => {
        if (data.data) {
          setErrors(data.data);
          return;
        }
        history.push("/staff");
      });
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
      <h4>Position</h4>
      <select
        onChange={(e) => setPositionSelected(e.target.value)}
        defaultValue={positionSelected}
      >
        {position &&
          position.map((item) => (
            <option value={item.id} key={item.id}>
              {item.poname}
            </option>
          ))}
      </select>
      <h4>Shift</h4>
      <select
        onChange={(e) => setShiftSelected(e.target.value)}
        defaultValue={shiftSelected}
      >
        {shift &&
          shift.map((item) => (
            <option value={item.id} key={item.id}>
              {item.timework}
            </option>
          ))}
      </select>
      {errors && <p>{errors}</p>}
      <button onClick={createStaff}>Create</button>
      <button onClick={() => history.push("/staff")}>Cancel</button>
    </form>
  );
}

export default StaffCreate;
