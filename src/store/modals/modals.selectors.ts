import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getEventModalState = (state: State) => state[NameSpace.Modals].eventModal
