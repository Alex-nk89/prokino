import React, { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination, Skeleton, Typography } from "@mui/material";
import { filmService } from "../../../services/filmService";
import style from "./SearchResult.module.scss";
import { InfoBlock, SearchResultItem } from "../../molecules";
import { MAIN_COLOR } from "../../../constants";
import { keys } from "../../../application/queryKeys";

interface ISearchResult {
  keyword: string;
  abortController: AbortController;
}

const SearchResult: FC<ISearchResult> = ({ keyword, abortController }) => {
  const [page, setPage] = useState(1);

  const {
    data: result,
    isError,
    isFetching,
  } = useQuery(keys.searchFilm(keyword, page), () =>
    filmService.getSearchedFilmsByKeyword(keyword, page, abortController)
  );

  const pageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const searchResultItems = result?.items.map((item) => (
    <SearchResultItem key={item.kinopoiskId} item={item} />
  ));

  const pagination =
    isFetching || result?.totalPages === 1 ? null : (
      <Pagination
        count={result?.totalPages}
        shape="rounded"
        page={page}
        onChange={pageHandler}
        sx={{ "& .Mui-selected": { backgroundColor: MAIN_COLOR } }}
      />
    );

  if (isFetching) {
    return <Skeleton height={150} variant="rounded" animation="wave" />;
  }

  if (isError) {
    return <div>Не удалось загрузить данные.</div>;
  }

  if (result?.total === 0) {
    return (
      <InfoBlock>
        <Typography variant="body2">Поиск не дал результатов.</Typography>
      </InfoBlock>
    );
  }

  return (
    <div className={style.searchResult}>
      {searchResultItems}
      {pagination}
    </div>
  );
};

export default SearchResult;
