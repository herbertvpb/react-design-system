import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextField, TextFieldRootProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField.Root,
  args: {
    children: [
      <TextField.Icon>
        <Envelope />
      </TextField.Icon>,
      <TextField.Input placeholder="Email input placeholder" />,
    ],
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
    children: <TextField.Input placeholder="Text input placeholder" disabled />,
  },
};
