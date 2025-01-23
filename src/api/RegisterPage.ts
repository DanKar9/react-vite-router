export interface RegisterData {
	message: string;
}

export const gerRegisterApi = (): Promise<RegistrerData> => {
	return Promise.resolve({
		message: 'Registration resolve',
	});
};