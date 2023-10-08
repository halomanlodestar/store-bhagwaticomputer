/** @format */

import connect from "@/database";
import Category from "@/database/Schemas/Category";
import Link from "next/link";
import { FunctionComponent } from "react";

interface InlineCategoryProps {}

const InlineCategoryContainer: FunctionComponent<
	InlineCategoryProps
> = async ({}) => {
	connect();

	const categories = await Category.find<Category>();
	return (
		<div className="w-full text-sm h-14 overflow-x-scroll p-2 md:hidden border-y border-neutral-600 flex space-x-2">
			{categories.map(({ label, slug }) => (
				<Link
					className="min-w-fit rounded-md px-2 border border-neutral-600 flex items-center justify-center"
					href={`/category/${slug}`}
					key={label}
				>
					{label}
				</Link>
			))}
		</div>
	);
};

export default InlineCategoryContainer;
