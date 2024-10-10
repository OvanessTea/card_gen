export type CardType = {
    type: 'artifact' | 'creature' | 'land' | 'enchantment' | 'instant' | 'sorcery',
    name?: string,
    additional_type?: string,
    mana_cost: {
        colorless: number | 'X',
        black: number,
        white: number,
        red: number,
        blue: number,
        green: number,
    },
    description?: string,
    artistic_description?: string,
    image?: string,
    expansion_icon?: string,
    creature_type: {
        legendary: boolean,
        token: boolean,
        states: [number | 'X', number | 'X'],
    },
    land_type: {
        base_land: boolean,
        full_image: boolean,
    }

}