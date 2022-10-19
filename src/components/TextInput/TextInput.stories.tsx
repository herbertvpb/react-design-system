import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    placeholder: 'Text input placeholder',
    disabled: false,
  },
  argTypes: {
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  },
}
