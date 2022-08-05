import React from 'react';
import { Title, Subtitle } from './HeaderTitleElements';

interface HeaderTitleProps {
  title: string;
  subtitle: string;
}

const HeaderTitle = ({ title, subtitle }: HeaderTitleProps) => (
  <>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </>
);

export default HeaderTitle;
