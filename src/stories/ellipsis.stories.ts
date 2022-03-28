import { Meta, Story } from '@storybook/angular';

import { EllipsisComponent } from './ellipsis/ellipsis.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Ellipsis',
  component: EllipsisComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Ellipsis',
    primary: true,
  },
});