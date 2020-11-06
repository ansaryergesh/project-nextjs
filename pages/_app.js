import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
function MyApp({ Component, pageProps }) {

  const isHome = () => Component.name === 'Home';
    return (
      <div className='portfolio-app'>
        <Navbar />
        <div className='container'>
          <Component {...pageProps} />
        </div>
        {isHome() &&   <Footer />}

      </div>
    )
}
export default MyApp
