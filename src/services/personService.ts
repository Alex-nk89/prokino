import { api } from '.'
import { PersonService } from '../application/ports'
import { IStaffResponse, IPersonByNameResponse } from '../domain/person'

export const personService: PersonService = {
    getActorsInFilm(kinopoiskId): Promise<IStaffResponse[]> {
        return api<IStaffResponse[]>('v1/staff', {
            params: {
                filmId: kinopoiskId
            }
        })
    },
    getSearchedPersonsByKeyword(keyword, abortController): Promise<IPersonByNameResponse> {
        return new Promise<IPersonByNameResponse>((resolve) => {
            setTimeout(() => resolve(
                api<IPersonByNameResponse>('v1/persons', {
                    params: {
                        name: keyword
                    },
                    signal: abortController.signal
                })
            ), 1000)
        })
    }
}