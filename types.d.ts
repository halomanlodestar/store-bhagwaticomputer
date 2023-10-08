/** @format */

type Category = { label: string; slug: string };

type Product = {
	name: string;
	id: string;
	description: string;
	price: number;
	availability: boolean;
	image: string;
	featured: boolean;
	category: Category;
};
