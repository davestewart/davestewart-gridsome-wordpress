import { format } from 'date-fns/fp'

export default {
  date (value) {
    return format('d LLLL yyyy', new Date(value))
  },

  year (value) {
    return format('yyyy', new Date(value))
  }
}
