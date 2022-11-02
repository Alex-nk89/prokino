import { FC } from 'react';
import { Typography } from '@mui/material';

interface IPageTitle {
    title: string;
}

const PageTitle: FC<IPageTitle> = ({ title }) => {
    return <Typography variant='h3'>{title}</Typography>;
};

export default PageTitle;
