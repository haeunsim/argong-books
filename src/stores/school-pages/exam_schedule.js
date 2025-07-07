import { defineStore } from 'pinia'
import axios from 'axios'

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    schedule: [],
  }),
  actions: {
    async fetchSchedule() {
      try {
        const response = await axios.get('/api/schedule')
        this.schedule = response.data
      } catch (error) {
        console.error('Error fetching schedule:', error)
      }
    },
  },
})
