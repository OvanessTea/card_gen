'use client'
import React, { Dispatch, useState } from 'react'
import { CardType } from './card_type'

import styles from "./Settings.module.scss";

interface IData {
    data: CardType,
    setData: Dispatch<CardType>;
}

export const Settings: React.FC<IData> = (props: IData) => {
    const { data, setData } = props;

    function handleParam<T>(value: T, key: string | [string, string]) {
        if (typeof key === 'string') {
            setData({ ...data, [key]: value })
        } else {
            setData({
                ...data,
                [key[0]]: {
                    ...(data as any)[key[0]],
                    [key[1]]: value
                }
            })
        }
    }
    function handleImage(files: FileList | null, key: string) {
        if (files && files.length === 1) {
            setData({ ...data, [key]: URL.createObjectURL(files[0]) })
        }
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={data.name}
                onChange={(e) => handleParam<CardType["name"]>(e.target.value, 'name')}
                placeholder='Card name'
            />
            <select id="type" name="type" defaultValue={'creature'} onChange={(e) => handleParam<CardType["type"]>(e.target.value as CardType["type"], 'type')}>
                <option value="artifact">Artifact</option>
                <option value="creature">Creature</option>
                <option value="enchantment">Enchantment</option>
                <option value="instant">Instant</option>
                <option value="land">Land</option>
            </select>
            <input
                type="text"
                value={data.additional_type}
                onChange={(e) => handleParam<CardType["additional_type"]>(e.target.value, 'additional_type')}
                placeholder='Type line'
            />
            <div className={styles.mana_cost__container}>
                <div className={styles.mana__colorless}>
                    <input
                        type="number"
                        name="mana_colorless"
                        id="mana_colorless"
                        onChange={(e) => handleParam<CardType["mana_cost"]['colorless']>(+e.target.value, ['mana_cost', 'colorless'])}
                    />
                </div>
                <div className={styles.mana__white}>
                    <input
                        type="number"
                        name="mana_white"
                        id="mana_white"
                        onChange={(e) => handleParam<CardType["mana_cost"]['white']>(+e.target.value, ['mana_cost', 'white'])}
                    />
                </div>
                <div className={styles.mana__blue}>
                    <input
                        type="number"
                        name="mana_blue"
                        id="mana_blue"
                        onChange={(e) => handleParam<CardType["mana_cost"]['blue']>(+e.target.value, ['mana_cost', 'blue'])}
                    />
                </div>
                <div className={styles.mana__black}>
                    <input
                        type="number"
                        name="mana_black"
                        id="mana_black"
                        onChange={(e) => handleParam<CardType["mana_cost"]['black']>(+e.target.value, ['mana_cost', 'black'])}
                    />
                </div>
                <div className={styles.mana__red}>
                    <input
                        type="number"
                        name="mana_red"
                        id="mana_red"
                        onChange={(e) => handleParam<CardType["mana_cost"]['red']>(+e.target.value, ['mana_cost', 'red'])}
                    />
                </div>
                <div className={styles.mana__green}>
                    <input
                        type="number"
                        name="mana_green"
                        id="mana_green"
                        onChange={(e) => handleParam<CardType["mana_cost"]['green']>(+e.target.value, ['mana_cost', 'green'])}
                    />
                </div>
            </div>
            <div className={styles.text_box__container}>
                <input
                    type="text"
                    value={data.description}
                    onChange={(e) => handleParam<CardType["description"]>(e.target.value, 'description')}
                    placeholder='Text box'
                />
                <input
                    type="text"
                    value={data.artistic_description}
                    onChange={(e) => handleParam<CardType["artistic_description"]>(e.target.value, 'artistic_description')}
                    placeholder='Artistic text'
                />
            </div>
            <div>
                <label htmlFor="image">Choose card image</label>
                <input className='hidden' id="image" type="file" onChange={(e) => handleImage(e.target.files, 'image')} />
            </div>
            <div>
                <label htmlFor="expension_icon">Choose expansion image</label>
                <input className='hidden' id='expension_icon' type="file" onChange={(e) => handleImage(e.target.files, 'expension_icon')} />
            </div>
            {data.type === 'creature' ?
                <div>
                    <label htmlFor="legendary_toggler">Legendary</label><br />
                    <input
                        type="checkbox"
                        name="legendary_toggler"
                        value="Legendary"
                        onChange={() => {
                            handleParam<boolean>(!data.creature_type!.legendary, ['creature_type', 'legendary'])
                        }}
                    />
                    <label htmlFor="token_toggler">Token</label><br />
                    <input
                        type="checkbox"
                        name="legendary_toggler"
                        value="Legendary"
                        onChange={() => {
                            handleParam<boolean>(!data.creature_type!.legendary, ['creature_type', 'legendary'])
                        }}
                    />
                    <div>
                        Power & Toughness
                        <input
                            type="number"
                            name="power"
                            id="power"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    creature_type: {
                                        ...data.creature_type,
                                        states: [
                                            +e.target.value,
                                            data.creature_type.states[1]
                                        ]
                                    }
                                })
                            }}
                        />
                        <input
                            type="number"
                            name="toughness"
                            id="toughness"
                            onChange={(e) => {
                                setData({
                                    ...data,
                                    creature_type: {
                                        ...data.creature_type,
                                        states: [
                                            data.creature_type.states[0],
                                            +e.target.value,
                                        ]
                                    }
                                })
                            }}
                        />
                    </div>
                </div>
                : null}
            {data.type === 'land' ?
                <div>
                    <label htmlFor="base_land_toggler">Base Land</label><br />
                    <input
                        type="checkbox"
                        name="base_land_toggler"
                        value="Base Land"
                        onChange={() => {
                            handleParam<boolean>(!data.land_type!.base_land, ['land_type', 'base_land'])
                        }}
                    />
                    <label htmlFor="full_image_toggler">Full card image</label><br />
                    <input
                        type="checkbox"
                        name="full_image_toggler"
                        value="Full card image"
                        onChange={() => {
                            handleParam<boolean>(!data.land_type!.full_image, ['land_type', 'full_image'])
                        }}
                    />
                </div>
                : null}
        </div>
    )
}

