"use client";

import { useState } from "react";
import Image from "next/image";
import { Arrow, Mark } from "./icons";
import projectsData from "../projects.json";

const spec = "https://github.com/pontmore/protocol/blob/main/";
const stages = [
  {
    title: "Find a participant",
    short: "Discover",
    body: "Alice wants Bitcoin. Her app finds Bob’s published swap capability and checks the compatibility and expiry of the escrow descriptor.",
    label: "A SHARED STARTING POINT",
    state: "Capabilities discovered",
    events: ["PIP-00 · capability index", "PIP-01 · escrow descriptor"],
    note: "Discovery proves who published a record. It is not a guarantee of trust or availability.",
  },
  {
    title: "Agree on the terms",
    short: "Agree",
    body: "Alice and Bob agree on the amounts, roles, deadlines, and escrow. One proposes a signed root; the other signs an acceptance of those exact terms.",
    label: "SAME TERMS. BOTH SIGNATURES.",
    state: "Agreement accepted",
    events: [
      "root · pinned terms & participants",
      "core/accept · counterparty",
    ],
    note: "The root binds the exact profile and escrow descriptor revision used for this agreement.",
  },
  {
    title: "Secure the Bitcoin",
    short: "Secure",
    body: "Bob provides the Bitcoin through the selected escrow service. The escrow signs a security confirmation before the fiat payment stage begins.",
    label: "SECURITY BEFORE PAYMENT",
    state: "Bitcoin secured",
    events: ["core/secure · escrow"],
    note: "The selected escrow’s mechanism and service rules determine how funds are held and released.",
  },
  {
    title: "Confirm the payment",
    short: "Confirm",
    body: "Alice pays Bob using their agreed fiat payment method. Alice signs that payment was sent, then Bob signs that it was received. Payment details remain private.",
    label: "TWO PARTIES. A SHARED RECORD.",
    state: "Fiat receipt confirmed",
    events: ["swap/fiat_sent · Alice", "swap/fiat_confirmed · Bob"],
    note: "The public chain carries a safe payment reference, not bank details or receipts.",
  },
  {
    title: "Complete the agreement",
    short: "Settle",
    body: "Bob authorizes settlement and the escrow records it. Compatible clients can validate the linked, signed history and reconstruct the same outcome.",
    label: "ONE HISTORY. A VERIFIABLE OUTCOME.",
    state: "Bitcoin settled to Alice",
    events: ["core/authorize_settlement · Bob", "core/settle · escrow"],
    note: "Clients check signatures, authority, and predecessor links. Relay arrival order is not the order of events.",
  },
];
const disputeStages = [
  ...stages.slice(0, 3),
  {
    title: "Raise a dispute",
    short: "Dispute",
    body: "Alice reports a payment, but Bob cannot confirm it. A participant opens a dispute. Normal settlement pauses while the bound resolver evaluates private evidence.",
    label: "A DEFINED PATH WHEN THINGS GO WRONG",
    state: "Dispute opened",
    events: ["swap/fiat_sent · Alice", "core/open_dispute · participant"],
    note: "Evidence evaluation belongs to the resolver and service policy. Private evidence stays off the public chain.",
  },
  {
    title: "Record the resolution",
    short: "Resolve",
    body: "In this example, the resolver authorizes a refund. The escrow records the refund to Bob, the Bitcoin provider. The chain preserves the resolution and its outcome.",
    label: "EXPLICIT AUTHORITY. RECORDED OUTCOME.",
    state: "Bitcoin refunded to Bob",
    events: ["core/resolve_dispute · resolver", "core/refund · escrow"],
    note: "An illustrative refund outcome. A real resolution depends on the agreed rules and evidence.",
  },
];

