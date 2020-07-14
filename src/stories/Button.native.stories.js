import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import CustomButton from "../components/Button/Button.native";

export const RNButton = () => (
  <CustomButton
    onPress={action("clicked")}
    textColor="white"
    backgroundColor="#C91F37"
  >
    {text("Label", "Native-Web Btn")}
  </CustomButton>
);

export default {
  title: "Native Buttons",
  decorators: [withKnobs],
  parameters: {
    notes: "React native button using r-n-w"
  }
};
