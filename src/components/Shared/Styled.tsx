import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  margin-top: 4em;
`;

const InfoMessage = styled.div`
  font-style: italic;
  padding: 4em 0;
  text-align: center;
  width: 100%;
`;

export const ErrorMessage = styled(InfoMessage)`
  color: #903131;
`;

export const NoResults = styled(InfoMessage)`
  color: ${(props) => props.theme.colors.backgrounds.primary};
`;
export const MainButton = styled.button`
  background-color: ${(props) => props.theme.colors.backgrounds.secondary};
  padding: 1em 3em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s color;

  &:hover {
    color: ${(props) => props.theme.colors.backgrounds.alternative};
  }
`;

export const SmoothThemeSwitch = `
  transition: 0.5s background-color, color;
`;
