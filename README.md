# Greater Common Divisor on [https://www.func.live/functions/gcd](https://www.func.live/functions/gcd)

## Project Setup

```sh
npm install
```
###  Local

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
