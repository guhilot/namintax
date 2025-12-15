import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
    const { lang, setLang, t } = useLanguage();

    return (
        <div style={{ marginBottom: 16, textAlign: 'right' }}>
            <label htmlFor="lang-select" style={{ marginRight: 8 }}>{t.selectLanguage}:</label>
            <select
                id="lang-select"
                value={lang}
                onChange={e => setLang(e.target.value)}
                style={{ padding: 4, borderRadius: 4 }}
            >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="fa">فارسی</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
