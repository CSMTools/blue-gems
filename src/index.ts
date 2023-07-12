import { Base } from "./base";

import AK47 from "./guns/ak-47";
import FiveSeven from "./guns/five-seven";

import Bayonet from "./knives/bayonet";
import Butterfly from "./knives/butterfly";
import Classic from "./knives/classic";
import Falchion from "./knives/falchion";
import Flip from "./knives/flip";
import Gut from "./knives/gut";
import Huntsman from "./knives/huntsman";
import Karambit from "./knives/karambit";
import M9Bayonet from "./knives/m9-bayonet";
import Navaja from "./knives/navaja";
import Nomad from "./knives/nomad";
import Paracord from "./knives/paracord";
import Skeleton from "./knives/skeleton";
import Stiletto from "./knives/stiletto";
import Survival from "./knives/survival";
import Talon from "./knives/talon";
import Ursus from "./knives/ursus";

export const itemsByType: {
    gun: {
        [item: string]: Base | undefined
    },
    knife: {
        [item: string]: Base | undefined
    }
} = {
    gun: {
        "Five-SeveN": new FiveSeven,
        "AK-47": new AK47
    },
    knife: {
        "Bayonet": new Bayonet,
        "Butterfly Knife": new Butterfly,
        "Classic Knife": new Classic,
        "Falchion Knife": new Falchion,
        "Flip Knife": new Flip,
        "Gut Knife": new Gut,
        "Huntsman Knife": new Huntsman,
        "Karambit": new Karambit,
        "M9 Bayonet": new M9Bayonet,
        "Navaja Knife": new Navaja,
        "Nomad Knife": new Nomad,
        "Paracord Knife": new Paracord,
        "Skeleton Knife": new Skeleton,
        "Stiletto Knife": new Stiletto,
        "Survival Knife": new Survival,
        "Talon Knife": new Talon,
        "Ursus Knife": new Ursus
    }
}

export function getItem(name: string) {
    return itemsByType.knife[name] ?? itemsByType.gun[name];
}