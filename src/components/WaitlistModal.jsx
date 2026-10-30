import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const WaitlistContext = createContext(null)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseClient = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null

async function submitWaitlistToSupabase({ role, ...formValues }) {
  if (!supabaseClient) {
    throw new Error('Supabase credentials are not configured.')
  }

  const payload = {
    role,
    full_name: formValues.fullName?.trim(),
    email: formValues.email?.trim(),
    mobile_number: formValues.mobileNumber?.trim(),
    city: formValues.city?.trim(),
    salon_name: formValues.salonName?.trim() || null,
    salon_website: formValues.website?.trim() || null,
    employee_role: formValues.jobRole?.trim() || null,
  }

  const { error } = await supabaseClient.from('watchlist_submissions').insert([payload])

  if (error) {
    throw error
  }

  return payload
}

const roleOptions = [
  {
    id: 'salon-owner',
    title: 'Salon Owner',
    description: 'Manage your salon, team, services and appointments from one place.',
  },
  {
    id: 'salon-employee',
    title: 'Salon Employee',
    description: 'Keep track of your schedule, appointments and daily work.',
  },
]

const formConfig = {
  'salon-owner': {
    title: 'Join as a Salon Owner',
    badge: 'SALON OWNER',
    subtitle: 'Build a calmer, more connected salon from day one.',
    columns: [
      [
        { name: 'fullName', label: 'Full Name', placeholder: 'Your name', required: true, autoComplete: 'name' },
        { name: 'mobileNumber', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', required: true, type: 'tel', autoComplete: 'tel' },
        { name: 'city', label: 'City', placeholder: 'Pune', required: true, autoComplete: 'address-level2' },
      ],
      [
        { name: 'salonName', label: 'Salon Name', placeholder: 'Your salon name', required: true, autoComplete: 'organization' },
        { name: 'email', label: 'Email', placeholder: 'you@example.com', required: true, type: 'email', autoComplete: 'email' },
        { name: 'website', label: 'Salon Instagram / Website', placeholder: 'instagram.com/your-salon', required: false, type: 'text' },
      ],
    ],
  },
  'salon-employee': {
    title: 'Join as a Salon Employee',
    badge: 'SALON EMPLOYEE',
    subtitle: 'Keep your schedule and daily work beautifully in sync.',
    columns: [
      [
        { name: 'fullName', label: 'Full Name', placeholder: 'Your name', required: true, autoComplete: 'name' },
        { name: 'email', label: 'Email', placeholder: 'you@example.com', required: true, type: 'email', autoComplete: 'email' },
        { name: 'salonName', label: 'Salon Name', placeholder: 'Your salon name', required: false, autoComplete: 'organization' },
      ],
      [
        { name: 'mobileNumber', label: 'Mobile Number', placeholder: '+91 XXXXX XXXXX', required: true, type: 'tel', autoComplete: 'tel' },
        { name: 'city', label: 'City', placeholder: 'Pune', required: true, autoComplete: 'address-level2' },
        { name: 'jobRole', label: 'Your Role', required: true, type: 'select' },
      ],
    ],
  },
}

const initialValues = {
  'salon-owner': {
    fullName: '',
    mobileNumber: '',
    city: '',
    salonName: '',
    email: '',
    website: '',
  },
  'salon-employee': {
    fullName: '',
    email: '',
    salonName: '',
    mobileNumber: '',
    city: '',
    jobRole: '',
  },
}

function normalizeIndianMobile(value) {
  let digits = value.replace(/[\s()-]/g, '')
  if (digits.startsWith('+91')) digits = digits.slice(3)
  else if (digits.startsWith('91') && digits.length === 12) digits = digits.slice(2)
  else if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits)
}

