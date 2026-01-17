
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Meta
        'meta.title': 'SHUUTZ STUDIO | Premium Automotive & Architectural Photography',
        'meta.description': 'Shuutz Studio by Anthony Cabrera. Premium photography based in Croton on Hudson, NY. specializing in automotive, architectural, and nature details.',
        'meta.keywords': 'photography, automotive, architecture, croton on hudson, ny, premium, studio, anthony cabrera',

        // Nav
        'nav.works': 'Works',
        'nav.contact': 'Contact',

        // Hero
        'hero.subtext': "Starting out and shooting everything that catches my eye. From cars and bridges to the moon—just keeping it real.",
        'hero.location': 'Based in the United States',
        'hero.tap': 'Tap to see the view',
        'hero.studio': 'STUDIO',

        // Intro
        'intro.badge': 'A bit about me',
        'intro.title': 'Always\nLearning',
        'intro.text': "I'm Anthony Cabrera. I don't follow a strict script—I just shoot what looks interesting. Whether it's the lines of a car, a bridge at sunset, or just the moon on a clear night, I'm out here trying to get it right. I'm based in Croton on Hudson, NY and I'm just enjoying the process of getting better at this.",

        // Process
        'process.title': 'How I',
        'process.title_italic': 'work',
        'process.subtitle': "A simple way of doing things. I'm focusing on the basics and getting them right every time.",
        'process.step1.title': 'Choosing the Spot',
        'process.step1.desc': 'Finding the right angle where the light and the car (or building) look best.',
        'process.step2.title': 'Waiting for Light',
        'process.step2.desc': 'Patience is key. I wait for the sun to hit just right before I even pull the camera out.',
        'process.step3.title': 'The Shoot',
        'process.step3.desc': 'Taking my time to get a few good frames rather than a hundred bad ones.',
        'process.step4.title': 'Final Review',
        'process.step4.desc': 'I look through everything and pick the ones that really stand out.',

        // Gallery
        'gallery.badge': 'The Gallery',
        'gallery.title': "Things I've\nShot Lately",
        'gallery.desc': "Just a few highlights from my recent shoots. I'm always looking for something new to frame.",

        // Portfolio
        'portfolio.badge': 'My Projects',
        'portfolio.title': 'Selected Shots',
        'portfolio.desc': 'Everything from cars to the moon. Whatever catches my eye.',

        // Contact
        'contact.badge': 'Get in touch',
        'contact.title': "LET'S START\nSOMETHING",
        'contact.email_btn': 'DM on Instagram',
        'contact.text_call': 'Text or Call',
        'contact.find_me': 'Find me here',
        'contact.footer': 'Living and working in Croton on Hudson, NY',

        // Footer
        'footer.desc': "Just a guy from Croton on Hudson, NY with a camera, out here capturing whatever looks good. From cars in the driveway to the moon in the sky, I'm just trying to make every shot count.",
        'footer.studio': 'Studio',
        'footer.connect': 'Connect',
        'footer.based': 'Based In',
        'footer.made_with': 'Made with ❤️ by',

        // Specific Categories
        'cat.automotive': 'Automotive',
        'cat.architecture': 'Architecture',
        'cat.nature': 'Nature',
        'cat.night_sky': 'Night Sky',
    },
    es: {
        // Meta
        'meta.title': 'SHUUTZ STUDIO | Fotografía Premium Automotriz y Arquitectónica',
        'meta.description': 'Shuutz Studio por Anthony Cabrera. Fotografía premium basada en Croton on Hudson, NY. Especializada en detalles automotrices, arquitectónicos y naturales.',
        'meta.keywords': 'fotografía, automotriz, arquitectura, croton on hudson, ny, premium, estudio, anthony cabrera',

        // Nav
        'nav.works': 'Trabajos',
        'nav.contact': 'Contacto',

        // Hero
        'hero.subtext': "Empezando y capturando todo lo que me llama la atención. Desde autos y puentes hasta la luna—simplemente manteniéndolo real.",
        'hero.location': 'Basado en los Estados Unidos',
        'hero.tap': 'Toca para ver la toma',
        'hero.studio': 'ESTUDIO',

        // Intro
        'intro.badge': 'Un poco sobre mí',
        'intro.title': 'Siempre\nAprendiendo',
        'intro.text': "Soy Anthony Cabrera. No sigo un guion estricto—simplemente capturo lo que parece interesante. Ya sean las líneas de un auto, un puente al atardecer, o simplemente la luna en una noche despejada, estoy aquí tratando de hacerlo bien. Vivo en Croton on Hudson, NY y simplemente disfruto el proceso de mejorar en esto.",

        // Process
        'process.title': 'Cómo',
        'process.title_italic': 'trabajo',
        'process.subtitle': "Una forma sencilla de hacer las cosas. Me concentro en lo básico y en hacerlo bien cada vez.",
        'process.step1.title': 'Eligiendo el lugar',
        'process.step1.desc': 'Encontrar el ángulo correcto donde la luz y el auto (o edificio) se vean mejor.',
        'process.step2.title': 'Esperando la luz',
        'process.step2.desc': 'La paciencia es clave. Espero a que la luz sea la adecuada antes de sacar la cámara.',
        'process.step3.title': 'La sesión',
        'process.step3.desc': 'Tomándome mi tiempo para obtener unos pocos buenos fotogramas en lugar de cien malos.',
        'process.step4.title': 'Revisión final',
        'process.step4.desc': 'Reviso todo y elijo las que realmente destacan.',

        // Gallery
        'gallery.badge': 'La Galería',
        'gallery.title': "Cosas que he\ncapturado",
        'gallery.desc': "Solo algunos aspectos destacados de mis sesiones recientes. Siempre busco algo nuevo para encuadrar.",

        // Portfolio
        'portfolio.badge': 'Mis Proyectos',
        'portfolio.title': 'Tomas Seleccionadas',
        'portfolio.desc': 'Desde autos hasta la luna. Lo que sea que me llame la atención.',

        // Contact
        'contact.badge': 'Ponte en contacto',
        'contact.title': "EMPECEMOS\nALGO",
        'contact.email_btn': 'Enviar DM en Instagram',
        'contact.text_call': 'Texto o Llamada',
        'contact.find_me': 'Encuéntrame aquí',
        'contact.footer': 'Viviendo y trabajando en Croton on Hudson, NY',

        // Footer
        'footer.desc': "Solo un chico de Croton on Hudson, NY con una cámara, capturando lo que se ve bien. Desde autos en la entrada hasta la luna en el cielo, solo trato de que cada toma cuente.",
        'footer.studio': 'Estudio',
        'footer.connect': 'Conectar',
        'footer.based': 'Basado en',
        'footer.made_with': 'Hecho con ❤️ por',

        // Specific Categories
        'cat.automotive': 'Automotriz',
        'cat.architecture': 'Arquitectura',
        'cat.nature': 'Naturaleza',
        'cat.night_sky': 'Cielo Nocturno',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
