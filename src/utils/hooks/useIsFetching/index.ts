import { queryClient } from '@texas/providers/ReactQueryProvider'
import useQueryKeyStore from '@texas/utils/stores/queryKey'
import { QueryKeyStates } from '@texas/utils/stores/queryKey/types/states'
import _ from 'lodash'

export default function useIsFetching(...queryKeys: (keyof QueryKeyStates)[]) {
  const q = useQueryKeyStore()
  const isFetchings = queryKeys.map((e) => queryClient.isFetching(q[e].queryKey))

  return _.sum(isFetchings) > 0
}
