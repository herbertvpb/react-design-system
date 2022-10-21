import { Meta, StoryObj } from "@storybook/react";
import {
  TextField,
  TextFieldInputProps,
  TextFieldRootProps,
} from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField.Root,
  args: {
    children: (
      <TextField.Input placeholder="Text input placeholder" />
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextFieldRootProps>;

export const Default: StoryObj<TextFieldRootProps> = {};

export const Disabled: StoryObj<TextFieldRootProps> = {
  args: {
    children: (
      <TextField.Input placeholder="Text input placeholder" disabled />
    ),
  },
};
