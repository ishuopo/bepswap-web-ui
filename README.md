# BEPSwap React Front-End

---

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
