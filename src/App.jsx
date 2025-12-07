import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <h1 className="logo">NaminTax</h1>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h2>Professional VAT and Tax Consulting</h2>
              <p className="hero-subtitle">
                Expert guidance for your business taxation needs. We help you navigate 
                complex VAT regulations and optimize your tax strategy.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>VAT Consulting</h3>
                <p>Comprehensive VAT advisory services to ensure compliance and optimize your VAT position.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Tax Planning</h3>
                <p>Strategic tax planning to minimize liabilities and maximize opportunities for your business.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📝</div>
                <h3>Tax Returns</h3>
                <p>Accurate and timely preparation and filing of all tax returns and related documentation.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">⚖️</div>
                <h3>Compliance</h3>
                <p>Ensure your business stays compliant with all tax regulations and requirements.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <h2 className="section-title">About NaminTax</h2>
            <p className="about-text">
              NaminTax is a leading VAT and tax consulting service dedicated to helping businesses 
              navigate the complexities of taxation. With years of experience and a team of expert 
              advisors, we provide tailored solutions to meet your specific needs.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-text">
              Ready to optimize your tax strategy? Contact us today for a consultation.
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 NaminTax. All rights reserved. VAT and Tax Consulting Service.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
