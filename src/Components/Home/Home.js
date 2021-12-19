import React, { useEffect } from 'react';

import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/Movies/MovieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    },[dispatch]);
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>
    );
};

export default Home;