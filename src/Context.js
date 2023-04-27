import React, { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer';
let API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    isLoading: false,
    query: '',
    nbPages: 0,
    page: 0,
    hits: []
}
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    let FetchData = async (url) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            let res = await fetch(url);
            let Data = await res.json();
            console.log(Data)
            dispatch({
                type: 'GET_STORIES',
                isLoading: false,
                payload: {
                    hits: Data.hits,
                    nbPages: Data.nbPages,
                }
            })
        } catch (error) {
            console.log('fail');
        }
    }
    const remove = (post_ID) => {
        dispatch({ type: 'REMOVE_POST', payload: post_ID })
    }

    const searchpost = (SEARCHQUERY) => {
        dispatch({ type: 'SEARCH_QUERY', payload: SEARCHQUERY })
    }
    const getPrevPage = () => {
        dispatch({ type: 'PREV_PAGE' })
    }
    const getNextPage = () => {
        dispatch({ type: 'NEXT_PAGE' })
    }
    useEffect(() => {
        FetchData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, remove, searchpost, getNextPage, getPrevPage }}>
            {children}
        </AppContext.Provider>
    )
}
const UseGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, UseGlobalContext };