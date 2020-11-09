import { LOAD_TABLES, TO_SERVE, CLEAN_TABLE } from "./types";

export const load_tables = (tables) => {
  return {
    type: LOAD_TABLES,
    payload: tables,
  };
};

export const to_serve = (index, drinks) => {
  return {
    type: TO_SERVE,
    payload: { index: index, drinks: drinks },
  };
};

export const clean_table = (index) => {
  return { type: CLEAN_TABLE, payload: index };
};
