import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render', () => {
    renderTheme(<TextComponent>oi</TextComponent>);
    expect(screen.getByText('oi')).toBeInTheDocument();
  });
  it('should render font-size ', () => {
    renderTheme(<TextComponent>oi</TextComponent>);
    expect(screen.getByText('oi')).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render font-size ', () => {
    renderTheme(<TextComponent>oi</TextComponent>);
    expect(screen.getByText('oi')).toHaveStyle({
      'font-weight': theme.font.weight.regular,
    });
  });
  it('should render font-size ', () => {
    const { container } = renderTheme(<TextComponent>oi</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      <p
        class="c0"
      >
        oi
      </p>
    `);
  });
});
