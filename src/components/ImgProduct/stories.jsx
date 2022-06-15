import { ImgProduct } from '.';

export default {
  title: 'ImgProduct',
  component: ImgProduct,
  args: {
    children: 'ImgProduct',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ImgProduct {...args} />
    </div>
  );
};
