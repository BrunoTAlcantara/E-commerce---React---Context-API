import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  weight = 'bold',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      uppercase={uppercase}
      as={as}
      size={size}
      weight={weight}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  weight: P.oneOf(['bold', 'regular', 'thin', 'eBold']),
  uppercase: P.bool,
};
