import React from "react";
import {action} from "@storybook/addon-actions";
import styled from "styled-components/native";
import {withKnobs, text} from "@storybook/addon-knobs";

const ButtonContainer = styled.TouchableOpacity`
	width: 150px;
	height: 40px
	padding: 10px;
  border-radius: 5px;	
  border: 1px solid black;
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.disabled ? "0.3" : "1.0")};
  margin-left: 50px;
  margin-top: 50px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${(props) => props.textColor};
  text-align: center;
`;

const CustomButton = ({textColor, backgroundColor, text}) => (
  <ButtonContainer
    onPress={action("clicked")}
    backgroundColor={backgroundColor}
  >
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
);

export const RNButton = () => (
  <CustomButton
    textColor='white'
    backgroundColor='#C91F37'
    text={text("Label", "RN Web Btn")}
  />
);

export default {
  title: "Native Buttons",
  decorators: [withKnobs],
  parameters: {
    notes: "React native button using r-n-w",
  },
};
