# Stars and watchers API (keylight challenge)

## What's this?

This is an API that gets the most starred repos of the day and returns the sum of stars and watchers[&sup1;](#caveats) separately.

## Endpoints

`/`

Send a GET request to get the sum of stars and watchers of the most starred repos of the day.

Optional params:

`name` - a string which must be included in the name of the repos you want to get data from

`size` - a number that limits the amount of repos you want to get data from

Example result:
```
{
  stars: 191,
  watchers: 191
}
```

## Caveats (as of 16/11/2018)
Getting the number of watchers would require the API to send a request to the _GitHub Developers API_ for each repository of which we want to know the watchers, thus greatly reducing the API response speed. The GitHub Search API doesn't return the number of watchers.
Some devs already mentioned the issue: 
- https://github.com/milo/github-api/issues/19
- https://github.com/Blockrazor/blockrazor/…
