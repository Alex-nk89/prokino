import { api } from '.'
import { FactsService } from '../application/ports'
import { IFactResponse } from '../domain/fact'

export const factsService: FactsService = {
    getFactsAndBlooper(kinopoiskId): Promise<IFactResponse> {
        return api<IFactResponse>(`v2.2/films/${kinopoiskId}/facts`, {
            params: {
                id: kinopoiskId
            }
        })
    }
}