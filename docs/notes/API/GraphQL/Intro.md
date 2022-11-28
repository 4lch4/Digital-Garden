---
tags:
  - API
  - GraphQL
---

# Intro

## Table of Contents

- [Intro](#intro)
  - [Table of Contents](#table-of-contents)
  - [Queries](#queries)
    - [Basic query](#basic-query)
    - [Nesting](#nesting)
    - [Lists](#lists)
    - [Lookups](#lookups)
    - [Aliases](#aliases)
    - [Operation names and variables](#operation-names-and-variables)
      - [Query](#query)
      - [Variables](#variables)
    - [Mutations](#mutations)
      - [Query](#query-1)
      - [Variables](#variables-1)
    - [Multiple types](#multiple-types)
  - [References](#references)

## Queries

### Basic query

```graphql
{
  status
}
```

![Arrow][arrow-img]

```graphql
{
  status: 'available'
}
```

### Nesting

```graphql
{
  hero {
    name
    height
  }
}
```

![Arrow][arrow-img]

```graphql
{ hero:
    { name: "Luke Skywalker",
      height: 1.74 } }
```

### Lists

```graphql
{
  friends {
    name
  }
}
```

![Arrow][arrow-img]

```graphql
{
  friends: [{ name: 'Luke Skywalker' }, { name: 'Han Solo' }, { name: 'R2D2' }]
}
```

GraphQL queries look the same for both single items or lists of items.

### Lookups

```graphql
{
  hero(id: "1000") {
    id
    name
  }
}
```

![Arrow][arrow-img]

```graphql
{ hero:
    { id: "1000",
    { name: "Luke Skywalker" } }
```

### Aliases

```graphql
{
  luke: hero(id: "1000") {
    name
  }
  han: hero(id: "1001") {
    name
  }
}
```

![Arrow][arrow-img]

```graphql
{ luke:
    { name: "Luke Skywalker" },
    han:
    { name: "Han Solo" } }
```

### Operation names and variables

#### Query

```graphql
query FindHero($id: String!) {
  hero(id: $id) {
    name
  }
}
```

Just to make things less ambiguous. Also, to use variables, you need an operation name.

#### Variables

```graphql
{
  id: '1000'
}
```

### Mutations

#### Query

```graphql
{ createReview($review) { id } }
```

#### Variables

```graphql
{
  review: {
    stars: 5
  }
}
```

![Arrow][arrow-img]

```graphql
{
  createReview: {
    id: 5291
  }
}
```

Mutations are just fields that do something when queried.

### Multiple types

```graphql
{
  search(q: "john") {
    id
    ... on User {
      name
    }
    ... on Comment {
      body
      author {
        name
      }
    }
  }
}
```

Great for searching.

## References

- <http://graphql.org/learn/queries/>

[arrow-img]: ../../../assets/img/Up-Down-Arrow.png
