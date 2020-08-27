import api from './API'

export default {
  async clientsLookup () {
    return (await api.get('/clientsLookup')).data
  },
  async airportsLookup () {
    return (await api.get('/airportsLookup')).data
  },
  async locationsLookup () {
    return (await api.get('/locationsLookup')).data
  }

}
