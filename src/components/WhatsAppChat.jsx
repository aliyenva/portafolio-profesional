import { useLanguage } from '../context/LanguageContext.jsx'
import { config } from '../data/config.js'
import './FloatingButtons.css'

// Chat de WhatsApp flotante: abre una conversación con mensaje predefinido
export default function WhatsAppChat() {
  const { t } = useLanguage()
  const message = encodeURIComponent(t('whatsapp.message'))
  const url = `https://wa.me/${config.whatsapp}?text=${message}`

  return (
    <a
      className="whatsapp"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.label')}
      title={t('whatsapp.label')}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.117.555 4.184 1.61 6.008L4 29l8.164-1.582a12.02 12.02 0 0 0 3.84.629h.004C22.621 28.047 28 22.664 28 16.043 28 12.83 26.75 9.812 24.48 7.543 22.21 5.273 19.216 4 16.004 3zm0 21.938h-.004a9.9 9.9 0 0 1-5.05-1.383l-.363-.215-4.844.94.969-4.723-.235-.375a9.86 9.86 0 0 1-1.512-5.223c.004-5.485 4.469-9.95 9.957-9.95 2.66 0 5.156 1.036 7.035 2.918a9.88 9.88 0 0 1 2.914 7.04c-.004 5.488-4.469 9.953-9.957 9.953zm5.461-7.446c-.3-.15-1.77-.874-2.043-.973-.273-.101-.472-.15-.672.15-.199.3-.77.973-.945 1.172-.172.199-.348.223-.648.074-.301-.15-1.266-.466-2.41-1.487-.891-.793-1.492-1.774-1.668-2.074-.172-.301-.019-.463.132-.612.136-.135.301-.352.45-.527.152-.176.202-.301.302-.5.1-.2.05-.375-.025-.525-.075-.15-.672-1.62-.922-2.219-.242-.583-.488-.504-.672-.512l-.574-.011c-.199 0-.523.074-.797.375-.273.3-1.043 1.02-1.043 2.488s1.067 2.887 1.215 3.086c.148.199 2.098 3.203 5.086 4.492.711.307 1.266.489 1.699.626.714.227 1.363.195 1.877.118.573-.086 1.77-.723 2.02-1.422.25-.699.25-1.297.176-1.422-.075-.125-.273-.199-.574-.348z" />
      </svg>
    </a>
  )
}
