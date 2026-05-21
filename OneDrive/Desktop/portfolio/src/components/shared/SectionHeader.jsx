export default function SectionHeader({ eyebrow, title, subtitle, center }) {
  return (
    <div className={center ? 'text-center mb-10' : 'mb-10'}>
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className={`mt-3 h-[2px] w-16 bg-gradient-to-r from-gold via-violet to-cyanx rounded-full ${center ? 'mx-auto' : ''}`} />
      {subtitle && <p className="mt-4 text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
