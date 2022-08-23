import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateId = process.env.REACT_APP_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(serviceId, templateId, formValues, publicKey)
    setFormValues({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onInput={handleInput}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onInput={handleInput}
          required
        />
        <textarea
          name="message"
          id="message"
          value={formValues.message}
          onInput={handleInput}
          required
        ></textarea>
        <button
          type="submit"
          disabled={
            !formValues.name || !formValues.email || !formValues.message
          }
        >
          Send Email
        </button>
      </form>
    </div>
  )
}

export default Contact
