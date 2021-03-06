import Movie from '../components/Movie';

const MovieList = ({movies}) => {

  const movieNodes = movies.map(({name, id}) => {
    return (<Movie name={name} key={id}>{name}</Movie>
    );
})

  return(
    <>
      {movieNodes}
    </>
  )
}

export default MovieList;