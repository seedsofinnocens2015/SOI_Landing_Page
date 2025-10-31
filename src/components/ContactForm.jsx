import React, { useState } from 'react'

const ContactForm = ({
  title = "Get Free Fertility Consultation",
  subtitle = "from",
  subtitle2 = "Best IVF Center in Delhi",
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
  const [isSubmitted, setIsSubmitted] = useState(
    typeof window !== "undefined" && localStorage.getItem("soi_form_submitted") === "1"
  );

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
    e.preventDefault();
    if (isFormValid()) {
      if (onSubmit) {
        onSubmit(formData);
      }
      localStorage.setItem("soi_form_submitted", "1");
      setIsSubmitted(true);
    }
  };

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
        <span className="italic font-bold">{subtitle}</span> <span className="italic font-bold" style={{ color: '#CC2627' }}>{subtitle2}</span>
      </h2>
      {!isSubmitted ? (
        <>
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
              rows="2"
              placeholder="Message"
              required
              className="w-full rounded-md bg-white text-gray-900 placeholder:text-gray-500 px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full inline-flex items-center justify-center rounded-md text-white font-semibold tracking-wide py-2 transition-colors ${isFormValid()
                ? 'bg-[#d32f2f] hover:bg-[#c62828] cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'
                }`}
            >
              SUBMIT
              <span className="ml-2">›</span>
            </button>
          </form>


          {showDisclaimer && (
            <p className="mt-3 text-[11px] text-white">
              We don't share your personal info with anyone.
            </p>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <svg className="h-14 w-14 mb-4 text-green-400" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#d2f5df" />
            <path stroke="#029861" strokeWidth="2.5" fill="none" d="M8 12.5l3 3 5-5" />
          </svg>
          <h3 className="text-2xl font-bold text-green-400 mb-2">Thank you for contacting us!</h3>
          <p className="text-base text-white">Your details have been received.<br />Our team will reach out to you soon.</p>
        </div>
      )}
    </div>
  )
}

export default ContactForm
