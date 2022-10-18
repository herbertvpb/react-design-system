import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text Component",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    children: "Small Text Component",
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    children: "Large Text Component",
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Custom Component</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
