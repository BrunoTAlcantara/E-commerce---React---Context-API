import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, img, link }) => {
  return (
    <Heading>
      <Styled.Container href={link}>
        {!!img && <img src={img} alt={text} />}
        {!img && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  img: P.string,
  link: P.string.isRequired,
};
