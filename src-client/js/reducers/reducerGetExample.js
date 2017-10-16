export function reducerGetExample(state=[], action) {
  switch(action.type) {
    case 'ACTION_GETEXAMPLE':
      return action.payload.data.sources
    default:
      return state
  }
}
