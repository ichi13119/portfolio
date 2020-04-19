import React from 'react';
import styled from "styled-components";
import InViewMonitor from "react-inview-monitor";

export const Up = ({
  children,
  delay,
  margin = "20px" 
}) => (
  <InViewMonitor
    childPropsInView={{ isActive: true }} intoViewMargin={margin}>
      <FadeInUp
        isActive={false}
        delay={delay}>
          {children}
      </FadeInUp>
  </InViewMonitor>
);

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`;

const FadeInUp = styled(FadeIn)`
  transform: translateY(20px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;