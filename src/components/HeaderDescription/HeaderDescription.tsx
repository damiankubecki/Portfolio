import React from 'react';
import { Wrapper } from './HeaderDescriptionElements';

interface Props {
  children: string;
}

const HeaderDescription = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default HeaderDescription;
