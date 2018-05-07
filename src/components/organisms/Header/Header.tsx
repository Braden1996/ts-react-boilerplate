import styled from '@theme';

export default styled.header`
  width: 100%;
  height: ${p => p.theme.dimensions.mult(18)}px;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.silver};
`;
