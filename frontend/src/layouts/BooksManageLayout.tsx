import { Outlet } from "react-router-dom";

function BooksManageLayout() {
	return (
		<div>
			{/* create a layout for manage books where i manage the books routes in it like delete, update */}
			<Outlet />
		</div>
	);
}

export default BooksManageLayout;
