export type TGetServerData = {
	error_code: number;
	error_message: string;
	data: TGetAuthTokenData;
	profiling: string;
	timings: unknown;
};

type TGetAuthTokenData = {
	token: string;
};

export type TGetTableData = Omit<TGetServerData, 'data'> & {
	data: TGetTableDataResponse[];
};

export type TGetTableDataResponse = {
	id: string;
	documentStatus: string;
	employeeNumber: string;
	documentType: string;
	documentName: string;
	companySignatureName: string;
	employeeSignatureName: string;
	employeeSigDate: string;
	companySigDate: string;
};
