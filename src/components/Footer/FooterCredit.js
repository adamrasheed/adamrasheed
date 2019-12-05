import styled from 'styled-components';
import { MediaScreen } from '../../utils/styles';
import { fontSize, font } from '../../utils/Typography';

const FooterCredit = styled.div`
  margin-bottom: 1rem;
  font-family: ${font.body};
  font-size: ${fontSize.small};

  @media screen and (min-width: ${MediaScreen['screen-med']}) {
    margin-bottom: 0;
  }
`;

export default FooterCredit;
