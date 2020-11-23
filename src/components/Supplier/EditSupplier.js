import React from 'react'
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";


function EditSupplier() {
    const formik = useFormik({
        initialValues: {
          MaNhaCungCap: "",
          TenNhaCungCap: "",
          DiaChi: "",
          DienThoai: "",
        },
        validationSchema: Yup.object({
          MaNhaCungCap: Yup.string()
            .max(5, "Must be 5 characters or less")
            .required("Required"),
          TenNhaCungCap: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          DiaChi: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          DienThoai: Yup.string()
            .max(11, "Must be 11 number or more")
            .required("Required"),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div className="form__submit">
      <h1>Sửa Nhà Cung Cấp</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="MaNhaCungCap">MaNhaCungCap</label>
        <input
          id="MaNhaCungCap"
          name="MaNhaCungCap"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.MaNhaCungCap}
        />
        {formik.touched.MaNhaCungCap && formik.errors.MaNhaCungCap ? (
          <div className="error">{formik.errors.MaNhaCungCap}</div>
        ) : null}
        <label htmlFor="TenNhaCungCap">TenNhaCungCap</label>
        <input
          id="TenNhaCungCap"
          name="TenNhaCungCap"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.TenNhaCungCap}
        />
        {formik.touched.TenNhaCungCap && formik.errors.TenNhaCungCap ? (
          <div className="error">{formik.errors.TenNhaCungCap}</div>
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
        <label htmlFor="DienThoai">DienThoai</label>
        <input
          id="DienThoai"
          name="DienThoai"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.DienThoai}
        />
        {formik.touched.DienThoai && formik.errors.DienThoai ? (
          <div className="error">{formik.errors.DienThoai}</div>
        ) : null}
        <div className="button">
          
            <Link to="/supplier" className="button__cancel">Cancel</Link>
          
          <button type="submit" className="button__save">Save</button>
        </div>
      </form>
    </div>
    )
}

export default EditSupplier
