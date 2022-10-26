import React, { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {Pagination, Skeleton, Typography} from '@mui/material';
import { FilmApi } from '../../api/api';
import { SearchResultItem } from '../search-result-item/SearchResultItem';
import style from './searchResult.module.scss';
import {InfoBlock} from "../common/info-block/InfoBlock";
import {MAIN_COLOR} from "../../constants";

interface ISearchResult {
    keyword: string;
    abortController: AbortController;
}

export const SearchResult: FC<ISearchResult> = ({
    keyword,
    abortController,
}) => {
    const [page, setPage] = useState(1);

    const {
        data: result,
        isError,
        isFetching,
    } = useQuery(['search films', page, keyword], () =>
        FilmApi.getSearchedFilms(keyword, page, abortController)
    );

    const pageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    const searchResultItems = result?.data.items.map((item) => (
        <SearchResultItem key={item.kinopoiskId} item={item} />
    ));

    const pagination =
        isFetching || result?.data.totalPages === 1 ? null : (
            <Pagination
                count={result?.data.totalPages}
                shape='rounded'
                page={page}
                onChange={pageHandler}
                sx={{ '& .Mui-selected': { backgroundColor: MAIN_COLOR}}}
            />
        );

    if (isFetching) {
        return <Skeleton height={150} variant='rounded' animation='wave' />;
    }

    if (isError) {
        return <div>Не удалось загрузить данные.</div>;
    }

    if(result?.data.total === 0) {
        return <InfoBlock><Typography variant='body2'>Поиск не дал результатов.</Typography></InfoBlock>
    }

    return (
        <div className={style.searchResult}>
            {searchResultItems}
            {pagination}
        </div>
    );
};
