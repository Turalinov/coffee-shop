import ErrorBoundary from "../../component/errorBoundary/ErrorBoundary";
import images from "../../services/images";

import HeaderWrap from "../../component/headerWrap/HeaderWrap";
import Good from "../../component/good/Good";
import Footer from "../../component/footer/Footer"

const AboutIt = ({data}) => {
  return (
    <section className='about-it'>
      <HeaderWrap 
        image={images['bgOurCoffee.png']}
        title={'Our Coffee'}
      />
      <ErrorBoundary>
        <Good good={data[0]}/>
      </ErrorBoundary>
      <Footer/>
    </section>
  )
  
}

export default AboutIt;