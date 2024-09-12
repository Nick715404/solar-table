import { TGetTableDataResponse } from '../../../types';
import { TableBody, TableRow, TableCell } from '@mui/material';

type DataTableBodyProps = {
	tableRows: TGetTableDataResponse[] | undefined;
};

export const DataTableBody = ({ tableRows }: DataTableBodyProps) => {
	return (
		<TableBody>
			{tableRows && tableRows.length > 0 ? (
				tableRows.map(row => (
					<TableRow key={row.id}>
						<TableCell>{row.companySigDate}</TableCell>
						<TableCell>{row.companySignatureName}</TableCell>
						<TableCell>{row.documentName}</TableCell>
						<TableCell>{row.documentStatus}</TableCell>
						<TableCell>{row.documentType}</TableCell>
						<TableCell>{row.employeeNumber}</TableCell>
						<TableCell>{row.employeeSigDate}</TableCell>
						<TableCell>{row.employeeSignatureName}</TableCell>
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell>Table is empty</TableCell>
				</TableRow>
			)}
		</TableBody>
	);
};
