// The four steps are a true sequence, so numbering is justified here.
const steps = [
  {
    title: 'Brief',
    text: 'A short call or a written brief. We ask what the work is for and what success looks like.',
  },
  {
    title: 'Quote',
    text: 'A fixed price and a written scope. You know the total before anything starts.',
  },
  {
    title: 'Build',
    text: 'We work in short stages and show each one running before we move on.',
  },
  {
    title: 'Launch and support',
    text: 'We hand over with setup notes, then support the work for the period agreed in the quote.',
  },
];

const terms = [
  'A written, fixed-price quote before work starts.',
  'Payment in stages, tied to milestones you can check.',
  'You keep the code and accounts once the final invoice is paid.',
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2>How a project runs</h2>

        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step.title} className="process-step">
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="split terms">
          <h3>Our terms</h3>
          <ul className="term-list">
            {terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
