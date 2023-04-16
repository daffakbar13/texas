import { useQueries } from '@tanstack/react-query'
import useQueryKeyStore from '@texas/utils/stores/queryKey'
import { QueryKeyStates } from '@texas/utils/stores/queryKey/types/states'

export default function useIsFetching(...queryKeys: (keyof QueryKeyStates)[]) {
  const q = useQueryKeyStore()
  const queries = queryKeys.map((e) => q[e]) as any[]

  return useQueries({ queries })
    .map((e) => e.isFetching)
    .includes(true)
}
