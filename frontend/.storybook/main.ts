import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config!.resolve!.modules!.push(path.resolve(__dirname, '..', 'src'));
    config!.module!.rules!.push({
      include: path.resolve(__dirname, '..', 'src'),
    });
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': path.resolve(__dirname, '..', 'src'),
    };

    // Return the altered config
    return config;
  },
};
export default config;
