function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">About The Book Nook</h6>
                <p className="max-w-xs">Your one-stop shop for discovering and purchasing your next favorite book. Dive into a world of stories.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Browse Books</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Login</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact Us</h6>
                <a className="link link-hover">contact@thebooknook.com</a>
                <a className="link link-hover">1-800-BOOKS</a>
            </nav>
            <nav>
                <h6 className="footer-title">Follow Us</h6>
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.792 4.649-.69.188-1.43.23-2.18.087.608 1.885 2.372 3.266 4.466 3.304-1.62.128-3.537.64-5.316.64-.34 0-.676-.02-1.008-.06 2.094 1.348 4.593 2.13 7.29 2.13 8.755 0 13.54-7.253 13.54-13.54 0-.206-.005-.412-.013-.617.93-.67 1.724-1.51 2.35-2.44z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
