(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comment-detail"],{"17be":function(t,e,i){"use strict";i.r(e);var n=i("20bd"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"20bd":function(t,e,i){"use strict";i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("5b17"),o={data:function(){return{news_id:"",comment:{},reply:[],reply_count:0,reply_content:"",replied_name:"",to_reply_id:"",user:{},skinMode:!0,fontSize:"normal",theme_color:["#ED4040","#ffcc00","#74b886","#395ac6","#ffbdbd","#424242"],isLogined:!1}},onLoad:function(t){var e=this;this.news_id=t.news_id;var i=JSON.parse(decodeURIComponent(t.comment));this.comment=i,this.reply_count=i.reply_count,uni.setNavigationBarTitle({title:this.reply_count+"条回复"});try{var n=uni.getStorageSync("user_id");this.$set(this.user,"user_id",n);var o=uni.getStorageSync("username");this.$set(this.user,"username",o);var a=uni.getStorageSync("avatar");this.$set(this.user,"avatar",a)}catch(t){}try{var s=uni.getStorageSync("skin_mode");""!==s&&(this.skinMode=s)}catch(t){}try{var c=uni.getStorageSync("font-size");""!==c&&(this.fontSize=0==c?"big":1==c?"normal":"small")}catch(t){}uni.request({url:"https://af1o32.toutiao15.com/get_reply_news",method:"GET",data:{user_id:this.user.user_id,comment_id:this.comment._id},success:function(t){e.load_reply(t.data.replyList)}})},onShow:function(){var t=this;try{var e=uni.getStorageSync("user_id");this.$set(this.user,"user_id",e);var i=uni.getStorageSync("username");this.$set(this.user,"username",i);var n=uni.getStorageSync("avatar");this.$set(this.user,"avatar",n)}catch(s){}try{var o=uni.getStorageSync("isLogined");""!==o&&(this.isLogined=o)}catch(s){}try{var a=uni.getStorageSync("theme_color");""==a&&(a=0),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:this.theme_color[a]})}catch(s){}uni.request({url:"https://af1o32.toutiao15.com/get_one_comment_digg",method:"GET",data:{user_id:this.user.user_id,comment_id:this.comment._id},success:function(e){1==e.data.status&&(t.comment.is_digg=1)}}),uni.request({url:"https://af1o32.toutiao15.com/get_reply_news",method:"GET",data:{user_id:this.user.user_id,comment_id:this.comment._id},success:function(e){t.load_reply(e.data.replyList)}})},methods:{load_reply:function(t){this.reply=t},close_detail:function(){uni.navigateTo({url:"../comment/comment"})},digg_comment:function(t){0!=this.isLogined?(t.is_digg=1==t.is_digg?0:1,t.is_digg?(t.digg_count++,uni.request({url:"https://af1o32.toutiao15.com/digg",method:"POST",data:{type:"comment",id:t._id,user_id:this.user.user_id,up_id:this.news_id}})):(t.digg_count--,uni.request({url:"https://af1o32.toutiao15.com/digg_cancel",method:"POST",data:{type:"comment",id:t._id,user_id:this.user.user_id}}))):uni.navigateTo({url:"../login/login"})},digg_reply:function(t){0!=this.isLogined?(t.is_digg=1==t.is_digg?0:1,t.is_digg?(t.digg_count++,uni.request({url:"https://af1o32.toutiao15.com/digg",method:"POST",data:{type:"reply",id:t._id,user_id:this.user.user_id,up_id:this.comment._id}})):(t.digg_count--,uni.request({url:"https://af1o32.toutiao15.com/digg_cancel",method:"POST",data:{type:"reply",id:t._id,user_id:this.user.user_id}}))):uni.navigateTo({url:"../login/login"})},popup_textarea:function(){0!=this.isLogined?(this.$refs.popup_textarea.open(),this.$refs.popup_textarea.maskClass["backgroundColor"]="rgba(0, 0, 0, 0)",this.replied_name=this.comment.username,this.focus=!0):uni.navigateTo({url:"../login/login"})},send_reply:function(){var t=this;this.reply_content.length>=1&&(uni.request({url:"https://af1o32.toutiao15.com/add_reply",data:{news_id:this.news_id,comment_id:this.comment._id,to_reply_id:this.to_reply_id,send_user_id:this.comment.user_id,owner_user_id:this.user.user_id,content:this.reply_content},method:"POST",success:function(e){t.reply.unshift(e.data.reply),t.reply_count++,uni.setNavigationBarTitle({title:t.reply_count+"条回复"}),uni.showToast({title:"回复成功",duration:2e3,icon:"none"})},fail:function(){uni.showToast({title:"回复失败",duration:2e3,icon:"none"})}}),this.reply_content="",this.to_reply_id="",this.$refs.popup_textarea.close())},delete_reply:function(t,e){var i=this;uni.showModal({title:"提示",content:"确认删除此回复？",confirmColor:"#F45858",success:function(n){n.confirm?(console.log(t._id),uni.request({url:"https://af1o32.toutiao15.com/del_reply_one",data:{reply_id:t._id},method:"POST",success:function(t){i.reply.splice(e,1),i.reply_count--,uni.setNavigationBarTitle({title:i.reply_count+"条回复"}),console.log("删除成功")},fail:function(){console.log("删除失败")}})):n.cancel&&console.log("取消")}})},reply_reply:function(t){0!=this.isLogined?(this.$refs.popup_textarea.open(),this.$refs.popup_textarea.maskClass["backgroundColor"]="rgba(0, 0, 0, 0)",this.replied_name=t.owner_username,this.focus=!0,this.to_reply_id=t.owner_user_id):uni.navigateTo({url:"../login/login"})}},filters:{tsToTime:function(t){return(0,n.timestampToTime)(t)}}};e.default=o},"2b2c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".outside[data-v-c42c272a]{width:100%;padding:0;position:absolute;padding-bottom:60px}.detail[data-v-c42c272a]{padding:0 %?40?%}.bgColor[data-v-c42c272a]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1}.main[data-v-c42c272a]{margin-top:%?30?%}.comments_cell[data-v-c42c272a]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?20?%}.user_avatar[data-v-c42c272a]{width:%?75?%;height:%?75?%;border-radius:%?75?%;margin-top:5px}.comments_body[data-v-c42c272a]{width:85%;margin-left:%?20?%}.comments_body .top[data-v-c42c272a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:3px;width:100%}.comments_body .top .digg[data-v-c42c272a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user_name[data-v-c42c272a]{font-size:14px;color:#4a79cf}.comments_digg_img[data-v-c42c272a]{width:%?40?%;height:%?40?%}.comments_digg_count[data-v-c42c272a]{font-size:13px;color:#707070}.comments_text[data-v-c42c272a]{\n\t/*font-size: 15px;*/line-height:25px;text-align:justify}.comments_body .bottom[data-v-c42c272a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:3px}.time[data-v-c42c272a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments_time[data-v-c42c272a]{font-size:12px;color:#909090}.reply_reply[data-v-c42c272a]{font-size:%?26?%;margin-left:%?10?%}.delete_comment[data-v-c42c272a]{font-size:%?26?%}.change_color[data-v-c42c272a]{color:#f45858}\n/*回复列表*/.reply[data-v-c42c272a]{margin-top:%?20?%;margin-bottom:%?120?%}.reply_title[data-v-c42c272a]{font-size:%?34?%;font-weight:700}.no_reply[data-v-c42c272a]{font-size:%?32?%;text-align:center;color:#909090;margin-top:%?20?%}\n/*底部评论栏*/.comment_bar[data-v-c42c272a]{height:45px;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;bottom:0;border-top:%?1?% solid #eee;background-color:#fff}.comment_input[data-v-c42c272a]{background-color:#f3f3f3;margin-right:%?10?%;padding-left:%?20?%;height:30px;width:%?650?%;font-size:14px;border-color:#e3e3e3;border-radius:18px;line-height:30px}.comment_bar_2[data-v-c42c272a]{height:%?220?%;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;bottom:0;border-top:%?1?% solid #eee;background-color:#fff}.comment_textarea[data-v-c42c272a]{background-color:#f3f3f3;padding:8px;height:60px;width:%?580?%;font-size:14px;border-color:#e3e3e3;border-radius:10px}.send_comment[data-v-c42c272a]{margin-left:%?25?%;font-size:15px;font-weight:700;color:#d0d0d0}.comment_active[data-v-c42c272a]{color:#f45858}",""]),t.exports=e},5707:function(t,e,i){"use strict";var n={"uni-popup":i("2bf2").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"detail"},[i("v-uni-view",{staticClass:"bgColor",style:t.skinMode?"":"background-color: rgba(0,0,0,0.2)"}),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"comments_cell"},[i("v-uni-image",{staticClass:"user_avatar",attrs:{src:""==t.comment.avatar||void 0==t.comment.avatar?"../../static/logo.png":t.comment.avatar,mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"comments_body"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"user_name"},[t._v(t._s(t.comment.username))]),i("v-uni-view",{staticClass:"digg"},[i("v-uni-image",{staticClass:"comments_digg_img",attrs:{src:1==t.comment.is_digg?"../../static/comment_bar/like_1.png":"../../static/comment_bar/like_0.png",mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.digg_comment(t.comment)}}}),i("v-uni-text",{class:["comments_digg_count",1==t.comment.is_digg?"change_color":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.digg_comment(t.comment)}}},[t._v(t._s(t.comment.digg_count))])],1)],1),i("v-uni-text",{class:["comments_text","big"==t.fontSize?"font-lg":"normal"==t.fontSize?"font-md":"font"]},[t._v(t._s(t.comment.content))]),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-text",{staticClass:"comments_time"},[t._v(t._s(t._f("tsToTime")(t.comment.comment_timestamp)))])],1)],1)],1),i("v-uni-view",{staticClass:"reply"},[i("v-uni-text",{staticClass:"reply_title"},[t._v("全部回复("+t._s(t.reply_count)+")")]),0==t.reply_count?i("v-uni-view",{staticClass:"no_reply"},[i("v-uni-text",[t._v("暂无回复")])],1):i("v-uni-view",{staticClass:"reply_list"},t._l(t.reply,(function(e,n){return i("v-uni-view",{key:n,staticClass:"comments_cell"},[i("v-uni-image",{staticClass:"user_avatar",attrs:{src:""==e.owner_avatar||void 0==e.owner_avatar?"../../static/logo.png":e.owner_avatar,mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"comments_body"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"user_name"},[t._v(t._s(e.owner_username))]),i("v-uni-view",{staticClass:"digg"},[i("v-uni-image",{staticClass:"comments_digg_img",attrs:{src:1==e.is_digg?"../../static/comment_bar/like_1.png":"../../static/comment_bar/like_0.png",mode:"aspectFit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.digg_reply(e)}}}),i("v-uni-text",{class:["comments_digg_count",1==e.is_digg?"change_color":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.digg_reply(e)}}},[t._v(t._s(e.digg_count))])],1)],1),i("v-uni-text",{class:["comments_text","big"==t.fontSize?"font-lg":"normal"==t.fontSize?"font-md":"font"]},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"time"},[i("v-uni-text",{staticClass:"comments_time"},[t._v(t._s(t._f("tsToTime")(e.reply_timestamp)))]),i("v-uni-text",{staticClass:"reply_reply",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reply_reply(e)}}},[t._v("回复")])],1),t.user.user_id==e.owner_user_id?i("v-uni-text",{staticClass:"delete_comment",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delete_reply(e,n)}}},[t._v("删除")]):t._e()],1)],1)],1)})),1)],1)],1),i("v-uni-view",{staticClass:"comment_bar",style:t.skinMode?"":"background-color: #b9b9b9; border-top: 1rpx solid #b5b5b5"},[i("v-uni-input",{staticClass:"comment_input",style:t.skinMode?"":"background-color: #d0d0d0",attrs:{type:"text",placeholder:"回复...",disabled:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popup_textarea.apply(void 0,arguments)}}})],1),i("uni-popup",{ref:"popup_textarea",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"comment_bar_2",style:t.skinMode?"":"background-color: #b9b9b9; border-top: 1rpx solid #b5b5b5"},[i("v-uni-textarea",{staticClass:"comment_textarea",style:t.skinMode?"":"background-color: #d0d0d0",attrs:{"adjust-position":"false",placeholder:"回复"+t.replied_name+"..."},model:{value:t.reply_content,callback:function(e){t.reply_content=e},expression:"reply_content"}}),i("v-uni-text",{class:["send_comment",t.reply_content.length>=1?"comment_active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send_reply.apply(void 0,arguments)}}},[t._v("发布")])],1)],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"5b17":function(t,e,i){"use strict";function n(t){var e=new Date(1e3*t),i=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",o=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",a=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",s=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",c=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return i+n+o+a+s+c}Object.defineProperty(e,"__esModule",{value:!0}),e.timestampToTime=n},"8ec8":function(t,e,i){"use strict";var n=i("c7a1"),o=i.n(n);o.a},c713:function(t,e,i){"use strict";i.r(e);var n=i("5707"),o=i("17be");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("8ec8");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"c42c272a",null,!1,n["a"],s);e["default"]=r.exports},c7a1:function(t,e,i){var n=i("2b2c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("487a2068",n,!0,{sourceMap:!1,shadowMode:!1})}}]);