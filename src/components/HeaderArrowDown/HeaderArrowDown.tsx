import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { useTheme } from 'styled-components';
import { ITheme } from 'types/types';
import { Wrapper } from './HeaderArrowDownElements';

interface HeaderArrowDownProps {
  handleClick: () => void;
}

const HeaderArrowDown = ({ handleClick }: HeaderArrowDownProps) => {
  const { Icon } = useFontAwesome();
  const theme = useTheme() as ITheme;

  return (
    <Wrapper onClick={handleClick}>
      <Icon color={theme.additional} size="3x" icon={['fas', 'angles-down']} />
    </Wrapper>
  );
};

export default HeaderArrowDown;
