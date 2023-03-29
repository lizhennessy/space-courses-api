# Space Courses API

A GraphQL API that lets you query for courses for aspiring catstronauts.

The API is hosted at: https://space-courses-api.herokuapp.com/

You can use the Sandbox Explorer to run queries. Head to https://studio.apollographql.com/sandbox and connect to the API `https://space-courses-api.herokuapp.com/`

To learn how to use this API to get started with GraphOS, check out our [Odyssey course](https://apollographql.com/tutorials/getting-started-with-graphos).

## Deploying to Railway

You can deploy your own copy of this using Railway!

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/x6wcux)

## Running locally

1. Clone the repo.
1. Run the following:

```shell
npm install
npm run dev
```

1. Open up `http://localhost:4001` to access [Apollo Sandbox](https://www.apollographql.com/docs/graphos/explorer/sandbox).

1. Run a few test queries:

```graphql
query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
```

```graphql
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}
```

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).
