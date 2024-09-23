import BrowseLayout from "@/components/Layouts/BrowseLayout"
import Jumbotron from "@/components/Modules/BrowsePage/JumboTron"
import MovieList from "@/components/Modules/BrowsePage/MovieList"

function Browse() {
    return (
        <BrowseLayout>
            <Jumbotron />
            <MovieList title={"Popular Movies"} />
            <MovieList title={"Top Rated Movies"} />
            <MovieList title={"Upcoming Movies"} />
        </BrowseLayout>
    )
}

export default Browse