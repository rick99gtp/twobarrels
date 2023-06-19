import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This causes the page to scroll back to the top whenever the route location changes
 * This is especially helpful when clicking on the pagination links at the bottom of the blog page
 * @returns null
 */

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
