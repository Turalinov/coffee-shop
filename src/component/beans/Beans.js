import './Beans.scss';
import images from './../../services/images';
import {Fragment} from 'react';
import ImgContent from '../imgContent/ImgContent.js';


const Beans = () => {

  const content = (
    <Fragment>
      <p>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
      </p>
      <p>
        Afraid at highly months do things on at. Situation<br/>recommend objection do intention<br/>
        so questions. 
        As greatly removed calling pleased improve an. <br/>Last ask him cold feel<br/>
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
      </p>
    </Fragment>
  );
      
  const src = images['beans.png'];
  

  
  return (
    <section className='beans'>
      <div className="container">

      <ImgContent 
        title="About our beans"
        content={content}
        src={src}
      />


      </div>
    </section>
  )
}

export default Beans;