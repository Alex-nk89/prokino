import { Skeleton, Typography } from '@mui/material';

interface ITitle {
    isLoading: boolean;
    title: string;
}

export const PageTitle: React.FC<ITitle> = ({ isLoading, title }) => {
    return (
        <Typography variant='h4'>
            {isLoading ? <Skeleton sx={{ bgcolor: 'grey.800' }} /> : title}
        </Typography>
    );
};
