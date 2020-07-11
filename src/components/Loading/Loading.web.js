import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes} from "styled-components";
import {LoadingContainer} from "./Loading.styled";
import {black, bgBeige} from "../../utilities/palette";

const duration = "1.4s";
const offset = 187;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  /* stylelint-disable property-no-unknown */
  0% {
    stroke-offset: ${offset};
  }

  50% {
    stroke-dashoffset: ${offset / 4};
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: ${offset};
    transform: rotate(450deg);
  }
  /* styleline-enable property-no-unknown */
`;

const Spinner = styled.svg`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  animation: ${rotate} ${duration} linear infinite;
`;

const Circle = styled.circle`
  fill: none;
  stroke-dasharray: ${offset};
  stroke-dashoffset: ${offset};
  transform-origin: center;
  animation: ${dash} ${duration} ease-in-out infinite;
  stroke: ${(props) => (props.light ? bgBeige : black)};
`;

export const Loading = ({light, width, height, ...rest}) => (
  <LoadingContainer {...rest}>
    <Spinner width={width} height={height} viewBox='0 0 66 66'>
      <Circle
        className='path'
        fill='none'
        strokeWidth='6'
        strokeLinecap='round'
        cx='33'
        cy='33'
        r='30'
        light={light}
      />
    </Spinner>
  </LoadingContainer>
);

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  light: PropTypes.bool,
};

Loading.defaultProps = {
  width: 50,
  height: 50,
  light: false,
};
