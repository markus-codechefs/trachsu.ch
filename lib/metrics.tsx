import 'server-only';

import { Octokit } from '@octokit/rest';
import { cache } from 'react';

export const getStarCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'markus-codechefs',
    repo: 'trachsu.ch',
  });

  return req.data.stargazers_count;
});
