// pages/club.js

import Layout from '../components/Layout';
import Head from 'next/head';

export default function ClubPage() {
  return (
    <Layout>
      <Head>
        <title>El Club | Historia y Comisión Directiva - El Fogón Básquet</title>
        <meta name="description" content="Conoce la historia de El Fogón Básquet, nuestros valores de barrio y quiénes forman parte de la comisión directiva." />
      </Head>

      <div className="page-header content-section">
        <h1>Nuestra Historia: Orgullo Celeste y Blanco</h1>
      </div>

      <section className="club-history content-section">
        <h2>Unidos por El Fogón desde 1930</h2>
        <p>
          El Club **El Fogón Básquet** nació con el espíritu de la comunidad, buscando ser un faro deportivo y social en el barrio. Lo que comenzó como un sueño de un grupo de vecinos, hoy es una realidad que alberga a todas las categorías, desde el minibásquet hasta la Primera División.
          Llevamos el **Celeste y Blanco** con honor en cada cancha.
        </p>
        
        <div className="gallery-placeholder" style={{ textAlign: 'center', margin: '20px 0' }}>
            <p style={{ fontStyle: 'italic', marginTop: '10px' }}>[Espacio para fotos históricas del club]</p>
        </div>
      </section>

      <section className="comision-directiva content-section">
        <h2>Comisión Directiva (Gestión Actual)</h2>
        <p>El club se sostiene gracias al compromiso y esfuerzo de los socios:</p>
        
        {/* Componente React simple para la lista de miembros */}
        <ul className="members-list">
          <Member name="Juan Pérez" role="Presidente" />
          <Member name="Marta Gómez" role="Vicepresidenta y Coordinadora de Formativas" />
          <Member name="Ricardo Castro" role="Secretario y Tesorero" />
        </ul>
      </section>
    </Layout>
  );
}

const Member = ({ name, role }) => (
  <li className="member-card" style={{ 
      listStyle: 'none', 
      margin: '10px 0', 
      borderLeft: '3px solid #0077C7', 
      paddingLeft: '10px' 
  }}>
      <strong>{name}</strong> - <span>{role}</span>
  </li>
);