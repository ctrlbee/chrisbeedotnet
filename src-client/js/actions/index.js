import axios from 'axios';

export function actionGetNewsSources() {
  const url = `https://newsapi.org/v1/sources?language=en`;
  const req = axios.get(url);

    return {
      type: 'ACTION_GETNEWSSOURCES',
      payload: req
    };
}

export function actionGetNewsHeadlines(newsid) {
  const url = `https://newsapi.org/v1/articles?source=${newsid}&sortBy=top&apiKey=586c88e6471c4e138fe2233dd03250b5`;
  const req = axios.get(url);

    return {
      type: 'ACTION_GETNEWSHEADLINES',
      payload: req
    };
}
