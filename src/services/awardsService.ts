import { api } from '.'
import { AwardsService } from '../application/ports'
import { IAwardResponse } from '../domain/award'

export const awardService: AwardsService = {
    getAwards(kinopoiskId): Promise<IAwardResponse> {
        return api<IAwardResponse>(`v2.2/films/${kinopoiskId}/awards`, {
            params: {
                id: kinopoiskId
            }
        })
    }
}