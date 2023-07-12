import { Base } from "../base";

export default class M9Bayonet extends Base {
    seedsByTier = {
        "Tier 1": [601, 417],
        "Tier 2": [58, 503, 523, 406, 349, 403],
        "Tier 3": [239, 107, 150, 897, 837, 715, 345, 224, 346, 281, 915, 430, 610, 202, 698, 585, 750, 59, 449, 959, 113],
        "Tier 4": [533, 336, 41, 210, 355, 177, 679, 243, 634, 887, 628, 288, 400, 859, 681, 867, 550, 880, 169, 525, 759, 904, 613, 546, 811, 269, 564, 293, 924, 475, 117, 885, 835, 393, 4, 88, 351, 229, 447, 157, 955, 556, 735, 204, 315, 166, 138, 356, 675, 91, 67, 156, 954, 968, 821, 553, 286, 783, 170, 328, 445, 808, 570, 933, 878, 946, 441, 588, 496, 632, 866, 187, 167, 871, 969, 103, 794, 646, 366, 176, 108, 295, 493, 372, 64, 529, 262, 124]
    };
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}