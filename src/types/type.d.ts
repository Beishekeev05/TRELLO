interface Token {
	token?: string;
	isLoading?: boolean;
	error?: string | null;
}
export interface AuthItem extends Token {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}
