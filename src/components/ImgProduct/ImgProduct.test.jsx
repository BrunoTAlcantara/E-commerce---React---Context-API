import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ImgProduct } from '.';
import { theme } from '../../styles/theme';

describe('<ImgProduct />', () => {
  it('should render img ', () => {
    renderTheme(<ImgProduct img="#target" alt="img" />);
    const image = screen.getByAltText('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '#target');
  });
  it('should render img big ', () => {
    renderTheme(<ImgProduct img="#target" alt="img" size="big" />);
    const image = screen.getByAltText('img');
    expect(image).toHaveStyle({ width: '56rem', height: '56rem' });
    expect(image).toHaveStyleRule('width', '30rem', {
      media: theme.media.lteMedium,
    });
    expect(image).toHaveStyleRule('height', '30rem', {
      media: theme.media.lteMedium,
    });
  });
  it('should render img normal ', () => {
    renderTheme(<ImgProduct img="#target" alt="img" size="normal" />);
    const image = screen.getByAltText('img');
    expect(image).toHaveStyle({ width: '30rem', height: '30rem' });
    expect(image).toHaveStyleRule('width', '20rem', {
      media: theme.media.lteMedium,
    });
    expect(image).toHaveStyleRule('height', '20rem', {
      media: theme.media.lteMedium,
    });
  });
  it('should render img small ', () => {
    renderTheme(<ImgProduct img="#target" alt="img" size="small" />);
    const image = screen.getByAltText('img');
    expect(image).toHaveStyle({ width: '8rem', height: '8rem' });
  });
});
