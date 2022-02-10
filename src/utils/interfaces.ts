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
