import { Box } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useState } from 'react';

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;
  return <Box>{children}</Box>;
}