function validateValues(role, values) {
  const errors = {}
  for (const column of formConfig[role].columns) {
    for (const field of column) {
      const value = values[field.name] || ''
      if (field.required && !value.trim()) {
        errors[field.name] = 'This field is required.'
      } else if (field.name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field.name] = 'Enter a valid email address.'
      } else if (field.name === 'mobileNumber' && value && !normalizeIndianMobile(value)) {
        errors[field.name] = 'Enter a valid 10-digit Indian mobile number.'
      }
    }
  }
  return errors
}

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === 'left'
        ? <path d="M19 12H5m7 7-7-7 7-7" />
        : <path d="M5 12h14m-7-7 7 7-7 7" />}
    </svg>
  )
}

function RoleIcon({ role }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {role === 'salon-owner'
        ? <><path d="M3 10h18l-1.5-6h-15L3 10Z" /><path d="M5 10v10h14V10M9 20v-6h6v6M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>
        : <><circle cx="12" cy="8" r="4" /><path d="M4 21c.5-4.4 3.2-7 8-7s7.5 2.6 8 7" /><path d="m17 4 3-2M18 7l4-1" /></>}
    </svg>
  )
}

function RoleSelection({ onChoose, titleRef }) {
  return (
    <section className="waitlist-selection" aria-labelledby="waitlist-title">
      <span className="waitlist-badge">COMING SOON <span aria-hidden="true">·</span> 10% OFF AT LAUNCH</span>
      <h2 id="waitlist-title" ref={titleRef} tabIndex="-1">Join Nong</h2>
      <p className="waitlist-subtitle">What brings you to Nong?</p>
      <div className="waitlist-role-options">
        {roleOptions.map((role) => (
          <button
            className="waitlist-role-card"
            key={role.id}
            type="button"
            onClick={() => onChoose(role.id)}
            aria-label={`${role.title}. ${role.description}`}
          >
            <span className="waitlist-role-icon"><RoleIcon role={role.id} /></span>
            <span className="waitlist-role-copy">
              <strong>{role.title}</strong>
              <span>{role.description}</span>
            </span>
            <ArrowIcon />
          </button>
        ))}
      </div>
    </section>
  )
}

