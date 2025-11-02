import { Link } from 'react-router-dom';

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    cover: string;
    price: number;
}

function BookCard({ id, title, author, cover, price }: BookCardProps) {
    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-10 pt-10">
                <Link to={`/book/${id}`}>
                    <img src={cover} alt={`Cover of ${title}`} className="rounded-xl h-60 object-cover" />
                </Link>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{author}</p>
                <p className="font-bold text-lg">${price.toFixed(2)}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
