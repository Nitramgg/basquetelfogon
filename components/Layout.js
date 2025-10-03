// components/Layout.js

import Link from 'next/link';

// Componente de Navegación (Header)
const Header = () => (
    <header className="header">
        <div className="logo">
            <Link href="/">
                {/* Usamos una imagen de escudo. Deben subir 'logo-club.png' a public/images/ */}
                <img src="/images/logo-club.png" alt="Escudo El Fogón Básquet" className="club-logo" width={40} height={40} />
                <span className="club-name-text">EL FOGÓN</span>
            </Link>
        </div>
        <nav className="nav">
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/club">El Club</Link></li>
                <li><Link href="/equipos">Equipos</Link></li>
                <li><Link href="/resultados">Resultados</Link></li>
                <li><Link href="/multimedia">Multimedia</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
        {/* Espacio reservado para la Radio */}
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

// El Layout principal que envuelve cada página de contenido
const Layout = ({ children }) => {
    return (
        <div className="main-container">
            <Header />
            <main className="page-content">
                {children} 
            </main>
            <Footer />
        </div>
    );
};

export default Layout;