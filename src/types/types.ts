import { IconProp } from '@fortawesome/fontawesome-svg-core';

type technologies =
  | 'html'
  | 'css'
  | 'sass'
  | 'styled-components'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'redux'
  | 'npm'
  | 'git';

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

export interface IHeaderContent {
  title: string;
  subtitle: string;
  description: string;
}

export interface IContactLink {
  name: string;
  link: string;
  icon: IconProp;
}

export interface IIconItem {
  name: technologies;
  src: string;
}

export interface IProject {
  name: string;
  note: string;
  liveLink?: string;
  codeLink?: string;
  technologies?: technologies[];
  image: string;
}
