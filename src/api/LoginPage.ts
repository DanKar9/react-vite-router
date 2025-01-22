export interface LoginData {
	message: string;
}

export const getLoginApi = (): Promise<LoginData> => {
	return Promise.resolve({
		message: 'Login resolve',
	});
};