import React from 'react';
import { Wrapper } from './HeaderDescriptionElements';

interface HeaderDescriptionProps {
  children: string;
}

const HeaderDescription = ({ children }: HeaderDescriptionProps) => <Wrapper>{children}</Wrapper>;

export default HeaderDescription;
