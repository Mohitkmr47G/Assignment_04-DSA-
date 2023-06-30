function arrangeCoins(n: number): number {
    const d = 8*n + 1;
    const res = Math.floor((-1 + d**0.5)/2);
    return res;
};