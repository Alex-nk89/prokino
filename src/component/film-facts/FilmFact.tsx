import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Typography, Box, Alert } from '@mui/material';
import { Circle } from '@mui/icons-material';

import { Carousel } from '../common/carousel/Carousel';
import { FilmApi } from '../../api/api';
import { removeLinksFromText } from '../../utils/helpers/helpers';
import style from './filmFacts.module.scss';

interface IFilmFacts {
    kinopoiskId: number;
    isDesktop?: boolean;
}

export const FilmFacts: FC<IFilmFacts> = ({ kinopoiskId, isDesktop }) => {
    const { data: factsList, isError } = useQuery(['facts'], () =>
        FilmApi.getFactsAndBlooper(kinopoiskId)
    );

    const facts = factsList?.data.items
        .filter(({ type }) => type === 'FACT')
        .map(({ text }) => (
            <Box
                key={text}
                className={style.facts_and_bloopers_wrapper__facts__list__item}
            >
                {isDesktop ? <Circle /> : null}
                <Typography variant='body2'>
                    {removeLinksFromText(text)}
                </Typography>
            </Box>
        ));

    const bloopers = factsList?.data.items
        .filter(({ type }) => type === 'BLOOPER')
        .map(({ text }) => (
            <Box
                key={text}
                className={style.facts_and_bloopers_wrapper__facts__list__item}
            >
                {isDesktop ? <Circle /> : null}
                <Typography variant='body2'>
                    {removeLinksFromText(text)}
                </Typography>
            </Box>
        ));

    const spoilersAttention =
        factsList?.data &&
        factsList?.data.items.filter(({ spoiler }) => spoiler).length > 0 ? (
            <Alert severity='warning' variant='outlined'>
                Внимание! Могут содержаться спойлеры
            </Alert>
        ) : null;

    if (isError) {
        return (
            <Typography variant='body1'>Ошибки и факты отсуствуют..</Typography>
        );
    }

    return (
        <Box className={style.facts_and_bloopers_wrapper}>
            {spoilersAttention}
            <Box className={style.facts_and_bloopers_wrapper__facts}>
                <Box
                    className={style.facts_and_bloopers_wrapper__facts__header}
                >
                    <Typography variant='h6'>Знаете ли вы что...</Typography>
                </Box>
                <Box className={style.facts_and_bloopers_wrapper__facts__list}>
                    {isDesktop && facts}
                    {!isDesktop && <Carousel items={facts} />}
                    {facts?.length === 0 ? (
                        <Typography>Нам ничего не известно :)</Typography>
                    ) : null}
                </Box>
            </Box>

            <Box className={style.facts_and_bloopers_wrapper__facts}>
                <Box
                    className={style.facts_and_bloopers_wrapper__facts__header}
                >
                    <Typography variant='h6'>Ошибки</Typography>
                </Box>
                <Box className={style.facts_and_bloopers_wrapper__facts__list}>
                    {isDesktop && bloopers}
                    {!isDesktop && <Carousel items={bloopers} />}
                    {bloopers?.length === 0 ? (
                        <Typography>Нам ничего не известно :)</Typography>
                    ) : null}
                </Box>
            </Box>
        </Box>
    );
};

// import { FilmApi } from '../../api/api';
// import { removeLinksFromText } from '../../utils/helpers/helpers';
// import style from './filmFactsAndBloopers.module.scss';
// import {
//     CheckCircleOutlineOutlined,
//     InfoOutlined,
//     ErrorOutline,
// } from '@mui/icons-material';
// import { Typography, Switch, FormControlLabel, Divider } from '@mui/material';
// import { useQuery } from '@tanstack/react-query';
// import React, { FC, useMemo, useState } from 'react';

// export const FilmFactAndBloopers: FC<{ id: number }> = ({ id }) => {
//     const { data, isError } = useQuery(['facts', id], () =>
//         FilmApi.getFactsAndBlooper(id)
//     );

//     const [isShowSpoilers, setIsShowSpoilers] = useState(false);

//     const handleSwitchShowSpoilers = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         setIsShowSpoilers(event.target.checked);
//     };

//     const tooglerSpoilers = (
//         <Switch value={isShowSpoilers} onChange={handleSwitchShowSpoilers} />
//     );

//     const toogleSpoilers = data?.data.items.some((item) => item.spoiler) ? (
//         <FormControlLabel
//             control={tooglerSpoilers}
//             label='Показывать спойлеры'
//         />
//     ) : null;

//     const factsAndBloopersList = useMemo(() => {
//         return data?.data.items.map(({ spoiler, text, type }) => {
//             if (spoiler && !isShowSpoilers) return null;

//             const icon = {
//                 FACT: spoiler ? (
//                     <InfoOutlined color='error' />
//                 ) : (
//                     <CheckCircleOutlineOutlined color='success' />
//                 ),
//                 BLOOPER: spoiler ? (
//                     <InfoOutlined color='error' />
//                 ) : (
//                     <ErrorOutline color='warning' />
//                 ),
//             };

//             return (
//                 <React.Fragment key={text}>
//                     <div className={style.facts_and_bloopers_wrapper__item}>
//                         {icon[type]}
//                         {removeLinksFromText(text)}
//                     </div>
//                     <Divider variant='middle' light />
//                 </React.Fragment>
//             );
//         });
//     }, [data?.data.items, isShowSpoilers]);

//     if (isError) {
//         return (
//             <Typography variant='body2'>Ошибки и факты отсуствуют..</Typography>
//         );
//     }

//     if (data?.data.items.length === 0) {
//         return (
//             <Typography variant='body2'>Ошибки и факты отсуствуют..</Typography>
//         );
//     }

//     return (
//         <div className={style.facts_and_bloopers_wrapper}>
//             {toogleSpoilers}
//             {factsAndBloopersList}
//         </div>
//     );
// };
