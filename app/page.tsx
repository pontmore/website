import { Arrow, Github, Mark } from "./icons";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import {
  Walkthrough,
  ProtocolExplorer,
  ProjectDirectory,
} from "./protocol-interactives";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AN OPEN PROTOCOL FOR ECONOMIC
              COORDINATION
            </div>
            <h1>
              Coordinate.
              <br />
              On <span>open terms.</span>
            </h1>
            <p className="hero-description">
              Find each other. Agree on the rules. Move forward together.
              Pontmore gives people and apps a shared language to coordinate
              economic activity.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#how-it-works">
                See how it works <Arrow />
              </a>
              <a
                className="text-link"
                href="https://github.com/pontmore/protocol"
              >
                Read the protocol <Arrow diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-nostr">✳</span> Built on Nostr{" "}
              <span className="note-divider" /> Open by design
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Independent participants connected through a shared protocol"
            role="img"
          >
            <div className="art-grid" />
            <div className="art-label art-label-top">
              <span className="status-dot" /> INDEPENDENT PEOPLE. SHARED RULES.
            </div>
            <svg
              className="bridge-art"
              viewBox="0 0 520 460"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="arch-lines"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(30)"
                >
                  <path
                    d="M0 0v7"
                    stroke="#d96932"
                    strokeWidth="1"
                    opacity=".25"
                  />
                </pattern>
              </defs>
              <path
                className="art-connection"
                d="M45 320H475M125 130v230M400 85v265"
                stroke="#c6c9bf"
                strokeDasharray="3 6"
              />
              <path
                d="M90 344V199a128 128 0 0 1 256 0v145h-64V199a64 64 0 0 0-128 0v145Z"
                fill="#f7a078"
              />
              <path
                d="M90 344V199a128 128 0 0 1 256 0v145h-64V199a64 64 0 0 0-128 0v145Z"
                fill="url(#arch-lines)"
              />
              <path
                d="M190 344V247a128 128 0 0 1 256 0v97h-64v-97a64 64 0 0 0-128 0v97Z"
                fill="#476a50"
              />
              <path
                d="M190 247a128 128 0 0 1 256 0M190 259a128 128 0 0 1 256 0M190 271a128 128 0 0 1 256 0"
                stroke="#719076"
                opacity=".4"
              />
              <path d="M65 344h405" stroke="#2a3b2e" strokeWidth="1.5" />
              <circle
                cx="122"
                cy="344"
                r="9"
                fill="#f5f5ed"
                stroke="#cf6031"
                strokeWidth="2"
              />
              <circle
                cx="414"
                cy="344"
                r="9"
                fill="#f5f5ed"
                stroke="#476a50"
                strokeWidth="2"
              />
              <circle
                className="art-orbit"
                cx="344"
                cy="116"
                r="24"
                fill="#f6f6ef"
                stroke="#d9dace"
              />
              <path d="m335 116 6 6 12-13" stroke="#476a50" strokeWidth="2" />
              <circle cx="82" cy="115" r="4" fill="#d96b35" />
              <circle cx="452" cy="195" r="4" fill="#476a50" />
              <path d="M267 376v20m-10-10h20" stroke="#aeb4a6" />
            </svg>
            <div className="art-tag tag-person">
              <span className="avatar orange-avatar">A</span>
              <div>
                One identity<small>Your Nostr key</small>
              </div>
            </div>
            <div className="art-tag tag-app">
              <Mark />
              <div>
                Many possibilities<small>Independent applications</small>
              </div>
            </div>
            <div className="art-caption">
              <span>01 — CONNECT WITHOUT THE SILOS</span>
              <span>↗</span>
            </div>
          </div>
        </section>
        <div className="principle-strip">
          <div className="wrap">
            <span>
              A small protocol.
              <br />
              <strong>A bigger design space.</strong>
            </span>
            <span>
              <i>↗</i> Discover capabilities
            </span>
            <span>
              <i>⌘</i> Agree on terms
            </span>
            <span>
              <i>✓</i> Verify the history
            </span>
          </div>
        </div>
        <section className="intro wrap" aria-labelledby="intro-title">
          <div className="eyebrow">THE IDEA IS SIMPLE</div>
          <h2 id="intro-title">
            Different apps.
            <br />
            <span>The same understanding.</span>
          </h2>
          <div className="intro-copy">
            <p>
              When people use different apps, how do they agree on what happens
              next?
            </p>
            <p>
              Applications define what is exchanged and how it moves. Pontmore
              defines how participants discover capabilities, agree on terms,
              and reconstruct what happened.
            </p>
            <a className="text-link" href="#protocol">
              Meet the building blocks <Arrow />
            </a>
          </div>
        </section>
        <Walkthrough />
        <section className="protocol-section wrap" id="protocol">
          <div className="section-heading">
            <div>
              <div className="eyebrow">SMALL PIECES. SHARED UNDERSTANDING.</div>
              <h2>
                Three building blocks.
                <br />
                <span>Room to build your own.</span>
              </h2>
            </div>
            <p>
              Start with discovery. Add escrow and coordination when your
              application needs them.
            </p>
          </div>
          <ProtocolExplorer />
        </section>
        <section className="identity-section wrap">
          <div className="identity-art" aria-hidden="true">
            <div className="identity-key">
              ✳<span>your key</span>
            </div>
            <div className="identity-line" />
            <div className="identity-apps">
              <span>App A</span>
              <span>App B</span>
              <span>
                Your next app <Arrow diagonal />
              </span>
            </div>
            <span className="identity-caption">
              ONE IDENTITY. INDEPENDENT APPLICATIONS.
            </span>
          </div>
          <div>
            <div className="eyebrow">YOUR KEY IS THE STARTING POINT</div>
            <h2>
              An identity that
              <br />
              starts with <span>you.</span>
            </h2>
            <p>
              Pontmore uses a Nostr public key to identify a participant. An app
              can provide the interface, without becoming the source of your
              identity.
            </p>
            <p className="small-copy">
              Here, an “Agent” means a protocol participant. It can represent a
              person or a service; it doesn’t have to be AI.
            </p>
          </div>
        </section>
        <section className="projects-section wrap" id="projects">
          <div className="section-heading">
            <div>
              <div className="eyebrow">THE ECOSYSTEM</div>
              <h2>
                Open ground.
                <br />
                <span>Early explorations.</span>
              </h2>
            </div>
            <p>
              Meet the projects exploring Pontmore.
              <br />
              Independent ideas, a shared foundation.
            </p>
          </div>
          <ProjectDirectory />
          <a
            className="text-link project-contribute"
            href="https://github.com/pontmore/website/blob/main/projects.json"
          >
            Building something? Add your project <Arrow diagonal />
          </a>
        </section>
        <section className="faq-section wrap">
          <div>
            <div className="eyebrow">A FEW GOOD QUESTIONS</div>
            <h2>
              A little more
              <br />
              <span>clarity.</span>
            </h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                Is Pontmore a wallet or an exchange?<span>+</span>
              </summary>
              <p>
                Pontmore is a set of open specifications. Independent apps can
                use it for discovery, escrow compatibility, and a shared record
                of economic coordination. Wallets, trading interfaces, and
                payment execution belong to those apps and services.
              </p>
            </details>
            <details>
              <summary>
                Does Pontmore hold my money?<span>+</span>
              </summary>
              <p>
                The protocol itself holds no funds. The escrow mechanism and
                service you select determine custody and funding rules. A signed
                discovery record proves who published it; it does not prove that
                a service is trustworthy or solvent.
              </p>
            </details>
            <details>
              <summary>
                What becomes public?<span>+</span>
              </summary>
              <p>
                The signed protocol events carry the facts needed to reconstruct
                a coordination. Payment instructions, account details, receipts,
                and private evidence stay off the public event chain. Events can
                reference private material through commitments or opaque
                identifiers.
              </p>
            </details>
            <details>
              <summary>
                How early is the protocol?<span>+</span>
              </summary>
              <p>
                Pontmore is an evolving draft. The PIP-02 coordination kernel
                and the first swap profile are experimental. The project does
                not yet claim interoperability for that profile; shared test
                vectors and independent implementations are still needed.
              </p>
            </details>
            <details>
              <summary>
                Do I need to implement everything?<span>+</span>
              </summary>
              <p>
                No. Choose a conformance profile: Discovery uses PIP-00; Escrow
                Discovery adds PIP-01; Swap Coordination adds PIP-02 and the
                experimental pontmore/swap@1 profile. Declare the exact profiles
                and versions your app supports.
              </p>
            </details>
          </div>
        </section>
        <section className="build-section">
          <div className="wrap build-inner">
            <div className="eyebrow">
              <span className="status-dot" /> OPEN SPECIFICATION. OPEN
              INVITATION.
            </div>
            <h2>
              The next connection
              <br />
              is yours to build<span>.</span>
            </h2>
            <p>Read the rules. Explore the code. Help shape what comes next.</p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="https://github.com/pontmore/protocol"
              >
                <Github /> Explore the specification <Arrow diagonal />
              </a>
              <a className="text-link" href="https://poc.pontmore.xyz">
                Try the discovery POC <Arrow diagonal />
              </a>
            </div>
            <span className="build-note">
              Draft protocol · PIP-02 & swap profile experimental
            </span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
