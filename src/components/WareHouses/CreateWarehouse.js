import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";
import "./CreateWarehouse.css"

function CreateWarehouse() {
    const formik = useFormik({
        initialValues: {
          MaKhoHang: "",
          TenKhoHang: "",
          DiaChi:""
        },
        validationSchema: Yup.object({
          MaKhoHang: Yup.string()
            .max(5, "Must be 5 characters or less")
            .required("Required"),
          TenKhoHang: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          DiaChi: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <div className="form__submit">
        <h1>Tạo Kho Hàng</h1>z
          <form onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="MaKhoHang">MaKhoHang</label>
            <input
              id="MaKhoHang"
              name="MaKhoHang"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.MaKhoHang}
            />
            {formik.touched.MaKhoHang && formik.errors.MaKhoHang ? (
              <div className="error">{formik.errors.MaKhoHang}</div>
            ) : null}
            <label htmlFor="TenKhoHang">TenKhoHang</label>
            <input
              id="TenKhoHang"
              name="TenKhoHang"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.TenKhoHang}
            />
            {formik.touched.TenKhoHang && formik.errors.TenKhoHang ? (
              <div className="error">{formik.errors.TenKhoHang}</div>
            ) : null}
            <label htmlFor="DiaChi">DiaChi</label>
            <input
              id="DiaChi"
              name="DiaChi"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.DiaChi}
            />
            {formik.touched.DiaChi && formik.errors.DiaChi ? (
              <div className="error">{formik.errors.DiaChi}</div>
            ) : null}
           
            <div className="button">
              
                <Link to="/warehouses" className="button__cancel">Cancel</Link>
              
              <button type="submit" className="button__save">Save</button>
            </div>
          </form>
        </div>
      );
}

export default CreateWarehouse
