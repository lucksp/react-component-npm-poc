import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

interface SvgRenderProps {
  readonly fillcolor?: string;
}

export const StyledSVG = styled(ReactSVG)<SvgRenderProps>`
  margin-left: 8px;

  svg {
    display: flex;
    fill: ${p => `#${p.fillcolor};`};
    height: 16px;
    width: 16px;
  }
`;
