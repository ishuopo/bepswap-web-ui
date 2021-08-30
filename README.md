# BEPSwap React Front-End

---

[![Save to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?style=for-the-badge&labelColor=0d0d0d&logo=data:image/png;base64,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)](https://homeapp.hns.siasky.net/#/skylink/KADYesKU79_dbBK-yuXFriS_sbFCcvn2bNE7dgUkc9QBHQ)

Siasky.net Portal URL:
```
https://400aotqatvv05aat1s5p07lfd1mcs33pp30bshdkbcccjphv0hh5t6o.siasky.net/
```

> **Mirror**
>
> This repo mirrors from THORChain Gitlab to Github.
> To contribute, please contact the team and commit to the Gitlab repo:
>
> https://gitlab.com/thorchain/bepswap/bepswap-web-ui/

---

BEPSwap is UniSwap for BinanceChain. It will be the first go-to market product for THORChain and makes some compromises as to infrastructure and trustlessness. It will only swap BNB and BEP2 assets on Binance Chain using a second layer protocol that moves assets around on BNB accounts.

## Maintenance Mode Guide

#### Steps

1. Update CI variable for website status
   Chaosnet: REACT_APP_MAINNET_STATUS=maintenance (or live)
   Testnet: REACT_APP_WEBSITE_STATUS=maintenance (or live)
2. Run CI Action for deploy
   - Go to Gitlab pipelines (https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/pipelines)
   - Run deploy action for Chaosnet (or Testnet)

### Technologies:

- React / Redux / Redux-Saga
- Ant Design
- Styled-components
- Storybook
- Jest / Enzyme
- ESLint / Prettier
- GitLab CI

### Prerequisites

```
yarn
node v12^
```

### Env variables

Refer `.env.sample`

```
REACT_APP_BINANCE_MAINNET_WS_URI = wss://dex.binance.org/api/ws
REACT_APP_BINANCE_TESTNET_WS_URI = wss://testnet-dex.binance.org/api/ws
REACT_APP_BINANCE_MAINNET_URL = https://dex.binance.org/api/v1
REACT_APP_BINANCE_TESTNET_URL = https://testnet-dex.binance.org/api/v1
REACT_APP_MIDGARD_API_URL = https://midgard.bepswap.com
REACT_APP_MIDGARD_TEST_API = https://midgard.bepswap.com
REACT_APP_MIDGARD_CHAOSNET_API_URL = https://chaosnet-midgard.bepswap.com

REACT_APP_WEBSITE_STATUS = live OR maintenance
REACT_APP_MAINNET_STATUS = live OR maintenance

REACT_APP_NET = mainnet OR testnet
```

### Project Setup

```
yarn install
yarn start
```

### npm scripts

- `start`: start local development app
- `start-s`: start local development app with SSL allowed
- `mainnet`: start local development app with mainnet mode
- `build`: build react project
- `test`: unit test with jest / enzyme
- `test:all`: Run entire test suite
- `test:unit`: unit test with jest / enzyme
- `test:feat`: build the project and run all feature tests
- `cy:run`: run cypress tests in isolation
- `storybook`: run storybook for project
- `build-storybook`: build storybook into the dir `build/storybook`
- `deploy`: deploy the project on firebase
- `lint`: lint code with eslint rules
- `lint:watch` : lint watch mode
- `eject`: eject CRA (not recommended)
- `generate:types`: Generate TypeScript types and API function calls for Midgards API endpoints


## Generate TypeScript types of Midgard API (incl. api function calls)

All types and api function calls for Midgard API are generated by [openapi-generator](https://openapi-generator.tech/). Whenever an endpoint of [Midgards API](https://midgard.bepswap.com/v1/doc) has been added or updated, all types should be re-generated and changes are commited into the repository.

```bash
yarn generate:types
```

## Running the tests

To run the entire test suite

```bash
yarn test
```

### Unit testing with jest

```bash
yarn test:unit
```

1. Run all unit tests with jest/enzyme, react-test-renderer

### Feature testing with cypress

To build the project and run all feature tests

```bash
yarn test:feat
```

1. Create a new build
1. Launch test server on http://localhost:8080 with a simple non-production ready file server
1. Run feature tests over the build at http://localhost:8080

### Run feature tests over specific url

To run feature tests against a server set the `CYPRESS_baseUrl` env var:

```bash
CYPRESS_baseUrl=https://testnet.bepswap.net yarn cy:run
```

The default is `http://localhost:8080`

1. Run feature tests pointing to given url

### Run cypress tests against a local development server

To run tests against the local development server use `cy:run:dev`

First in one terminal window ensure your development server is up:

```bash
yarn start
```

Then in a second terminal run the tests

```bash
yarn cy:run:dev
```

## Deployment using firebase

Firebase deploy:

```
yarn deploy
```

## CI/CD

GitLab CI

- Test
- Deploy

Main Branch:

- master

## Custom Hooks for handling logic

- [useInterval](https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/blob/development/src/hooks/useInterval.ts) - trigger interval using hooks
- [useTimeout](https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/blob/development/src/hooks/useTimeout.ts) - trigger timeout using hooks
- [usePrevious](https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/blob/development/src/hooks/usePrevious.ts) - save previous state
- [useNetwork](https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/blob/development/src/hooks/useNetwork.ts) - handle all thorchain data and logic
- [usePrice](https://gitlab.com/thorchain/bepswap/bepswap-web-ui/-/blob/development/src/hooks/usePrice.ts) - handle pricing logic

## Code standard

- [React Airbnb code standard](https://github.com/airbnb/javascript/tree/master/react)
- [Prettier](https://prettier.io/)

## Built With

- [React](https://reactjs.org) - React.JS
- [Redux](https://github.com/reduxjs/redux) - For react global state management
- [Styled-components](https://www.styled-components.com/) - Style framework
- [Storybook](https://storybook.js.org/) - Storybook UI for building components
- [firebase](https://firebase.google.com/) - FaaS
