import { Formik, Form, Field, ErrorMessage } from "formik";
import {object,string} from "yup"
import { db } from "../../assets/data/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

const initialValues= {
  admin: '',
  school: '',
  email:''
  }
const validationSchema = object({
 admin:string().min(3).required(),
 school:"",
 email:""
 
})

export default function CreateAccount() {

   const [data,setData]=useState([db])
   const navigate = useNavigate()

  function handleSubmit (value,formik){
    setData( [...data, value]);
    navigate('/ChoosePassword')
   
  }
 
  return (
    <div className="CreateAccount">
      <h1 className="CreateAccount__header">
        Welcome, create your school account
      </h1>

      <Formik
       initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}  >
        <Form className="CreateAccount__form">
          <h2 className="CreateAccount__formHeading">
            It is our great pleasure to have you on board!
          </h2>
          <Field autoComplete="off" name="admin" type="text" placeholder="Enter the name of admin" className="CreateAccount__form__input"   />
          <ErrorMessage className="errors" name="admin" component="p" />
          <Field autoComplete="off" name="school" type="text" placeholder="Enter the name of school" className="CreateAccount__form__input"  />
          <ErrorMessage className="errors" name="school" component="p" />
          <Field autoComplete="off" name="email" type="email" placeholder="Enter the school email" className="CreateAccount__form__input" />
          <ErrorMessage className="errors" name="email" component="p" />
          <button type="submit"  className="CreateAccount__form__bt">Next</button>
          <p className="CreateAccount__form__have" >Already have an account?<span> Sign up</span></p>
        </Form>
      </Formik>
    </div>
  );
}
