import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ILoadingProps {
  mt?: number;
  textAlign?: 'center' | 'left' | 'right';
  size?: number;
}

const Loading = (props: ILoadingProps) => {
  const { mt = 2, size = 24, textAlign = 'center' } = props;
  return (
    <Box textAlign={textAlign} mt={mt}>
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loading;
