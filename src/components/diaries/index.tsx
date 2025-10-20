import styles from './styles.module.css';

export default function Diaries() {
  return (
    <div className={styles.container}>
      {/* Gap */}
      <div className={styles.gap}></div>
      
      {/* Search */}
      <div className={styles.search}>
        Search Area
      </div>
      
      {/* Gap */}
      <div className={styles.gap}></div>
      
      {/* Main */}
      <div className={styles.main}>
        Main Content Area
      </div>
      
      {/* Gap */}
      <div className={styles.gap}></div>
      
      {/* Pagination */}
      <div className={styles.pagination}>
        Pagination Area
      </div>
      
      {/* Gap */}
      <div className={styles.gap}></div>
    </div>
  );
}
