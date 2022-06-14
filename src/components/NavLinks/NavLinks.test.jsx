import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import links from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getAllByRole('link')).toHaveLength(links.length);
  });
  it('should not  render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
  it('should render links', () => {
    renderTheme(<NavLinks links={links} />);
    expect(screen.getByText(/link2/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={links} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
