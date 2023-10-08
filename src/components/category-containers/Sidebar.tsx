/** @format */

import Link from "next/link";
import { FunctionComponent } from "react";

/** @format */
interface SideBarCatgoryContainerProps {
	categories: Category[];
}

const SideBarCatgoryContainer: FunctionComponent<
	SideBarCatgoryContainerProps
> = ({ categories }) => {
	return (
		<div className="w-1/5 h-[80vh] lg:p-4 p-2 space-y-5 border-l border-neutral-700 sticky top-20 md:flex flex-col hidden">
			<h3 className="font-semibold">Browse Categories</h3>
			<div className="flex flex-col space-y-3 overflow-y-scroll">
				{categories.map(({ label, slug }) => (
					<Link
						href={`category/${slug}`}
						className="text-sm hover:underline"
						key={label}
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default SideBarCatgoryContainer;
