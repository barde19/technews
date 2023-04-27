import React from 'react'
import '../src/Styles/Pagination.css'
import { UseGlobalContext } from './Context'
const Pagination = () => {
    const { page, nbPages, getNextPage, getPrevPage } = UseGlobalContext();
    return (
        <>
            <div className='main-div'>
                <button onClick={() => getPrevPage()}>Prev</button>
                <p className='pages'>{page + 1} of {nbPages}</p>
                <button onClick={() => getNextPage()}>Next</button>
            </div>
        </>
    )
}

export default Pagination