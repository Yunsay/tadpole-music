// import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'
export function getLyric(mid) {
  const url = debug ? '/api/getLyric' : 'http://localhost:9000/tadpole-music/index.html/api/getLyric'
  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
