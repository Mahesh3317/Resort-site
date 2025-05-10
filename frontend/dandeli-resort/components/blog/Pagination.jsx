import styles from '@components/Blog/Pagination';
import Link from 'next/link';

export default function Pagination({ currentPage = 1, totalPages = 1 }) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={`${styles.pageLink} ${
            currentPage === page ? styles.active : ''
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}