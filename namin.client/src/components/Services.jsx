import { useLanguage } from '../contexts/LanguageContext';

function Services() {
    const { t, lang } = useLanguage();

    // For Persian, align text right
    const rtl = lang === 'fa';

    return (
        <div style={{
            maxWidth: 500,
            margin: '2rem auto',
            padding: '2rem',
            background: '#fff',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            direction: rtl ? 'rtl' : 'ltr',
            textAlign: rtl ? 'right' : 'left'
        }}>
            <h1>{t.servicesTitle}</h1>
            <p>{t.servicesDesc}</p>
            <ul>
                <li>{t.taxPrep}</li>
                <li>{t.consulting}</li>
                <li>{t.bookkeeping}</li>
                <li>{t.payroll}</li>
                <li>{t.more}</li>
            </ul>
        </div>
    );
}

export default Services;
