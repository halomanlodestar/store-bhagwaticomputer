/** @format */

import React from "react";

const Loading = () => {
	return (
		<section className="w-full px-4 lg:px-32 text-3xl md:text-4xl h-full space-y-4 sm:space-y-7 pt-10">
			<h2>Products</h2>
			<div className="grid grid-cols-1 gap-3 md:gap-7 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
				<div className="w-full h-80 bg-neutral-200 dark:bg-neutral-800"></div>
			</div>
		</section>
	);
};

export default Loading;
