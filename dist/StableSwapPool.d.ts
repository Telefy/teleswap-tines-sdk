import { BigNumber } from "@ethersproject/bignumber";
import { RPool, RToken } from "./PrimaryPools";
export declare class StableSwapRPool extends RPool {
    k: BigNumber;
    constructor(address: string, token0: RToken, token1: RToken, fee: number, reserve0: BigNumber, reserve1: BigNumber);
    updateReserves(res0: BigNumber, res1: BigNumber): void;
    computeK(): BigNumber;
    computeY(x: BigNumber, yHint: BigNumber): BigNumber;
    calcOutByIn(amountIn: number, direction: boolean): {
        out: number;
        gasSpent: number;
    };
    calcInByOut(amountOut: number, direction: boolean): {
        inp: number;
        gasSpent: number;
    };
    calcCurrentPriceWithoutFee(direction: boolean): number;
}
