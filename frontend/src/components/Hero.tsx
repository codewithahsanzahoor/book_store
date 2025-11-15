import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim() !== '') {
            navigate(`/browse?q=${query}`);
        }
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-serif">Find Your Next Great Read.</h1>
                    <p className="mb-5">Explore thousands of titles from new releases to timeless classics.</p>
                    <div className="form-control">
                        <input 
                            type="text" 
                            placeholder="Search for books, authors, or genres" 
                            className="input input-bordered w-full" 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
