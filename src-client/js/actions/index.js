import axios from 'axios';

export function actionGetExample() {
  const url = `https://newsapi.org/v1/sources?language=en`;
  const req = axios.get(url);

    return {
      type: 'ACTION_GETEXAMPLE',
      payload: req
    };
}
