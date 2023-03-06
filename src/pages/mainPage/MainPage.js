import Hero from './../../component/hero/Hero';
import About from './../../component/about/About';
import Best from './../../component/best/Best';
import Footer from './../../component/footer/Footer';

const MainPage = ({data}) => {
  return (
    <section className="main-page">
      <Hero/>
      <About/>
      <Best data={data}/>
      <Footer/>
  </section>
  )
}

export default MainPage;