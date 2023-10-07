/** @format */

import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<header className="w-full lg:px-32 h-20 border-b border-neutral-600 flex justify-between items-center">
			<Link href={"/"}>STORE</Link>
		</header>
	);
};

export default Navbar;
