import { addDecorator } from "@storybook/react";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
