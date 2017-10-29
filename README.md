# steamapi.io

A simple module to interact with [SteamAPI.io](https://steamapi.io).

## Installation

To install `steamapi.io`, simply run the following command:

```bash
$ npm i steamapi.io
$ # or
$ yarn add steamapi.io
```

## Usage

You'll need an API key from your [user page](https://steamapi.io/user) on
[SteamAPI.io](https://steamapi.io). Create a new instance of `steamapi.io` with
the following code:

```javascript
const SteamAPI = require('steamapi.io');
const api = new SteamAPI('your API key');

// ...

const response = await api.getItems(730);
console.log(response);
// or
api.getItems(730)
  .then((response) => {
    console.log(response);
  });
```

Now you can use the `api` object to interact with SteamAPI.io!

## API

Read more about the API on the
[SteamAPI.io documentation](https://steamapi.io/docs).

### getAccount()

Returns information about your SteamAPI.io account.

Example:

```json
{
  "steam_id": "76561198019728505",
  "name": "V I R U S [5teamAPI.io]",
  "photo": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4e/4e9e1dbe2fce63b6f4b15600cb99b6aefbef6191_full.jpg",
  "profile": "http://steamcommunity.com/id/im_virus/",
  "type": 1,
  "plan": 0,
  "expire": 0,
  "requests": {
    "min": 0,
    "day": 2
  },
  "limits": {
    "min": 5,
    "day": 500
  }
}
```

### getApps()

Returns all available apps and their corresponding `appid`s.

Example:

```json
{
  "440": {
    "app_id": 440,
    "name": "Team Fortress 2",
    "type": "Game"
  },
  "570": {
    "app_id": 570,
    "name": "Dota 2",
    "type": "Game"
  },
  "730": {
    "app_id": 730,
    "name": "Counter-Strike: Global Offensive",
    "type": "Game"
  },
  "753": {
    "app_id": 753,
    "name": "Steam",
    "type": "Application"
  },
  "4920": {
    "app_id": 4920,
    "name": "Natural Selection 2",
    "type": "Game"
  },
  ...
}
```

### getApp(appid)

- `appid` - The `appid` of the game.

Returns information about a single game.

Example:

```json
{
  "app_id": 730,
  "name": "Counter-Strike: Global Offensive",
  "type": "Game",
  "status": 1
}
```

### getCurrencies()

Returns information about all currency rates.

Example:

```json
{
  "2001": {
    "code": "USD",
    "rate": "1.0000"
  },
  "2002": {
    "code": "GBP",
    "rate": "0.7915"
  },
  "2003": {
    "code": "EUR",
    "rate": "0.9328"
  },
  "2004": {
    "code": "CHF",
    "rate": "0.9991"
  },
  ...
}
```

### getCurrency(currencyid)

- `currencyid` - The `currencyid` of the currency.

Returns information about a single currency rate.

Example:

```json
{
  "currency_id": 2003,
  "code": "EUR",
  "symbol": "€",
  "prefix": 0,
  "whole": 0,
  "rate": "0.9328"
}
```

### getItems(appid)

- `appid` - The `appid` of the game.

Returns all items from a single app.

Example:

```json
{
  "★ Bayonet": {
    "market_hash_name": "★ Bayonet",
    "market_name": "★ Bayonet",
    "type": "★ Covert Knife",
    "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF",
    "name_color": "8650ac",
    "background_color": null
  },
  "★ Bayonet | Autotronic (Battle-Scarred)": {
    "market_hash_name": "★ Bayonet | Autotronic (Battle-Scarred)",
    "market_name": "★ Bayonet | Autotronic (Battle-Scarred)",
    "type": "★ Covert Knife",
    "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zPYgJA7cW5moWfqPbhJ7TFhGRf4cZOguzA45W70Vfg_RA9MGCncNCUJFM_MgyG_Fa6l-rm0Za5tJrPzCdg73Z343ffzgv330__kcveXQ",
    "name_color": "8650ac",
    "background_color": null
  },
  ...
}
```

### getItem(appid, market_hash_name)

- `appid` - The `appid` of the game.
- `market_hash_name` - The `market_hash_name` of the item.

Returns a single item from a single app.

Example:

```json
{
  "app_id": 730,
  "market_hash_name": "AK-47 | Fire Serpent (Field-Tested)",
  "market_name": "AK-47 | Fire Serpent (Field-Tested)",
  "type": "Covert Rifle",
  "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
  "name_color": "d2d2d2",
  "background_color": null,
  "tags": [
    {
      "name": "Rifle",
      "category": "Type",
      "category_name": "Type",
      "internal_name": "CSGO_Type_Rifle"
    },
    ...
  ],
  "descriptions": [
    {
      "type": "html",
      "value": "Exterior: Field-Tested",
      "app_data": ""
    },
    ...
  ]
}
```

### getPrices(appid)

- `appid` - The `appid` of the game.

Returns all prices for items in an app.

Example:

```json
{
  "★ Bayonet": "123.83",
  "★ Bayonet | Autotronic (Battle-Scarred)": "201.27",
  "★ Bayonet | Autotronic (Field-Tested)": "224.19",
  "★ Bayonet | Autotronic (Minimal Wear)": "306.71",
  "★ Bayonet | Autotronic (Well-Worn)": "198.87",
  "★ Bayonet | Black Laminate (Battle-Scarred)": "129.39",
  "★ Bayonet | Black Laminate (Factory New)": "248.04",
  "★ Bayonet | Black Laminate (Field-Tested)": "141.63",
  "★ Bayonet | Black Laminate (Minimal Wear)": "156.04",
  "★ Bayonet | Black Laminate (Well-Worn)": "134.26",
  "★ Bayonet | Blue Steel (Battle-Scarred)": "97.84",
  ...
}
```

### getItemPrice(appid, market_hash_name)

- `appid` - The `appid` of the game.
- `market_hash_name` - The `market_hash_name` of the item.

Returns a single item's price from an app.

Example:

```json
{
  "lowest": "107.69",
  "median": "184.33",
  "highest": "230.20",
  "sales": 170,
  "market": true,
  "timestamp": 1485388800
}
```

### getUserProfile(steamid)

- `steamid` - The `steamid` of the user.

Returns profile information for a user.

Example:

```json
{
  "steam_id": "76561198019728505",
  "name": "V I R U S [5teamAPI.io]",
  "online_state": "online",
  "state_message": "Online",
  "privacy_state": "public",
  "visibility_state": "3",
  "avatar_icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4e/4e9e1dbe2fce63b6f4b15600cb99b6aefbef6191.jpg",
  "avatar_medium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4e/4e9e1dbe2fce63b6f4b15600cb99b6aefbef6191_medium.jpg",
  "avatar_full": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4e/4e9e1dbe2fce63b6f4b15600cb99b6aefbef6191_full.jpg",
  "vac_banned": false,
  "trade_ban_state": "None",
  "is_limited_account": false,
  "profile_url": "https://steamcommunity.com/profiles/76561198019728505/",
  "member_since": "2010-01-11T23:00:00.000Z",
  "location": "",
  "real_name": "V I R U S [SteamAPI.io]",
  "summary": "SteamAPI.io - Free SteamAPI.",
  "groups": [
    "103582791440169197",
    "103582791430432104",
    "103582791430989588",
    "103582791436431882",
    "103582791448597613"
  ],
  "primary_group": "103582791440169197"
}
```

### getUserContexts(steamid)

- `steamid` - The `steamid` of the user.

Returns a list of contexts for a user.

Example:

```json
{
  "440": {
    "count": 67,
    "contexts": [
      {
        "contextid": 2,
        "name": "Backpack",
        "count": 67
      }
    ]
  },
  "570": {
    "count": 26,
    "contexts": [
      {
        "contextid": 2,
        "name": "Backpack",
        "count": 26
      }
    ]
  },
  "620": {
    "count": 1,
    "contexts": [
      {
        "contextid": 2,
        "name": "Backpack",
        "count": 1
      }
    ]
  },
  ...
}
```

### getUserInventory(steamid, appid, contextid)

- `steamid` - The `steamid` of the user.
- `appid` - The `appid` of the game.
- `contextid` - The `contextid` of the game (default: `2`).

Returns the user's inventory for a specific game.

Example:

```json
{
  "4204180259": {
    "appid": "730",
    "contextid": "2",
    "assetid": "4204180259",
    "classid": 310776554,
    "instanceid": 0,
    "amount": 1,
    "market_name": "PP-Bizon | Urban Dashed (Factory New)",
    "market_hash_name": "PP-Bizon | Urban Dashed (Factory New)",
    "type": "Consumer Grade SMG",
    "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlfwOP3ZTxS6eOlnI-Zg8jhIbnQmFRd4cJ5nqeQod3z21blrUFoMTr1d4-Tdlc5aQuB_1nswua8hZft6JrOyiQx6SEg-z-DyOXCGwQA",
    "name_color": "d2d2d2",
    "background_color": null,
    "tradable": true,
    "marketable": true,
    "commodity": false,
    "market_tradable_restriction": 7,
    "market_marketable_restriction": 0,
    "market_actions": [
      {
        "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20M%listingid%A%assetid%D13873385135036029046",
        "name": "Inspect in Game..."
      }
    ],
    "fraudwarnings": null,
    "descriptions": [
      {
        "type": "html",
        "value": "Exterior: Factory New"
      },
      ...
    ],
    "tags": [
      {
        "internal_name": "CSGO_Type_SMG",
        "name": "SMG",
        "category": "Type",
        "color": null,
        "category_name": "Type"
      },
      ...
    ]
  },
  ...
}
```
