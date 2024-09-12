import {
	Box,
	CircularProgress,
	Paper,
	Table,
	TableContainer,
} from '@mui/material';
import { DataTableBody, DataTableHead } from './components';
import { useCookies } from 'react-cookie';
import { getFormsData } from '../../api';
import { useGetData } from '../../hooks';
import { TGetTableData } from '../../types';

export const DataTable = () => {
	const [cookies] = useCookies(['accessToken']);

	const { data, isLoading } = useGetData<TGetTableData>({
		dataKey: 'table',
		func: () => getFormsData(cookies.accessToken),
	});

	return (
		<Box component='section' marginBottom={20}>
			<Box component='div' className='container'>
				{isLoading ? (
					<Box display='flex' alignItems='center' justifyContent='center'>
						<CircularProgress />
					</Box>
				) : (
					<Paper>
						<TableContainer>
							<Table>
								<DataTableHead />
								<DataTableBody tableRows={data?.data} />
							</Table>
						</TableContainer>
					</Paper>
				)}
			</Box>
		</Box>
	);
};
