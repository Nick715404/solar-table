export type TGetAuthToken = {
	error_code: number;
	error_message: string;
	data: TGetAuthTokenData;
	profiling: string;
	timings: unknown;
};

type TGetAuthTokenData = {
	token: string;
};
