import Hero from "../components/Hero";
import FeaturedBooks from "../components/FeaturedBooks";
import BrowseByGenre from "../components/BrowseByGenre";

function PublicHomePage() {
    return (
        <div>
            <Hero />
            <FeaturedBooks />
            <BrowseByGenre />
        </div>
    );
}

export default PublicHomePage;
