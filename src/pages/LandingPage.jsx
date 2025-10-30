import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
import HeroMobile from '../components/HeroMobile';

const LandingPage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const doctors = [
    {
      name: 'Dr. Gauri Agarwal',
      role: 'Founder & Director',
      experience: 'Experience: 15+ years',
      location: 'DELHI, GHAZIABAD',
      image:
        '/Images/Dr Gauri maam.jpg',
    },
    {
      name: 'Dr. Aditi Bhatnagar',
      role: 'IVF Specialist',
      experience: 'Experience: 10+ years',
      location: 'GURUGRAM',
      image:
        '/Images/Dr. Aditi Bhatnagar.jpg',
    },
    {
      name: 'Dr Lisha Singh',
      role: 'IVF Specialist',
      experience: 'Experience: 7+ years',
      location: 'New Delhi NCR',
      image:
        '/Images/Dr. Lisha Singh.jpg',
    },
    {
      name: 'Dr. Monika Maan',
      role: 'IVF Specialist',
      experience: 'Experience:12+ years',
      location: 'Pitampura, NCR Delhi',
      image:
        '/Images/Dr. Monika Maan.png',
    },
  ]
  const testimonials = [
    {
      name: 'Tulsi Academy',
      role: 'Content Creator',
      initials: 'TA',
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: 'wpnZA90hG40',
      link: 'https://www.youtube.com/watch?v=wpnZA90hG40',
    },
    {
      name: 'Rambabu Yadav',
      role: 'Content Creator',
      initials: 'RY',
      stars: 5,
      text:
        'It was a great experience to consult Dr. Gauri Ma’am. After getting treatment from SOI we got positive pregnancy. HIGHLY GRATEFUL TO Dr. Lisha and SOI team.',
      videoId: 'zlq0b7kg7QU',
      link: 'https://www.youtube.com/watch?v=zlq0b7kg7QU',
    },
    {
      name: 'Tulsi Academy',
      role: 'Content Creator',
      initials: 'TA',
      stars: 5,
      text:
        'Thanks for Seeds of Innocence Team. Seeds of innocence team ka work bhout hi achha h. Hme first time m hi success mili. Price k according facilities kafi achhi h. special thanks to Lisha maam',
      videoId: 'o_hjhUSFN7U',
      link: 'https://www.youtube.com/watch?v=zlhyWV7RMaA',
    },
    {
      name: 'Donald Jackman',
      role: 'Content Creator',
      initials: 'DJ',
      stars: 5,
      text:
        "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      videoId: '7aSViXkirBY',
      link: 'https://www.youtube.com/watch?v=7aSViXkirBY',
    },
  ]

  return (
    <>
      {/* Header Component */}
      <header className="w-full">
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
      {/* Show mobile version only on mobile */}
      <HeroMobile  className="sm:hidden" />
      {/* Show desktop/tablet hero only on sm+ screens */}
      <section className="relative hidden sm:block w-full min-h-[500px] sm:h-[480px] lg:h-[620px]" aria-label="Hero">
        {/* Background image */}
        <img
          src="/Images/Top-Banner 1.png"
          alt="Happy family banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
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

      {/* IVF Doctors Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Best IVF Specialists & IVF Doctors in Delhi
          </h2>
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {doctors.map((doc) => (
              <div key={doc.name} className="flex flex-col items-center text-center">
                <div className="w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-white">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-red-600 font-extrabold tracking-wide uppercase text-lg sm:text-xl">
                  {doc.name}
                </h3>
                <p className="mt-1 text-gray-700 text-base">{doc.role}</p>
                <p className="text-gray-600 text-base">{doc.experience}</p>
                <p className="mt-1 text-gray-900 font-semibold uppercase">{doc.location}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            What Our Happy Couples Are Saying!
          </h2>
          {/* Cards */}
          <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Video */}
                <div className="relative w-full aspect-video bg-gray-200">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${t.videoId}?rel=0`}
                    title={t.name}
                    loading="lazy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                {/* Body */}
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium leading-none">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 mb-2" aria-label={`${t.stars} star rating`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 ${i < t.stars ? 'opacity-100' : 'opacity-30'}`}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-4">
                    {t.text}
                  </p>
                  <a href={t.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-red-600 hover:text-red-700">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            Why Choose Seeds of Innocens IVF
          </h2>
          {/* Feature Grid */}
          <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-md overflow-hidden bg-white">
            {[
              {
                title: '35+ IVF Centres',
                desc:
                  "With over 35 IVF centres across the National and International, Seeds of Innocens brings fertility care closer to you. Whether you're in a metro or a smaller city, expert help is never far away. Visit your nearest centre and take the first step toward parenthood with us.",
                icon: (
                  <img src="/Images/08.png" alt="35+ IVF Centres" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: '20,000+ Healthy Babies',
                desc:
                  'At Seeds of Innocens, we are proud to have helped over 20,000 families welcome healthy babies into the world. Our commitment to quality fertility care and personalised treatment has made us a trusted name in IVF.',
                icon: (
                  <img src="/Images/01.png" alt="20,000+ Healthy Babies" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: 'Upto 78% Success Rate',
                desc:
                  'We maintain an impressive IVF success rate of 78%, higher than the average. Our advanced lab technology and individualised treatment plans make this possible. We believe in transparency, trust, and results that matter.',
                icon: (
                  <img src="/Images/03.png" alt="Upto 78% Success Rate" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: '30+ Certified Trained Clinicians',
                desc:
                  'Our team includes over 30 certified and highly trained fertility specialists and embryologists. With years of experience and global expertise, we offer world-class treatment and compassionate care.',
                icon: (
                  <img src="/Images/06.png" alt="30+ Certified Trained Clinicians" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: 'Affordable IVF Care',
                desc:
                  'We provide affordable IVF treatment and offer quality services to patients, with customised packages and financing options to make your journey easier.',
                icon: (
                  <img src="/Images/02.png" alt="Affordable IVF Care" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: 'Fetal Medicine',
                desc:
                  'We offer fetal medicine services including ultrasound scans, fetal echocardiography, and diagnostic procedures like amniocentesis and CVS for comprehensive prenatal care.',
                icon: (
                  <img src="/Images/04.png" alt="Fetal Medicine" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: 'Expert Fertility Counsellor & Clinical Geneticist',
                desc:
                  'Genetic counselors evaluate family histories and identify potential genetic risks that could affect reproductive outcomes, guiding you with options and implications of results.',
                icon: (
                  <img src="/Images/05.png" alt="Expert Fertility Counsellor & Clinical Geneticist" className="h-14 w-14 object-contain" />
                ),
              },
              {
                title: 'In-House Genetic Lab',
                desc:
                  'We are the first IVF centre in India to establish an in-house genetic lab with testing services including PGT-A which increases the success rate of the IVF process.',
                icon: (
                  <img src="/Images/07.png" alt="In-House Genetic Lab" className="h-14 w-14 object-contain" />
                ),
              },
            ].map((f, idx) => (
              <div key={idx} className="border border-gray-200 p-6 text-center flex flex-col items-center">
                {f.icon}
                <h3 className="mt-3 text-lg font-semibold text-red-600">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-6">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Component */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4 sm:mb-6">
            About Seeds of Innocens IVF Centre Delhi
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-4 sm:p-8">
            {/* Building image */}
            <div className="w-full max-w-xl flex-shrink-0">
              <img
                src="/Images/Untitled-2 1.png"
                alt="Seeds of Innocens IVF Centre Delhi building"
                className="rounded-sm w-full h-auto object-cover shadow"
              />
            </div>

            {/* Text + CTA */}
            <div className="flex-1 flex flex-col justify-center lg:justify-start mt-7 lg:mt-0">
              <p className="text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                Seeds of Innocens IVF is a renowned infertility centre that specializes in delivering successful fertility treatments at the forefront of innovative artificial reproductive technology.
              </p>
              <p className="text-gray-900 text-base sm:text-lg mb-3 leading-snug">
                The team of experts at Seeds of Innocens IVF in Delhi includes exceptional professionals such as consultant fertility specialists, sonographers, embryologists, nurses and counselors who work together to provide the highest quality treatment to couples seeking parenthood in the most caring and nurturing environment possible.
              </p>
              <p className="text-gray-900 text-base sm:text-lg mb-6 leading-snug">
                The infertility centre boasts of all the latest equipment and technologies that are designed to provide the most effective treatments in response to infertility problems faced by childless couples.
              </p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-red-700 active:bg-red-800 focus:outline-none mt-2 w-full max-w-xs text-center"
                style={{ letterSpacing: '0.5px' }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Information Component */}
      <section className="w-full py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Address + Google Map */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3">Seeds of Innocens - Best IVF Centre in Delhi | Fertility Clinics</h3>
              <div className="text-base sm:text-lg font-normal text-gray-900 mb-4 leading-snug">
                Address: 3, opp. Aurbindo College, MMTC Colony, Malviya Nagar, South Delhi, Delhi 110017
              </div>
              <div className="rounded overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2065.4160333339305!2d77.20331691272258!3d28.532736663578216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20320e1d805%3A0x7d88d4bcd484e5ec!2sSeeds%20of%20Innocens%20IVF%20Centre%20-%20Best%20IVF%20Centre%20in%20Delhi%20%7C%20Fertility%20Clinics!5e0!3m2!1sen!2sin!4v1761809915881!5m2!1sen!2sin"
                  width="100%"
                  height="335"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seeds of Innocens IVF Centre Location"
                />
              </div>
            </div>
            {/* Contact Form Card */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer Banner Section */}
      <footer className="w-full bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-red-600 mb-3 leading-tight max-w-4xl">
              Start Your IVF Journey at Seeds of Innocens IVF <br className="hidden sm:block" />
              Free Fertility Consultation, & EMI Facility on IVF
            </h2>
            <p className="text-lg font-semibold text-black mb-2 max-w-3xl">
              Register Online For Seamless Experience. Book Your Online Appointment Within Minutes.
            </p>
            <p className="text-base font-semibold text-black mb-4 max-w-2xl">
              Call Now <span className="font-bold">+91-9810350512</span> or &nbsp;
              <span className="underline cursor-pointer hover:text-red-700" onClick={() => setIsContactOpen(true)}>Book an Appointment</span>
            </p>
          </div>
        </div>
        <div className="w-full h-2 bg-red-600" />
      </footer>
      
      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-md sm:max-w-lg bg-black rounded-lg">
              <ContactForm onClose={() => setIsContactOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LandingPage