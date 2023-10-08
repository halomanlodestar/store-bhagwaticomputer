/** @format */

import { FunctionComponent } from "react";
import Image from "next/image";

interface BannerProps {
	src: string;
	category?: Category;
	zoom?: boolean;
	overlay?: boolean;
}

const Banner: FunctionComponent<BannerProps> = ({
	src,
	zoom,
	category,
	overlay,
}) => {
	const placeholder =
		"https://www.genatec.com/hs-fs/hubfs/genatec_blog_assets/Blog-2022-005/What%20is%20a%20gaming%20setup_-1.jpg?width=1477&height=831&name=What%20is%20a%20gaming%20setup_-1.jpg";
	return (
		<div className="overflow-clip bg-transparent">
			<div className={`relative group`}>
				<Image
					alt="banner"
					width={416}
					height={238}
					src={src || placeholder}
					className={`min-w-full min-h-full ${
						zoom && "group-hover:scale-105"
					} duration-200`}
				/>
				<div
					className={`absolute top-0 left-0 w-full h-full 
					${
						overlay &&
						"bg-gradient-to-tr from-black/70 group-hover:opacity-0 duration-200"
					}
					`}
				></div>
				<span className="absolute bottom-1 left-1 text-xl">
					{category?.label || "Featured"}
				</span>
			</div>
		</div>
	);
};

export default Banner;
