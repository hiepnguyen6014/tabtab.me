import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Col, Image, Row } from 'antd';

// PROJECT, AGENCY
export const PostWrapper = styled.div`
  height: 378px;
  /* min-width: 280px; */
  width: 100%;
  max-width: 290px;
  margin: auto;
  font-size: 100% !important;
  /* max-width:280px; */
  border-radius: 12px;
  background-color: #fff;
  border: 2px solid #f0f0f0;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);
  transition: all.2s ease;
  cursor: pointer;
  [role='separator'] {
    margin: 0;
  }
  [role='row-post'] {
    padding: 9px 12px;
    /* font-size: 100%; */
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  }
  @media ${device.maxLg} {
    height: 350px;
  }
`;
export const PostContent = styled.div`
  height: 100%;
`;

export const PostThumbnailWrapper = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  object-position: center;
`;

export const PostThumbnailTop = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
`;
export const TagProperty = styled(PostThumbnailTop)`
  height: 22px;
  left: 3%;
  padding: 0 8px;
  text-transform: uppercase;
  line-height: 24px;
  font-size: 12px;
  color: #fff;
  /* font-size: 12px; */
  border-radius: 2px;
`;

export const PostThumbnailSave = styled(PostThumbnailTop)`
  right: 3% !important;
  cursor: pointer;
  svg {
    transform: scale(0.9) !important;
  }
  [type='empty'] {
    path {
      transition: all 0.3s ease;
      fill: #fff !important;
    }
  }
  &:hover {
    path {
      fill: ${colors.common} !important;
    }
  }
`;

export const PostThumbnailDate = styled.div`
  height: 22px;
  line-height: 22px;
  padding: 0 8px;
  /* font-size: 12px; */
  background: rgba(34, 34, 34, 0.5);
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
`;

export const PostTitle = styled.div`
  padding: 9px 12px;
  /* font-size: 14px; */
  height: 26%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 0;
    color: #222222;
    opacity: 0.8;
    line-height: 20px;
    svg {
      margin-right: 5px;
    }
  }
`;

// MIDDLE
export const PostMiddle = styled.div`
  padding: 9px 12px;
  display: flex;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const PostMiddleItem = styled.div`
  display: flex;
  gap: 5px;
  height: 100%;
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

// FOOTER
export const PostItemFooter = styled.div`
  display: flex;
  height: 12%;
  justify-content: space-between;
  align-items: center;
  padding: 9px 12px;
  span {
    height: 14px;
    display: flex;
    align-items: center;
    label {
      margin: 0;
      margin-left: 5px;
    }
  }
`;

// HOT NEWS

export const RowItem = styled(Row)`
  min-height: 150px;
  width: 100%;
  cursor: pointer;
`;
export const ColItem = styled(Col)`
  height: 150px;
`;

export const WrapPic = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  object-fit: contain;
  object-position: center;
  height: 100%;
  width: 100%;
  background-color: black;
`;

export const ItemDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #767676;
  svg > path {
    fill: #767676;
  }
`;
export const ColItemImage = styled(Image)`
  height: 100%;
  width: 100%;
`;
