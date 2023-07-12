import { Base } from "../base";

export default class Stiletto extends Base {
    seedsByTier = {
        "Tier 1": [182, 713, 494],
        "Tier 2": [74, 917, 407, 868, 92, 453, 322, 112, 798, 965, 398, 721, 139, 891, 838, 321, 905, 664],
        "Tier 3": [371, 522, 803, 387, 269, 638, 749, 214, 147, 420, 73, 463, 256, 809, 29, 510, 782, 442, 928, 283, 130, 375, 853, 964, 273, 839, 208, 242, 335, 244, 776, 330, 788, 507, 11, 919, 82, 282, 470, 358, 332, 341, 670, 694, 194, 248, 811, 913, 842, 770, 632, 720, 278, 846],
        "Tier 4": [661, 690, 902, 881, 541, 955, 655, 773, 306, 652, 401, 698, 34, 978, 598, 885, 823, 695, 4, 466, 612, 30, 888, 67, 515, 727, 499, 377, 849, 418, 575, 800, 989, 426, 32, 547, 630, 622, 717, 877, 631, 72, 711, 555, 179, 974, 767, 450, 768, 914, 942, 414, 856, 924, 889, 236, 136, 797, 151, 405, 429, 975, 808, 27, 458, 61, 310, 411, 799, 424, 884, 265, 775, 254, 228, 38, 950, 648, 13, 216, 844, 172, 642, 42, 841, 138, 658, 205, 497, 858, 592, 323, 262, 230, 457, 708, 517, 793]
    }
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}