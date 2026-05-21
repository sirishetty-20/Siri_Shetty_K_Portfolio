import { cn } from '../../lib/cn.js'
export default function GlassCard({ className, glow = 'gold', children, ...props }) {
  const glowCls = glow === 'violet' ? 'glow-violet' : glow === 'cyan' ? 'glow-cyan' : 'glow-gold'
  return (
    <div className={cn('glass p-6 transition-all duration-300', glowCls, className)} {...props}>
      {children}
    </div>
  )
}
