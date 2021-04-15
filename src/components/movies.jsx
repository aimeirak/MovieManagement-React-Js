import React, { Component } from 'react';
import {getMovies} from '../services/moviesServices';

class Movies extends Component {
    state = { 
        movies:getMovies()
     }
     handleMovieDelete=movie=>{
         const movies = this.state.movies.filter(m=>m._id !==movie._id);
         this.setState({movies});
     }
    render() { 
        const {length:count} = this.state.movies;
        if(count===0) return <p>The is no movies in database</p>
        return ( 
            <main className="container">
                <p>in database we have {count}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>name</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map( movie=>(
                         <tr key={movie._id}>
                            <td >{movie._id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.name}</td>
                            <td>{movie.status}</td>
                            <td><button onClick={()=>this.handleMovieDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </main>
         );
    }
}

export default Movies;