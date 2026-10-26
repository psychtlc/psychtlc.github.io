(() => {
  const includeUrl = document.currentScript.src;
  const siteRoot = new URL('../', includeUrl);
  const siteUrl = (path) => new URL(path, siteRoot).href;

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      const isBlogPage = document.body.classList.contains('blog-page');
      const useLightNav = isBlogPage ||
        document.body.classList.contains('consulting-page') ||
        document.body.classList.contains('legacy-page');
      const navClass = useLightNav ? ' class="scrolled"' : '';
      const blogUrl = siteUrl('blog/index.html');

      this.innerHTML = `
        <nav${navClass}>
          <a href="${blogUrl}" class="nav-logo">Tara's Playbooks</a>
          <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="navLinks">
            <span></span><span></span><span></span>
          </button>
          <div class="nav-links" id="navLinks">
            <a href="${siteUrl('index.html#about')}">About</a>
            <a href="${siteUrl('index.html#portfolio')}">Portfolio</a>
            <a href="${siteUrl('index.html#services')}">Services</a>
            <a href="${siteUrl('TaraGlover_Resume.pdf')}" download>Resume</a>
            <a href="${siteUrl('index.html#approach')}">Approach</a>
            <a href="${blogUrl}"${isBlogPage ? ' aria-current="page"' : ''}>Blog</a>
            <a href="${siteUrl('index.html#contact')}">Contact</a>
            <a href="https://calendly.com/taralouiseglover" target="_blank" rel="noreferrer" class="nav-cta">Book a Call</a>
          </div>
        </nav>
      `;
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="footer-about">
            <h2>About Tara.</h2>
            <p>IT program management and agile delivery leadership grounded in curiosity, clarity, and thoughtful execution.</p>
            <a href="https://www.linkedin.com/in/taralouiseglover/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </div>
          <div class="footer-column">
            <h3>Navigation</h3>
            <a href="${siteUrl('index.html#about')}">About</a>
            <a href="${siteUrl('index.html#portfolio')}">Portfolio</a>
            <a href="${siteUrl('index.html#services')}">Services</a>
            <a href="${siteUrl('TaraGlover_Resume.pdf')}" download>Resume</a>
            <a href="${siteUrl('index.html#approach')}">Approach</a>
            <a href="${siteUrl('blog/index.html')}">Blog</a>
            <a href="${siteUrl('index.html#contact')}">Contact</a>
          </div>
          <div class="footer-column">
            <h3>Services</h3>
            <a href="${siteUrl('consulting.html')}">Consulting &amp; Diagnostics</a>
            <a href="${siteUrl('fractional-leadership.html')}">Fractional Leadership</a>
            <a href="${siteUrl('workflow-design.html')}">Workflow Design &amp; Tool Setup</a>
            <a href="${siteUrl('pm-coaching.html')}">PM Coaching</a>
          </div>
          <div class="footer-column">
            <h3>Contact</h3>
            <a href="mailto:taralouiseglover@gmail.com">taralouiseglover@gmail.com</a>
            <a href="tel:240-498-0034">240-498-0034</a>
            <a href="https://calendly.com/taralouiseglover" target="_blank" rel="noreferrer">Book a conversation</a>
          </div>
          <p class="footer-note">© 2026 Tara Glover</p>
        </footer>
      `;
    }
  }

  customElements.define('site-header', SiteHeader);
  customElements.define('site-footer', SiteFooter);
})();
