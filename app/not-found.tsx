import styles from './not-found.module.scss';
import classNames from 'classnames';
import GoHomeButton from '@/components/go-home-btn/GoHomeButton';

export default function NotFound() {
    return (
        <div className={classNames('h-full w-full flex flex-col justify-center items-center', styles.container)}>
            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.rain}>
                <div className={styles.drop}></div>
                <div className={styles.waves}>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.splash}></div>
                <div className={styles.particles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.content}>
                <h1 className='text-3xl'>4O4</h1>
                <h2>Page not found :(</h2>
                <p>Let's return to safe zone</p>
                <GoHomeButton/>
            </div>
        </div>
    )
}