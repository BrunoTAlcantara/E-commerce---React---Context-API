import P from 'prop-types';
import * as Styled from './styles';

export const ImgProduct = ({ size = 'big', img, alt }) => {
  return <Styled.Container size={size} src={img} alt={alt} />;
};

ImgProduct.propTypes = {
  size: P.oneOf(['normal', 'big', 'small']),
  img: P.string.isRequired,
  alt: P.string.isRequired,
};
