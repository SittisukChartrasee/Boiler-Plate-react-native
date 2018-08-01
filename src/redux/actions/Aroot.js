
import { CH_ROOT } from '../rootTypes'
export const actionRoot = (value) => (dispatch) => dispatch({ type: CH_ROOT, value })
export const appInitialized = () => dispatch => dispatch(actionRoot('beforlogin'))
