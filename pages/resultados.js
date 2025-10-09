// pages/resultados.js

import Layout from '../components/Layout';
import Head from 'next/head';

export default function ResultadosPage() {
  // Datos simulados de los últimos 3 partidos
  const results = [
    { 
      category: 'Primera División', 
      opponent: 'Club Atlético Estrella', 
      score: '85 - 79', 
      result: 'Victoria', 
      date: '10/05/2025' 
    },
    { 
      category: 'U17', 
      opponent: 'Deportivo Central', 
      score: '62 - 65', 
      result: 'Derrota', 
      date: '09/05/2025' 
    },
    { 
      category: 'U15', 
      opponent: 'Círculo Juvenil', 
      score: '55 - 40', 
      result: 'Victoria', 
      date: '08/05/2025' 
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Resultados de Partidos | El Fogón Básquet</title>
        <meta name="description" content="Consulta los últimos resultados de todas las categorías de El Fogón Básquet." />
      </Head>

      <div className="page-header content-section">
        <h1>Últimos Resultados</h1>
        <p>Aquí puedes seguir la performance de nuestros equipos en el torneo local.</p>
      </div>

      <section className="results-table-section content-section">
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={cellStyle}>Fecha</th>
              <th style={cellStyle}>Categoría</th>
              <th style={cellStyle}>Oponente</th>
              <th style={cellStyle}>Resultado</th>
              <th style={cellStyle}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {results.map((game, index) => (
              <tr key={index} style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}>
                <td style={cellStyle}>{game.date}</td>
                <td style={{...cellStyle, fontWeight: 'bold'}}>{game.category}</td>
                <td style={cellStyle}>{game.opponent}</td>
                <td style={cellStyle}>{game.score}</td>
                <td style={{...cellStyle, color: game.result === 'Victoria' ? 'green' : 'red', fontWeight: 'bold'}}>
                  {game.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
      <section className="more-info-cta content-section" style={{textAlign: 'center', marginTop: '40px'}}>
        <p>Para ver el calendario completo y las tablas de posiciones, visita la sección de la liga.</p>
      </section>
    </Layout>
  );
}

// Estilos en línea simples para la tabla (para evitar variables CSS y problemas de SSR)
const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const headerRowStyle = {
  backgroundColor: '#0077C7', // Celeste
  color: 'white',
  textAlign: 'left',
};

const cellStyle = {
  padding: '12px 15px',
  border: '1px solid #ddd'
};

const rowStyleEven = {
    backgroundColor: '#f9f9f9'
}

const rowStyleOdd = {
    backgroundColor: '#ffffff'
}