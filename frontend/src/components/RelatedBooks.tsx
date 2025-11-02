import BookCard from "./BookCard";

// Placeholder data
const relatedBooks = [
    { id: '5', title: 'Crying in H Mart', author: 'Michelle Zauner', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop', price: 15.99 },
    { id: '6', title: 'The Hill We Climb', author: 'Amanda Gorman', cover: 'https://images.unsplash.com/photo-1618665817519-e054382417e2?q=80&w=1974&auto=format&fit=crop', price: 12.99 },
    { id: '2', title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1912&auto=format&fit=crop', price: 18.50 },
    { id: '4', title: 'The Four Winds', author: 'Kristin Hannah', cover: 'https://images.unsplash.com/photo-1586153269345-65a63a9335aa?q=80&w=1974&auto=format&fit=crop', price: 22.99 },
];

function RelatedBooks() {
    return (
        <div className="py-16 bg-base-200 mt-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 font-serif">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedBooks.map(book => (
                        <BookCard 
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                            price={book.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RelatedBooks;
