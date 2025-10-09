// components/Layout.js

import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react'; // <-- ¡IMPORTACIÓN CRUCIAL!

// Componente de Navegación (Header)
// Ahora recibe el estado del menú y la función para cambiarlo
const Header = ({ isMenuOpen, toggleMenu }) => ( 
    <header className="header">
        <div className="logo">
            <Link href="/">
                {/* Usamos una imagen de escudo. Debe estar en public/images/ */}
                <img src="/images/logo-club.png" alt="Escudo El Fogón Básquet" className="club-logo" width={40} height={40} />
                <span className="club-name-text">EL FOGÓN</span>
            </Link>
        </div>
        
        {/* =======================================
            ¡EL BOTÓN DE HAMBURGUESA!
            ======================================= */}
        <button 
            className="menu-toggle" 
            aria-label="Abrir/Cerrar Menú"
            onClick={toggleMenu} // LÓGICA DE CLICK
        >
            {isMenuOpen ? '✕' : '☰'} {/* Muestra X si abierto, ☰ si cerrado */}
        </button>
        {/* ======================================= */}
        
        {/* La clase 'open' se añade si el menú está abierto para que CSS lo muestre */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}> 
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/club">El Club</Link></li>
                <li><Link href="/equipos">Equipos</Link></li>
                <li><Link href="/resultados">Resultados</Link></li>
                <li><Link href="/multimedia">Multimedia</Link></li>
                <li><Link href="/noticias">Noticias</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
        
        <div className="radio-widget">🎙️ Radio El Fogón</div>
    </header>
);

// Componente de Pie de Página (Footer)
const Footer = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} El Fogón Básquet. CEF. Compromiso Esfuerzo Familia</p>
        <div className="social-links">
            <a href="https://www.instagram.com/elfogonbasquet" target="_blank" rel="noopener noreferrer">Instagram</a> | 
            <a href="https://www.youtube.com/@ElFogonBasquet" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
    </footer>
);

// El Layout principal que ahora maneja el estado del menú
const Layout = ({ children }) => {
    // 1. Estado para saber si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    // 2. Función para cambiar el estado al hacer clic
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="main-container">
            <Head>
                {/* Etiqueta de viewport para hacer el sitio responsive */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* 3. Pasamos el estado y la función al Header */}
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> 
            
            <main className="page-content">
                {children} 
            </main>
            <Footer />
        </div>
    );
};

export default Layout;