function FormField({ role, field, value, error, onChange }) {
  const id = `waitlist-${role}-${field.name}`
  const errorId = `${id}-error`
  const fieldProps = {
    id,
    name: field.name,
    required: field.required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    value,
    onChange: (event) => onChange(field.name, event.target.value),
    autoComplete: field.autoComplete,
  }

  return (
    <div className="waitlist-field">
      <label htmlFor={id}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label>
      {field.type === 'select'
        ? (
          <select {...fieldProps}>
            <option value="">Select your role</option>
            {['Hairstylist', 'Hairdresser', 'Barber', 'Makeup Artist', 'Beautician', 'Nail Technician', 'Receptionist', 'Other'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )
        : (
          <input
            {...fieldProps}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            inputMode={field.type === 'tel' ? 'tel' : undefined}
          />
        )}
      {error && <span className="waitlist-field-error" id={errorId} role="alert">{error}</span>}
    </div>
  )
}

function WaitlistForm({ role, values, onValuesChange, onSubmit, status, titleRef }) {
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)
  const formRef = useRef(null)
  const config = formConfig[role]
  const errors = hasAttemptedSubmit ? validateValues(role, values) : {}

  const handleSubmit = (event) => {
    event.preventDefault()
    setHasAttemptedSubmit(true)
    const validationErrors = validateValues(role, values)
    if (Object.keys(validationErrors).length) {
      const firstInvalidField = formRef.current?.elements.namedItem(Object.keys(validationErrors)[0])
      firstInvalidField?.focus()
      return
    }
    onSubmit(values)
  }

  return (
    <section className="waitlist-form-screen" aria-labelledby="waitlist-title">
      <button className="waitlist-change-role" type="button" onClick={() => onValuesChange.changeRole()}>
        <ArrowIcon direction="left" />
        Change role
      </button>
      <span className="waitlist-badge">{config.badge}</span>
      <h2 id="waitlist-title" ref={titleRef} tabIndex="-1">{config.title}</h2>
      <p className="waitlist-subtitle">{config.subtitle}</p>

      {status === 'success'
        ? (
          <div className="waitlist-message waitlist-message-success" role="status">
            <span className="waitlist-message-icon" aria-hidden="true">✓</span>
            <h3>You're on the list!</h3>
            <p>Thanks for joining the Nong waitlist. We’ll be in touch with updates and your 10% launch offer.</p>
          </div>
        )
        : (
          <>
            {status === 'unavailable' && (
              <div className="waitlist-message waitlist-message-error" role="alert">
                Online waitlist signups aren’t connected yet, so your details have not been sent. Please email <a href="mailto:thenong.support@gmail.com">thenong.support@gmail.com</a> to join.
              </div>
            )}
            {status === 'error' && (
              <div className="waitlist-message waitlist-message-error" role="alert">
                We couldn’t submit your details. Please try again.
              </div>
            )}
            <form className="waitlist-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="waitlist-fields-grid">
                {config.columns.map((column, index) => (
                  <div className="waitlist-field-column" key={index}>
                    {column.map((field) => (
                      <FormField
                        key={field.name}
                        role={role}
                        field={field}
                        value={values[field.name]}
                        error={errors[field.name]}
                        onChange={onValuesChange.update}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <button className="waitlist-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Joining…' : 'Join the Waitlist'}
                {status !== 'submitting' && <ArrowIcon />}
              </button>
              <p className="waitlist-footnote">By joining the Waitlist, you'll receive updates and 10% off when we launch.</p>
            </form>
          </>
        )}
    </section>
  )
}

export function useWaitlist() {
  return useContext(WaitlistContext)
}

export default function WaitlistProvider({ children, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeRole, setActiveRole] = useState(null)
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState(initialValues)
  const openerRef = useRef(null)
  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  const submittingRef = useRef(false)

  const openWaitlist = useCallback((opener) => {
    openerRef.current = opener || document.activeElement
    setActiveRole(null)
    setStatus('idle')
    setIsOpen(true)
  }, [])

  const closeWaitlist = useCallback(() => {
    setIsOpen(false)
    setActiveRole(null)
    setStatus('idle')
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector('.waitlist-close')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeWaitlist()
      } else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex="0"]'
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      openerRef.current?.focus?.()
    }
  }, [isOpen, closeWaitlist])

  useEffect(() => {
    if (isOpen && activeRole) titleRef.current?.focus()
  }, [isOpen, activeRole])

  const updateValue = useCallback((fieldName, value) => {
    setValues((previous) => ({
      ...previous,
      [activeRole]: { ...previous[activeRole], [fieldName]: value },
    }))
  }, [activeRole])

  const changeRole = useCallback(() => {
    setActiveRole(null)
    setStatus('idle')
  }, [])

  const handleSubmit = async (formValues) => {
    if (submittingRef.current || status === 'submitting') return

    const submitHandler = onSubmit || submitWaitlistToSupabase

    submittingRef.current = true
    setStatus('submitting')
    try {
      await submitHandler({ role: activeRole, ...formValues })
      setStatus('success')
    } catch (error) {
      setStatus(error?.message === 'Supabase credentials are not configured.' ? 'unavailable' : 'error')
    } finally {
      submittingRef.current = false
    }
  }

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      <div aria-hidden={isOpen || undefined} inert={isOpen ? '' : undefined}>
        {children}
      </div>
      {isOpen && (
        <div
          className="waitlist-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeWaitlist()
          }}
        >
          <div
            className="waitlist-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
          >
            <div className="waitlist-close-row">
              <button className="waitlist-close" type="button" onClick={closeWaitlist} aria-label="Close waitlist dialog">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="waitlist-content">
              {activeRole
                ? (
                  <WaitlistForm
                    role={activeRole}
                    values={values[activeRole]}
                    status={status}
                    titleRef={titleRef}
                    onSubmit={handleSubmit}
                    onValuesChange={{
                      update: updateValue,
                      changeRole,
                    }}
                  />
                )
                : <RoleSelection titleRef={titleRef} onChoose={(role) => {
                  setActiveRole(role)
                  setStatus('idle')
                }} />}
            </div>
          </div>
        </div>
      )}
    </WaitlistContext.Provider>
  )
}
