// pages/contacto.js

import Layout from '../components/Layout';
import Head from 'next/head';

export default function ContactoPage() {
  return (
    <Layout>
      <Head>
        <title>Contacto | Inscripciones y Sponsors - El Fogón Básquet</title>
        <meta name="description" content="Contáctanos para inscripciones, consultas de prensa o propuestas de patrocinio para El Fogón Básquet." />
      </Head>

      <div className="page-header content-section">
        <h1>Contacto y Ubicación</h1>
        <p>Estamos disponibles para la comunidad. Elige la mejor forma de comunicarte con nosotros.</p>
      </div>

      <section className="form-and-map content-section" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '40px' }}>
        <div className="contact-form" style={{ flex: 1, minWidth: '300px' }}>
            <h2>Envíanos un Mensaje</h2>
            {/* El formulario requiere un servicio externo para enviar correos */}
            <form action="#" method="POST" className="simple-form">
                <p><label htmlFor="name">Nombre Completo:</label><br /><input type="text" id="name" name="name" required style={inputStyle} /></p>
                <p><label htmlFor="email">Correo Electrónico:</label><br /><input type="email" id="email" name="email" required style={inputStyle} /></p>
                <p><label htmlFor="message">Tu Mensaje:</label><br /><textarea id="message" name="message" rows="5" required style={{...inputStyle, resize: 'vertical'}}></textarea></p>
                <button type="submit" style={buttonStyle}>Enviar Consulta</button>
            </form>
        </div>

        <div className="map-location" style={{ flex: 1, minWidth: '300px' }}>
            <h2>Nuestra Ubicación</h2>
            <p>📍 Dirección: Bartolomé Mitre 2250, José Marmol.</p>
            <div className="map-placeholder" style={{ border: '1px solid #ddd', height: '300px', width: '100%', marginTop: '10px', backgroundColor: '#eee' }}>
                [<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Bartolom%C3%A9%20Mitre%202250,%20B1845CGE%20Jos%C3%A9%20Marmol,%20Provincia%20de%20Buenos%20Aires+(Club%20El%20Fog%C3%B3n)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/calcular-la-poblacion-en-un-mapa/">Estimar la población</a></iframe></div>]
            </div>
            <ContactCard title="Teléfono" icon="📞" content="+54 9 11 7504-6209" />
            <ContactCard title="Email" icon="📧" content="contacto@elfogonbasquet.com" />
        </div>
      </section>
    </Layout>
  );
}

// Estilos rápidos de ejemplo
const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' };
const buttonStyle = { backgroundColor: '#0077C7', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' };
const ContactCard = ({ title, icon, content }) => (
    <div style={{ padding: '5px 0', borderBottom: '1px dotted #ccc', marginTop: '5px' }}>
        <strong>{icon} {title}:</strong>
        <p style={{ margin: '2px 0 0 0', fontWeight: 'bold' }}>{content}</p>
    </div>
);