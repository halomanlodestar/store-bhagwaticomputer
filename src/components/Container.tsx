/** @format */

import React, { FC } from "react";

interface ContainerProps {
	className?: string;
	children?: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
	return (
		<div className={"p-4 lg:px-32 md:p-10 sm:p-7 " + className}>{children}</div>
	);
};
export default Container;
