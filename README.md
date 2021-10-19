# TEAM-TEST

#### Carlos Massucato <br>c.a.massucato@gmail.com

<br>

### Test install instructions

I made use of YARN. Please follow the steps:
<br>

##### Install test dependencies

```bash=
yarn
```

##### Set the .ENV variable

```bash=
# UNIX
cp .env.example .env

# WINDOWS
copy .env.example .env
```

##### Prepare the database migrations

```bash=
yarn db:start
```

##### Run API

```bash=
yarn start
```

##### Run Tests

```bash=
yarn test
```

##### Set CRONTAB Every One Hour CURL Command

```bash=
# CRONTAB line for run every one hour
0 * * * * curl --request GET \ --url http://localhost:3000/automated \ --header 'Content-Type: application/json' >/dev/null 2>&1
```

# TEAM-TEST REST API DOC

Use Binance API (crypto currencies api) to obtain the current average price for a pair of currencies in an automated way and save it in some place.

### API INFO / 

##### Request

`GET /`

    curl --request GET \ --url http://localhost:3000/

##### Response

    {
      "name": "TEAM Test",
      "developer": "Carlos Massucato <c.a.massucato@gmail.com>"
    }

<br>

### STATUS

##### Request

`GET /status`

    curl --request GET \ --url http://localhost:3000/status

##### Response

    {
      "name": "TEAM Test",
      "developer": "Carlos Massucato <c.a.massucato@gmail.com>"
    }

<br>

### POST PAIRS

##### Request

`POST /pairs`

    curl --request POST \
      --url http://localhost:3000/pairs \
      --header 'Content-Type: application/json' \
      --data '{
          "symbol": "DOTUSDT"
        }'

##### Response

    {
      "symbol": "DOTUSDT",
      "price": "40.35000000"
    }

<br>

### GET PAIRS

##### Request

`GET /pairs`

    curl --request GET \ --url http://localhost:3000/pairs

##### Response

    [
      {
        "id": 1,
        "symbol": "SOLUSDT",
        "price": 158.19,
        "createdAt": 1634614410172,
        "updatedAt": 1634614410172
      },
    ]

<br>

### AUTOMATED SERVICE

##### Request

`GET /automated`

    curl --request GET \ --url http://localhost:3000/automated

##### Response

    {
      "message": "Automated Process Success!"
    }

<br>

### AVERAGE PRICE FROM LECTURES

##### Request

`GET /average`

    curl --request POST \
      --url 'http://localhost:3000/average?symbol=SOLUSDT&lectures=5'

##### Response

    {
      "average": 158.07666666666668,
      "numberOfLectures": 5
    }
