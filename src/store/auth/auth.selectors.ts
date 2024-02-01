import { type State } from 'src/types/state'

import { NameSpace } from 'src/helpers/consts'

export const getCurrentUser = (state: State) => state[NameSpace.Auth].currentUser
