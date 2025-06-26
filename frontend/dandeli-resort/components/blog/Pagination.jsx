import styles from '../../styles/blog/Pagination.module.css';

export default function Pagination({ currentPage = 1, totalPages = 5 }) {
  return (
    <nav className={styles.pagination}>
      <ul className={styles.paginationList}>
        <li className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}>
          <a href={`?page=${currentPage - 1}`} className={styles.pageLink}>←</a>
        </li>
        
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={styles.pageItem}>
            <a 
              href={`?page=${i + 1}`} 
              className={`${styles.pageLink} ${currentPage === i + 1 ? styles.active : ''}`}
            >
              {i + 1}
            </a>
          </li>
        ))}
        
        <li className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''}`}>
          <a href={`?page=${currentPage + 1}`} className={styles.pageLink}>→</a>
        </li>
      </ul>
    </nav>
  );
}