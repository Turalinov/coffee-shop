import './OurGoods.scss';
import images from '../../services/images';
import {Fragment} from 'react';
import ImgContent from '../imgContent/ImgContent.js';


const OurGoods = () => {

  const content = (
    <Fragment>
      <p>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
      </p>
      <p>
       Afraid at highly months do things on at. Situation recommend objection do intention <br/>
       so questions. <br/>
       As greatly removed calling pleased improve an. <br/> Last ask him cold feel<br/>met spot shy want. Children me laughing we <br/>prospect answered followed. At it went <br/>is song that held help face.
      </p>
    </Fragment>
  );
      
  const src = images['about-good.png'];
  

  
  return (
    <section className='our-goods'>
      <div className="container">

      <ImgContent 
        title="About our goods"
        content={content}
        src={src}
      />


      </div>
    </section>
  )
}

export default OurGoods;