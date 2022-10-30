import { useRouter } from 'next/router';

export function useRoute() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return {
    router,
    isHome,
  };
}
