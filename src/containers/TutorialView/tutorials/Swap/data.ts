// import { SingleSwapCalcData } from '../../../Swap/calc';

import BigNumber from 'bignumber.js';
import { bn } from '@thorchain/asgardex-util';
import { TokenAmount, tokenAmount } from '@thorchain/asgardex-token';

type SwapCalcData = {
  X: TokenAmount
  Y: TokenAmount
  Px: BigNumber
}

export const data: SwapCalcData = {
  X: tokenAmount(1000000),
  Y: tokenAmount(1000),
  Px: bn(0.04),
};
