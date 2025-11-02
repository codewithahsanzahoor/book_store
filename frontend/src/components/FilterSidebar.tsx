function FilterSidebar() {
    return (
        <div className="w-full lg:w-64 bg-base-100 p-4 shadow-lg rounded-lg">
            <h3 className="font-bold text-lg mb-4">Filter & Sort</h3>
            
            {/* Search Input */}
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Search</span>
                </label>
                <input type="text" placeholder="Find a book..." className="input input-bordered w-full" />
            </div>

            {/* Genre Filter */}
            <div className="mb-4">
                <label className="label">
                    <span className="label-text">Genre</span>
                </label>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Science Fiction</span>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Mystery</span>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Fantasy</span>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">Romance</span>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </div>
            </div>

            {/* Price Range Slider */}
            <div>
                <label className="label">
                    <span className="label-text">Price Range</span>
                </label>
                <input type="range" min={0} max="100" defaultValue="40" className="range" />
                <div className="w-full flex justify-between text-xs px-2">
                    <span>$0</span>
                    <span>$100</span>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebar;
