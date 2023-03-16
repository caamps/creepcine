import Header from "./components/header/Header";
import MoviesList from "./components/movies/MoviesList";
import MovieCtxProvider from "./store/MovieProvider";

function App() {
  return (
    <MovieCtxProvider>
        <Header/>
        <MoviesList/>
    </MovieCtxProvider>
  );
}

export default App;
