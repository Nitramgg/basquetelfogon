// pages/equipos.js

import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function EquiposPage() {
  // Lista de categorías del club
  const categorias = [
    { name: 'Mosquitos', description: 'Iniciación al básquet para los más pequeños.', ageRange: '4 - 6 años', link: '#mosquitos' },
    { name: 'U9', description: 'Nuestros futuros talentos. Aprendizaje y diversión.', ageRange: '7 - 9 años', link: '#minibasquet' },
    { name: 'U11', description: 'Desarrollo de habilidades básicas y trabajo en equipo.', ageRange: '10 - 11 años', link: '#u11' },
    { name: 'U13', description: 'Transición, desarrollo de fundamentos.', ageRange: '12 - 13 años', link: '#u13' },
    { name: 'U15', description: 'Etapa clave de desarrollo técnico y táctico.', ageRange: '14 - 15 años', link: '#u15' },
    { name: 'U17', description: 'Formación avanzada y preparación para el alto rendimiento.', ageRange: '16 - 17 años', link: '#u17' },
    { name: 'U21', description: 'Última categoría de juveniles, paso previo a Primera.', ageRange: '18 - 21 años', link: '#u21' },
    { name: 'Primera División (Plantel Superior)', description: 'Nuestra máxima categoría, compitiendo al más alto nivel.', ageRange: 'Mayores de 17', link: '#primera' },
  ];

  return (
    <Layout>
      <Head>
        <title>Equipos y Categorías | El Fogón</title>
        <meta name="description" content="Conoce todas las categorías de El Fogón Básquet, desde formativas hasta Primera División." />
      </Head>

      <div className="page-header content-section">
        <h1>Nuestras Categorías</h1>
        <p>En El Fogón, el básquet es para todas las edades. Encuentra tu equipo y únete al Celeste y Blanco.</p>
      </div>

      <section className="categories-list content-section">
        <div className="category-grid" style={gridStyle}>
          {categorias.map((category) => (
            // Componente para cada tarjeta de categoría
            <CategoryCard 
              key={category.name} 
              name={category.name} 
              description={category.description} 
              ageRange={category.ageRange} 
              link={category.link} 
            />
          ))}
        </div>
      </section>

      {/* Aquí podríamos añadir más contenido específico o formularios de inscripción */}
      <section className="join-us-cta content-section" style={{ textAlign: 'center', marginTop: '40px', padding: '20px', borderTop: '1px solid #eee' }}>
          <h2>¿Quieres ser parte?</h2>
          <p>Consulta horarios de entrenamiento e inscribite.</p>
          <Link href="/contacto" style={ctaButtonStyle}>Inscríbete Aquí</Link>
      </section>
    </Layout>
  );
}

// Componente visual para cada tarjeta de equipo
const CategoryCard = ({ name, description, ageRange, link }) => (
    <div style={cardStyle}>
        <h3>{name}</h3>
        <p style={{ color: '#555' }}>{description}</p>
        <p style={{ fontWeight: 'bold', borderTop: '1px dotted #ccc', paddingTop: '5px' }}>Edad: {ageRange}</p>
        <Link href={link} style={detailsLinkStyle}>Ver Detalles del Equipo →</Link>
    </div>
);

// Estilos en línea para el Layout Grid (¡más seguros que usar variables CSS aquí!)
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '30px'
};

const cardStyle = {
    padding: '20px',
    border: '1px solid #0077C7',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
};

const detailsLinkStyle = {
    display: 'inline-block',
    marginTop: '10px',
    color: '#0077C7',
    fontWeight: 'bold',
    textDecoration: 'none'
};

const ctaButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#0077C7',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10px'
};