# blue-gems
Counter-Strike tool for working with Case Hardened blue gems.

## Method
All the data in this package is based on [csgoskins.gg](https://csgoskins.gg/)'s articles on the topic.

## Exports
### itemsByType
```js
{
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
```
### getItem(name)
*`name` - Name of the weapon  
**``returns``* - Instantiated class with methods to get blue-gem data