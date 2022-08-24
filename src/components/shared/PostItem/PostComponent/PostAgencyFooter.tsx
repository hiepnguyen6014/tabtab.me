import { MPostDetail } from "@models/MPostDetail";
import { IconDiscount } from "public/icons";
import React from "react";
import { PostItemFooter } from "../PostItem.style";

export const PostAgencyFooter: React.FC<{ post: MPostDetail,t:any }> = ({ post,t }) => {
  const {
    agencyPercent
  }= post
  const listInfo = [
    { icon: <IconDiscount />, value:t('common.commission') },
    { icon:<h3><strong>{agencyPercent} %</strong></h3>, value:" "}
  ];

  return (
    <PostItemFooter>
      {listInfo.map((item, key) =>
        item.value && item.icon ? (
          <span key={key}>
            {item.icon}
            <label>{item.value}</label>
          </span>
        ) : (
          <></>
        )
      )}
    </PostItemFooter>
  );
};
