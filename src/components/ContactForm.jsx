import React, { useState } from 'react'

const ContactForm = ({ 
  title = "Get Free Fertility Consultation",
  subtitle = "from Best IVF Center in Delhi",
  showDisclaimer = true,
  className = "",
  onSubmit = null,
  onClose = null
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isFormValid = () => {
    return formData.firstName.trim() !== '' &&
           formData.lastName.trim() !== '' &&
           formData.phone.trim() !== '' &&
           formData.email.trim() !== '' &&
           formData.message.trim() !== ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      if (onSubmit) {
        onSubmit(formData)
      } else {
        // Default submission logic
        console.log('Form submitted:', formData)
        alert('Form submitted successfully!')
      }
    }
  }

  return (
    <div className={`rounded-lg bg-black/70 text-white p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl max-w-[420px] w-[min(92vw,420px)] relative z-10 ${className}`}>
      {typeof onClose === 'function' && (
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 h-8 w-8 sm:h-9 sm:w-9 rounded-full text-white/90 hover:text-white cursor-pointer flex items-center justify-center text-lg sm:text-xl"
        >
          ×
        </button>
      )}
      <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
        {title}
        <br />
        <span className="italic font-bold">{subtitle}</span>
      </h2>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
            className="col-span-1 w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
            className="col-span-1 w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
          className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
          className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          placeholder="Message"
          required
          className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full inline-flex items-center justify-center rounded-md text-white font-semibold tracking-wide py-2 transition-colors ${
            isFormValid() 
              ? 'bg-[#d32f2f] hover:bg-[#c62828] cursor-pointer' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          SUBMIT
          <span className="ml-2">›</span>
        </button>
      </form>

      {showDisclaimer && (
        <p className="mt-3 text-[11px] text-gray-300">
          We don't share your personal info with anyone.
        </p>
      )}
    </div>
  )
}

export default ContactForm
