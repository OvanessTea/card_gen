'use client'

import React from 'react';
import styles from './CreateCardButton.module.scss';
import { useRouter } from 'next/navigation';

const CreateCardButton = () => {
    const router = useRouter();

    const goToCreate = () => {
        router.push('/create');
    }

    return (
        <button onClick={goToCreate} className={styles.button}>CLICK!</button>
    )
}

export default CreateCardButton