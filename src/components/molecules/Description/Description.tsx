import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface IDescription {
    description: string;
    shortDescription?: string;
}

const Description: FC<IDescription> = ({ description, shortDescription }) => {
    return (
        <Box>
            <Typography variant='body1'>{shortDescription}</Typography>
            <br />
            <Typography variant='body2'>{description}</Typography>
        </Box>
    );
};

export default Description;
