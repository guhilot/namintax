import { useState } from 'react';
import { Link } from 'react-router-dom';
import alogo from '../assets/alogo.mp4';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
    const { t, lang } = useLanguage();
    const [income, setIncome] = useState('');
    const [tax, setTax] = useState(null);

    // Simple flat tax rate for demonstration (e.g., 20%)
    const TAX_RATE = 0.2;

    const handleCalculate = (e) => {
        e.preventDefault();
        const incomeValue = parseFloat(income);
        if (!isNaN(incomeValue) && incomeValue >= 0) {
            setTax((incomeValue * TAX_RATE).toFixed(2));
        } else {
            setTax(null);
        }
    };

    // For Persian, align text right
    const rtl = lang === 'fa';

    return (
        <div
            className="home-container"
            style={{
                maxWidth: 500,
                margin: '2rem auto',
                padding: '2rem',
                background: '#fff',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                direction: rtl ? 'rtl' : 'ltr',
                textAlign: rtl ? 'right' : 'left'
            }}
        >
            <video
                src={alogo}
                autoPlay
                loop
                muted
                playsInline
                style={{ display: 'block', margin: '0 auto 1.5rem auto', maxWidth: 120, height: 'auto', borderRadius: 8 }}
            />
            <h1>{t.homeTitle}</h1>
            <p>{t.homeDesc}</p>

            <section style={{ margin: '2rem 0' }}>
                <h2>{t.quickTaxEstimate}</h2>
                <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label>
                        {t.enterIncome}
                        <input
                            type="number"
                            value={income}
                            onChange={e => setIncome(e.target.value)}
                            min="0"
                            step="0.01"
                            style={{ marginLeft: 8, padding: 4, width: 150 }}
                        />
                    </label>
                    <button type="submit" style={{ width: 120, padding: '0.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
                        {t.estimateTax}
                    </button>
                </form>
                {tax !== null && (
                    <div style={{ marginTop: '1rem', color: '#007bff' }}>
                        {t.estimatedTax}: <strong>${tax}</strong>
                    </div>
                )}
            </section>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <Link to="/services" style={{ color: '#007bff', textDecoration: 'underline' }}>{t.ourServices}</Link>
                <Link to="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>{t.contactUs}</Link>
            </div>
        </div>
    );
}

export default Home;


//import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import alogo from '../assets/alogo.mp4'; // Adjust the path if your video is elsewhere

//function Home() {
//    const [income, setIncome] = useState('');
//    const [tax, setTax] = useState(null);

//    // Simple flat tax rate for demonstration (e.g., 20%)
//    const TAX_RATE = 0.2;

//    const handleCalculate = (e) => {
//        e.preventDefault();
//        const incomeValue = parseFloat(income);
//        if (!isNaN(incomeValue) && incomeValue >= 0) {
//            setTax((incomeValue * TAX_RATE).toFixed(2));
//        } else {
//            setTax(null);
//        }
//    };

//    return (
//        <div className="home-container" style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
//            <video
//                src={alogo}
//                autoPlay
//                loop
//                muted
//                playsInline
//                style={{ display: 'block', margin: '0 auto 1.5rem auto', maxWidth: 120, height: 'auto', borderRadius: 8 }}
//            />
//            <h1>Welcome to Namin Tax Accounting</h1>
//            <p>
//                Professional tax services for individuals and businesses. Let us help you maximize your refund and minimize your stress!
//            </p>

//            <section style={{ margin: '2rem 0' }}>
//                <h2>Quick Tax Estimate</h2>
//                <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                    <label>
//                        Enter your annual income ($):
//                        <input
//                            type="number"
//                            value={income}
//                            onChange={e => setIncome(e.target.value)}
//                            min="0"
//                            step="0.01"
//                            style={{ marginLeft: 8, padding: 4, width: 150 }}
//                        />
//                    </label>
//                    <button type="submit" style={{ width: 120, padding: '0.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
//                        Estimate Tax
//                    </button>
//                </form>
//                {tax !== null && (
//                    <div style={{ marginTop: '1rem', color: '#007bff' }}>
//                        Estimated Tax: <strong>${tax}</strong>
//                    </div>
//                )}
//            </section>

//            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
//                <Link to="/services" style={{ color: '#007bff', textDecoration: 'underline' }}>Our Services</Link>
//                <Link to="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>Contact Us</Link>
//            </div>
//        </div>
//    );
//}

//export default Home;




//import { useState } from 'react';
//import { Link } from 'react-router-dom';

//function Home() {
//    const [income, setIncome] = useState('');
//    const [tax, setTax] = useState(null);

//    // Simple flat tax rate for demonstration (e.g., 20%)
//    const TAX_RATE = 0.2;

//    const handleCalculate = (e) => {
//        e.preventDefault();
//        const incomeValue = parseFloat(income);
//        if (!isNaN(incomeValue) && incomeValue >= 0) {
//            setTax((incomeValue * TAX_RATE).toFixed(2));
//        } else {
//            setTax(null);
//        }
//    };

//    return (
//        <div className="home-container" style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
//            <h1>Welcome to Namin Tax Accounting</h1>
//            <p>
//                Professional tax services for individuals and businesses. Let us help you maximize your refund and minimize your stress!
//            </p>

//            <section style={{ margin: '2rem 0' }}>
//                <h2>Quick Tax Estimate</h2>
//                <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//                    <label>
//                        Enter your annual income ($):
//                        <input
//                            type="number"
//                            value={income}
//                            onChange={e => setIncome(e.target.value)}
//                            min="0"
//                            step="0.01"
//                            style={{ marginLeft: 8, padding: 4, width: 150 }}
//                        />
//                    </label>
//                    <button type="submit" style={{ width: 120, padding: '0.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
//                        Estimate Tax
//                    </button>
//                </form>
//                {tax !== null && (
//                    <div style={{ marginTop: '1rem', color: '#007bff' }}>
//                        Estimated Tax: <strong>${tax}</strong>
//                    </div>
//                )}
//            </section>

//            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
//                <Link to="/services" style={{ color: '#007bff', textDecoration: 'underline' }}>Our Services</Link>
//                <Link to="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>Contact Us</Link>
//            </div>
//        </div>
//    );
//}

//export default Home;
