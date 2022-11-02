import { api } from '../services'
import { ImageService } from '../application/ports'
import { IImageResponse } from '../domain/image'

export const imageService: ImageService = {
    getFilmImages({ type, kinopoiskId }): Promise<IImageResponse> {
        return api<IImageResponse>(`v2.2/films/${kinopoiskId}/images`, {
            params: {
                type
            }
        })
    },
}