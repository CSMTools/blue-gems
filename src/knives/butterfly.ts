import { Base } from "../base";

export default class Butterfly extends Base {
    seedsByTier = {
        "Tier 1": [182, 652, 398, 838, 29, 494],
        "Tier 2": [371, 881, 721, 638, 283, 330, 868, 891, 917, 749, 839, 214, 147, 919, 73],
        "Tier 3": [798, 358, 664, 424, 618, 458, 928, 858, 130, 112, 629, 782, 902, 809, 713, 306, 720, 964, 457, 702, 510, 407, 92, 965, 924, 913, 694, 61, 776, 853, 74, 522, 256, 488, 703, 194, 248, 499, 108, 282, 411, 811, 803, 335],
        "Tier 4": [34, 770, 768, 72, 27, 453, 885, 788, 699, 989, 547, 528, 631, 208, 414, 445, 808, 332, 612, 466, 598, 630, 322, 375, 880, 38, 893, 916, 842, 741, 841, 898, 269, 854, 846, 273, 18, 575, 717, 905, 255, 844, 464, 823, 262, 658, 30, 191, 341, 377, 43, 10, 188, 420, 401, 513, 56, 671, 153, 642, 507, 116, 633, 884, 139, 505, 515, 67, 11, 42, 311, 976, 321, 426, 907, 801, 98, 111, 901, 442, 826, 236, 906, 927, 799, 974]
    }
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}