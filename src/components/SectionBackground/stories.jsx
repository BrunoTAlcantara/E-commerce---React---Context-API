import { SectionBackground } from '.';

export default {
  title: 'SectionBackground ',
  component: SectionBackground,
  args: {
    children: 'SectionBackground ',
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
