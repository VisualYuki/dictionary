import { axiosInstance } from '@/core/axios'

export const api = {
  async all() {
    const response = await axiosInstance.post('/group-words/all')

    return response.data
  },
  async add(groupWord: string) {
    const response = await axiosInstance.post('/group-words/add', { groupWord })

    return response.data
  },
  async delete(groupWordId: number) {
    const response = await axiosInstance.post('/group-words/delete', { id: groupWordId })

    return response.data
  },
}
