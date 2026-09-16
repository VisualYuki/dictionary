import { axiosInstance } from '@/core/axios'
import type { GroupWord } from '../../../../shared/types'

export const api = {
  async all(): Promise<GroupWord[]> {
    const response = await axiosInstance.get<GroupWord[]>('/group-words')

    return response.data
  },
  async add(word: string): Promise<GroupWord[]> {
    const response = await axiosInstance.post<GroupWord[]>('/group-words', { word })

    return response.data
  },
  async update(id: number, word: string): Promise<GroupWord[]> {
    const response = await axiosInstance.patch<GroupWord[]>(`/group-words/${id}`, { word })

    return response.data
  },
  async remove(id: number): Promise<GroupWord[]> {
    const response = await axiosInstance.delete<GroupWord[]>(`/group-words/${id}`)

    return response.data
  },
}
