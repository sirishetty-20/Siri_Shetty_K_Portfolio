import useScrollReveal from "../../hooks/useScrollReveal.js";
import { cn } from "../../lib/cn.js";

export default function ScrollReveal({ children, className, delay = 0 }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </div>
  )
}
