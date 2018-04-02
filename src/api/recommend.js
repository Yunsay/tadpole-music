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

export function getDiscList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'
  const data = Object.assign({}, commonParams, {
    format: 'jsonp',
    tpl: 'v12',
    page: 'other',
    rnd: 0,
    g_tk: 1522598183238,
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return jsonp(url, data, options)
}

export function getSongList(disstid) {
  return axios.get('https://bird.ioliu.cn/v2/?url=https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg', {
    params: {
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
      notice: 0,
      headers: {
        referer: 'https://y.qq.com/',
        host: 'c.y.qq.com'
      }
    }
  }).then((response) => {
    return Promise.resolve(response.data)
  })
    .catch(function (error) {
      console.log(error)
    })
}
