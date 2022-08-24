import { ImageNull } from './../core/constants/enum';
export class MLinkApp {
  address?: string;
  hotline?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
  youtubeLink?: string;
  arrayBanner?: Array<string>;
  constructor(param: any) {
    this.address = param?.address || '';
    this.hotline = param?.hotline || '';
    this.appStoreLink = param?.appStoreLink || '';
    this.playStoreLink = param?.playStoreLink || '';
    this.facebookLink = param?.facebookLink || '';
    this.instagramLink = param?.instagramLink || '';
    this.twitterLink = param?.twitterLink || '';
    this.youtubeLink = param?.youtubeLink || '';
    this.arrayBanner = [
      param?.firstBannerImage || ImageNull,
      param?.secondBannerImage || ImageNull,
      param?.thirdBannerImage || ImageNull,
    ];
  }
}
