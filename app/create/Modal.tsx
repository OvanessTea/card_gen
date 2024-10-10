'use client'

import React, { useRef, useState } from 'react'
import styles from './Create.Modal.module.scss';
import classNames from 'classnames';
import { CardFrontSide, CardType, Settings } from '@/components/card-settings';

const Modal = () => {
    const [data, setData] = useState<CardType>({
        type: 'creature',
        name: undefined,
        additional_type: undefined,
        mana_cost: {
            colorless: 0,
            black: 0,
            white: 0,
            red: 0,
            blue: 0,
            green: 0
        },
        description: undefined,
        artistic_description: undefined,
        image: undefined,
        expansion_icon: undefined,
        creature_type: {
            legendary: false,
            token: false,
            states: [0, 0]
        },
        land_type: {
            base_land: false,
            full_image: false,
        }
    })

    const cardRef = useRef<HTMLDivElement>(null);

    const flip = () => {
        console.log('CLICKED')
        cardRef!.current!.classList.toggle(styles.fliped);
    }

    return (
        <div className={styles.modal}>
            <div className={styles.left_side}>
                <Settings data={data} setData={setData}/>
            </div>
            <div className={styles.right_side}>
                <div ref={cardRef} className={classNames(styles.card, 'cursor-pointer')} onClick={flip}>
                    <div className={classNames(styles.content)}>
                        <div className={styles.front_side}>
                            <CardFrontSide data={data}/>
                        </div>
                        <div className={styles.back_side}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal