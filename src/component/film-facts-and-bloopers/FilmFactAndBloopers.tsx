import { FilmApi } from '../../api/api';
import style from './filmFactsAndBloopers.module.scss';
import {
    Typography,
    Switch,
    FormControlLabel,
    Box,
    Alert,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useState } from 'react';

export const FilmFactAndBloopers: FC<{ id: number }> = ({ id }) => {
    const { data, isError, error } = useQuery(['facts', id], () =>
        FilmApi.getFactsAndBlooper(id)
    );

    const [isShowSpoilers, setIsShowSpoilers] = useState(false);

    const handleSwitchShowSpoilers = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsShowSpoilers(event.target.checked);
    };

    const tooglerSpoilers = (
        <Switch value={isShowSpoilers} onChange={handleSwitchShowSpoilers} />
    );

    const toogleSpoilers = data?.data.items.some((item) => item.spoiler) ? (
        <FormControlLabel
            control={tooglerSpoilers}
            label='Показывать спойлеры'
        />
    ) : null;

    const factsAndBloopersList = data?.data.items.map((item) => {
        return (
            <Alert severity={item.type === 'FACT' ? 'success' : 'error'}>
                <Typography>{item.text}</Typography>
            </Alert>
        );
    });

    if (data?.data.items.length === 0) {
        return (
            <Typography variant='body2'>Ошибки и факты отсуствуют..</Typography>
        );
    }

    return (
        <div className={style.facts_and_bloopers_wrapper}>
            {toogleSpoilers}
            {factsAndBloopersList}
        </div>
    );
};
