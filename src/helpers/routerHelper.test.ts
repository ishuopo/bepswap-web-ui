import {
  matchSwapDetailPair,
  matchAddLiquiditySymbol,
  matchPoolDetailSymbol,
  isHomePage,
  isPoolDetailPage,
  isPoolCreatePage,
  isSwapPage,
  isAddLiquidityPage,
  isTransactionPage,
  getTxViewURL,
} from './routerHelper';

describe('routerHelper', () => {
  describe('matchSwapDetailPair', () => {
    it('should match swap detail pair', () => {
      const result = matchSwapDetailPair('/swap/RUNE-67C:BNB');
      expect(result?.source).toEqual('RUNE-67C');
      expect(result?.target).toEqual('BNB');
    });
    it('should not match a pair at an swap detail page', () => {
      const result = matchSwapDetailPair('/swap');
      expect(result).toBeNothing();
    });
    it('should not match a pair at pool page', () => {
      const result = matchSwapDetailPair('/pool');
      expect(result).toBeNothing();
    });
  });
  describe('matchAddLiquiditySymbol', () => {
    it('should match the symbol param', () => {
      const result = matchAddLiquiditySymbol('/liquidity/BNB.BNB');
      expect(result).toEqual('BNB.BNB');
    });
    it('should not match the symbol param', () => {
      const result = matchAddLiquiditySymbol('/liquidity/');
      expect(result).toBeNothing();
    });
    it('should not match the symbol param', () => {
      const result = matchAddLiquiditySymbol('/pool');
      expect(result).toBeNothing();
    });
  });
  describe('matchPoolDetailSymbol', () => {
    it('should match pool detail page param', () => {
      const result = matchPoolDetailSymbol('/pool/BNB.BNB');
      expect(result).toEqual('BNB.BNB');
    });
    it('should not match pool detail page param', () => {
      const result = matchPoolDetailSymbol('/pool/');
      expect(result).toBeNothing();
    });
    it('should not match a pair at pool page', () => {
      const result = matchPoolDetailSymbol('/pool');
      expect(result).toBeNothing();
    });
  });

  describe('isHomePage', () => {
    it('should be valid for correct path', () => {
      const result = isHomePage('/');
      expect(result).toBeTruthy();
    });
    it('should be valid for correct path', () => {
      const result = isHomePage('/pools');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isHomePage('/pools/XXX-XXX');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isHomePage('');
      expect(result).toBeFalsy();
    });
  });


  describe('isPoolDetailPage', () => {
    it('should be valid for correct path', () => {
      const result = isPoolDetailPage('/pool/BNB.BNB');
      expect(result).toBeTruthy();
    });
    it('should be valid for correct path', () => {
      const result = isPoolDetailPage('/pool/RUNE-B1A');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isPoolDetailPage('/pools/BNB.BNB');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isPoolDetailPage('/pool/BNB.BNB/XXX');
      expect(result).toBeFalsy();
    });
  });

  describe('isPoolCreatePage', () => {
    it('should be valid for correct path', () => {
      const result = isPoolCreatePage('/pool/BNB.BNB/new');
      expect(result).toBeTruthy();
    });
    it('should be valid for correct path', () => {
      const result = isPoolCreatePage('/pool/RUNE-B1A/new');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isPoolCreatePage('/pools/BNB.BNB/new');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isPoolCreatePage('/pool/new');
      expect(result).toBeFalsy();
    });
  });

  describe('isSwapPage', () => {
    it('should be valid for correct path', () => {
      const result = isSwapPage('/swap/BNB:RUNE-B1A');
      expect(result).toBeTruthy();
    });
    it('should be valid for correct path', () => {
      const result = isSwapPage('/swap/BNB.BNB:BNB.RUNE-B1A');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isSwapPage('/swap/BNB:RUNE-B1A/new');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isSwapPage('/swap');
      expect(result).toBeFalsy();
    });
  });

  describe('isAddLiquidityPage', () => {
    it('should be valid for correct path', () => {
      const result = isAddLiquidityPage('/liquidity/BNB');
      expect(result).toBeTruthy();
    });
    it('should be valid for correct path', () => {
      const result = isAddLiquidityPage('/liquidity/BNB.RUNE-B1A');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isAddLiquidityPage('/liquidity/BNB:RUNE-B1A/new');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isAddLiquidityPage('/liquidity');
      expect(result).toBeFalsy();
    });
  });

  describe('isTransactionPage', () => {
    it('should be valid for correct path', () => {
      const result = isTransactionPage('/transaction');
      expect(result).toBeTruthy();
    });
    it('should be invalid for wrong path', () => {
      const result = isTransactionPage('/transaction/xxx');
      expect(result).toBeFalsy();
    });
    it('should be invalid for wrong path', () => {
      const result = isTransactionPage('/tx');
      expect(result).toBeFalsy();
    });
  });

  describe('getTxViewURL', () => {
    it('should be valid for correct path', () => {
      const result = getTxViewURL({ type: 'all', offset: 1 });
      expect(result).toBe('/transaction?offset=1&type=all');
    });
  });
});
