import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platfrom: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
const debug = process.env.NODE_ENV !== 'production'
export function getDiscList() {
  // debug ? '/api/getDiscList' : 'http://127.0.0.1:8020/tadpole-music/api/getDiscList'
  const url = debug ? '/api/getDiscList' : 'http://localhost:9000/tadpole-music/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  // return jsonp(url, data, options)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
httpsgithub.comYunsaytadpole-music.git
export function getSongList(disstid) {
  // debug ? '/api/getSongList' : 'http://127.0.0.1:8020/tadpole-music/api/getSongList'
  const url = '/api/getSongList'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    format: 'json',
    utf8: 1,
    onlysong: 0,
    loginUin: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    notice: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
