import { Heading } from '../../components/Heading';
import { Menu } from '../../components/Menu';

import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';
import linksMock from '../../components/NavLinks/mock';
import { SectionBackground } from '../../components/SectionBackground';
import { ImgProduct } from '../../components/ImgProduct';
import Img1 from '../../assets/Image1.png';
import { TextComponent } from '../../components/TextComponent';
import { Buttons } from '../../components/Buttons';
const logoData = {
  text: 'Logo',
  link: '#target',
  Img: '',
};
const Product =
  'https://res.cloudinary.com/dpdj3lzns/image/upload/v1655321498/produtostest_2_bbpy4d.png';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Menu links={linksMock} logoData={logoData}></Menu>
        <SectionBackground>
          <Styled.FirstSection>
            <div>
              <Heading size="eHuge" weight="eBold" uppercase={true}>
                The Best Honey
                <br /> in The World
              </Heading>
              <Heading size="big" as="h4" weight="regular">
                Found only in south america
              </Heading>
              <Buttons size="big" icon={false}>
                BUY NOW
              </Buttons>
            </div>
            <ImgProduct size="big" img={Product} alt="imgProd"></ImgProduct>
          </Styled.FirstSection>
        </SectionBackground>
        <Styled.SecontSection>
          <div>
            <img src={Img1}></img>
            <div>
              <Heading size="eHuge"> Naturally Diverse </Heading>
              <Heading size="big" as="h4" weight="regular">
                Our bees choose the honey`s color and texture by the local
                varieties of wildflowers they forage. Enjoy our diversity!
              </Heading>
            </div>
          </div>
        </Styled.SecontSection>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
