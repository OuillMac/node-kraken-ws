# node-kraken-ws

This is a kraken websocket implementation written by some rando on the
internet.

Tests have not been implemented yet and the docs are still incomplete.

* [How to use](#how-to-use)
  * [Subscribing](#subscribing)
  * [Listening to events](#listening-to-events)
    * [List of shared events](#list-of-shared-events)
* [Public channels](#public-channels)
  * [Public channel methods](#public-channel-methods)
* [Private channels](#private-channels)
  * [List of private events](#list-of-private-events)
  * [Private channel methods](#private-channel-methods)
  * [Private order methods](#private-order-methods)

## How to use

A websocket connection can subscribe to either public or private channels.
For this reason, there are two implementations, one for public & one for
private channels.

### Subscribing

Subscribing will always return a promise with the properties described in the
[docs](https://docs.kraken.com/websockets/#message-subscriptionStatus).
A `unsubscribe` prop will be added by this library:


```js
const {
  ...originalPayload,
  unsubscribe, // Function
} = await instance.subscribe(...)
```

### Listening to events

```js
const instance = new KrakenWS/*Public|Private*/({ /* ... */ })
const removeListener = instance.on('eventname', eventHandler)
```

#### List of shared events

##### kraken:connection:closed

```ts
void
```

##### kraken:connection:establishing

```ts
void
```

##### kraken:connection:established

`{ ws: /* instance of the actual websocket */ }`

##### kraken:connection:failed

```ts
{
  error: Error
}
```

##### kraken:connection:reconnecting:start

```ts
void
```

##### kraken:connection:reconnecting:failure

```ts
void
```

##### kraken:subscribe:success

See [subscriptionStatus](https://docs.kraken.com/websockets/#message-subscriptionStatus)
The response of the kraken websocket is just forwarded
The payload additionally has a `unsubscribe` property, which can be used to
unsubscribe to the channel.

```ts
{
  // ... the standard payload provided by kraken's websocket
  unsubscribe: () => void
}
```

##### kraken:subscribe:failure

See [subscriptionStatus](https://docs.kraken.com/websockets/#message-subscriptionStatus)
The response of the kraken websocket is just forwarded

##### kraken:unsubscribe:success

`void`

##### kraken:unsubscribe:failure

@TODO

##### kraken:subscription:event

See [Kraken Websocket api](https://docs.kraken.com/websockets/#message-ticker).
The response of the kraken websocket is just forwarded

##### kraken:unhandled

```ts
Object.<string, any>
```

## Public channels

```js
import { KrakenWSPublic } from 'node-kraken-ws'

const ws = new KrakenWSPublic({ /* pass options */ })
```

### Public channel methods:

#### subscribeToTicker

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pair | String | yes | / |
| reqid | Int | no | / |

#### subscribeToTickerMultiple

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pairs | String[] | yes | / |
| reqid | Int | no | / |

#### subscribeToOHLC

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pair | String | yes | / |
| reqid | Int | no | / |
| interval | Int | no | / |

#### subscribeToOHLCMultiple

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pairs | String[] | yes | / |
| reqid | Int | no | / |
| interval | Int | no | / |

#### subscribeToTrade

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pair | String | yes | / |
| reqid | Int | no | / |

#### subscribeToTradeMultiple

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pairs | String[] | yes | / |
| reqid | Int | no | / |

#### subscribeToSpread

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pair | String | yes | / |
| reqid | Int | no | / |

#### subscribeToSpreadMultiple

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pairs | String[] | yes | / |
| reqid | Int | no | / |

#### subscribeToBook

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pair | String | yes | / |
| reqid | Int | no | / |
| depth | Int | no | / |

#### subscribeToBookMultiple

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| pairs | String[] | yes | / |
| reqid | Int | no | / |
| depth | Int | no | / |

## Private channels

```js
import { KrakenWSPrivate } from 'node-kraken-ws'

const ws = new KrakenWSPrivate({ /* pass options */ })
```

### List of private events

##### kraken:addorder:success

See the [response
payload](https://docs.kraken.com/websockets/#message-addOrder) of the addOrder
message

##### kraken:addorder:failure

See the [response
payload](https://docs.kraken.com/websockets/#message-addOrder) of the addOrder
message

##### kraken:cancelorder:success

See the [response
payload](https://docs.kraken.com/websockets/#message-cancelOrder) of the addOrder
message

##### kraken:cancelorder:failure

See the [response
payload](https://docs.kraken.com/websockets/#message-cancelOrder) of the addOrder
message

##### kraken:cancelall:success

See the [response
payload](https://docs.kraken.com/websockets/#message-cancelAll) of the addOrder
message

##### kraken:cancelall:failure

See the [response
payload](https://docs.kraken.com/websockets/#message-cancelAll) of the addOrder
message

### Private channel methods:

#### subscribeToOwnTrades

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| reqid | Int | no | / |
| snapshot | Bool | no | / |


#### subscribeToOpenOrders

##### Arguments

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| reqid | Int | no | / |

### Private order methods

#### addOrder

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| ordertype | String | yes | / |
| type | String | yes | / |
| pair | String | yes | / |
| volume | Float | yes | / |
| reqid | Int | no | / |
| price | Float | no | / |
| price2 | Float | no | / |
| reqid | Int | no | / |
| leverage | Float | no | / |
| oflags | String | no | / |
| starttm | String | no | / |
| expiretm | String | no | / |
| userref | String | no | / |
| validate | String | no | / |
| close | Object | no | / |
| close.ordertype | String | no | / |
| close.price | Float | no | / |
| close.price2 | Float | no | / |
| trading_agreement | String | no | / |

##### Returns

Promise

##### Resolves with:

```js
{
  event: String
  reqid: Int
  status: "ok" | "error"
  txid?: String
  descr?: String
}
```

##### Rejects with:

```js
{
  event: String
  reqid: Int
  status: "ok" | "error"
  errorMessage?: String
}
```

#### cancelOrder

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| txid | String \| String[] | yes | / |
| reqid | Int | no | / |

##### Returns*:

Promise

##### Resolves with:

`void`

##### Rejects with

`void`

#### cancelAll

| arguments | type | required | default value |
|-----------|------|----------|---------------|
| reqid | Int | no | / |
