import { FC, useState, useMemo } from "react";
import { SearchHeader } from "../../molecules";
import { SearchResult } from "../../organisms";
import style from "./SearchView.module.scss";

const SearchView: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("film");
  const [keyword, setKeyword] = useState("");

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
    () => <SearchResult keyword={keyword} abortController={abortController} />,
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

export default SearchView;
