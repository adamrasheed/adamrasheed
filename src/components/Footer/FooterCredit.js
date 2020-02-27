import styled from 'styled-components';

const FooterCredit = styled.div`
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.font.body};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.mediaScreen['screen-med']}) {
    margin-bottom: 0;
  }
`;

export default FooterCredit;
