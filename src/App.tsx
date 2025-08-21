import { useState } from 'react'
import './App.css'

type PlanId = 'basic' | 'pro' | 'ultimate'

const PLANS: { id: PlanId; name: string; price: string; desc: string }[] = [
  { id: 'basic', name: 'Basic', price: '$5/mo', desc: 'For personal use' },
  { id: 'pro', name: 'Pro', price: '$12/mo', desc: 'For power users' },
  { id: 'ultimate', name: 'Ultimate', price: '$25/mo', desc: 'For teams & pros' },
]

function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [accepted, setAccepted] = useState(false)
  const isValid = selectedPlan !== null && accepted

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isValid) return
    // In a real app, send data to API here
    alert(`Subscribed to: ${selectedPlan}`)
  }

  return (
    <main className="container">
      <form className="subscription-form" onSubmit={handleSubmit}>
        <h1 className="title">Choose your plan</h1>
        <fieldset className="plans" role="radiogroup" aria-label="Subscription plans">
          <legend className="sr-only">Subscription plans</legend>
          {PLANS.map((plan) => {
            const selected = selectedPlan === plan.id
            return (
              <div
                key={plan.id}
                role="radio"
                aria-checked={selected}
                tabIndex={0}
                className={`plan-card${selected ? ' selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedPlan(plan.id)
                  }
                }}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={selected}
                  onChange={() => setSelectedPlan(plan.id)}
                  className="sr-only"
                />
                <div className="plan-header">
                  <span className="plan-name">{plan.name}</span>
                  <span className="plan-price">{plan.price}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
              </div>
            )
          })}
        </fieldset>

        <label className="terms">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <span>I agree to the Terms and Privacy Policy</span>
        </label>

        <button type="submit" className="submit" disabled={!isValid}>
          Continue
        </button>
      </form>
    </main>
  )
}

export default App
