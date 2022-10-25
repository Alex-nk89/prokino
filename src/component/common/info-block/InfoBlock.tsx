import style from './infoBlock.module.scss';
import { Typography } from '@mui/material';

interface Props {
    children: React.ReactNode;
    title?: string;
    maxHeightCSS?: number;
}

export const InfoBlock: React.FC<Props> = ({
    children,
    title,
    maxHeightCSS,
}) => {
    const header = title ? <Typography variant='h5'>{title}</Typography> : null;
    const maxHeight = maxHeightCSS ? `${maxHeightCSS}px` : '';

    return (
        <div className={style.infoBlock} style={{ maxHeight }}>
            {header}
            {children}
        </div>
    );
};