export function Walkthrough() {
  const [step, setStep] = useState(0);
  const [disputed, setDisputed] = useState(false);
  const [view, setView] = useState<"story" | "events">("story");
  const flow = disputed ? disputeStages : stages;
  const current = flow[step];
  function move(delta: number) {
    setStep((s) => Math.max(0, Math.min(4, s + delta)));
  }
  return (
    <section
      className="walkthrough"
      id="how-it-works"
      aria-labelledby="walkthrough-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="status-dot" /> FOLLOW THE CONNECTION
            </div>
            <h2 id="walkthrough-title">
              One agreement.
              <br />
              <span>Let’s walk it through.</span>
            </h2>
          </div>
          <div className="walkthrough-intro">
            <p>
              Alice wants to buy Bitcoin from Bob.
              <br />
              Here’s how their apps could coordinate.
            </p>
            <span className="demo-label">
              ILLUSTRATIVE SWAP · EXPERIMENTAL PROFILE
            </span>
          </div>
        </div>
        <div className="walkthrough-layout">
          <div className="step-list" aria-label="Walkthrough steps">
            {flow.map((stage, i) => (
              <button
                key={i}
                className={`step-button ${i === step ? "is-active" : ""} ${i < step ? "is-complete" : ""}`}
                aria-current={i === step ? "step" : undefined}
                onClick={() => setStep(i)}
              >
                <span className="step-number">
                  {i < step ? "✓" : `0${i + 1}`}
                </span>
                <span>{stage.title}</span>
                <Arrow />
              </button>
            ))}
            <div className="scenario-control">
              <span>WHAT IF SOMETHING GOES WRONG?</span>
              <button
                className="scenario-toggle"
                aria-pressed={disputed}
                onClick={() => {
                  setDisputed(!disputed);
                  setStep(3);
                }}
              >
                <span className={`toggle-track ${disputed ? "checked" : ""}`}>
                  <span />
                </span>
                Explore a dispute <span>↗</span>
              </button>
            </div>
          </div>
          <div
            className="demo-panel"
            tabIndex={0}
            aria-label="Interactive swap walkthrough. Use left and right arrows to change steps."
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                move(e.key === "ArrowRight" ? 1 : -1);
              }
            }}
          >
            <div className="demo-toolbar">
              <span>
                <span className="status-dot" /> A BITCOIN SWAP
              </span>
              <div className="view-toggle" aria-label="Walkthrough view">
                <button
                  aria-pressed={view === "story"}
                  onClick={() => setView("story")}
                >
                  The story
                </button>
                <button
                  aria-pressed={view === "events"}
                  onClick={() => setView("events")}
                >
                  Under the hood
                </button>
              </div>
            </div>
            {view === "story" ? (
              <div
                className="story-visual"
                data-step={step}
                data-disputed={disputed}
              >
                <div className="diagram-top-label">{current.label}</div>
                <div className="participant alice">
                  <div className="participant-icon">
                    A<span>↗</span>
                  </div>
                  <strong>Alice</strong>
                  <span>Buys Bitcoin</span>
                </div>
                <div className="participant bob">
                  <div className="participant-icon">
                    B<span>↗</span>
                  </div>
                  <strong>Bob</strong>
                  <span>Provides Bitcoin</span>
                </div>
                <svg
                  className="diagram-paths"
                  viewBox="0 0 600 250"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M120 68H480"
                    stroke="currentColor"
                    strokeDasharray="4 6"
                  />
                  <path
                    d="M120 75v75q0 20 20 20h320q20 0 20-20V75"
                    stroke="currentColor"
                  />
                  <path
                    className="path-progress"
                    d={
                      step < 2
                        ? "M120 68H480"
                        : "M120 75v75q0 20 20 20h320q20 0 20-20V75"
                    }
                    stroke={disputed && step > 2 ? "#dca475" : "#bdd28e"}
                    strokeWidth="2"
                    strokeDasharray="5 8"
                  />
                </svg>
                <div className="exchange-token" key={`${disputed}-${step}`}>
                  {step === 0 ? (
                    <>
                      <span>⌕</span>Discover
                    </>
                  ) : step === 1 ? (
                    <>
                      <span>✓</span>Agreed terms
                    </>
                  ) : step === 2 ? (
                    <>
                      <span>₿</span>Secured
                    </>
                  ) : step === 3 ? (
                    <>
                      <span>{disputed ? "!" : "✓"}</span>
                      {disputed ? "Disputed" : "Payment confirmed"}
                    </>
                  ) : (
                    <>
                      <span>₿</span>
                      {disputed ? "Refunded to Bob" : "Settled to Alice"}
                    </>
                  )}
                </div>
                <div className={`escrow-node ${step >= 2 ? "active" : ""}`}>
                  <span>{disputed && step >= 3 ? "◇" : "⌑"}</span>
                  <div>
                    <strong>
                      {disputed && step === 3 ? "Resolver" : "Escrow"}
                    </strong>
                    <small>
                      {step < 2
                        ? "Selected in the terms"
                        : disputed && step === 3
                          ? "Reviews private evidence"
                          : step === 2
                            ? "Security confirmed"
                            : step === 4
                              ? "Outcome recorded"
                              : "Follows agreed rules"}
                    </small>
                  </div>
                  {step >= 2 && <span className="node-check">✓</span>}
                </div>
                <div className="diagram-footnote">
                  <Mark /> Signed by the participant responsible for each action
                </div>
              </div>
            ) : (
              <div className="event-view">
                <div className="event-heading">
                  <span>PUBLIC RECORD / SIMPLIFIED EVENT LABELS</span>
                  <span>↳ linked history</span>
                </div>
                {flow.slice(0, step + 1).map((stage, i) => (
                  <div
                    className={`event-group ${i === step ? "latest" : ""}`}
                    key={i}
                  >
                    <span className="event-index">0{i + 1}</span>
                    <div>
                      {stage.events.map((event) => (
                        <code key={event}>{event}</code>
                      ))}
                    </div>
                    <span className="event-check">✓</span>
                  </div>
                ))}
                <p>
                  Labels explain the sequence; these are not real signed events
                  or a conformance validator.
                </p>
              </div>
            )}
            <div
              className="demo-explanation"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="demo-state">
                <span className="status-dot" />
                {current.state}
              </span>
              <p>{current.body}</p>
            </div>
            <div className="demo-controls">
              <span>
                0{step + 1} <span>/ 05</span>
              </span>
              <div className="progress-dots" aria-hidden="true">
                {flow.map((_, i) => (
                  <span key={i} className={i <= step ? "filled" : ""} />
                ))}
              </div>
              <div>
                <button
                  aria-label="Previous step"
                  disabled={step === 0}
                  onClick={() => move(-1)}
                >
                  ←
                </button>
                <button
                  className="next-step"
                  onClick={() => (step === 4 ? setStep(0) : move(1))}
                >
                  {step === 4 ? "Replay" : "Next"}
                  <span>{step === 4 ? "↺" : "→"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="walkthrough-bottom">
          <span>PUBLIC FACTS. PRIVATE DETAILS.</span>
          <p>{current.note}</p>
          <a href={`${spec}profiles/swap-v1.md`}>
            Read the swap profile <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}

