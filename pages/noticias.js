// pages/noticias.js

import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function NoticiasPage() {
  // Datos simulados para las últimas noticias/entradas de blog
  const posts = [
    { 
      id: 1, 
      title: '¡Victoria Épica de la Primera División ante Estrella!', 
      summary: 'Crónica del emocionante partido que terminó 85-79, consolidando nuestro liderazgo en la tabla.', 
      date: '11 de Octubre, 2025', 
      slug: 'victoria-primera-estrella' 
    },
    { 
      id: 2, 
      title: 'Se Abren las Inscripciones para la Escuela de Minibásquet', 
      summary: 'Toda la información necesaria para que los más chicos se sumen a las formativas del club.', 
      date: '05 de Octubre, 2025', 
      slug: 'inscripciones-minibasquet' 
    },
    { 
      id: 3, 
      title: 'Día del Socio: Gran Convocatoria y Cena Anual', 
      summary: 'Resumen de la jornada de festejo y la importancia de la familia de El Fogón.', 
      date: '28 de Septiembre, 2025', 
      slug: 'dia-del-socio' 
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Noticias y Blog | El Fogón Básquet</title>
        <meta name="description" content="Mantente al día con las últimas noticias, crónicas de partidos y eventos del Club El Fogón Básquet." />
      </Head>

      <div className="page-header content-section">
        <h1>Novedades del Club</h1>
        <p>Toda la información y las crónicas de nuestros equipos en un solo lugar.</p>
      </div>

      <section className="blog-posts content-section" style={sectionStyle}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <section className="archives-cta" style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="#" style={ctaButtonStyle}>Ver Archivo Completo →</Link>
      </section>
    </Layout>
  );
}

// Componente simple para mostrar una tarjeta de noticia/post
const PostCard = ({ post }) => (
    <div style={cardStyle}>
        <h2 style={titleStyle}>{post.title}</h2>
        <p style={dateStyle}>🗓️ Publicado: {post.date}</p>
        <p style={summaryStyle}>{post.summary}</p>
        {/* El Link aquí es estático, luego implementaríamos la página dinámica [slug].js */}
        <Link href={`/noticias/${post.slug}`} style={readMoreStyle}>
            Leer más →
        </Link>
    </div>
);

// Estilos en línea (seguros para SSR)
const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginTop: '30px'
};

const cardStyle = {
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    backgroundColor: '#fff'
};

const titleStyle = {
    color: '#0077C7', // Celeste
    marginBottom: '10px',
    fontSize: '1.5rem'
};

const dateStyle = {
    color: '#555',
    fontSize: '0.9rem',
    marginBottom: '15px',
    borderBottom: '1px dotted #ccc',
    paddingBottom: '5px'
};

const summaryStyle = {
    marginBottom: '15px'
};

const readMoreStyle = {
    display: 'inline-block',
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