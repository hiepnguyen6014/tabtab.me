import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { AutoComplete, Button, Input, Select, Tag, Typography } from 'antd';

export const PageContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const ContentHeaderWrapper = styled.div`
  background-color: #fff;
  margin: 0px;
  padding: 25px 15px 15px 25px;

  .btn-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  .ant-breadcrumb-link {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #7a7a7a !important;

    & > a {
      color: #7a7a7a !important;
    }
  }
  .ant-steps {
    justify-content: flex-end;
    & > :nth-child(n + 1) {
      padding-left: 5px;
    }
  }
  .ant-steps-item {
    display: flex;
    flex: none;
  }
  .ant-steps-item-content {
    display: none;
  }
  .ant-steps-icon {
    display: none;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #f9c41f;
    border: none;
  }

  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #f9c41f;
    border: none;
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    background-color: #e9e9e9;
    border: none;
  }

  @media screen and (max-width: 992.5px) {
    margin-left: 0px;
  }
`;
export const AutoCompleteWrap = styled(AutoComplete)`
  width: 100% !important;
  box-shadow: transparent;
  border-color: none;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 550;
  color: #a7a7a7;
  text-align: start;
  padding: 0px 10px;
  .ant-select-selection-search-input {
    display: flex;
    width: 100%;
    border: none;
  }
  .ant-select-selector {
    border: none !important;
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
`;
export const LocateAutoComplete = styled(AutoComplete)`
  width: 100% !important;
  box-shadow: transparent;
  border-color: none;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 550;
  color: #a7a7a7;
  text-align: start;
  padding: 5px 10px;
  .ant-select-selection-search-input {
    display: flex;
    width: 100%;
    border: none;
  }
  .ant-select-selector {
    border: none !important;
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
`;
export const Location3 = styled.div`
  border: 1px solid #39b4f333;
  border-radius: 12px;
  background-color: #39b4f31a;
  width: 282px;
`;
export const SelectWrap = styled(Select)`
  width: 100% !important;
  box-shadow: transparent;
  border-color: none;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 550;
  color: #a7a7a7;
  text-align: start;
  padding: 0px 10px;
`;
export const LocateSelect = styled(Select)`
  width: 100% !important;
  box-shadow: transparent;
  border-color: none;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 550;
  color: #a7a7a7;
  text-align: start;
  padding: 4px 10px;
`;
export const AddListingWrapper = styled.div`
  .fieldsetinput {
    border-width: 1px;
    border-style: solid;
    border-color: #d3d3d3;
    color: #080808;
    border-radius: 12px;
    margin: 2em 0em;
    // padding:0 10px 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: -30px;
    padding-bottom: -30px;
    height: 52px;
  }
  .fieldsetinput:focus {
    border-color: #f9c41f !important;
  }
  .legend {
    transform: translatey(-50%);
    width: max-content;
    background: white;
    padding: 0 5px;
  }
  .ant-btn:focus {
    color: #fff;
    background-color: #f9c41f !important;
    border: 1px solid #f9c41f;
  }

  .ant-btn:not(.disable-custom-btn) {
    &:not(.disable-hover):hover {
      background-color: #f9c41f !important;
      color: #fff !important;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border: 1px solid #f0f0f0;
      box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);

      svg {
        path {
          fill: #fff;
          transition: all 0.2s ease;
        }
      }
    }
  }

  .ant-radio-button-wrapper {
    border-left-width: 1px !important;

    &:hover {
      color: #fff;
    }

    ant-radio-button-wrapper:checked {
      color: #fff !important;
      border-color: #fff !important;

      &::before {
        background-color: #fff !important;
      }
    }

    &:not(first-child) {
      &::before {
        width: 0px !important;
      }
    }
  }

  .ant-radio-button-wrapper-checked {
    background: #f9c41f !important;
    border-color: #f9c41f !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #f9c41f !important;
    border-color: #f9c41f !important;
  }
`;

export const BoardCard = styled.div`
  background: #f9c41f;
  border-radius: 24px;
  width: 435px;
  height: 124px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .circle {
    border-radius: 50%;
    background-color: #fff;
    width: 60px;
    height: 60px;
  }
  .board-text {
    width: 293px;
  }
`;
export const LocateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ButtonNextStep = styled(Button)`
  background-color: #f9c41f;
  background: #f9c41f !important;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border: 1px solid #d54640;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background-color: #f9c41f;
    color: white;
  }
`;
export const ContainerInfo = styled.div`
  margin-top: 24px;
  margin-right: 12px;
  margin-left: 12px;
  @media ${device.maxLg} {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media ${device.maxMd} {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const BoxSelectWrap = styled.div`
  border: 1px solid #d3d3d3;
  padding: 13px 6px 4px 0px;
  height: 52px;
  width: 100%;
  border-radius: 12px;
