# node-kraken-ws

This is a kraken websocket implementation

* [How to use](#how-to-use)
  * [Subscribing](#subscribing)
  * [Listening to events](#listening-to-events)
    * [List of events](#list-of-events)
* [Public channels](#public-channels)
  * [Public channel methods](#public-channel-methods)
* [Private channels](#private-channels)
  * [Private channel methods](#private-channel-methods)

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

#### List of events

##### kraken:connection:closed

/

##### kraken:connection:establishing

/

##### kraken:connection:established

`{ ws: /* instance of the actual websocket */ }`

##### kraken:connection:failed

`{ error: Error }`

##### kraken:connection:reconnecting:start

/

##### kraken:connection:reconnecting:failure

/

##### kraken:subscribe:success

`{}`

##### kraken:subscribe:failure

`{}`

##### kraken:unsubscribe:success

`{}`

##### kraken:unsubscribe:failure

`{}`

##### kraken:subscription:event

`{}`

##### kraken:unhandled

`{}`

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