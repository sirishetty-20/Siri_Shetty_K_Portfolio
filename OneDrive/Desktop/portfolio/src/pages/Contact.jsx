import { useState } from 'react'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import { PROFILE } from '../data/nav.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Valid email required'
    if (!form.subject.trim()) err.subject = 'Subject is required'
    if (form.message.trim().length < 10) err.message = 'Message must be at least 10 characters'
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  const input = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-gold/60'

  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="Contact" title="Let's build something with data" />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <GlassCard glow="gold">
            <div className="text-xs uppercase tracking-widest text-gold/80">Email</div>
            <a href={`mailto:${PROFILE.email}`} className="text-white text-lg font-semibold hover:text-gold">{PROFILE.email}</a>
          </GlassCard>
          <GlassCard glow="violet">
            <div className="text-xs uppercase tracking-widest text-gold/80">LinkedIn</div>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-gold break-all">linkedin.com/in/siri-shetty-k-ab5306267</a>
          </GlassCard>
          <GlassCard glow="cyan">
            <div className="text-xs uppercase tracking-widest text-gold/80">GitHub</div>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-gold">github.com/sirishetty-20</a>
          </GlassCard>
        </div>
        <GlassCard glow="violet">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <input className={input} placeholder="Name" value={form.name} onChange={upd('name')} />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input className={input} placeholder="Email" value={form.email} onChange={upd('email')} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input className={input} placeholder="Subject" value={form.subject} onChange={upd('subject')} />
              {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea rows={5} className={input} placeholder="Message" value={form.message} onChange={upd('message')} />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <GlowButton type="submit" className="w-full">Send Message</GlowButton>
            {sent && <p className="text-green-400 text-sm text-center">Message ready — opens your email client.</p>}
          </form>
        </GlassCard>
      </div>
    </div>
  )
}
