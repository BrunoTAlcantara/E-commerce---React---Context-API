import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { IconsLink } from '.';

describe('<IconsLink />', () => {
  it('should render Buttons', () => {
    renderTheme(<IconsLink User="google.com" Cart="google.com" />);
    expect(screen.getByLabelText('Button User')).toBeInTheDocument;
    expect(screen.getByLabelText('Button Cart')).toBeInTheDocument;
  });
  it('should to match snapshot', () => {
    const { container } = renderTheme(
      <IconsLink User="google.com" Cart="google.com" />,
    );

    expect(screen.container).toMatchSnapshot();
  });
});
