const featuredBooks = [
    { id: 1, title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://images.unsplash.com/photo-1603831910523-5528463a04e4?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1912&auto=format&fit=crop' },
    { id: 3, title: 'Klara and the Sun', author: 'Kazuo Ishiguro', cover: 'https://images.unsplash.com/photo-1622359935345-b7c242a3341f?q=80&w=1964&auto=format&fit=crop' },
    { id: 4, title: 'The Four Winds', author: 'Kristin Hannah', cover: 'https://images.unsplash.com/photo-1586153269345-65a63a9335aa?q=80&w=1974&auto=format&fit=crop' },
];

function FeaturedBooks() {
    return (
        <div className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 font-serif">New & Noteworthy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredBooks.map(book => (
                        <div key={book.id} className="card bg-base-100 shadow-xl image-full">
                            <figure><img src={book.cover} alt={book.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <p>{book.author}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedBooks;
