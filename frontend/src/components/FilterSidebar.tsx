interface FilterSidebarProps {
    query: string;
    onQueryChange: (query: string) => void;
    genres: string[];
    selectedGenres: string[];
    onGenreChange: (genre: string) => void;
    price: number;
    onPriceChange: (price: number) => void;
}

function FilterSidebar({
    query,
    onQueryChange,
    genres,
    selectedGenres,
    onGenreChange,
    price,
    onPriceChange,
}: FilterSidebarProps) {
    return (
        <div className="w-full lg:w-64 bg-base-100 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-lg mb-4">Filter & Sort</h3>

            {/* Search Input */}
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Search</span>
                </label>
                <input
                    type="text"
                    placeholder="Find a book..."
                    className="input input-bordered w-full"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
            </div>

            {/* Genre Filter */}
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Genre</span>
                </label>
                <div className="form-control">
                    {genres.map((genre) => (
                        <label key={genre} className="label cursor-pointer">
                            <span className="label-text">{genre}</span>
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={selectedGenres.includes(genre)}
                                onChange={() => onGenreChange(genre)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Slider */}
            <div>
                <label className="label">
                    <span className="label-text">Price Range</span>
                </label>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={price}
                    onChange={(e) => onPriceChange(Number(e.target.value))}
                    className="range"
                />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>$0</span>
                    <span>${price}</span>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebar;

