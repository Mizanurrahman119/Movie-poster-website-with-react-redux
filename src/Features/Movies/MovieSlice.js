import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../Common/Apis/MovieApiKey";
import MovieApi from '../../Common/Apis/MovieApi';

//movie container
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Harry";
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

//shows container
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = "friends";
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

//movies and shows container
export const fetchAsyncMovieOrShowsDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowsDetails', async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrshow:{},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fetched successfully');
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected!');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fetched successfully');
            return { ...state, shows: payload };
        },

        [fetchAsyncMovieOrShowsDetails.fulfilled]: (state, { payload }) => {
            console.log('fetched successfully');
            return { ...state, selectMovieOrshow: payload };
        },
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrshow;
export default movieSlice.reducer;