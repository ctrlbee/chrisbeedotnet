export function reducerGetNewsSources(state=[], action) {
  switch(action.type) {
    case 'ACTION_GETNEWSSOURCES':
      return action.payload.data.sources
    default:
      return state
  }
}
