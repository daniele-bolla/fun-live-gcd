#Greater Common Divisor on [https://www.func.live/functions/gcd](https://www.func.live/functions/gcd)

## Project Setup

```sh
npm install
```

If you have Docker installed you can use 
```sh
docker-compose up -d
```
Create and .env file as example.env. 
If you use the docker container youcan use the same DB_URI, make sure to create motorola-test-db and a users document in it (you can use MOngo COmpass for that)  
###  Local
If you have gcloud installed you can use 

```sh
 npx @google-cloud/functions-framework --target=gcd
```
## Deployed function

This function is deployd on google cloud functions [https://europe-west2-funclive-gcd.cloudfunctions.net/gcd/functions/gcd](https://europe-west2-funclive-gcd.cloudfunctions.net/gcd/functions/gcd)

- POST `{functionURl}/`, with Body ```{
         input:{
          a:78,
          b:14
      }```

- List Users  GET `{baseURl}/api/users`  accessible only With Authentication
