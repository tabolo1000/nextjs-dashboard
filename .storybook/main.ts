import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-onboarding", // водный курс по использованию
    "@storybook/addon-essentials", // включает addon-(actions|controls|addon-docs|viewport|backgrounds|toolbars|measure|outline)
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs", // адаптер для фреймворка
    options: {},
  },
  staticDirs: ["..\\public"],  // статичная папка где можно все взять
};
export default config;
