
import ajax from './ajax.js'

export default function (param) {
  return new Promise((resolve, reject) => {
    ajax.post(param, backData => {
      if (backData.data.length === 0) {
        reject();
        return false
      }
      resolve(backData.data.data)
    }, error => {
      reject(error)
    })
  })
}