`;
export const AreaInputWrap = styled(Input.TextArea)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  border-radius: 0px 0px 12px 12px;
  color: #a7a7a7;
`;
export const ButtonDocumentWrap = styled(Button)`
  border: 1px solid #d3d3d3 !important;
  background: #ffffff !important;
  border-radius: 8px !important;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #7a7a7a;
  &:focus {
    color: #222222 !important;
    background: #f9c41f !important;
  }
  &:hover {
    background: #f9c41f !important;
  }
`;
export const UtiliteStyle = styled(Tag)`
  border: 1px solid #d3d3d3;
  border-radius: 26px;
  padding: 10px 15px 10px 15px;
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-top: 12px;
  cursor: pointer;
`;
export const BorderImage = styled.div`
  border: 1px solid #f9c41f;
  border-radius: 12px;
  background: #f9c41f0d;
  padding: 32px 15% 75px 15%;
`;
export const UploadFileWrapper = styled.div`
  .ant-btn:hover,
  .ant-btn:focus {
    background-color: #f9c41f !important;
  }
`;
export const ButtonCustom = styled(Button)`
  padding: 10px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #e9e9e9 !important;
  border-color: #e9e9e9;
  cursor: pointer;
`;
export const BackgroundLinear = styled.div`
  background: linear-gradient(to top, #f9af1f, #f9c91f);
  padding: 24px 48px 24px 24px;
  border-radius: 24px;
  margin-right: 12px;
  margin-left: 12px;
  height: 200px;
  @media ${device.maxLg} {
    height: auto;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media ${device.maxMd} {
    height: auto;
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const PostWrapper = styled.div`
  height: 100%;
  width: 588px;
  max-width: 100%;
  margin-top: 0px;
  font-size: 100% !important;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);
  transition: all 0.2s ease;
  cursor: pointer;
  [role='separator'] {
    margin: 0;
  }
  [role='row-post'] {
    padding: 9px 12px;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  }
  @media ${device.maxLg} {
    height: 450px;
    width: 100%;
  }
  @media ${device.maxMd} {
    height: auto;
    width: 100%;
  }
`;
export const PostThumbnailWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  position: relative;
  object-fit: contain;
  object-position: center;
  img {
    width: 100%;
    height: 300px;
  }
`;
export const ContentInItemPost = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  @media ${device.maxMd} {
    bottom: 5%;
  }
`;
export const TypographyText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .price {
    font-size: 20px;
    line-height: 28px;
    color: #ff8800;
    font-weight: 700;
  }
  .wasPrice {
    font-size: 16px;
    line-height: 19px;
    color: #7a7a7a;
    font-weight: 500;
    text-decoration-line: line-through;
  }
  .detailPost {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }
  .addressPost {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7a7a7a;
  }
  .textPostMiddle {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-left: 5px;
  }
  .subTitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #7a7a7a;
    margin-left: 5px;
  }
  .linkShowPost {
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #000000;
  }
  .category {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4e4e4e;
  }
  .inContentItem {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
`;

export const ContentInItem = styled.div`
  width: 93%;
  margin: auto;
  text-align: left;
  @media ${device.maxLg} {
    width: 95%;
  }
  .pad-top {
    display: flex;
    justify-content: space-between;
  }
  .pad-bottom {
    @media ${device.maxMd} {
      margin-bottom: 70px;
    }
  }
  .icon-text1 {
    position: absolute;
    top: 80px;
    right: 0;
    width: 0px;
    height: 0px;
    background: '#FFFFFF';
    border-radius: '4px';
    width: 118;
    height: 24;
  }
  .icon-text2 {
  }
`;

export const PostContent = styled.div`
  height: 100%;
`;

export const PostTitle = styled.div`
  padding: 9px 12px;
  /* font-size: 14px; */
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 0;
    color: #222222;
    line-height: 20px;
    svg {
      margin-right: 5px;
    }
  }
  .wrap-post {
    min-height: 90px;
    @media ${device.maxSm} {
      min-height: auto;
    }
  }
`;

export const PostMiddle = styled.div`
  padding: 9px 9px;
  display: flex;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`;

export const PostMiddleFooter = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  h1 {
    font-size: 15px;
    font-weight: 600;
    max-width: 120px;
    color: #d54640;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const DetailItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  padding: 0 10px;
  /* margin-top: 24px; */
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
  }
  .item:nth-of-type(2) {
    margin-left: -11px;
  }
  .item:nth-of-type(5) {
    margin-left: -11px;
  }
  .item:nth-of-type(3) {
    margin-left: -25px;
  }
  .item:nth-of-type(6) {
    margin-left: -25px;
  }
  .item-content {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #4e4e4e;
    margin-left: 10px;
  }
`;
export const Vip1Image = styled.div`
  img {
    width: 588px !important;
    height: 250px !important;
  }
  @media ${device.maxSm} {
    img {
      width: 342px !important;
      height: 228px !important;
    }
  }
`;
export const Vip2Wrapper = styled.div`
  width: 588px;
  height: 304px;
  display: flex;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);
  border-radius: 8px;
  margin-top: 35px;
`;
export const PostTypeWrapper = styled.div`
  .ant-radio-button-wrapper:hover {
    color: #333 !important;
  }
`;
export const Vip3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 490px;
  max-width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease;
  cursor: pointer;
  margin-left: 22em;

  @media ${device.minSm} {
    &:hover {
      transform: scale(1.05);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px,
        rgba(0, 0, 0, 0.1) 0px 6px 6px;
    }
  }
  @media ${device.maxSm} {
    height: auto;
    width: 100%;
  }
`;
export const NormalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 415px;
  max-width: 100%;
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease;
  cursor: pointer;
  margin-left: 22em;

  @media ${device.minSm} {
    &:hover {
      transform: scale(1.05);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px,
        rgba(0, 0, 0, 0.1) 0px 6px 6px;
    }
  }
  @media ${device.maxSm} {
    height: auto;
    width: 100%;
  }
`;
