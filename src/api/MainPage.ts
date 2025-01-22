export interface MainData {
	message: string;
}

export const getMainApi = (): Promise<MainData> => {
	return Promise.resolve({
		message: 'Main resolve',
	});
};