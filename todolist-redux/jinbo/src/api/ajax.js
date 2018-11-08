import axios from 'axios'
import qs from 'qs'

export default {
  post (opt, backFn, failFn) {
    let request = {
      type: opt.type || undefined,
      data: JSON.stringify(opt.data || {}),
      md5: 'md5'
    }
    axios({
      method: 'POST',
      url: '/njpu/ngu',
      data: qs.stringify(request)
    }).then(function (response) {
      if (typeof backFn === 'function') { backFn(response) }
    }).catch(function (error) {
      if (typeof failFn === 'function') { failFn(error) }
    })
  }
}