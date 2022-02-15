import { ReactElement } from "react";

export interface ICurrency {
	id: string;
	countryCode: string;
	currencyCode: string;
	symbol: string;
	rate: number;
}

export interface ICurrencyState {
	loading: boolean;
	error: string;
	currency: ICurrency;
}

export interface ICurrencySelectionProps {
	color: string;
	resetState: () => void;
}

export interface IHeroBannerProps {
	hero: {
		id: string;
		image: string;
		imageMob: string;
		subtitle: string;
		title: string;
		cta: string;
		category: string;
	}[];
}

export interface IPromisesProps {
	promises: {
		id: string;
		title: string;
		subtitle: string;
		icon: string;
	}[];
}

export interface IPopularProductsProps {
	products: {
		id: string;
		name: string;
		price: number;
		discount: number;
		isPopular: boolean;
		image: string;
	}[];
}

export interface IProduct {
	id: string | number;
	name: string;
	price: number;
	discount: number;
	isPopular: boolean;
	image: string;
}

export interface IProductProps {
	product: IProduct;
}

export interface ICategory {
	id: string;
	subtitle: string;
	name: string;
	ctaText: string;
	image: string;
	ctaLink: string;
	featured: boolean;
}

export interface IByCategoriesProps {
	categories: ICategory[];
}

export interface IBlog {
	id: string;
	image: string;
	date: number;
	title: string;
	ctaLink: string;
}

export interface IBlogsProps {
	blogs: IBlog[];
}

export interface IHomeSectionHeader {
	title: string;
	subtitle?: string;
	icon?: ReactElement;
}

export interface IIG {
	id: string;
	image: string;
}

export interface IHomeIGProps {
	instagrams: IIG[];
}

export interface IFAQ {
	id: string;
	title: string;
	description: string;
}
export interface IHomeFAQProps {
	faqs: IFAQ[];
}

export interface IFooterItem {
	id: string;
	name: string;
	link: string;
}

export interface IPLPListingProps {
	products: IProduct[];
}

export interface IPLPListingSortProps {
	length: number;
	name?: string;
}
