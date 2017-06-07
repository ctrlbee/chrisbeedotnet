export function reducerGetNewsSources(state=[], action) {
  console.log('action.payload in reducer', action.payload);
  switch(action.type) {
    case 'ACTION_GETNEWSSOURCES':
      return action.payload.data.sources
    default:
      return state
  }
}
