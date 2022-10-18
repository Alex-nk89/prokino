import { FC, useState, useMemo } from 'react';
import { SearchHeader } from '../../component/search-header/SearchHeader';
import { SearchResult } from '../../component/search-result/SearchResult';
import style from './search.module.scss';

export const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState('film');
    const [keyword, setKeyword] = useState('');

    const abortController = new AbortController();

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
    };

    const selectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectValue(event.target.value);
    };

    const searchClick = () => {
        abortController.abort();
        setKeyword(searchValue);
    };

    const searchResult = useMemo(
        () => (
            <SearchResult keyword={keyword} abortController={abortController} />
        ),
        //eslint-disable-next-line
        [keyword]
    );

    return (
        <section className={style.searchField}>
            <SearchHeader
                searchValue={searchValue}
                searchHandler={searchHandler}
                selectValue={selectValue}
                selectHandler={selectHandler}
                searchClick={searchClick}
            />
            {keyword.length > 0 ? searchResult : null}
        </section>
    );
};
