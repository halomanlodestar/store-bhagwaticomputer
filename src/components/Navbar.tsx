/** @format */

import connect from "@/database";
import Category from "@/database/Schemas/Category";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async () => {
	connect();
	const categories = await Category.find<Category>();

	return (
		<header className="w-full sticky top-0 z-20 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-md px-4 lg:px-32 h-20 border-b border-neutral-600 flex justify-between items-center">
			<Link href={"/"} className="w-20 h-20 flex items-center justify-center">
				<Image
					className="p-3"
					src={"/logo.png"}
					width={100}
					height={100}
					alt="Bhagwati Computer Store"
				/>
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
