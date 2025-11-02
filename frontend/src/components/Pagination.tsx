function Pagination() {
    return (
        <div className="join flex justify-center mt-8">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 1</button>
            <button className="join-item btn btn-active">Page 2</button>
            <button className="join-item btn">Page 3</button>
            <button className="join-item btn">»</button>
        </div>
    );
}

export default Pagination;
