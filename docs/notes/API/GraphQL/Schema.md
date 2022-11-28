---
tags:
  - API
  - GraphQL
---

# Schema

## Basic schemas

```js
type Query {
  me: User
  users(limit: Int): [User]
}

type User {
  id: ID!
  name: String
}
```

See: [sogko/graphql-shorthand-notation-cheat-sheet](https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png)

## Built in types

### Scalar types

| `Int` | Integer |
| `Float` | Float |
| `String` | String |
| `Boolean` | Boolean |
| `ID` | ID |

### Type definitions

| `scalar` | Scalar type |
| `type` | Object type |
| `interface` | Interface type |
| `union` | Union type |
| `enum` | Enumerable type |
| `input` | Input object type |

### Type modifiers

| `String` | Nullable string |
| `String!` | Required string |
| `[String]` | List of strings |
| `[String]!` | Required list of strings |
| `[String!]!` | Required list of required strings |

## Mutations

```js
type Mutation {
  users(params: ListUsersInput) [User]!
}
```

## Interfaces

```js
interface Entity {
  id: ID!
}

type User implements Entity {
  id: ID!
  name: String
}
```

## Enums

```js
enum DIRECTION {
  LEFT
  RIGHT
}

type Root {
  direction: DIRECTION!
}
```

## Unions

```js
type Artist { ··· }
type Album { ··· }

union Result = Artist | Album

type Query {
  search(q: String) [Result]
}
```

## References

- <http://graphql.org/learn/queries/>
- <http://graphql.org/learn/serving-over-http/>
