import {
  type ModalContentProps,
  CloseButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ChakraType } from "constants/interface";
import { type ReactNode } from "react";

interface PopoverItemProps extends ModalContentProps {
  title?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onCloseOtherModal?: () => void;
  children?: ReactNode;
  p?: ChakraType;
  pHeader?: string;
  pBody?: ChakraType;
  bg?: string;
  top?: string;
  right?: string;
  isFixIcon?: boolean;
  closeBtnClass?: boolean;
}

export default function ModalItem({
  children,
  isOpen = false,
  onClose = () => ({}),
  bg,
  onCloseOtherModal = () => ({}),
  p = "16px",
  pBody,
  top,
  right,
  isFixIcon,
  closeBtnClass,
  ...props
}: PopoverItemProps) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => {
        onClose();
        onCloseOtherModal();
      }}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent
        bg={bg ?? "transparent"}
        borderRadius="16px"
        {...props}
        p={p}
        position="relative"
        boxShadow="unset"
      >
        <ModalCloseButton
          boxShadow="none !important"
          position={isFixIcon ? "sticky" : "absolute"}
          top={top ?? "16px"}
          left={isFixIcon ? "100%" : "unset"}
          right={right ?? "16px"}
          zIndex={999}
        >
          <CloseButton
            className={closeBtnClass ? "btnClose" : ""}
            color="#fff"
          />
        </ModalCloseButton>

        <ModalBody p={pBody}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
