/** @format */

import React from "react";

const NotFound = () => {
	return (
		<div className="flex flex-col space-y-5 h-full items-center pt-20">
			<h2 className="text-2xl md:text-5xl">Oops!</h2>
			<h3>This Category doesn&apos;t exist</h3>
			<div className="">
				<button className="px-5 p-2 bg-neutral-200 rounded-md text-black">
					Back to Home
				</button>
			</div>
		</div>
	);
};

export default NotFound;
