import { useRouter } from 'next/router';
import { useState } from 'react';

export function useLanguage() {
  const router = useRouter();

  const [lang, setLang] = useState(router.locale?.toLocaleUpperCase());
  return { lang, setLang };
}
