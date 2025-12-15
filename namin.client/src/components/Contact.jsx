import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';

function Contact() {
    const { t, lang } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    if (!form.name || !form.phone || !form.message) {
    //        setError(t.allFieldsRequired);
    //        return;
    //    }
    //    setError('');
    //    setSubmitted(true);
    //    // Here you would typically send the form data to your backend

    //    setTimeout(() => {
    //        setShowModal(false);
    //        setSubmitted(false);
    //        setForm({ name: '', phone: '', message: '' });
    //    }, 1500);
    //};

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.message) {
            setError(t.allFieldsRequired);
            return;
        }
        console.log(form)
        setError('');
        setSubmitted(true);

        try {
            await axios.post('/namintax/contact', {
                name: form.name,
                phone: form.phone,
                message: form.message
            });

            setShowModal(false);
            setSubmitted(false);
            setForm({ name: '', phone: '', message: '' });
        } catch (err) {
            setError('Failed to send message.');
            setSubmitted(false);
        }
    };



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
            <h1>{t.contactTitle}</h1>
            <section style={{ marginBottom: '2rem' }}>
                <h2>{t.accountantDetails}</h2>
                <p><strong>{t.nameLabel}:</strong> Cyrus Parastar Namin</p>
                <p><strong>{t.emailLabel}:</strong> info@namintax.com</p>
                <p><strong>{t.phoneLabel}:</strong> +32 487 413 312</p>
                <p><strong>{t.officeLabel}:</strong> 23 Av Auguste Jassogne, 1410 Waterloo</p>
                <p><strong>{t.vatLabel}:</strong> BE1026.447.466</p>
                <p><strong>{t.itaaLabel}:</strong> 53.460.538</p>
            </section>
            <button
                onClick={() => setShowModal(true)}
                style={{ padding: '0.5rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontSize: '1rem' }}
            >
                {t.contactUsBtn}
            </button>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <div style={{
                        background: '#fff',
                        padding: '2rem',
                        borderRadius: 8,
                        minWidth: 320,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        position: 'relative'
                    }}>
                        <button
                            onClick={() => { setShowModal(false); setError(''); setSubmitted(false); }}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                background: 'transparent',
                                border: 'none',
                                fontSize: 20,
                                cursor: 'pointer'
                            }}
                            aria-label="Close"
                        >&times;</button>
                        <h2>{t.sendMessageTitle}</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder={t.yourName}
                                value={form.name}
                                onChange={handleChange}
                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder={t.yourPhone}
                                value={form.phone}
                                onChange={handleChange}
                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder={t.yourMessage}
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                                required
                            />
                            {error && <div style={{ color: 'red' }}>{error}</div>}
                            {submitted ? (
                                <div style={{ color: 'green' }}>{t.messageSent}</div>
                            ) : (
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button
                                        type="submit"
                                        style={{ padding: '0.5rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}
                                    >
                                        {t.send}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setShowModal(false); setError(''); setSubmitted(false); }}
                                        style={{ padding: '0.5rem 1.5rem', background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4 }}
                                    >
                                        {t.cancel}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;


//import { useState } from 'react';

//function Contact() {
//    const [showModal, setShowModal] = useState(false);
//    const [form, setForm] = useState({ name: '', phone: '', message: '' });
//    const [submitted, setSubmitted] = useState(false);
//    const [error, setError] = useState('');

//    const handleChange = (e) => {
//        setForm({ ...form, [e.target.name]: e.target.value });
//    };

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        if (!form.name || !form.phone || !form.message) {
//            setError('All fields are required.');
//            return;
//        }
//        setError('');
//        setSubmitted(true);
//        // Here you would typically send the form data to your backend
//        setTimeout(() => {
//            setShowModal(false);
//            setSubmitted(false);
//            setForm({ name: '', phone: '', message: '' });
//        }, 1500);
//    };

//    return (
//        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
//            <h1>Contact Namin Tax Accounting</h1>
//            <section style={{ marginBottom: '2rem' }}>
//                <h2>Accountant Details</h2>
//                <p><strong>Name:</strong> Cyrus Parastar Namin</p>
//                <p><strong>Email:</strong> info@namintax.com</p>
//                <p><strong>Phone:</strong> +32 487 413 312</p>
//                <p><strong>Office:</strong> 23 Av Auguste Jassogne, 1410 Waterloo</p>
//                <p><strong>N&deg; TVA:</strong> BE1026.447.466</p>

//                <p><strong>N&deg; ITAA:</strong> 53.460.538</p>
//            </section>
//            <button
//                onClick={() => setShowModal(true)}
//                style={{ padding: '0.5rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, fontSize: '1rem' }}
//            >
//                Contact Us
//            </button>

//            {showModal && (
//                <div style={{
//                    position: 'fixed',
//                    top: 0, left: 0, right: 0, bottom: 0,
//                    background: 'rgba(0,0,0,0.3)',
//                    display: 'flex',
//                    alignItems: 'center',
//                    justifyContent: 'center',
//                    zIndex: 2000
//                }}>
//                    <div style={{
//                        background: '#fff',
//                        padding: '2rem',
//                        borderRadius: 8,
//                        minWidth: 320,
//                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//                        position: 'relative'
//                    }}>
//                        <button
//                            onClick={() => { setShowModal(false); setError(''); setSubmitted(false); }}
//                            style={{
//                                position: 'absolute',
//                                top: 10,
//                                right: 10,
//                                background: 'transparent',
//                                border: 'none',
//                                fontSize: 20,
//                                cursor: 'pointer'
//                            }}
//                            aria-label="Close"
//                        >&times;</button>
//                        <h2>Send a Message</h2>
//                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//                            <input
//                                type="text"
//                                name="name"
//                                placeholder="Your Name"
//                                value={form.name}
//                                onChange={handleChange}
//                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
//                                required
//                            />
//                            <input
//                                type="tel"
//                                name="phone"
//                                placeholder="Your Phone Number"
//                                value={form.phone}
//                                onChange={handleChange}
//                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
//                                required
//                            />
//                            <textarea
//                                name="message"
//                                placeholder="Short Message"
//                                value={form.message}
//                                onChange={handleChange}
//                                rows={4}
//                                style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
//                                required
//                            />
//                            {error && <div style={{ color: 'red' }}>{error}</div>}
//                            {submitted ? (
//                                <div style={{ color: 'green' }}>Message sent! Thank you.</div>
//                            ) : (
//                                <div style={{ display: 'flex', gap: '1rem' }}>
//                                    <button
//                                        type="submit"
//                                        style={{ padding: '0.5rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}
//                                    >
//                                        Send
//                                    </button>
//                                    <button
//                                        type="button"
//                                        onClick={() => { setShowModal(false); setError(''); setSubmitted(false); }}
//                                        style={{ padding: '0.5rem 1.5rem', background: '#6c757d', color: '#fff', border: 'none', borderRadius: 4 }}
//                                    >
//                                        Cancel
//                                    </button>
//                                </div>
//                            )}
//                        </form>
//                    </div>
//                </div>
//            )}
//        </div>
//    );
//}

//export default Contact;
