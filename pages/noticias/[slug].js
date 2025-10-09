// pages/noticias/[slug].js

import Layout from '../../../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

// ----------------------------------------------------
// 1. SIMULACIÓN DE DATOS (Noticias completas)
// ----------------------------------------------------
const blogPosts = [
  { 
    slug: 'victoria-primera-estrella', 
    title: '¡Victoria Épica de la Primera División ante Estrella!', 
    date: '11 de Octubre, 2025', 
    content: `
      <p>Una noche electrizante se vivió en nuestra cancha. El Fogón Básquet demostró su garra y superó a Club Atlético Estrella en un encuentro que se definió en los últimos segundos.</p>
      <h2>El Desglose del Partido</h2>
      <p>El primer cuarto fue dominado por la defensa férrea de nuestro equipo. Sin embargo, Estrella ajustó su puntería en el segundo, llevándonos al descanso con una mínima desventaja. Fue en el tercer cuarto donde la experiencia de nuestro capitán, junto a la energía de los juveniles, marcó la diferencia.</p>
      <p>El resultado final de 85 a 79 no solo nos da dos puntos valiosos, sino que consolida nuestra posición en la cima de la tabla. ¡Felicidades al cuerpo técnico y a los jugadores por el esfuerzo!</p>
      <p style="font-style: italic; margin-top: 20px;">Próximo partido: Visitamos a Deportivo Central. ¡A prepararse!</p>
    `,
    image: '/images/noticia-estrella.jpg' // Necesitas subir esta imagen
  },
  { 
    slug: 'inscripciones-minibasquet', 
    title: 'Se Abren las Inscripciones para la Escuela de Minibásquet', 
    date: '05 de Octubre, 2025', 
    content: `
      <p>El futuro del club está en el minibásquet. Con gran entusiasmo, anunciamos la apertura de inscripciones para niños y niñas de 6 a 12 años.</p>
      <p>Nuestra escuela se enfoca en el desarrollo de fundamentos, el trabajo en equipo y, sobre todo, la diversión. Contamos con entrenadores certificados y un ambiente seguro y familiar.</p>
      <h2>Detalles de Contacto</h2>
      <ul>
        <li>Días de entrenamiento: Lunes, Miércoles y Viernes.</li>
        <li>Horario: 18:00 a 19:30 hs.</li>
        <li>Para inscribirte, visita nuestra sección de <a href="/contacto">Contacto</a> o acércate a la secretaría del club.</li>
      </ul>
    `,
    image: '/images/noticia-minibasquet.jpg'
  },
];

// ----------------------------------------------------
// 2. FUNCIÓN DE RENDERIZADO DEL COMPONENTE
// ----------------------------------------------------
export default function PostPage({ post }) {
  const router = useRouter();

  // Si no se encuentra la noticia (debería ser raro si usamos getStaticProps), mostramos un error
  if (!post) {
    return <Layout><h1>404 | Noticia no encontrada</h1></Layout>;
  }

  // Usamos dangerouslySetInnerHTML para renderizar el HTML del contenido
  return (
    <Layout>
      <Head>
        <title>{post.title} | El Fogón Básquet</title>
        <meta name="description" content={`Noticia del club: ${post.title}`} />
      </Head>

      <article className="post-content content-section">
        <header style={headerStyle}>
          <h1>{post.title}</h1>
          <p style={metaStyle}>🗓️ Publicado el: {post.date}</p>
        </header>
        
        {post.image && (
          <img src={post.image} alt={post.title} style={imageStyle} />
        )}

        <div 
          className="post-body" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
          style={bodyStyle}
        />
        
        <footer style={footerStyle}>
          <a href="/noticias" style={backLinkStyle}>← Volver al Listado de Noticias</a>
        </footer>
      </article>
    </Layout>
  );
}

// ----------------------------------------------------
// 3. FUNCIONES DE NEXT.JS PARA RUTAS DINÁMICAS (SSR)
// ----------------------------------------------------

// 3.1 getStaticPaths: Le dice a Next.js qué slugs (noticias) debe construir
export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  // fallback: false significa que si pides un slug que no está en 'paths', da 404.
  return { paths, fallback: false }; 
}

// 3.2 getStaticProps: Obtiene los datos para la noticia específica
export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}


// Estilos en línea para el post (pueden migrarse a globals.css)
const headerStyle = {
    borderBottom: '2px solid #eee',
    paddingBottom: '15px',
    marginBottom: '20px'
}

const metaStyle = {
    color: '#777',
    fontSize: '0.9rem'
}

const imageStyle = {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '30px'
}

const bodyStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8'
}

const footerStyle = {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #eee'
}

const backLinkStyle = {
    color: '#0077C7',
    fontWeight: 'bold',
    textDecoration: 'none'
}