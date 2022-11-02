import React, { FC, useState } from "react";
import { TextField } from "@mui/material";

import { INPUT_STYLE } from "../../../constants";
import { useFullSearch } from "../../../application/search";

const LiveSearch: FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const abortController = new AbortController();

  const { searchedFilmsList, searchedPersonsList } = useFullSearch(
    searchKeyword,
    abortController
  );

  const searchKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    abortController.abort();
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <TextField
        size="small"
        sx={{ ...INPUT_STYLE, width: "250px", marginRight: "2rem" }}
        placeholder="Фильмы, сериалы, актеры"
        value={searchKeyword}
        onChange={searchKeywordHandler}
      />
    </div>
  );
};

export default LiveSearch;
