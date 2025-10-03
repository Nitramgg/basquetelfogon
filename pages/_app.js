// pages/_app.js

// Importamos nuestros estilos globales para que se carguen en toda la aplicación
import '../styles/globals.css' 

// Esta función es el componente raíz de React para Next.js.
// 'Component' es la página actual (ej. index.js, club.js)
// 'pageProps' son las propiedades que necesita esa página.
function MyApp({ Component, pageProps }) {
  // Simplemente renderizamos la página actual con sus props
  return <Component {...pageProps} />
}

export default MyApp