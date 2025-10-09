// pages/multimedia.js

import Layout from '../components/Layout';
import Head from 'next/head';

export default function MultimediaPage() {

  // IDs de videos simulados (deben ser reales de YouTube para que el embed funcione)
  // Usamos un ID de video de ejemplo para la estructura.
  const videoIds = [
    { id: 'VIDEO_ID_1', title: 'Resumen Final de Temporada 2024' },
    { id: 'VIDEO_ID_2', title: 'Entrevista Exclusiva al Capitán' },
    { id: 'VIDEO_ID_3', title: 'Los Mejores 10 Pases de la U19' },
  ];

  return (
    <Layout>
      <Head>
        <title>Multimedia y Galería | El Fogón Básquet</title>
        <meta name="description" content="Mira las mejores fotos y videos de los partidos, entrenamientos y eventos de El Fogón Básquet." />
      </Head>

      <div className="page-header content-section">
        <h1>Galería de Fotos y Videos</h1>
        <p>Revive la pasión y los mejores momentos de El Fogón en la cancha.</p>
      </div>

      <section className="video-gallery content-section">
        <h2>Videos Recientes (Canal de YouTube)</h2>
        <p>Suscríbete a nuestro canal para no perderte las crónicas completas.</p>
        
        <div className="video-grid" style={gridStyle}>
          {videoIds.map((video) => (
            <VideoEmbed key={video.id} videoId={video.id} title={video.title} />
          ))}
        </div>
      </section>

      <section className="photo-gallery content-section" style={{ marginTop: '50px' }}>
        <h2>Últimas Fotos (Instagram)</h2>
        <p>Sigue nuestro día a día en la cancha y en el club.</p>
        
        <div className="instagram-placeholder" style={placeholderStyle}>
          <p>[Aquí se insertaría el código de incrustación del Feed de Instagram]</p>
          <a href="https://www.instagram.com/elfogonbasquet" target="_blank" rel="noopener noreferrer" style={ctaButtonStyle}>Ver en Instagram →</a>
        </div>
      </section>

    </Layout>
  );
}

// Componente para incrustar un video de YouTube
const VideoEmbed = ({ videoId, title }) => (
    <div style={videoCardStyle}>
        <h3>{title}</h3>
        {/* Usamos un iframe de YouTube. El src debe tener el ID del video real */}
        <iframe 
            style={iframeStyle}
            src={`https://www.youtube.com/embed/${videoId}`} 
            title={title} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        ></iframe>
        <p style={{ marginTop: '5px', fontSize: '0.9rem', color: '#555' }}>Duración: 2:30 min</p>
    </div>
);


// Estilos en línea simples para el Layout (Seguros para SSR)
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
};

const videoCardStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff'
};

const iframeStyle = {
    width: '100%',
    aspectRatio: '16 / 9', // 16:9 de video
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px'
};

const placeholderStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    border: '2px dashed #0077C7', // Borde Celeste
    borderRadius: '8px',
    marginTop: '20px'
}

const ctaButtonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#0077C7',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px'
};