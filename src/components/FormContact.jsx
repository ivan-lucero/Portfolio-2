import React, { useState } from 'react'
import {Formik, Form, Field} from 'formik'
import emailjs from "@emailjs/browser"

export const FormContact = () => {
  
  const [messageSended, setMessageSended] = useState(null)
  const [showMessage, setShowMessage] = useState("")
  
  return (
    <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: ''
      }}

      validate={( values ) => {
        let errors = {}
        if(!values.name) errors.name = true
        else if(values.name.length > 40)
          errors.name = true
        if(!values.email) errors.email = true
        else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email))
          errors.email = true
          else if(values.email.length > 191)
            errors.email = true

        if(!values.subject) errors.subject = true

        if(!values.message) errors.message = true

        return errors
      }}
      onSubmit={(values, {resetForm}) => {

        let templateParams = {
          "name": values.name,
          "email": values.email,
          "subject": values.subject,
          "message": values.message,
        }

        emailjs.send('GmailMessage','template_ri83bjp', templateParams, 'ej7sXX2VlwIn4tQkr')
        .then((response) => {
          if(response.status === 200){
            setMessageSended(true)
            setShowMessage("Mensaje enviado exitosamente. En un instante será contactad@.")
          }
        }, (err) => {
          console.log(err);
          setMessageSended(false)
          setShowMessage("Error inesperado. El mensaje no ha podido ser enviado, por favor contactese a traves de redes sociales.")
        });
        resetForm()
      }}
    >
      { ({ errors, touched }) => (
        
        <Form >
          <div className="form__container">
            <div className="form__group">
              <Field 
              className={errors.name && touched.name ? "input input-error" : "input"} 
              type="text"
              name="name"
              id="name"
              placeholder="Nombre y Apellido"
              />
            </div>
            <div className="form__group">
              <Field 
              className={errors.email && touched.email ? "input input-error" : "input"} 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email"
              />
              
            </div>
            <div className="form__group">
              <Field 
              className={errors.subject && touched.subject ? "input input-error" : "input"} 
              type="text" 
              name="subject" 
              id="subject" 
              placeholder="Asunto"
              />
              
            </div>
            <div className="form__group">
              <Field 
              className={errors.message && touched.message ? "input input-error" : "input"} 
              as="textarea" 
              name="message" 
              id="message" 
              placeholder="Mensaje"
              cols="30" rows="5"
              />
            
            </div>
            <input className='button' type="submit" value="Enviar" />
          </div>
          <span className={messageSended ? "message" : "message message-error"}>{showMessage}</span>
        </Form>
    )}
    </Formik>
</>
  )
}
