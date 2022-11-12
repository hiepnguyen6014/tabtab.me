import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';

export const ListWrapper = styled(props => <div {...props} />)`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  ${props =>
    props.nowrap == 'true' && {
      flexWrap: 'nowrap',
      overflow: 'auto',
      gap: '10px',
      justifyContent: 'flex-start !important',
      '& >div': {
        minWidth: '285px',
        margin: '0 !important',
      },
    }}
  width: 100%;
  grid-column-gap: 1%;
  row-gap: 20px;
  padding: 20px 0;
  @media ${device.maxLg} {
    grid-template-columns: 33% 33% 33%;
  }
  @media ${device.maxMd} {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.common};
    }
    &::-webkit-scrollbar-track {
      background-color: #ecf0f1;
    }
    & > div {
      min-width: 275px;
    }
  }
`;
