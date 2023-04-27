import React from 'react'
import '../src/Styles/Search.css'
import { UseGlobalContext } from './Context'

const Search = () => {
    const { query, searchpost } = UseGlobalContext()
    return (
        <>
            <section>
                <p className='heading'>Latest Tech News</p>
                <input type='text' name='input-field' placeholder='Search here' value={query} onChange={(e) => searchpost(e.target.value)} className='SearchBar' />
            </section>

        </>
    )
}

export default Search