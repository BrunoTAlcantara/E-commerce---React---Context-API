import { IconsLink } from '.';

export default {
  title: 'IconsLink',
  component: IconsLink,
  args: {
    User: 'User',
    Cart: 'Cart',
  },
  argTypes: {
    User: { type: 'string' },
    Cart: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <IconsLink {...args} />
    </div>
  );
};
