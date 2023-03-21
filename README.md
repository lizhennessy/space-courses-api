# Space Courses API

A GraphQL API that lets you query for courses for aspiring catstronauts.

The API is hosted at: https://space-courses-api.herokuapp.com/

You can use the Sandbox Explorer to run queries. Check out the Operation Collections tab on the left for some sample queries to run.

## Deploying to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/x6wcux)

Follow the instructions after clicking the button above.

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
