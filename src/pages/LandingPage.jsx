import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'

const LandingPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      {/* Header Component */}
      <header className="w-full bg-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:py-4">
          <a href="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/Images/SOILogo.png"
              alt="Seeds of Innocens IVF logo"
              className="h-15 sm:h-20 w-auto"
            />
          </a>
          <div className="flex flex-col items-start sm:items-center gap-2 w-[240px] sm:w-[300px] ml-2 sm:ml-0">
            <span className="text-black-800 font-semibold text-[13px] sm:text-base text-left sm:text-center">Call for Fertility Consultation</span>
            <a
              href="https://wa.me/919810350512"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center bg-[#d32f2f] text-white rounded-full pr-4 sm:pr-7 pl-14 sm:pl-20 py-1.5 sm:py-2 shadow hover:bg-[#c62828] transition-colors"
            >
              <span className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white shadow">
                <img
                  src="/Images/whatsapp_PNG20 1.png"
                  alt="WhatsApp"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-full"
                />
              </span>
              <span className="font-bold tracking-wide text-[18px] sm:text-[27px] leading-none">98103 50512</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Component */}
      <section className="relative w-full min-h-[500px] sm:h-[480px] lg:h-[620px]" aria-label="Hero">
        {/* Background image */}
        <img
          src="/Images/Top-Banner 1.png"
          alt="Happy family banner"
          className="hidden sm:block absolute inset-0 h-full w-full object-cover"
        />

        {/* Mobile background for better visibility */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

        {/* Overlay form panel on the image */}
        <div className="absolute left-4 right-4 sm:left-20 sm:right-auto top-8 sm:top-16 flex justify-center sm:justify-start">
          <ContactForm />
        </div>
      </section>

      {/* Delhi Center Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Best IVF Centre in Delhi
          </h2>

          {/* Description Paragraph */}
          <p className="text-center text-gray-800 text-sm sm:text-base leading-5 sm:leading-6 max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-2">
            Seeds of Innocens IVF is one of the Best IVF centre in Delhi, providing world-class fertility treatments. At Seeds of Innocens IVF, we specialize in low and no-drug infertility solutions that help women conceive with minimal invasiveness and unparalleled success. We offer balanced and holistic approaches to In Vitro fertilization (IVF), including innovative treatments like Natural Cycle IVF, Minimal Stimulation IVF, Injection-Free IVF & Conventional IVF.
          </p>

          {/* Service Cards Grid - Responsive: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
            {/* Row 1 */}
            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/IUI, IVF & ICSI.png"
                  alt="IUI, IVF & ICSI"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">IUI, IVF & ICSI</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/Blastocyst.png"
                  alt="Blastocyst Transfer"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Blastocyst Transfer</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/Cryopreservation.png"
                  alt="Cryopreservation"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Cryopreservation</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">(Egg, Sperm & Embryos)</p>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/PRP & Ovarian.png"
                  alt="PRP & Ovarian Rejuvenation"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">PRP & Ovarian Rejuvenation</h3>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/Genetic testing.png"
                  alt="Genetic Testing"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Genetic Testing</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">(PGT-A & PGT-M)</p>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/Genetic.png"
                  alt="Genetic Counseling"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Genetic Counseling</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/TESA PESA.png"
                  alt="TESA/PESA"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">TESA/PESA</h3>
            </div>

            <div className="bg-white rounded-sm p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <img
                  src="/Images/Laparoscopy &.png"
                  alt="Laparoscopy & Hysteroscopy"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-lg sm:text-xl">Laparoscopy & Hysteroscopy</h3>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <button onClick={() => setIsContactOpen(true)} className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-red-700 cursor-pointer transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <button
                aria-label="Close"
                onClick={() => setIsContactOpen(false)}
                className="absolute -right-2 -top-2 sm:right-1 sm:top-1 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white text-gray-700 shadow-lg hover:text-black cursor-pointer flex items-center justify-center text-lg sm:text-xl z-20"
              >
                ×
              </button>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LandingPage