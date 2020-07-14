import styled from 'styled-components/native';
import React from 'react';
import PropTypes from 'prop-types';

const ButtonContainer = styled.TouchableOpacity`
    width: 150px;
    height: 40px
    padding: 10px;
    border-radius: 5px;	
    border: 1px solid black;
    background-color: ${(props) => props.backgroundColor};
    opacity: ${(props) => (props.disabled ? '0.3' : '1.0')};
    margin-left: 50px;
    margin-top: 50px;
`;

const ButtonText = styled.Text`
font-size: 15px;
color: ${(props) => props.textColor};
text-align: center;
`;

const CustomButton = ({ textColor, backgroundColor, children }) => (
  <ButtonContainer
    backgroundColor={backgroundColor}
  >
    <ButtonText textColor={textColor}>{children}</ButtonText>
  </ButtonContainer>
);

CustomButton.propTypes = {
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default CustomButton;
