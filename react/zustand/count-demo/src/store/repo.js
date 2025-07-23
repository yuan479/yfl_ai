import { getRepoList } from "../api/todo";
import { create } from 'zustand'


export const useRepoStore = create((set) => ({
    repos: [],
    loading: false,
    error: null,
    fetchRepos: async () => {
        // 业务
        set({ loading: true, error: null })
        try {
            const res = await getRepoList('yuanfeilin')
            set({ repos: res.data, loading: false })
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    }
}))
