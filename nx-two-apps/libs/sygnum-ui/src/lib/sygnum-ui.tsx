import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SygnumUiProps {}

const StyledSygnumUi = styled.div`
  color: pink;
`;

export function SygnumUi(props: SygnumUiProps) {
  return (
    <StyledSygnumUi>
      <h1>Welcome to SygnumUi!</h1>
    </StyledSygnumUi>
  );
}

export default SygnumUi;
