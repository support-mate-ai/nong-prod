// Icon values are SVG inner markup (24x24 viewBox, stroke-based).
export const navLinks = [
  { href: '#how', label: 'How it works' },
  { href: '#owners', label: 'Salon owners' },
  { href: '#crew', label: 'Crew' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export const heroStats = [
  { value: '3 taps', label: 'to book a service' },
  { value: 'Max 3', label: 'waiting at a time' },
  { value: '10% off', label: 'for waitlist at launch' },
]

export const marqueeWords = ['No wait', 'No let', 'Pay for value', 'Not time']

export const steps = [
  { title: 'Pick a service', text: 'Choose your salon and style.' },
  { title: 'Get your token', text: 'See the live queue, max 3 waiting.' },
  { title: 'Walk in on time', text: 'Your crew member confirms and starts.' },
]

export const ownerCards = [
  { title: 'Know every customer', text: 'All customer details in one place.', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>' },
  { title: 'You control your team', text: 'Full employee control and tracking.', icon: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>' },
  { title: 'Daily + monthly payments', text: 'Payment updates every day and month.', icon: '<circle cx="12" cy="12" r="9"/><path d="M8.5 8h7M8.5 11.5h7M10 8c3 0 4 2 0 4l4 4"/>' },
  { title: 'No customer return', text: 'Service done right. No unhappy comebacks.', icon: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>' },
  { title: 'Free Google shop listing', text: 'Free Google shop registration.', icon: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>' },
]

export const crewCards = [
  { title: 'Grow yourself', text: 'Self growth path, 11 months.', icon: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>' },
  { title: 'Earn incentives', text: 'Incentive chances, daily and weekly.', icon: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>' },
  { title: 'Best price for all', text: 'Best price for every customer.', icon: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>' },
  { title: 'Work every time', text: 'Steady work, always.', icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
  { title: 'Family is secure', text: 'Secure family support.', icon: '<path d="M12 20s-8-5-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z"/>' },
]

export const pricingModels = [
  { no: '01', title: 'Subscription', text: 'Fixed fee to run your shop on NonG, billed monthly.', price: '₹849 / shop / month' },
  { no: '02', title: 'Per customer', text: 'Small charge only when a customer is served through the app.', price: '₹10 / customer' },
]

export const plans = [
  { k: 'PLAN A', name: 'Starter', price: 849, for: 'For single-chair shops getting started.', cta: 'Choose Starter', btn: 'dark',
    features: ['Customer details in one place', 'Crew management tools', 'Daily payment updates', 'Free Google shop listing'] },
  { k: 'PLAN B', name: 'Growth', price: 1499, for: 'For growing shops with a small team.', cta: 'Choose Growth', btn: '', popular: true,
    features: ['Everything in Starter', 'Crew management tools', 'Employee control & tracking', 'Daily + monthly reports'] },
  { k: 'PLAN C', name: 'Pro', price: 2999, for: 'For multi-branch and premium salons.', cta: 'Choose Pro', btn: 'dark',
    features: ['Everything in Growth', 'Unlimited crew members', 'Multi-branch dashboard', 'Priority support'] },
]

export const contact = {
  phoneHref: 'tel:+917410163036',
  phone: '+91 74101 63036',
  emailHref: 'mailto:thenong.support@gmail.com',
  email: 'thenong.support@gmail.com',
  webHref: 'https://www.thenong.in',
  web: 'www.thenong.in',
}
