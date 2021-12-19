import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowsDetails, getSelectedMovieOrShow } from '../../Features/Movies/MovieSlice';
import "./MovieDetail.scss"


const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowsDetails(imdbID));
    }, [dispatch, imdbID])
    return (
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movie-title'>{data.Title}</div>
                <div className='movie-rating'>
                    <span>
                        IMDB Rating <i className='fa fa-star'> : {data.imdbRating}</i>
                    </span>
                    <span>
                        IMDB Votes <i className='fa fa-thumbs-up'> : {data.imdbVotes}</i>
                    </span>
                    <span>
                        RunTime <i className='fa fa-film'> : {data.Runtime}</i>
                    </span>
                    <span>
                        Year <i className='fa fa-calender'> : {data.Year}</i>
                    </span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Star</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={data.Poster} alt={data.title} />
            </div>
        </div>
    );
};

export default MovieDetail;