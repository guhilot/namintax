import { useLanguage } from '../contexts/LanguageContext';

function About() {
    const { t, lang } = useLanguage();
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
            <h1>{t.aboutTitle}</h1>
            <p>{t.aboutDesc}</p>
            <h2>{t.aboutWhoWeAreTitle}</h2>
            <p>{t.aboutWhoWeAre}</p>
            <h2>{t.aboutMissionTitle}</h2>
            <p>{t.aboutMission}</p>
            <h2>{t.aboutCredentialsTitle}</h2>
            <ul>
                <li>{t.aboutCredential1}</li>
                <li>{t.aboutCredential2}</li>
                <li>{t.aboutCredential3}</li>
                <li>{t.aboutCredential4}</li>
            </ul>
            <h2>{t.aboutWhyTitle}</h2>
            <ul>
                <li>{t.aboutWhy1}</li>
                <li>{t.aboutWhy2}</li>
                <li>{t.aboutWhy3}</li>
                <li>{t.aboutWhy4}</li>
            </ul>
        </div>
    );
}

export default About;

//function About() {
//    return (
//        <div style={{
//            maxWidth: 600,
//            margin: '2rem auto',
//            padding: '2rem',
//            background: '#fff',
//            borderRadius: 8,
//            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
//        }}>
//            <h1>About Namin Tax Accounting</h1>
//            <p>
//                Namin Tax Accounting is dedicated to providing expert tax and accounting services for individuals, families, and businesses. With years of experience and a commitment to personalized service, we help our clients navigate complex tax regulations and maximize their financial well-being.
//            </p>
//            <h2>Our Mission</h2>
//            <p>
//                To deliver accurate, timely, and ethical tax solutions while building lasting relationships based on trust and integrity.
//            </p>
//            <h2>Credentials & Experience</h2>
//            <ul>
//                <li>Certified Accountant (ITAA: 53.460.538)</li>
//                <li>Registered VAT Number: BE1026.447.466</li>
//                <li>Over 15 years of experience in tax consulting and accounting</li>
//                <li>Specialized in Belgian and international tax law</li>
//            </ul>
//            <h2>Why Choose Us?</h2>
//            <ul>
//                <li>Personalized, one-on-one service</li>
//                <li>Transparent pricing and clear communication</li>
//                <li>Up-to-date knowledge of tax legislation</li>
//                <li>Confidentiality and professionalism guaranteed</li>
//            </ul>
//        </div>
//    );
//}

//export default About;
