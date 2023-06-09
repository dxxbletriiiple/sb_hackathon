export interface InputInterface {
	placeholder: string;
	type: string;
	icon: string;
	err?: boolean;
}
export interface IButton {
	text: string;
	clazz?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ItemProps {
	imageUrl: string;
	title: string;
	description: string;
	isFavorite: boolean;
}

export interface IRootState {
	isLogged: boolean;
	isGuest: boolean;
}

export interface IProgress {
	lvl: number;
	points: [number, number];
}
