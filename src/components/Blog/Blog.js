import "./Blog.css";
import { Link } from "react-router-dom";
import BlogItems from "./BlogItems";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

const Blog = () => {
	const [page, setPage] = useState(0);
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		document.title = "Two Barrels LLC Blog | Two Barrels LLC";
		// when the page loads, determine if pagination is required
		setPageCount(Math.floor(BlogItems.length / 10) + 1);
	}, []);

	return (
		<div className="outer-container">
			<div className="blog__container">
				<h1 className="blog-h1">Latest Posts</h1>
				{BlogItems.slice(page * 10, page * 10 + 10).map((item, index) => {
					return (
						<article>
							<h2 className="post-title">
								<Link to={item.link}>{parse(item.title)}</Link>
							</h2>
							<div className="post-details">
								<span>{item.date}</span>
							</div>
							<p>
								{item.text}
								<Link className="view-article" to={item.link}>
									{" "}
									View Article
								</Link>
							</p>
						</article>
					);
				})}
				{pageCount > 1 ? (
					<div className="pagination-container">
						{page + 1 > 1 ? (
							<div
								className="previous-page"
								onClick={() => {
									setPage(() => page - 1);
									window.scrollTo(0, 0);
								}}
							>
								« Previous
							</div>
						) : null}
						{Array.from({ length: pageCount }, (_, i) => (
							<div
								onClick={() => {
									setPage(i);
									window.scrollTo(0, 0);
								}}
								className={`page-number ${page === i ? "active-page" : ""}`}
							>
								{i + 1}
							</div>
						))}
						{page + 1 < pageCount ? (
							<div
								className="next-page"
								onClick={() => {
									setPage(() => page + 1);
									window.scrollTo(0, 0);
								}}
							>
								Next »
							</div>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Blog;
