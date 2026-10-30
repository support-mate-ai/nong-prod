import { useWaitlist } from './WaitlistModal.jsx'

export default function Button({ href, variant = '', className = '', style, children, ...rest }) {
  const waitlist = useWaitlist()
  const cls = ['btn', variant, className].filter(Boolean).join(' ')

  if (href === '#join' && waitlist) {
    const { onClick, ...buttonProps } = rest
    return (
      <button
        className={cls}
        type="button"
        style={style}
        aria-haspopup="dialog"
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) waitlist.openWaitlist(event.currentTarget)
        }}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }

  return (
    <a className={cls} href={href} style={style} {...rest}>
      {children}
    </a>
  )
}
