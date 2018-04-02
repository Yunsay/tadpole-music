import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
// import axios from 'axios'
export function getLyric(songid) {
  const url = 'https://api.darlin.me/music/lyric' + '/' + songid + '/'
  const data = Object.assign({}, commonParams, {
  })
  return jsonp(url, data)
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
}
