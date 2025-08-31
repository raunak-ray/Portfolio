import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [notification, setNotification] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setNotification({ type: "success", message: "✅ Message Sent!" })
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setNotification(null), 3000)
      })
      .catch(() => {
        setNotification({ type: "error", message: "❌ OOPS! Something went wrong. Try Again!" })
        setTimeout(() => setNotification(null), 3000)
      })
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section id='contact' className="min-h-screen flex justify-center items-center relative">
      {/* ✅ Custom Notification */}
      {notification && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm md:text-base transition-all duration-500 z-[9999]
          ${notification.type === "success"
              ? "bg-gradient-to-r from-blue-500 to-purple-600"
              : "bg-red-500/80"
          }`}
          data-aos="zoom-in"
        >
          {notification.message}
        </div>
      )}

      <div className="px-4 w-150">
        <h2
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <input
              type="text"
              id='name'
              name='from_name'
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:outline-none focus:bg-blue-500/5"
              placeholder='Enter Your Name'
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              id='email'
              name='email'
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:outline-none focus:bg-blue-500/5"
              placeholder='example@gmail.com'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="relative" data-aos="fade-up" data-aos-delay="300">
            <textarea
              id='message'
              name='message'
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:border-blue-500 focus:outline-none focus:bg-blue-500/5"
              placeholder='Enter Your Message...'
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type='submit'
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,24,0.4)] cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
