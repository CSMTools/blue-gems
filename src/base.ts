export type TierKey = `Tier ${number}`;
export type SeedsByTierValue = {
    [tier: TierKey]: number[];
}
export type TierBySeedValue = {
    [seed: number]: TierKey;
}

export abstract class Base {
    abstract seedsByTier: SeedsByTierValue;
    tierBySeed: TierBySeedValue;

    /**
     * Must pass self when running super();
     * @param self this
     */
    constructor(self: Base) {
        this.tierBySeed = this.#reverseSeedsByTier(self.seedsByTier);
    }

    getTier(seed: number): TierKey {
        return this.tierBySeed[seed];
    }

    getSeedsInTier(tier: TierKey): number[] {
        return this.seedsByTier[tier];
    }

    #reverseSeedsByTier(seedsByTier: SeedsByTierValue) {
        const result: TierBySeedValue = {};
        for (let tier in seedsByTier) {
            for (let seed in seedsByTier[tier as TierKey]) {
                result[seed] = tier as TierKey;
            }
        }
        return result;
    }
}