// pages/radio.js

import Layout from '../components/Layout';
import Head from 'next/head';

export default function RadioPage() {
    
  // Datos simulados de episodios de podcast
  const episodes = [
    { 
      id: 1, 
      title: 'Post-Partido: Análisis de la victoria ante Estrella', 
      date: '12 de Octubre, 2025', 
      duration: '45:30',
      embedUrl: 'URL_EMBED_SPOTIFY_1' // Reemplazar con el embed real de Spotify, Anchor o YouTube
    },
    { 
      id: 2, 
      title: 'Conociendo a: Entrevista al Capitán de la U17', 
      date: '05 de Octubre, 2025', 
      duration: '32:00',
      embedUrl: 'URL_EMBED_SPOTIFY_2'
    },
    { 
      id: 3, 
      title: 'El Fogón en las ligas: Resumen de la semana formativa', 
      date: '28 de Septiembre, 2025', 
      duration: '58:00',
      embedUrl: 'URL_EMBED_SPOTIFY_3'
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Radio y Podcast | El Fogón Básquet</title>
        <meta name="description" content="Escucha la transmisión en vivo de Radio El Fogón y revive los mejores análisis en formato podcast." />
      </Head>

      <div className="page-header content-section">
        <h1>Radio y Podcast Oficial</h1>
        <p>Vive cada partido y revive los análisis más calientes con la voz de El Fogón.</p>
      </div>

      <section className="live-radio content-section">
        <h2>Transmisión en Vivo</h2>
        <div className="radio-player-box" style={radioBoxStyle}>
          <h3>🎙️ Radio El Fogón: Al Aire</h3>
          {/* REPRODUCTOR EN VIVO SIMULADO CON IFRAME DE YOUTUBE */}
          <div style={{ height: '350px', width: '100%', marginTop: '15px' }}>
              <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/g8tF6Nn52rE?autoplay=0&mute=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
              ></iframe>
          </div>
          {/* FIN DEL REPRODUCTOR EN VIVO SIMULADO */}
        </div>
      </section>

      <section className="podcast-episodes content-section" style={{ marginTop: '50px' }}>
        <h2>Últimos Episodios (Podcast)</h2>
        <div className="episodes-list" style={listStyle}>
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

// Componente para una tarjeta de Episodio de Podcast
const EpisodeCard = ({ episode }) => (
    <div style={cardStyle}>
        <h3>{episode.title}</h3>
        <p style={metaStyle}>🗓️ {episode.date} | ⏱️ {episode.duration}</p>
        <div style={embedStyle}>
             [Reproductor del Episodio] 
        </div>
        <a href={episode.embedUrl} target="_blank" rel="noopener noreferrer" style={listenButtonStyle}>
            Escuchar en Spotify/Plataforma →
        </a>
    </div>
);

// Estilos en línea (simples y seguros)
const radioBoxStyle = {
    padding: '20px',
    border: '2px solid #0077C7',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginTop: '20px'
};

const placeholderStyle = {
    backgroundColor: '#f0f0f0',
    padding: '50px 20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '15px'
};

const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginTop: '20px'
};

const cardStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff'
};

const metaStyle = {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '10px'
};

const embedStyle = {
    backgroundColor: '#eee',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
};

const listenButtonStyle = {
    display: 'inline-block',
    padding: '8px 15px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem'
};