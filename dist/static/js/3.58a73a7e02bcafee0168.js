webpackJsonp([3],{Jm58:function(t,n){},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=a()({},c.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,c.c)},n.a=function(t){var n=a()({},c.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,c.c)};var i=e("//Fk"),s=(e.n(i),e("woOf")),a=e.n(s),r=e("Gak4"),c=e("T452"),o=e("mtWM");e.n(o)},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("NYxO"),r=e("Sgn/"),c=e("T452"),o=e("PvFA"),u=e("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.data.list))}):this.$router.push("/singer")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;Object(o.c)(e)&&n.push(Object(o.a)(e))}),n}},components:{MusicList:u.a}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:this.songs,title:this.title,"bg-image":this.bgImage}})],1)},staticRenderFns:[]};var f=e("VU/8")(g,l,!1,function(t){e("Jm58")},"data-v-79957468",null);n.default=f.exports}});