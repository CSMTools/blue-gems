export type TierKey = `Tier ${number}`;
export type SeedsByTierValue = {
    [tier: TierKey]: number[];
}
export type TierBySeedValue = {
    [seed: number]: TierKey;
}

export abstract class Base {
    abstract seedsByTier: SeedsByTierValue;
    abstract tierBySeed: TierBySeedValue;

    getTier(seed: number): TierKey {
        return this.tierBySeed[seed];
    }

    getSeedsInTier(tier: TierKey): number[] {
        return this.seedsByTier[tier];
    }

    _reverseSeedsByTier(seedsByTier: SeedsByTierValue) {
        const result: TierBySeedValue = {};
        for (let tier in seedsByTier) {
            for (let seed of seedsByTier[tier as TierKey]) {
                result[seed] = tier as TierKey;
            }
        }
        return result;
    }
}