import { useEffect, useRef, useState } from 'react'
import GlassCard from '../ui/GlassCard.jsx'

export default function StatCard({ value, label, glow = 'gold' }) {
  const numeric = typeof value === 'number'
  ? value
  : parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0

const suffix = String(value).replace(/[0-9.]/g, '')

const isDecimal = String(value).includes('.')
  const [n, setN] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (started.current) return
    started.current = true
    const dur = 1200, start = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setN(numeric * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [numeric])
  return (
    <GlassCard glow={glow} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">{n}{suffix}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </GlassCard>
  )
}
