import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Wrapper as BaseWrapper } from '../tag-item/tag-item.style';

export const Wrapper = styled(BaseWrapper)`
  margin: 0;
  margin-right: ${pxToRem(4)};
`;
