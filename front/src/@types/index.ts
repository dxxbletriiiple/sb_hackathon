export interface InputInterface {
	placeholder: string;
	type: string;
	icon: string;
	err?: boolean;
}
export interface IButton {
	text: string;
	clazz?: string;
	onClick?: () => void;
}
