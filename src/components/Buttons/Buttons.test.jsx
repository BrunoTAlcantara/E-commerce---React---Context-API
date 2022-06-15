import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Buttons } from '.';
import { theme } from '../../styles/theme';

describe('<Buttons />', () => {
  it('should render button default ', () => {
    renderTheme(
      <Buttons type="button" size="normal">
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button).toBeInTheDocument();
  });
  it('should render button big ', () => {
    renderTheme(
      <Buttons type="button" size="big" color="primary">
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button).toHaveStyle({
      width: '35rem',
      height: '4.2rem',
    });
  });
  it('should render button primary color ', () => {
    renderTheme(
      <Buttons type="button" size="normal" color="primary">
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button).toHaveStyle({
      color: theme.colors.secondaryColor,
      'background-color': theme.colors.primaryColor,
    });
  });
  it('should render button secondary color ', () => {
    renderTheme(
      <Buttons type="button" size="normal" color="secondary">
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button).toHaveStyle({
      color: theme.colors.primaryColor,
      'background-color': theme.colors.secondaryColor,
    });
  });
  it('should render button disabled color ', () => {
    renderTheme(
      <Buttons type="button" size="normal" color="disabled">
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button).toHaveStyle({
      background: 'none',
      color: theme.colors.primaryColor,
      border: '0.3rem solid #252A2C ',
    });
  });
  it('should render button with icon ', () => {
    renderTheme(
      <Buttons type="button" size="normal" color="disabled" icon={true}>
        texto
      </Buttons>,
    );
    const button = screen.getByRole('button', { name: 'texto' });
    expect(button.firstChild).toBeInTheDocument();
  });
});
