export interface IProduct {
	id?: string;
	title: string;
	description: string;
	ingredients?: string;
	productData?: string;
	ean?: string;
	image: {
		url: string;
	};
}

export type Products = IProduct[];
