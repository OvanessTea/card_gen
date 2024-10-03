import CreateCardButton from '@/components/create-card-btn/CreateCardButton';
import styles from './main.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className="text-5xl text-gray-50 absolute right-50 top-50">MTG CARD GENERATOR</h1>
      </div>
      <div className={styles.main}>
        <h2 className='text-xl'>Let’s make something of our own!</h2>
        <CreateCardButton/>
      </div>
    </div>
  );
}
