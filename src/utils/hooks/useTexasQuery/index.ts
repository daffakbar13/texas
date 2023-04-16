import { UseQueryResult, useQuery } from '@tanstack/react-query'
import useQueryKeyStore from '@texas/utils/stores/queryKey'
import { QueryKeyStates } from '@texas/utils/stores/queryKey/types/states'

export default function useTexasQuery<Q extends QueryKeyStates, K extends keyof QueryKeyStates>(
  key: K,
) {
  const q = useQueryKeyStore()
  return useQuery(q[key].queryKey as Exclude<Q[K]['queryKey'], undefined>) as UseQueryResult<
    Awaited<ReturnType<Exclude<Q[K]['queryFn'], undefined>>>
  >
}
