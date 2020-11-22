import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";

import "./CreateGoods.css";

function CreateGoods() {
  const formik = useFormik({
    initialValues: {
      MaHangHoa: "",
      TenHangHoa: "",
      DonViTinh: "",
      Gia: "",
    },
    validationSchema: Yup.object({
      MaHangHoa: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      TenHangHoa: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      DonViTinh: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
      Gia: Yup.string()
        .max(10, "Must be 10 number or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    
    <div className="form__submit">
      <h1>TAO HANG HOA</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="MaHangHoa">MaHangHoa</label>
        <input
          id="MaHangHoa"
          name="MaHangHoa"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.MaHangHoa}
        />
        {formik.touched.MaHangHoa && formik.errors.MaHangHoa ? (
          <div className="error">{formik.errors.MaHangHoa}</div>
        ) : null}
        <label htmlFor="TenHangHoa">TenHangHoa</label>
        <input
          id="TenHangHoa"
          name="TenHangHoa"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.TenHangHoa}
        />
        {formik.touched.TenHangHoa && formik.errors.TenHangHoa ? (
          <div className="error">{formik.errors.TenHangHoa}</div>
        ) : null}
        <label htmlFor="DonViTinh">DonViTinh</label>
        <input
          id="DonViTinh"
          name="DonViTinh"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.DonViTinh}
        />
        {formik.touched.DonViTinh && formik.errors.DonViTinh ? (
          <div className="error">{formik.errors.DonViTinh}</div>
        ) : null}
        <label htmlFor="Gia">Gia</label>
        <input
          id="Gia"
          name="Gia"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Gia}
        />
        {formik.touched.Gia && formik.errors.Gia ? (
          <div className="error">{formik.errors.Gia}</div>
        ) : null}
        <div className="button">
          
            <Link to="/goods" className="button__cancel">Cancel</Link>
          
          <button type="submit" className="button__save">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreateGoods;
