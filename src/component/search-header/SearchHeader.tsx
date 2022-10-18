import { FC } from 'react';
import { useMediaQuery, TextField, MenuItem, Button } from '@mui/material';
import { INPUT_STYLE, BUTTON_STYLE } from '../../constants';
import style from './searchHeader.module.scss';

interface ISearchHeader {
    searchValue: string;
    searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectValue: string;
    selectHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchClick: () => void;
}

const selectVariants = [
    { label: 'фильм', value: 'film' },
    { label: 'актер', value: 'actor' },
];

export const SearchHeader: FC<ISearchHeader> = ({
    searchValue,
    searchHandler,
    selectValue,
    selectHandler,
    searchClick,
}) => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <div className={style.searchHeader}>
            <TextField
                sx={INPUT_STYLE}
                fullWidth
                value={searchValue}
                onChange={searchHandler}
            />

            <TextField
                select
                value={selectValue}
                onChange={selectHandler}
                sx={{ ...INPUT_STYLE, width: isMobile ? '100%' : '175px' }}
            >
                {selectVariants.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant='contained' onClick={searchClick} sx={BUTTON_STYLE}>
                Найти
            </Button>
        </div>
    );
};
