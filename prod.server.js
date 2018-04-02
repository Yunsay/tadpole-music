// 'use strict'
// var config = require('./config/index')
// var port = process.env.PORT || config.build.port
// const merge = require('webpack-merge')
// const path = require('path')
//
// //后端代理 绕过host及referer begin
// const express= require('express')
// const axios = require('axios')
// const app = express()
// var apiRoutes = express.Router()
// app.use('/api', apiRoutes)
// //end
// const HOST = process.env.HOST
// const PORT = process.env.PORT && Number(process.env.PORT)
//
// const devWebpackConfig = merge({
//   // cheap-module-eval-source-map is faster for development
//   devtool: config.dev.devtool,
//
//   // these devServer options should be customized in /config/index.js
//   devServer: {
//     before(app) {
//       app.get('/api/getDiscList', function (req, res) {
//         let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
//         axios.get(url, {
//           headers: {
//             referer: 'https://c.y.qq.com/',
//             host: 'c.y.qq.com'
//           },
//           params: req.query
//         }).then((response) => {
//           res.json(response.data)
//         }).catch((e) => {
//           console.log(e)
//         })
//       }),
//         app.get('/api/getMusic', function (req, res) {
//           let url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
//           axios.get(url, {
//             headers: {
//               referer: 'https://c.y.qq.com',
//               host: 'c.y.qq.com'
//             },
//             params:req.query
//           }).then((response) => {
//             res.json(response.data)
//           }).catch((e) => {
//             console.log(e)
//           })
//         }),
//         app.get('/api/getLyric', function (req, res) {
//           let url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg'
//           axios.get(url, {
//             headers: {
//               referer: 'https://y.qq.com/',
//               host: 'c.y.qq.com'
//             },
//             params: req.query
//           }).then((response) => {
//             let ret = response.data
//             if (typeof ret === 'string') {
//               let reg = /^\w+\(({[^()]+})\)$/
//               let matches = ret.match(reg)
//               if (matches) {
//                 ret = JSON.parse(matches[1])
//               }
//             }
//             res.json(ret)
//           }).catch((e) => {
//             console.log(e)
//           })
//         }),
//         app.get('/api/getSongList', function (req, res) {
//           let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//           axios.get(url, {
//             headers: {
//               referer: 'https://y.qq.com/n/yqq/playsquare/3791782290.html',
//               host: 'c.y.qq.com'
//             },
//             params: req.query
//           }).then((response) => {
//             res.json(response.data)
//           }).catch((e) => {
//             console.log(e)
//           })
//         })
//     },
//     clientLogLevel: 'warning',
//     historyApiFallback: {
//       rewrites: [
//         { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
//       ],
//     },
//     hot: true,
//     contentBase: false, // since we use CopyWebpackPlugin.
//     compress: true,
//     host: HOST || config.dev.host,
//     port: PORT || config.dev.port,
//     open: config.dev.autoOpenBrowser,
//     overlay: config.dev.errorOverlay
//       ? { warnings: false, errors: true }
//       : false,
//     publicPath: config.dev.assetsPublicPath,
//     proxy: config.dev.proxyTable,
//     quiet: true, // necessary for FriendlyErrorsPlugin
//     watchOptions: {
//       poll: config.dev.poll,
//     }
//   }
// })
//
// app.use(express.static('./dist')),
//
// module.exports = app.listen(port, function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Listening at http://localhost:' + port + '\n')
// })
