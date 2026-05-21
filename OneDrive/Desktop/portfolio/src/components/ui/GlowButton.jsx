import { cn } from '../../lib/cn.js'

const variants = {
  primary: 'bg-gold text-navy hover:shadow-[0_0_30px_-5px_rgba(240,180,41,0.7)]',
  outline: 'border border-white/20 text-white hover:border-gold/60 hover:text-gold',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  violet: 'bg-violet text-white hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.7)]',
}

export default function GlowButton({ as: As = 'button', variant = 'primary', className, children, ...props }) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
