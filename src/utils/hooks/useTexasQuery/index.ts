import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { queryClient } from '@texas/providers/ReactQueryProvider'
import useQueryKeyStore from '@texas/utils/stores/queryKey'
import { QueryKeyStates } from '@texas/utils/stores/queryKey/types/states'

export default function useTexasQuery<K extends keyof QueryKeyStates>(key: K) {
  const q = useQueryKeyStore()
  return useQuery<Awaited<ReturnType<Exclude<QueryKeyStates[K]['queryFn'], undefined>>>>(
    q[key].queryKey,
  )
}

useTexasQuery.getData = <K extends keyof QueryKeyStates>(key: K) => {
  const q = useQueryKeyStore.getState()
  return queryClient.getQueryData(q[key].queryKey) as Awaited<
    ReturnType<Exclude<QueryKeyStates[K]['queryFn'], undefined>>
  >
}