/** @format */

import Category from "@/database/Schemas/Category";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async () => {
	const categories = await Category.find<Category>();

	// console.log(categories);

	return (
		<header className="w-full px-4 lg:px-32 h-20 border-b border-neutral-600 flex justify-between items-center">
			<Link href={"/"} className="text-xl">
				STORE
			</Link>
			<nav className="hidden md:flex w-full h-full items-center justify-center space-x-7">
				{categories.map(({ label, slug }, key) => (
					<Link
						key={key}
						className="text-neutral-300 hover:text-neutral-100 hover:underline"
						href={`/category/${slug}`}
					>
						{label}
					</Link>
				))}
			</nav>
			<nav></nav>
		</header>
	);
};

export default Navbar;