const blocks = [
  {
    id: "PIP-00",
    name: "Discover",
    subtitle: "Find out who can do what.",
    description:
      "Participants publish the capabilities they support from their Nostr identity. Compatible apps can discover those capabilities and the protocol resources needed to use them.",
    example: "“I support this version of a swap capability.”",
    kind: "30360",
    type: "Capability index",
    file: "PIP-00-agent-definition.md",
    concept: "IDENTITY → CAPABILITIES",
    fields: ["Nostr public key", "Versioned capability", "Resource references"],
  },
  {
    id: "PIP-01",
    name: "Check compatibility",
    subtitle: "Understand the escrow before you agree.",
    description:
      "An expiring descriptor tells an app the escrow mechanism, supported networks, and an optional service schema. An agreement binds the exact descriptor revision it accepts.",
    example: "“This escrow supports the network we want to use.”",
    kind: "30361",
    type: "Escrow descriptor",
    file: "PIP-01-escrow-descriptor.md",
    concept: "DESCRIPTOR → COMPATIBILITY",
    fields: [
      "Escrow mechanism",
      "Supported networks",
      "Expiry & service schema",
    ],
  },
  {
    id: "PIP-02",
    name: "Coordinate",
    subtitle: "Keep a history you can verify.",
    description:
      "An immutable root records an agreement. Signed actions link back to earlier events, letting compatible clients check authority and reconstruct its progress and outcome. Application profiles define the domain-specific rules.",
    example: "“We agreed. These actions followed. Here is the outcome.”",
    kind: "7300 / 7301",
    type: "Root / linked actions",
    file: "PIP-02-coordination-event-chains.md",
    concept: "AGREEMENT → SIGNED ACTIONS → OUTCOME",
    fields: [
      "Participants & terms",
      "Linked signed actions",
      "Authority & outcomes",
    ],
  },
];

