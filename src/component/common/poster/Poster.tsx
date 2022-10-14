import { Skeleton } from '@mui/material';
import { SKELETON_COLOR } from '../../../constants';

interface IPoster {
    isLoading?: boolean;
    src?: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

export const Poster: React.FC<IPoster> = ({
    isLoading,
    src,
    alt,
    width = '100%',
    height = '100%',
}) => {
    return isLoading ? (
        <Skeleton
            width={width}
            height={height}
            sx={{ bgcolor: SKELETON_COLOR }}
            variant='rectangular'
        />
    ) : (
        <img src={src} alt={alt} />
    );
};
