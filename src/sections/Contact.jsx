import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './Contact.css'

const SID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('')

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 3) e.name = t('contact.errName')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.errEmail')
    if (form.subject.trim().length === 0) e.subject = t('contact.errSubject')
    if (form.message.trim().length < 10) e.message = t('contact.errMessage')
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setErrMsg('')

    // Template variables — must match EXACTLY what your EmailJS template uses:
    // {{name}}, {{email}}, {{title}}, {{message}}
    const templateParams = {
      name:    form.name,
      email:   form.email,
      title:   form.subject,
      message: form.message,
    }

    try {
      const result = await emailjs.send(SID, TID, templateParams, { publicKey: KEY })
      console.log('EmailJS OK:', result.status, result.text)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      const msg = err?.text || err?.message || JSON.stringify(err)
      console.error('EmailJS ERROR:', msg)
      setErrMsg(msg)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact__grid">
          <aside className="contact__info reveal">
            <h3>{t('contact.infoTitle')}</h3>
            <ul>
              <li>
                <span className="contact__info-icon" aria-hidden="true">✉️</span>
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </li>
              <li>
                <span className="contact__info-icon" aria-hidden="true">💼</span>
                <a href={config.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <span className="contact__info-icon" aria-hidden="true">🐙</span>
                <a href={config.github} target="_blank" rel="noreferrer">GitHub</a>
              </li>
            </ul>
          </aside>

          <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">{t('contact.name')}</label>
              <input id="name" name="name" type="text" value={form.name}
                onChange={handleChange} placeholder={t('contact.placeholderName')}
                aria-invalid={!!errors.name} />
              {errors.name && <span className="field__error" role="alert">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">{t('contact.email')}</label>
              <input id="email" name="email" type="email" value={form.email}
                onChange={handleChange} placeholder={t('contact.placeholderEmail')}
                aria-invalid={!!errors.email} />
              {errors.email && <span className="field__error" role="alert">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input id="subject" name="subject" type="text" value={form.subject}
                onChange={handleChange} placeholder={t('contact.placeholderSubject')}
                aria-invalid={!!errors.subject} />
              {errors.subject && <span className="field__error" role="alert">{errors.subject}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" name="message" rows="5" value={form.message}
                onChange={handleChange} placeholder={t('contact.placeholderMessage')}
                aria-invalid={!!errors.message} />
              {errors.message && <span className="field__error" role="alert">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact__submit"
              disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>

            {status === 'success' && (
              <p className="contact__feedback contact__feedback--ok" role="status">
                {t('contact.success')}
              </p>
            )}
            {status === 'error' && (
              <p className="contact__feedback contact__feedback--err" role="alert">
                Error: {errMsg || 'Unknown error'} — {t('contact.errorFallback')}{' '}
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
