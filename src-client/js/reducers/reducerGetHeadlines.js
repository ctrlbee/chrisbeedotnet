export function reducerGetHeadlines(state=[], action) {
  switch(action.type) {
    case 'ACTION_GETNEWSHEADLINES':
      return action.payload.data
    default:
      return state
  }
}
