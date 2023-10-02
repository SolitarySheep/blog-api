import { articles } from './types';

import { useStorage } from '#imports';

export default defineEventHandler(async () => {
  const articles: articles = await useStorage('assets:server').getItem(
    `db/articles.json`
  );

  return articles;
});
