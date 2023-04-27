import React from 'react'
import { UseGlobalContext } from './Context';
import '../src/Styles/Stories.css'
const Stories = () => {
    const { hits, isLoading, remove } = UseGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
            <div className='card-details'>
                {hits.map((ele) => {
                    const { title, author, objectID, url, num_comments } = ele;

                    return (<>
                        <div className='card' key={objectID}>
                            <p className='headline'>{title}</p>
                            <p className='data'>By <span>{author}</span> | <span>{num_comments}</span> {""} comments</p>
                            <div className='card-button'>
                                <a href={url} target='_blank'>Read More</a>
                                <a href='#' onClick={() => remove(objectID)}>Remove</a>
                            </div>
                        </div>

                    </>
                    )
                })}
            </div>

        </>
    )
}

export default Stories