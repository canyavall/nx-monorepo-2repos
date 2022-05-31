import { Story, Meta } from '@storybook/react';
import { SygnumUi, SygnumUiProps } from './sygnum-ui';

export default {
  component: SygnumUi,
  title: 'SygnumUi',
} as Meta;

const Template: Story<SygnumUiProps> = (args) => <SygnumUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
