import React from 'react';
import headerLogo from "./../assets/header-logo-full.svg"
import designFoundations from "./../assets/design-foundations.svg"
import uiComponent from "./../assets/ui-components.svg"
import iconLibrary from "./../assets/icon-library.svg"
import brandNew from "./../assets/brand-new.svg"
import inclusive from "./../assets/inclusive.svg"
import footerLogo from "./../assets/avaya-logo-footer.svg" 
import './../styles/HomePage.css';

function HomePage() {
  return (
  <div>
    <nav className="Navbar">
      <a className="NavbarBar" title="Neo Design System" href="https://design.avaya.com/">
        <img alt="fix" alt="fix" src={headerLogo} alt="header-logo" className="header-logo"/>
      </a>
      <ul className="Navlist">
        <a className="Navlistitem new" target="_blank" rel="noreferrer" rel="noreferrer" href="https://design.avaya.com/whats-new/">What's New</a>
        <a className="Navlistitem guide">Guidelines</a>
        <a className="Navlistitem components">Components</a>
        <a className="Navlistitem faqs" target="_blank" rel="noreferrer" rel="noreferrer" href="https://design.avaya.com/faq/">FAQs</a>
      </ul>
    </nav>

    <section className="Landing-content">
      <section className="title">
        <h1>Introducing Neo</h1>
        <h2>Avaya's Design System</h2>
        <p className="title-text">Neo is a library of flexible design components and guidelsnes, built upon our core principles and ready to be integrated into your digital products.</p>
        
        <form><button className="btn-getting-started" formAction="https://design.avaya.com/components/web/setup-web" >Getting Started →</button></form>
        
        <section className="Floating-island">
          <section className="libraries">
            <section className="library design-foundations">
              <section className="icon-wrapper">
                <img alt="fix" className="library-icon" src={designFoundations}/>
              </section>
              <h4>Design Foundations</h4> 
              <p className="text">A UX Design System that helps developers build consistent and exceptional user experiences.</p>
            </section>

            <section className="library ui-component">
              <section className="icon-wrapper">
                <img alt="fix" className="library-icon" src={uiComponent}/>
              </section>
              <h4>UI Component Libraries</h4>
              <p className="text">Code components for all of the common elements you use in your apps.</p>
            </section>

            <section className="library icon-library">
              <section className="icon-wrapper">
                <img alt="fix" className="library-icon" src={iconLibrary}/>
              </section>
              <h4>Icon Library</h4>
              <p className="text">An extensive collection of icons for nearly every occasion.</p>
            </section>  

          </section>
        </section>
      </section>
    </section>

    <section className="brand-new">
      <section className="brand-new-description">
        <section className="brand-new-title-text">
          <h2 className="brand-new-title">Brand. New.</h2>
          <p>Centralized guidelines creating a uniform experience, regardless of the application.</p>
        </section>
        <button className="brand-new-button">Component Libraries</button>
      </section>
      <img alt="fix" className="brand-new-image" src={brandNew}/>
    </section>
    
    <section className="inclusive">
      <img alt="fix" className="inclusive-image" src={inclusive}/>
      <section className="inclusive-description">
        <section className="inclusive-title-text">
          <h2 className="inclusive-title">Inclusive Design.</h2>
          <p>Building innovative frameworks that reach the widest possible audience, regardless of culture, background or physical ability. We explore possibility to find the source of great experience and success for everyone.
          </p>
        </section>
        <section className="inclusive-button">
          <form><button className="accessibility" formAction="https://design.avaya.com/guidelines/accessibility-principles" >Accessibility Guidelines</button></form>
          <form><button className="internationalization" formAction="https://design.avaya.com/guidelines/text">Internationalization Guidelines</button></form>
        </section>
      </section>
    </section>

    <footer>
      <img alt="fix" src={footerLogo} alt="footer-logo" className="footer-logo"/>
      <ul className="footer-list">
        <a className="footer-list-item terms" target="_blank" rel="noreferrer" href="https://www.avaya.com/en/termsofuse/">Terms of Use</a>
        <a className="footer-list-item license" target="_blank" rel="noreferrer" href="https://design.avayacloud.com/license/">License</a>
        <a className="footer-list-item privacy" target="_blank" rel="noreferrer" href="https://www.avaya.com/en/privacy/commitment/">Privacy</a>
        <a className="footer-list-item trademarks" target="_blank" rel="noreferrer" href="https://www.avaya.com/en/trademarks/">Trademarks</a>
        <a className="footer-list-item accessibility" target="_blank" rel="noreferrer" href="https://www.avaya.com/en/accessibility/">Accessibility</a>
        <a className="footer-list-item careers" target="_blank" rel="noreferrer" href="https://careers.avaya.com/">Careers</a>
        <a className="footer-list-item newsletter" target="_blank" rel="noreferrer" href="https://design.avaya.com/subscribe/">Newsletter</a>
      </ul>
      <p className="footer-copyright">© 2022 Avaya, Inc.</p>
    </footer>
  </div>
  )
}

export default HomePage;
