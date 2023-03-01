import './Hero.scss';

import Header from './../header/Header';
import Devider from './../devider/Devider'

const Hero = () => {
  return (
    <section className="hero">
      <Header/>
      <h1>Everything You Love About Coffee</h1>
      <Devider/>
      <h2>We makes every day full of energy and taste</h2>
      <h2>Want to try our beans?</h2>
      <a href="#" className="outline">More</a>
    </section>
  )
}

export default Hero; 