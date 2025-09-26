import { SVGProps } from '@/types/svg';
import * as React from 'react';
const SVGComponent = (props: SVGProps) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m0 0v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719zm-13.279 13.281v10.719h10.719v-10.719zm13.279 0v10.719h10.719v-10.719z" />
  </svg>
);
export default SVGComponent;
