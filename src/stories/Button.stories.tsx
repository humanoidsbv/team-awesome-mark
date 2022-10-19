// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import { withDesign } from "storybook-addon-designs";
import { Meta, Story } from "@storybook/react";

import { Button } from "../components/shared/button";
import * as Types from "../types/types";

export default {
  title: "Button",
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<Types.ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  disabled: false,
  hasAddIcon: true,
  variant: "primary",
  onClick: action("clicked"),
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lvXiiymHbNqLdfqyqNc5s5/team_awesome_dashboard?node-id=0%3A1",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary button",
  variant: "secondary",
  onClick: action("clicked"),
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lvXiiymHbNqLdfqyqNc5s5/team_awesome_dashboard?node-id=0%3A1",
  },
};
