import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { IconsLink } from '../IconsLink';
import { LogoLink } from '../LogoLink';
import { useState } from 'react';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  const handleOpenNav = () => {
    if (visible === false) {
      setVisible(true);
    } else setVisible(false);
  };
  return (
    <>
      <Styled.Button
        aria-label="Open/Close Menu"
        onClick={() => handleOpenNav()}
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
            <IconsLink User="google.com" Cart="google.com.br" />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
