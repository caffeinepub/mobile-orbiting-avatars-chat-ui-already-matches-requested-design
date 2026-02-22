import { useActor } from './useActor';

// This file is ready for backend integration when needed
// Currently the app is UI-only with no backend data requirements

export function useBackendReady() {
  const { actor, isFetching } = useActor();
  return { actor, isFetching };
}
