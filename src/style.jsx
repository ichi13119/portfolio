import { css } from 'styled-components';

export const PagePosition = css`
  position: relative;
  height: 100%;
`;

export const ContentPosition = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
export const TextPosition = css`
  font-size: 80px;
  letter-spacing: 3px;
  padding: 30px;
`;

export const BgColor = css`
  background: ${props => props.day ? 'white' : 'black' };
`;

export const Color = 
css`
  color: ${props => {return props.day ? 'green' : 'yellow' }};
`;

export const ContentContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%,-80%);
  width: 75%;
`;