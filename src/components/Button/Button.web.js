import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ButtonStyle,
  SecondaryButtonStyle,
  DarkButtonStyle,
  SecondaryDarkButtonStyle
} from './Button.styled';
import { green, darkGreen, white } from '../../utilities/palette';
import { Loading } from '../Loading/Loading.web';

const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  text-transform: uppercase;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1.0')};
  ${ButtonStyle}
  ${(props) => (!props.disabled
    ? `&:hover {
    opacity: 0.9;
  }`
    : '')}
  &:active {
    background-color: ${darkGreen};
  }
`;

const StyledButtonSecondary = styled(StyledButton)`
  ${SecondaryButtonStyle}
  ${(props) => (!props.disabled
    ? `&:hover {
    background-color: ${green};
    color: ${white};
    opacity: 1.0;
  }`
    : '')}
`;

const StyledDarkButton = styled(StyledButton)`
  ${DarkButtonStyle}
  ${(props) => (!props.disabled
    ? `
    &:hover {
      background-color: white;
      color: black;
    }
    &:active {
      background-color: white;
      color: black;
    }
  `
    : '')}
`;

const StyledSecondaryDarkButton = styled(StyledButton)`
  ${SecondaryDarkButtonStyle}
  ${(props) => (!props.disabled
    ? `
    &:hover {
      background-color: white;
      color: black;
    }
    &:active {
      background-color: white;
      color: black;
    }
  `
    : '')}
`;

const LoadingSpinner = styled(Loading)`
  display: inline-flex;
`;

const defaultProps = {
  disabled: false,
  loading: false
};

const propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const Button = (props) => {
  const {
    disabled, loading, children, ...rest
  } = props;
  return (
    <StyledButton disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner width={10} height={10} />}
      {loading && <span>&nbsp;</span>}
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export const ButtonSecondary = (props) => {
  const {
    disabled, loading, children, ...rest
  } = props;
  return (
    <StyledButtonSecondary disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner width={10} height={10} />}
      {loading && <span>&nbsp;</span>}
      {loading ? 'Loading...' : children}
    </StyledButtonSecondary>
  );
};

ButtonSecondary.defaultProps = defaultProps;
ButtonSecondary.propTypes = propTypes;

export const DarkButton = (props) => {
  const {
    disabled, loading, children, ...rest
  } = props;
  return (
    <StyledDarkButton disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner width={10} height={10} light />}
      {loading && <span>&nbsp;</span>}
      {loading ? 'Loading...' : children}
    </StyledDarkButton>
  );
};

DarkButton.defaultProps = defaultProps;
DarkButton.propTypes = propTypes;

export const SecondaryDarkButton = (props) => {
  const {
    disabled, loading, children, ...rest
  } = props;
  return (
    <StyledSecondaryDarkButton disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner width={10} height={10} />}
      {loading && <span>&nbsp;</span>}
      {loading ? 'Loading...' : children}
    </StyledSecondaryDarkButton>
  );
};

SecondaryDarkButton.defaultProps = defaultProps;
SecondaryDarkButton.propTypes = propTypes;
