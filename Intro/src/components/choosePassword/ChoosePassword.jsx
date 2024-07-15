import { Formik,Form,Field,ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./ChoosePassword.css"
import { number, object,string } from "yup"

const initialValues = {
  password:"",
  repedpass:""
}
const validationSchema = object({
  password:number().min(8).required(),
  repedpass:string().required().min(8)
})
export default function ChoosePassword({setComp}) {
  const [user,setUser]=useState([])
  const navigate = useNavigate()
  function handleSubmit (value){
    setUser(value)
    if(value.password===value.repedpass){
      setComp(true)
      navigate("/ChooseStaff")
    }
   
  }
  return (
    <div className="ChoosePassword">
       <h1 className="ChoosePassword__header">Udemy school, Choose your password</h1>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="ChoosePassword__form">
        <Field placeholder="Choose a password" type="password"  name="password" className="ChoosePassword__form__input"/>
        <ErrorMessage className="errors" name="password" component="p"/>
        <Field  placeholder="Confirm password" type="password" name="repedpass" className="ChoosePassword__form__input"/>
        <ErrorMessage className="errors" name="repedpass" component="p"/>
          <p className="ChoosePassword__form__char">Must be at least 8 characters.</p>
          <button type="submit" className="ChoosePassword__form__bt">Next</button>
      </Form>
    </Formik>
    </div>
  )
}
