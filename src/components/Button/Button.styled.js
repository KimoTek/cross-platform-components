const white = 'white';
const green = 'green';

const baseButtonStyles = `
  border-radius: 10px;
  font-family: 'DM Sans';
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  padding: 10px 16px;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 600;
`;

export const ButtonStyle = `
  ${baseButtonStyles}
  background-color: ${green};
  border-color: ${green};
  color: ${white};
`;

export const SecondaryButtonStyle = `
  ${baseButtonStyles}
  background-color: transparent;
  border-color: ${green};
  color: ${green};
`;

export const DarkButtonStyle = `
  ${baseButtonStyles}
  background-color: black;
  border-color: black;
  color: white;
`;

export const SecondaryDarkButtonStyle = `
  ${baseButtonStyles}
  background-color: white;
  color: black;
  border-color: white;
`;
