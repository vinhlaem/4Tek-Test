import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends FlexProps {
  children?: ReactNode;
}
const FlexBox = ({ children, ...props }: Props) => {
  return (
    <Flex alignItems='center' justifyContent='center' {...props}>
      {children}
    </Flex>
  );
};

export default FlexBox;
