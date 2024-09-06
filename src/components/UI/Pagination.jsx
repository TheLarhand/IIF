import React from 'react'
import classNames from 'classnames';
import cl from './UI.module.css'

const Pagination = ({pagesArray, page, setPage, changePostsPage}) => {
  return (
    <div className={cl.pagination}>
        {pagesArray.map(p =>
            <span 
                onClick={() => changePostsPage(p)}
                key={p}
                className={classNames(cl.page, {
                    [cl.page__current]: page === p
                  })}
            >
                {p}
            </span>
        )}
    </div>
  )
}

export default Pagination