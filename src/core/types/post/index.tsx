export interface IRequestCommentPost {
  targetId: string | number;
  content: string;
}

export interface IGeneral {
  generalInformationId?:number;
  aboutUs?:any;
  questionAndAnwser?:any;
  generalRule?:any;
  updatedAt?:any
}

export interface IMediaItem {
  id?: string;
  originalFilename?: string;
  contentType?: string;
  cdnOrigin?: string;
  cdnLarge?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  guid?: string;
  width?: number;
  height?: number;
}

export interface IMedia {
  order?: number;
  id?: string;
  originalFilename?: string;
  contentType?: string;
  url?: string;
  uploadDate?: number;
  external?: boolean;
  cdnOrigin?: string;
  cdnLarge?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  typeOfMedia?: number;
  guid?: string;
  width?: number;
  height?: number;
  media?: any;
  thumbnail?: IMediaItem;
  coordinateX?: number;
  coordinateY?: number;
}

export interface IMedias {
  media?: IMedia;
  order?: number;
}
