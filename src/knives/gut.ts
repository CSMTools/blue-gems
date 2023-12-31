import { Base } from "../base";

export default class Gut extends Base {
    seedsByTier = {
        "Tier 1": [567, 962, 125, 60],
        "Tier 2": [165, 799, 140, 171, 591, 215, 977, 723, 997, 644, 870, 724, 232, 939, 384, 756, 974],
        "Tier 3": [50, 40, 730, 350, 477, 729, 218, 971, 836, 86, 691, 552, 540, 388, 662, 175, 785, 953, 66, 245, 806],
        "Tier 4": [81, 766, 294, 832, 466, 272, 193, 167, 920, 286, 420, 890, 875, 619, 826, 92, 435, 342, 647, 759, 965, 998, 426, 37, 539, 829, 417, 53, 979, 525, 9, 808, 743, 906, 584, 514, 476, 213, 45]
    }
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}