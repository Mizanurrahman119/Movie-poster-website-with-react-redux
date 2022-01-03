import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/Movies/MovieSlice';
import useAuth from '../../hooks/useAuth';
import userLogo from "../../Images/user__logo.png";
// import useFirebase from '../../hooks/useFirebase';
import "./Header.scss"

const Header = () => {
    // const {user, logOut} = useFirebase();
    const {user, logOut} = useAuth();

    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert('Please enter search term!')
        console.log(term);
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("")
    }
    return (
        <div className='header'>
            <div className="logo">
                <Link to="/"><i class="fas fa-film"></i>Movie App</Link>
            </div>

            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)}/>
                    <button type='submit'><i className='fa  fa-search'></i></button>
                </form>
            </div>
            {/* <div className="user-image">
                <img src={userLogo} alt="user" />
            </div> */}
            { user.email && <span style={{color:'white'}}><i class="fas fa-user-circle"></i>{user.displayName}</span>}
            {
                user.email ?
                <button className='logout-btn' onClick={logOut}>Log out</button>
                :
                <Link to="/login">Login</Link>}
        </div>
    );
};

export default Header;