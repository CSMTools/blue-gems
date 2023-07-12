import { Base } from "../base";

export default class Ursus extends Base {
    seedsByTier = {
        "Tier 1": [494, 770, 618, 575, 652, 112],
        "Tier 2": [891, 838, 283, 917, 130, 844, 702, 721, 868, 881, 468, 510, 798, 371, 330, 629],
        "Tier 3": [638, 664, 488, 858, 576, 61, 841, 248, 38, 631, 182, 749, 643, 808, 811, 528, 854, 961, 73, 505, 334, 306, 989, 823, 630, 116, 56, 426, 916, 612, 985, 411, 547, 375, 883, 657, 282, 14, 694, 188, 442, 919, 658, 902, 776, 522, 108, 853, 347, 414, 497, 256],
        "Tier 4": [176, 29, 398, 458, 788, 499, 768, 976, 262, 311, 92, 72, 445, 711, 633, 698, 899, 34, 964, 335, 809, 453, 708, 194, 609, 803, 273, 27, 927, 713, 74, 885, 236, 10, 866, 321, 269, 89, 780, 322, 175, 965, 905, 55, 707, 98, 191, 782, 457, 801, 429, 907, 556, 387, 147, 4, 255, 741, 80, 622, 470, 310, 849, 955, 358, 753, 828, 507, 365, 958, 381, 214, 341, 830, 515, 846, 357, 20, 222, 860, 541, 513, 318, 299, 245, 933, 428]
    }
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}