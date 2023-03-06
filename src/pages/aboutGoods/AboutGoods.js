import images from "../../services/images";
import HeaderWrap from "../../component/headerWrap/HeaderWrap";
import OurGoods from "../../component/ourGoods/OurGoods"
import CardList from "../../component/cardList/CardList";
import Footer from "../../component/footer/Footer";

const AboutGoods = ({data}) => {
  return (
    <div className="about-goods">
      <HeaderWrap 
        image={images['bgGoods.png']}
        title={'For your pleasure'}
      />
      <OurGoods/>
      <CardList data={data}/>
      <Footer/>
    </div>
  )
}

export default AboutGoods;