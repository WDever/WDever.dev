import styled from 'styled-components';
import { pxToRem } from 'utils';
import { media } from 'utils/style';
import { Wrapper as BaseWrapper } from '../tag-item/style';

export const Wrapper = styled(BaseWrapper)`
  margin: 0;
  margin-right: ${pxToRem(4)};

  ${media.phone} {
    display: none;
  }
`;
