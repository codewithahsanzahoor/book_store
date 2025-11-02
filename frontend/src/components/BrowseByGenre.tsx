const genres = [
    { name: 'Science Fiction', icon: '🚀' },
    { name: 'Mystery', icon: '🕵️' },
    { name: 'Fantasy', icon: '🧙' },
    { name: 'Romance', icon: '❤️' },
];

function BrowseByGenre() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 font-serif">Explore by Genre</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {genres.map(genre => (
                        <div key={genre.name} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                            <div className="card-body items-center text-center">
                                <span className="text-4xl">{genre.icon}</span>
                                <h2 className="card-title mt-4">{genre.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrowseByGenre;
