import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";

import "./CreateGoods.css";

function CreateGoods() {
    const formik = useFormik({
        initialValues: {
          MaHangHoa: '',
          TenHangHoa: '',
          DonViTinh: '',
          Gia: ''
        },
        validationSchema: Yup.object({
          MaHangHoa: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          TenHangHoa: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          DonViTinh: Yup.string()
          .max(5, 'Must be 5 characters or less')
          .required('Required'),
          Gia: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
          
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      })
  return (
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
         <div>{formik.errors.MaHangHoa}</div>
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
         <div>{formik.errors.TenHangHoa}</div>
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
         <div>{formik.errors.DonViTinh}</div>
       ) : null}
       <label htmlFor="Gia">Gia</label>
       <input
         id="Gia"
         name="Gia"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.Gia}
       />
       {formik.touched.Gia && formik.errors.Gia ? (
         <div>{formik.errors.Gia}</div>
       ) : null}
       <button><Link to="/goods">Cancel</Link></button> 
       <button type="submit">Submit</button>
     </form>
  );
}

export default CreateGoods;
