import React from 'react';
import { Title, Subtitle } from './HeaderTitleElements';

interface Props {
  title: string;
  subtitle: string;
}

const HeaderTitle = ({ title, subtitle }: Props) => (
  <>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </>
);

export default HeaderTitle;
