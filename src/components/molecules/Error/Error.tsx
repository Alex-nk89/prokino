import { FC } from "react";
import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import style from "./Error.module.scss";

interface IError {
  error: AxiosError;
}

const Error: FC<IError> = ({ error }) => {
  const serviceInformation =
    process.env.NODE_ENV !== "production" ? (
      <>
        <br />
        <Typography>{error.message}</Typography>
      </>
    ) : null;

  return (
    <div className={style.error}>
      <Typography variant="h1">{error.response?.status}</Typography>
      <Typography variant="h4">Не удалось получить информацию</Typography>
      {serviceInformation}
    </div>
  );
};

export default Error;
