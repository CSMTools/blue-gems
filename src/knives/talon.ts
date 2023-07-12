import { Base } from "../base";

export default class Talon extends Base {
    seedsByTier = {
        "Tier 1": [55, 923, 241, 602, 899, 316, 180, 222, 528, 10, 837],
        "Tier 2": [185, 3, 14, 80, 114, 351, 866, 311, 176, 170, 199, 805, 819, 299, 357, 56, 609, 501, 707, 468, 657, 379, 365, 345, 583, 283, 807, 506, 576, 116, 570],
        "Tier 3": [873, 95, 203, 891, 367, 19, 533, 941, 693, 473, 374, 658, 18, 111, 976, 130, 137, 291, 516, 456, 621, 186, 505, 669, 660, 883, 599, 328, 749, 488, 491, 815, 761, 798, 960, 58, 46, 830],
        "Tier 4": [618, 917, 481, 292, 881, 598, 547, 633, 76, 496, 838, 557, 730, 890, 347, 411, 933, 72, 77, 959, 313, 507, 88, 115, 70, 497, 188, 381, 191, 606, 168, 293, 577, 255, 704, 668, 342, 404, 458, 820, 431, 607, 504, 702, 403, 640, 503, 391, 138, 447, 446, 835, 383, 59, 67, 372, 280, 248, 821, 100, 956, 218, 75, 681, 927, 729, 780, 157]
    }
    tierBySeed = this._reverseSeedsByTier(this.seedsByTier);
}