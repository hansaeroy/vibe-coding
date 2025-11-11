"use client";

import styles from "./styles.module.css";

export default function Pictures() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.stack}>
          <div className={styles.gapTop} />
          <div className={styles.filter}>
            <div className={styles.filterBar} />
          </div>
          <div className={styles.gapBottom} />
          <main className={styles.main}>
            <div className={styles.mainPlaceholder}>MAIN CONTENT</div>
          </main>
        </div>
      </div>
    </div>
  );
}
