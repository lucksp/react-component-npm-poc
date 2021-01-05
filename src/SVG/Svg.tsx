import React, { FC } from 'react';
import { SVGProps } from './Svg.types';
import { StyledSVG } from './Svg.css';

const SVG: FC<SVGProps> = ({ source, fillcolor }) => (
  <StyledSVG src={source} fillcolor={fillcolor} />
);

export { SVG };
