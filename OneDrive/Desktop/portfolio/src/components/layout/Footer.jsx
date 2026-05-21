import { PROFILE } from '../../data/nav.js'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} {PROFILE.name}. Crafted with data & care.</div>
        <div className="flex items-center gap-4 text-sm">
          <a className="text-white/70 hover:text-gold" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-white/70 hover:text-gold" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-white/70 hover:text-gold" href={`mailto:${PROFILE.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
