export const keys = {
  filmData: ["filmData"],
  filmStaff: ["filmStaffList"] as const,
  searchFilm: (keyword: string, page?: number) =>
    ["searchFilmByKeyword", keyword, page] as const,
  searchPerson: (keyword: string) =>
    ["searchPersonsByKeyword", keyword] as const,
  awards: ["Awards"] as const,
  facts: ["facts"],
  filmImages: ["filmImages"],
  premieres: ["premieres"],
};
