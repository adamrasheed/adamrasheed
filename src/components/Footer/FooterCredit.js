import styled from 'styled-components';
import { MediaScreen } from 'src/utils/Styles';
import { fontSize, font } from 'src/utils/Typography';

const FooterCredit = styled.div`
  margin-bottom: 1rem;
  font-family: ${font.body};
  font-size: ${fontSize.small};

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 0;
  }
`;

export default FooterCredit;
