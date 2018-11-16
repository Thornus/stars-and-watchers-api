const axios = require('axios');
const _ = require('lodash');

async function getTrendingRepos(req, res) {
  const today = new Date().toISOString().substring(0, 10);

  try {
    let {data: {items: repos}} = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: `created:>=${today}`,
        sort: 'stars',
        order: 'desc'
      }
    });

    if(_.get(req, 'query.name')) {
        repos = _.filter(repos, repo => _.includes(repo.name, req.query.name));
    }

    if(_.get(req, 'query.size')) {
        repos = _.slice(repos, 0, req.query.size);
    }

    const stars = _.reduce(repos, (sum, repo) => {
      return sum + repo.stargazers_count;
    }, 0);

    const watchers = _.reduce(repos, (sum, repo) => {
      return sum + repo.watchers_count;
    }, 0);

    res.send({stars, watchers});
  } catch(error) {
    console.log(error);
  }
}

module.exports = getTrendingRepos;
