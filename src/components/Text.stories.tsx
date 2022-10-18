import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Text Component",
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
