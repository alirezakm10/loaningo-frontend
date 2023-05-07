import styles from "./notfound.module.css";

function NotFound() {
  return (
    <div className={`${styles.item}`}>
      <div className={`${styles.rail} ${styles.item}`}>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
        <div className={`${styles.stamp} ${styles.four} ${styles.item}`}>4</div>
        <div className={`${styles.stamp} ${styles.zero} ${styles.item}`}>0</div>
      </div>
      <div className={`${styles.world} ${styles.item}`}>
        <div className={`${styles.forward} ${styles.item} `}>
          <div className={`${styles.box} ${styles.item} `}>
            <div className={`${styles.wall} ${styles.item}`}></div>
            <div className={`${styles.wall} ${styles.item}`}></div>
            <div className={`${styles.wall} ${styles.item}`}></div>
            <div className={`${styles.wall} ${styles.item}`}></div>
            <div className={`${styles.wall} ${styles.item}`}></div>
            <div className={`${styles.wall} ${styles.item}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
