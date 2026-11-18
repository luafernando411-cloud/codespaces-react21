import { useState } from 'react';
import './App.css';

const whatsappUrl =
  'https://wa.me/5581997357533?text=' +
  encodeURIComponent('Oi! 💖 Eu aceito o convite! Vamos combinar?');

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="invitation-page">
      <div className="petal-rain" aria-hidden="true">
        <span className="falling-petal petal-a" />
        <span className="falling-petal petal-b" />
        <span className="falling-petal petal-c" />
        <span className="falling-petal petal-d" />
        <span className="falling-petal petal-e" />
        <span className="falling-petal petal-f" />
        <span className="falling-petal petal-g" />
        <span className="falling-petal petal-h" />
      </div>
      <div className="sparkle-field" aria-hidden="true">
        <span className="sparkle sparkle-one">✦</span>
        <span className="sparkle sparkle-two">✧</span>
        <span className="sparkle sparkle-three">✧</span>
        <span className="sparkle sparkle-four">✦</span>
        <span className="sparkle sparkle-five">✧</span>
        <span className="sparkle sparkle-six">✦</span>
        <span className="sparkle sparkle-seven">✧</span>
        <span className="sparkle sparkle-eight">✦</span>
        <span className="sparkle sparkle-nine">✧</span>
      </div>
      <div className="petal petal-one" aria-hidden="true">🌹</div>
      <div className="petal petal-two" aria-hidden="true">🌸</div>
      <div className="petal petal-three" aria-hidden="true">🌹</div>
      <div className="petal petal-four" aria-hidden="true">🌷</div>

      <div className={`invitation-stage${isOpen ? ' is-open' : ''}`}>
        <button
          className="envelope-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
          disabled={isOpen}
          aria-label="Abrir o convite especial para Silvia"
        >
          <span className="envelope-art" aria-hidden="true">
            <span className="envelope-letter">
              <span>Para Silvia</span>
              <span className="letter-heart">♥</span>
            </span>
            <span className="envelope-pocket" />
            <span className="envelope-flap" />
            <span className="envelope-seal">♥</span>
          </span>
          <span className="open-cue">Toque para abrir <span aria-hidden="true">♡</span></span>
          <span className="open-hint">Um convite especial espera por você</span>
        </button>

        <article className="invitation-card" aria-hidden={!isOpen}>
          <div className="card-rose" aria-hidden="true">🌹</div>
          <p className="eyebrow">um convite feito com carinho</p>
          <h1>
            Silvia,
            <span>posso te fazer um convite?</span>
          </h1>
          <div className="heart-divider" aria-hidden="true">
            <span>♥</span>
          </div>
          <p className="message">
            Você tem um jeito especial de deixar tudo mais bonito.
            <br />
            Que tal a gente viver um momento só nosso?
          </p>
          <a
            className="accept-button"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="button-rose" aria-hidden="true">🌹</span>
            Sim, eu aceito!
            <span className="button-heart" aria-hidden="true">♥</span>
            <span className="button-sparkle button-sparkle-one" aria-hidden="true">✦</span>
            <span className="button-sparkle button-sparkle-two" aria-hidden="true">✧</span>
          </a>
          <p className="signature">
            Vou adorar combinar com você <span aria-hidden="true">♡</span>
          </p>
        </article>
      </div>
    </main>
  );
}

export default App;
