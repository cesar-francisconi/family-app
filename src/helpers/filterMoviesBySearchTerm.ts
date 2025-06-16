import { Movie } from "@/movie";
import { getAllMovies } from "../hook/useMovie";

export function filterMoviesBySearchTerm(searchTerm: string): Movie[] {
  const term = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .trim().toLowerCase();

  const movies = getAllMovies();

  const data = movies.filter(movie => {
    // título
    const titleMatch = movie.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().includes(term);

    // gêneros
    const genreMatch = movie.genre.some(g => g.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().includes(term));

    // nomes dos atores
    const castMatch = movie.cast.some(actor =>
      actor.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase().includes(term)
    );

    // retorna true se houver pelo menos uma correspondência
    return titleMatch || genreMatch || castMatch;
  });

  return data;
}
