import { Base } from "../base";

export default class AK47 extends Base {
    seedsByTier = {
        "Tier 1": [661, 151, 955, 321, 387, 670, 179],
        "Tier 2": [592, 4, 905, 13, 168, 429],
        "Tier 3": [555, 442, 978, 139, 828, 969, 750, 695, 103, 112, 733, 844, 228, 868, 434, 698, 74, 996, 760, 375, 708, 823, 690, 791, 278, 917, 463, 711, 849, 92, 82, 450, 512, 310, 713, 11, 721, 236, 172, 950, 147, 782, 322, 363, 189, 961, 497, 430, 887, 426, 862],
        "Tier 4": [770, 648, 28, 575, 73, 798, 557, 627, 532, 541, 935, 453, 479, 872, 522, 525, 664, 622, 494, 344, 965, 775, 847, 209, 689, 306, 803, 169, 577, 381, 878, 2, 888, 526, 879, 126, 605, 468, 269, 891, 481, 985, 715, 248, 456, 420, 681, 32, 397, 493, 788, 256, 470, 418, 927, 182, 178, 685, 407, 507, 65, 200, 694, 922, 795, 809, 296, 842, 194, 431, 341, 447, 130, 205, 428, 230, 458, 1000, 242, 34, 325, 724]
    };
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}