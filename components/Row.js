import React ,{useState,useEffect} from 'react'
import instance from '../src/instance'
import './Row.css'
function Row({title,fetchUrl}) {
    const [movies,setMovies] =useState([])
    async function fetchData(){
        const request =await instance.get(fetchUrl)
        setMovies(request.data.results)
    }
    useEffect(()=>{
        fetchData

    },[])
  return (
    <div>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map((movie) =>{
                <img className='row__poster'
                src={'${base_url}${movie.poster_patch}'}
                alt={movie.name}/>
            })}
        </div>
    </div>
  )
}

export default Row