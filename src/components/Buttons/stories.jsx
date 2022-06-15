import { Buttons } from '.';

export default {
  title: 'Buttons',
  component: Buttons,
  args: {
    children: 'Buttons',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Buttons {...args} />
    </div>
  );
};
