import { Formik,Form,Field,ErrorMessage } from "formik"
import { object,number } from "yup"
import { useNavigate } from "react-router-dom"
import "./ChooseStaff.css"
const initialValues = {
  staff:"",
  address:""
}
const validationSchema = object({
  staff:number().min(8).required(),
  address:number().min(8).required()
})


export default function ChooseStaff() {
  const navigate = useNavigate()
  function handleSubmit(){
    navigate("/Login")
  }
  
  return (
    <div className="ChooseStaff">
      <h1 className="ChooseStaff__header">Udemy school, Choose your staffs</h1>
      
      <Formik onSubmit={handleSubmit} validationSchema={validationSchema} initialValues={initialValues}>
        <Form className="ChooseStaff__form">
         <Field  placeholder="Number of staff"  className="ChooseStaff__form__input" name="staff" type="number"/>
         <ErrorMessage component="p" name="staff" className="errors"/>
         <Field  placeholder="School address" className="ChooseStaff__form__input" name="address" type="number"/>
         <ErrorMessage component="p" name="address" className="errors"/>
         <button type="submit" className="ChooseStaff__form__bt">Next</button>
         <p className="ChooseStaff__form__char">Must be at least 8 characters.</p>
        </Form>
      </Formik>
    </div>
  )
}
