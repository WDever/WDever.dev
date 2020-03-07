import styled from 'styled-components';
import { pxToRem } from 'utils';
import { BaseInner } from 'utils/style';

export const Main = styled.main`
  width: 100%;

  margin-bottom: ${pxToRem(80)};
`;

// export const Inner = styled.div`
//   ${BaseInner}

//   /* margin: ${pxToRem(-28)} ${pxToRem(-39)}; */

//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

export const Inner = styled.div`
  ${BaseInner};

  display: grid;

  grid-template-columns: repeat(3, auto);
  grid-row-gap: ${pxToRem(56)};

  justify-content: space-between;
`;
