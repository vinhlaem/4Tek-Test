import {
  Box,
  PlacementWithLogical,
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

interface PopoverItemProps extends PopoverContentProps {
  buttonItem?: ReactNode;
  children?: ReactNode;
  isDetail?: boolean;
  isSelect?: boolean;
  placement?: PlacementWithLogical;
  callback?: (val: boolean) => void;
}

export default function PopoverItem({
  buttonItem,
  children,
  isSelect,
  placement,
  ...props
}: PopoverItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isSelect) {
      close();
    }
  }, [isOpen, isSelect]);

  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onOpen={open}
      placement={placement ?? "bottom"}
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <Box onClick={close}>{buttonItem}</Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          {...props}
          borderColor="#e3e3e4"
          // onClick={handleClose}
          zIndex={999}
          bg="#fff"
          boxShadow="0px 2px 14px rgba(0, 0, 0, 0.16), 0px 16px 40px rgba(0, 0, 0, 0.16)"
        >
          {children}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
