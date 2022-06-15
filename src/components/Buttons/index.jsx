import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const Buttons = ({
  children,
  type,
  size,
  color = 'secondary',
  icon = true,
  onClick,
}) => {
  return (
    <Styled.Container
      size={size}
      type={type}
      color={color}
      icon={icon}
      onClick={onClick}
    >
      {icon ? <Styled.Icon></Styled.Icon> : ''}
      <h1> {children}</h1>
    </Styled.Container>
  );
};

Buttons.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['normal', 'big']).isRequired,
  type: P.oneOf(['button', 'submit']).isRequired,
  color: P.oneOf(['primary', 'secondary', 'disabled']),
  icon: P.bool,
  onClick: P.func,
};
