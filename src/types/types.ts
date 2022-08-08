import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ITheme {
  primary: string;
  secondary: string;
  additional: string;
  fontColor: string;
  lightFont: number;
  semiFont: number;
  boldFont: number;
  fontSize: object;
}

export interface IContactLink {
  name: string;
  link: string;
  icon: IconProp;
}

export interface IIconItem {
  name: string;
  src: string;
}
