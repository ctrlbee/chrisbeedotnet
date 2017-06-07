export function actionGeneric(state=null, action) {
  switch(action.type) {
    case 'ACTION_GENERIC':
      return action.payload
  }
  return state;
}
