import React from 'react'
import { Link } from "react-router-dom";

export default function MoviesList({movies}) {

    const displayMovies = Object.keys(movies).map((movieId)=>(
       <li key = {movieId}>
        <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
       </li>
    ))
  return (
    <ul>{displayMovies}</ul>
  )
}
