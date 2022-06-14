import P from 'prop-types';
import * as Styled from './styles';
import { AccountCircle as UserIcon } from '@styled-icons/material-outlined/AccountCircle';
import { ShoppingCart as CartIcon } from '@styled-icons/material-outlined/ShoppingCart';

export const IconsLink = ({ User, Cart }) => {
  return (
    <Styled.Container>
      <Styled.Button aria-label="Button User" href={User}>
        <UserIcon />
      </Styled.Button>
      <Styled.Button>
        <CartIcon aria-label="Button Cart" href={Cart} />
      </Styled.Button>
    </Styled.Container>
  );
};

IconsLink.propTypes = {
  User: P.string.isRequired,
  Cart: P.string.isRequired,
};