export function ProtocolExplorer() {
  const [active, setActive] = useState(0);
  const block = blocks[active];
  return (
    <div className="protocol-explorer">
      <div
        className="protocol-tabs"
        role="tablist"
        aria-label="Protocol building blocks"
      >
        {blocks.map((item, i) => (
          <button
            id={`pip-tab-${i}`}
            key={item.id}
            role="tab"
            aria-selected={active === i}
            aria-controls="pip-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 2
                      : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                setActive(next);
                document.getElementById(`pip-tab-${next}`)?.focus();
              }
            }}
          >
            <span>
              {item.id}
              {i === 2 && <small>EXPERIMENTAL</small>}
            </span>
            <strong>{item.name}</strong>
            <Arrow diagonal />
          </button>
        ))}
      </div>
      <div
        className="protocol-content"
        id="pip-panel"
        role="tabpanel"
        aria-labelledby={`pip-tab-${active}`}
        tabIndex={0}
      >
        <div className="protocol-description">
          <h3>{block.subtitle}</h3>
          <p>{block.description}</p>
          <a className="text-link" href={`${spec}${block.file}`}>
            Read {block.id} <Arrow diagonal />
          </a>
        </div>
        <div className="protocol-diagram">
          <div className="eyebrow">{block.concept}</div>
          <div className="schema-fields">
            {block.fields.map((field, i) => (
              <div key={field}>
                <span>0{i + 1}</span>
                {field}
                <span>↗</span>
              </div>
            ))}
          </div>
          <div className="schema-kind">
            <code>{block.kind}</code>
            <span>{block.type}</span>
          </div>
        </div>
      </div>
      <div className="profile-note">
        <span>+ PROFILES</span>
        <p>
          Shared building blocks. Application-specific rules.
          <br />
          <span>
            The first experimental profile, <code>pontmore/swap@1</code>,
            defines fiat/Bitcoin swaps.
          </span>
        </p>
        <a
          href={`${spec}profiles/swap-v1.md`}
          aria-label="Read the experimental swap profile"
        >
          <Arrow diagonal />
        </a>
      </div>
    </div>
  );
}

const projectMeta: Record<
  string,
  { category: string; icon: string; description?: string }
> = {
  "Pontmore Next.js POC": {
    category: "Developer tools",
    icon: "⌘",
    description:
      "A reference interface for publishing and discovering Pontmore records on Nostr.",
  },
  Minmo: {
    category: "Apps",
    icon: "m",
    description:
      "Exploring an open, Nostr-native network for Bitcoin access and agent coordination.",
  },
  Rollpot: {
    category: "Apps",
    icon: "⚄",
    description:
      "A two-player dice wager experiment using a standalone escrow.",
  },
  "Pontmore Escrow Client": {
    category: "Developer tools",
    icon: "◇",
    description:
      "A proof of concept for interacting with a standalone escrow descriptor.",
  },
  Pontpay: {
    category: "Apps",
    icon: "↗",
    description:
      "A proof of concept exploring participant discovery, escrow, and swap events.",
  },
  "Escrow validator": {
    category: "Developer tools",
    icon: "✓",
    description:
      "A developer tool for checking escrow descriptors against PIP-01.",
  },
};

export function ProjectDirectory() {
  const [category, setCategory] = useState("All projects");
  const projects = projectsData.projects.filter(
    (p) =>
      category === "All projects" || projectMeta[p.name]?.category === category,
  );
  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {["All projects", "Apps", "Developer tools"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {item}
            {item === "All projects" && (
              <span>
                {projectsData.projects.length.toString().padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
        <span>INDEPENDENT PROJECTS · EARLY STAGE</span>
      </div>
      <div className="project-grid" aria-live="polite">
        {projects.map((project) => {
          const meta = projectMeta[project.name];
          return (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <span
                  className={`project-icon ${project.name === "Minmo" ? "project-icon-orange" : ""}`}
                >
                  {project.name === "Minmo" ? (
                    <Image
                      src="/minmo-logo.svg"
                      width={39}
                      height={39}
                      alt=""
                      className="project-logo"
                    />
                  ) : (
                    (meta?.icon ?? "↗")
                  )}
                </span>
                <span className="project-category">
                  {meta?.category ?? "Project"}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{meta?.description ?? project.description}</p>
              <div className="project-links">
                {Object.entries(project.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    aria-label={`${project.name}: ${type === "website" ? "visit website" : type}`}
                  >
                    {type === "website"
                      ? "Explore project"
                      : type === "github"
                        ? "GitHub"
                        : type === "nostr"
                          ? "Nostr"
                          : "X"}
                    <Arrow diagonal />
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <p className="ecosystem-note">
        A community directory, not a certification of protocol conformance or
        service safety.
      </p>
    </>
  );
}
