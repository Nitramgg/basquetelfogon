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

      {/* CLASE CSS APLICADA */}
      <section className="blog-posts content-section">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {/* CLASE CSS APLICADA */}
      <section className="archives-cta">
        {/* Usamos la clase global .cta-button que ya está definida */}
        <Link href="#" className="cta-button">Ver Archivo Completo →</Link>
      </section>
    </Layout>
  );
}

// Componente simple para mostrar una tarjeta de noticia/post
const PostCard = ({ post }) => (
  <div className="post-card">
    {/* CLASES CSS APLICADAS */}
    <h2 className="post-card-title">{post.title}</h2>
    <p className="post-card-date">🗓️ Publicado: {post.date}</p>
    <p className="post-card-summary">{post.summary}</p>
    
    {/* CLASE CSS APLICADA */}
    <Link href={`/noticias/${post.slug}`} className="post-read-more">
      Leer más →
    </Link>
  </div>
);

// ¡Hemos eliminado todos los estilos en línea al final del archivo!