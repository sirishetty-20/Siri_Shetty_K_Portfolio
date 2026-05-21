import { cn } from '../../lib/cn.js'
const palette = {
  gold: 'bg-gold/10 text-gold border-gold/30',
  violet: 'bg-violet/10 text-violet-300 border-violet/40',
  cyan: 'bg-cyanx/10 text-cyan-300 border-cyanx/40',
  slate: 'bg-white/5 text-white/80 border-white/15',
}
export default function TechBadge({ children, color = 'slate', className }) {
  return (
    <span className={cn('inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border', palette[color], className)}>
      {children}
    </span>
  )
}
