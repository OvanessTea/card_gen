'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Create.Modal.module.scss';
import classNames from 'classnames';

const Modal = () => {
    // const [toggleSide, setToggleSide] = useState<boolean>(false);

    // const flip = () => {
    //     console.log(toggleSide)
    //     setToggleSide(!toggleSide)
    // }

    const cardRef = useRef<HTMLDivElement>(null);

    const flip = () => {
        console.log('CLICKED')
        cardRef!.current!.classList.toggle(styles.fliped);
    }
    console.log(cardRef.current?.classList)

    return (
        <div className={styles.modal}>
            <div className={styles.left_side}></div>
            <div className={styles.right_side}>
                <div ref={cardRef} className={classNames(styles.card, 'cursor-pointer')} onClick={flip}>
                    <div className={classNames(styles.content)}>
                        <div className={styles.front_side}>FRONT</div>
                        <div className={styles.back_side}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal