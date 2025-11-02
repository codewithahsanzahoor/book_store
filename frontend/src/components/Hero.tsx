function Hero() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-serif">Find Your Next Great Read.</h1>
                    <p className="mb-5">Explore thousands of titles from new releases to timeless classics.</p>
                    <div className="form-control">
                        <input type="text" placeholder="Search for books, authors, or genres" className="input input-bordered w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
