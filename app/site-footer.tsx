import { Arrow, Mark } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <a className="wordmark" href="#top">
            <Mark />
            pontmore.
          </a>
          <p>Shared rules. Independent possibilities.</p>
          <a href="https://github.com/pontmore/protocol">
            GitHub <Arrow diagonal />
          </a>
          <a href="https://x.com/pontmorexyz">
            Follow along <Arrow diagonal />
          </a>
        </div>
        <div className="footer-word" aria-hidden="true">
          pontmore<span>.</span>
        </div>
        <div className="footer-bottom">
          <span>An open protocol. Built on Nostr.</span>
          <span>Made for an open, connected economy.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
