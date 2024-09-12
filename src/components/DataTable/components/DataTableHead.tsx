import { TableHead, TableRow, TableCell } from '@mui/material';

export const DataTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell width='50%' align='left'>
					Solar
				</TableCell>
				<TableCell width='50%' align='right'>
					test
				</TableCell>
			</TableRow>
		</TableHead>
	);
};
