import { ICountry, IGenre, IStaffResponse } from "../../models"

export const convertingGenreListToString = (list: IGenre[] | undefined): string => {
    if(typeof(list) === 'undefined') {
        return '-'
    }

    return list.map(({ genre }) => genre).join(', ');
}

export const convertingCountryListToString = (list: ICountry[] | undefined): string => {
    if(typeof(list) === 'undefined') {
        return '-'
    }

    return list.map(({ country }) => country).join(', ');
}

export const filterStaff = (staffList: IStaffResponse[] | undefined, key: string, count: number): string => {
    if(typeof(staffList) === 'undefined') {
        return '-'
    }

    return staffList.filter(({  professionKey }) => professionKey === key).slice(0, count).map(({ nameRu }) => nameRu).join(', ')
}
    