import React from 'react'
import { Formik, useFormik } from 'formik'
import { useEffect } from 'react';

const Contact = () => {
  const formik = useFormik({
    initialValues:{
      firsName:"",
      tel:"",
      email:"",
    },
    onSubmit:(values,{resetForm}) => {
      console.log(values);
      resetForm();
    }
  });
  useEffect(()=>{
    document.getElementById("nm").focus();
   },[])
  return (

      <form className="cForm" onSubmit={formik.handleSubmit}>
        <div><span>Name:</span><input type="text" id="nm" name="firsName" onChange={formik.handleChange}  value={formik.values.firsName}/></div>
        <div><span>Tel:</span><input type="number" name="tel" onChange={formik.handleChange}  value={formik.values.tel}/></div>
        <div><span>E-mail:</span><input type="email" name="email" onChange={formik.handleChange}  value={formik.values.email}/></div>   
      <div><button className='btn btn-success' type='submit'>Send</button></div>
      </form>
  )
}

export default Contact