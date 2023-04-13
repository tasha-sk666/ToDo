import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
// import { Theme } from '@/shared/const/theme';


const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
  };
  
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
      children: 'Text',
    },
  };
export const Outline: Story = {
    args: {
      children: 'Text',
      theme: ButtonTheme.OUTLINE_RED,
      size: ButtonSize.M
    },
  };

// Outline.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
// };
// export const Primary = Template.bind({});
// Primary.args = {
//     children: 'Text',
// };

// export const Clear = Template.bind({});
// Clear.args = {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR,
// };

// export const ClearInverted = Template.bind({});
// ClearInverted.args = {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR_INVERTED,
// };

// export const Outline = Template.bind({});
// Outline.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
// };

// export const OutlineSizeL = Template.bind({});
// OutlineSizeL.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.L,
// };

// export const OutlineSizeXl = Template.bind({});
// OutlineSizeXl.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.XL,
// };

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND,
// };

// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
// };

// export const Squate = Template.bind({});
// Squate.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
// };

// export const SquateSizeL = Template.bind({});
// SquateSizeL.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
// };

// export const SquateSizeXl = Template.bind({});
// SquateSizeXl.args = {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//     children: '>',
//     theme: ButtonTheme.OUTLINE,
//     square: true,
//     disabled: true,
// };