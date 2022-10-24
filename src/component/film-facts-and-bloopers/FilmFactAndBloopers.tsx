import { FilmApi } from '../../api/api';
import { removeLinksFromText } from '../../utils/helpers/helpers';
import style from './filmFactsAndBloopers.module.scss';
import {
    CheckCircleOutlineOutlined,
    InfoOutlined,
    ErrorOutline,
} from '@mui/icons-material';
import {
    Typography,
    Switch,
    FormControlLabel,
    Alert,
    Divider,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useMemo, useState } from 'react';

export const FilmFactAndBloopers: FC<{ id: number }> = ({ id }) => {
    const { data, isError } = useQuery(['facts', id], () =>
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

    // const factsAndBloopersList = data?.data.items.map((item) => {
    //     return (
    //         <Alert severity={item.type === 'FACT' ? 'success' : 'error'}>
    //             <Typography>{item.text}</Typography>
    //         </Alert>
    //     );
    // });

    const factsAndBloopersList = useMemo(() => {
        return data?.data.items.map(({ spoiler, text, type }) => {
            if (spoiler && !isShowSpoilers) return null;

            const icon = {
                FACT: spoiler ? (
                    <InfoOutlined color='error' />
                ) : (
                    <CheckCircleOutlineOutlined color='success' />
                ),
                BLOOPER: spoiler ? (
                    <InfoOutlined color='error' />
                ) : (
                    <ErrorOutline color='warning' />
                ),
            };

            return (
                <React.Fragment key={text}>
                    <div className={style.facts_and_bloopers_wrapper__item}>
                        {icon[type]}
                        {removeLinksFromText(text)}
                    </div>
                    <Divider variant='middle' light />
                </React.Fragment>
            );
        });
    }, [data?.data.items, isShowSpoilers]);

    if (isError) {
        return (
            <Typography variant='body2'>Ошибки и факты отсуствуют..</Typography>
        );
    }

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
