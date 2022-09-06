import React from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import style from './Pagination.module.scss';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Pagination({ limit, total, offset, setOffset }) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChange = (page) => {
    setOffset((page - 1) * limit);
  };

  return (
    <ul className={style.pagination}>
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <FcPrevious />
        </button>
      </li>

      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={page === current ? style.paginationItemActive : ''}
            >
              {page}
            </button>
          </li>
        ))}

      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <FcNext />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
