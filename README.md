node-red-contrib-plaid
========================

<a href="http://nodered.org" target="_new">Node-RED</a> 

<a href="https://www.npmjs.com/package/plaid" target="_new">plaid wrapper</a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-plaid --save

## 시작하기

###  To use node-red-contrib-plaid, you must first create an authentication key.

### Save the generated authentication key information.

- Save the authentication key information to ~/.plaid/configure for Mac/Linux and C:\Users\USERNAME\\.plaid\configure for Windows.

- configure example

```
PLAID_CLIENT_ID = xxxxxxxxxxxxx
PLAID_SECRET = xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PLAID_ENV=sandbox

```

Usage
-----

## plaid  

<i><a href="https://www.npmjs.com/package/plaid" target="_new">plaid</a></i> api request node.

### action 
- need action, ex) getAccounts .. 


## request parameter sample 
```javascript
msg.action = 'getAccounts';
msg.action = 'createProcessorToken';
msg.action = 'invalidateAccessToken';
msg.action = 'removeItem';
msg.action = 'getItem';
msg.action = 'getBalance';
msg.action = 'getAuth';
msg.action = 'getIdentity';
msg.action = 'getIncome';
msg.action = 'getCreditDetails';
msg.action = 'getLiabilities';
msg.action = 'getDepositSwitch';
msg.action = 'getHoldings';
msg.action = 'getInvestmentTransactions';
msg.action = 'getTransactions';
msg.action = 'getAllTransactions';
msg.action = 'refreshTransactions';
msg.action = 'createStripeToken';
msg.action = 'resetLogin';
```

## sample flow

- Ctrl+c & Ctrl+v by import function

```json
[{"id":"528cc235.f3804c","type":"inject","z":"2d59a971.3a1ae6","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":120,"y":60,"wires":[["8128cffa.82124"]]},{"id":"a7bab3cd.795af","type":"plaid","z":"2d59a971.3a1ae6","action":"getAccounts","x":630,"y":60,"wires":[["d6acfc72.6daab"]]},{"id":"6ea66fb7.b863e","type":"debug","z":"2d59a971.3a1ae6","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":950,"y":60,"wires":[]},{"id":"8128cffa.82124","type":"function","z":"2d59a971.3a1ae6","name":"","func":"msg.action = 'getAccounts';\n  \nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":60,"wires":[["c6b7f33b.ab8ef"]]},{"id":"d6acfc72.6daab","type":"function","z":"2d59a971.3a1ae6","name":"","func":"\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":780,"y":60,"wires":[["6ea66fb7.b863e"]]},{"id":"c6b7f33b.ab8ef","type":"delay","z":"2d59a971.3a1ae6","name":"","pauseType":"rate","timeout":"5","timeoutUnits":"seconds","rate":"30","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":460,"y":60,"wires":[["a7bab3cd.795af"]]}]
```

## result 


```json
{
  "accounts": [
    {
      "account_id": "vxDwr1pwnrsmx6ZVyXLlHbo5QWAedeiWPBb4L",
      "balances": {
        "available": 100,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "subtype": "checking",
      "type": "depository"
    },
    {
      "account_id": "RzMaeERaDeIB9yERp6gVf5wZl7agbguRLWNrm",
      "balances": {
        "available": 200,
        "current": 210,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "1111",
      "name": "Plaid Saving",
      "official_name": "Plaid Silver Standard 0.1% Interest Saving",
      "subtype": "savings",
      "type": "depository"
    },
    {
      "account_id": "6a63wVo3EwheW7vdlPNJTbyq5eMZkZigqpQMv",
      "balances": {
        "available": null,
        "current": 1000,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "2222",
      "name": "Plaid CD",
      "official_name": "Plaid Bronze Standard 0.2% Interest CD",
      "subtype": "cd",
      "type": "depository"
    },
    {
      "account_id": "X4GeNmzeWNhj95qp8dyQu6q3WwjpLptdrNkzB",
      "balances": {
        "available": null,
        "current": 410,
        "iso_currency_code": "USD",
        "limit": 2000,
        "unofficial_currency_code": null
      },
      "mask": "3333",
      "name": "Plaid Credit Card",
      "official_name": "Plaid Diamond 12.5% APR Interest Credit Card",
      "subtype": "credit card",
      "type": "credit"
    },
    {
      "account_id": "DgqLrNxLDrTDqgR6VxydhvjAwlxKXKFvrBNA6",
      "balances": {
        "available": 43200,
        "current": 43200,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "4444",
      "name": "Plaid Money Market",
      "official_name": "Plaid Platinum Standard 1.85% Interest Money Market",
      "subtype": "money market",
      "type": "depository"
    },
    {
      "account_id": "VdLjXnljDXSLQz9RgjEatXJZmMd7W7uWvXQjx",
      "balances": {
        "available": null,
        "current": 320.76,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "5555",
      "name": "Plaid IRA",
      "official_name": null,
      "subtype": "ira",
      "type": "investment"
    },
    {
      "account_id": "wdlGzLgGmzSpj84rZgNRTKPr5nlXvXtraxz4J",
      "balances": {
        "available": null,
        "current": 23631.9805,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "6666",
      "name": "Plaid 401k",
      "official_name": null,
      "subtype": "401k",
      "type": "investment"
    },
    {
      "account_id": "5dbBwDLBmwSwNjK4mlxVHqZlkB5xbxCZEAXaW",
      "balances": {
        "available": null,
        "current": 65262,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "7777",
      "name": "Plaid Student Loan",
      "official_name": null,
      "subtype": "student",
      "type": "loan"
    },
    {
      "account_id": "JnxqGZ1qDGUdkaQpmxX6UAXb431xkxsdGvXlv",
      "balances": {
        "available": null,
        "current": 56302.06,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "8888",
      "name": "Plaid Mortgage",
      "official_name": null,
      "subtype": "mortgage",
      "type": "loan"
    }
  ],
  "item": {
    "available_products": [
      "assets",
      "balance",
      "credit_details",
      "identity",
      "income",
      "investments",
      "liabilities",
      "transactions"
    ],
    "billed_products": [
      "auth"
    ],
    "consent_expiration_time": null,
    "error": null,
    "institution_id": "ins_3",
    "item_id": "GWzgG7jgDGCXvgjJzxD6S84rP6Wjdrt6pgWPr",
    "webhook": "https://sample-web-hook.com"
  },
  "request_id": "sReuFhn0zKGLgZc",
  "status_code": 200
}

```
