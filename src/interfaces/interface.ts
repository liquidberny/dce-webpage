export interface Event {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:            number;
  documentId:    string;
  name:          string;
  description:   string;
  date:          Date;
  time:          string;
  createdAt:     Date;
  updatedAt:     Date;
  publishedAt:   Date;
  locale:        null;
  ubication:     string;
  cover:         number;
  images:        Image[];
  localizations: any[];
}

export interface Image {
  id:                number;
  documentId:        string;
  name:              string;
  alternativeText:   null;
  caption:           null;
  width:             number;
  height:            number;
  formats:           Formats;
  hash:              string;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  createdAt:         Date;
  updatedAt:         Date;
  publishedAt:       Date;
  locale:            null;
}

export enum EXT {
  PNG = ".png",
}

export interface Formats {
  thumbnail: Small;
  small:     Small;
}

export interface Small {
  name:        string;
  hash:        string;
  ext:         EXT;
  mime:        MIME;
  path:        null;
  width:       number;
  height:      number;
  size:        number;
  sizeInBytes: number;
  url:         string;
}

export enum MIME {
  ImagePNG = "image/png",
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
