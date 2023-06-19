export interface IProduct {
	id?: string;
	title: string;
	description: string;
	image: {
		url: string;
	};
}

export type Products = IProduct[];
