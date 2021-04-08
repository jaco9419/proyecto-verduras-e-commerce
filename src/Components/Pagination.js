import React, { useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import '../style/Pagination.css';

function Pagination() {
    const [
        { numberProducts, productsPerPage, currentPage, pagesArray },
        dispatch,
    ] = useStateValue();

    useEffect(() => {
        setPagination(numberProducts);
    }, [numberProducts]);

    useEffect(() => {
        setPagination(numberProducts);
    }, [currentPage]);

    const setPagination = (numberProducts) => {
        const numberPages = Math.ceil(numberProducts / productsPerPage);
        const maxPages = 10;
        let firstPage;
        pagesArray.splice(0, pagesArray.length);

        if (numberProducts <= 0) {
            return;
        } else if (numberPages > 10) {
            if (currentPage >= 1 && currentPage <= 5) {
                firstPage = 1;
                for (let i = 0; i < maxPages; i++) {
                    pagesArray.push(firstPage++);
                }
            } else if (currentPage >= 6 && currentPage <= numberPages - 6) {
                firstPage = currentPage - 4;
                for (let i = 0; i < maxPages; i++) {
                    pagesArray.push(firstPage++);
                }
            } else if (currentPage >= numberPages - 5) {
                firstPage = numberPages - maxPages + 1;
                for (let i = 0; i < maxPages; i++) {
                    pagesArray.push(firstPage++);
                }
            }
        } else {
            firstPage = 1;
            for (let i = 0; i < numberPages; i++) {
                pagesArray.push(firstPage++);
            }
        }
    };

    const handlePagination = (page) => {
        dispatch({
            type: 'SET_PAGE',
            item: {
                page,
            },
        });
    };

    const previousPage = () => {
        dispatch({
            type: 'PREVIOUS_PAGE',
        });
    };

    const nextPage = () => {
        dispatch({
            type: 'NEXT_PAGE',
        });
    };

    return (
        <div>
            {pagesArray?.length > 0 && (
                <div className="pagination">
                    <div className="pagination__btn__container">
                        <button
                            className="pagination__btn"
                            onClick={previousPage}
                        >
                            &#60; Anterior
                        </button>
                        {pagesArray.map((page, i) => (
                            <button
                                key={i}
                                className={
                                    currentPage === page
                                        ? 'pagination__btn pagination__current'
                                        : 'pagination__btn'
                                }
                                onClick={() => handlePagination(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button className="pagination__btn" onClick={nextPage}>
                            Siguiente &#62;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Pagination;
