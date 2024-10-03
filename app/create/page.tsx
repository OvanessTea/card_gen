import CloseButton from './CloseButton';
import styles from './CreatePage.module.scss'
import Modal from './Modal';

const CreatePage = () => {

    return <div className={styles.container}>
        <div className={styles.close}>
            <CloseButton/>
        </div>
        <Modal/>
    </div>
}

export default CreatePage;