import styles from "./Banner.module.scss";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__content}>
                <img src="https://i.redd.it/jphcpt7yozp41.png" alt="banner" />
                
                <div className={styles.banner__buttons}>
                    <button>
                        <img src="https://images5.iwplay.com.tw/image/p5xsea/main/en/image/badge/ios_dl.svg" />
                    </button>
                    <button>
                        <img src="https://images5.iwplay.com.tw/image/p5xsea/main/en/image/badge/gp_dl.svg" />
                    </button>
                    <button>
                        <img src="https://images5.iwplay.com.tw/image/p5xsea/main/en/image/badge/windows_dl.svg" />
                    </button>
                </div>
            </div>
        </section>
    );
}