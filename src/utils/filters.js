import moment from 'moment'

export default {
  date (value) {
    return moment(value).locale('en_gb').format('ll')
  },

  year (value) {
    return moment(value).locale('en_gb').format('Y')
  }
}
