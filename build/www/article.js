(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getArticleDate=function(e){var t=new Date(e),n=(new Date).getTime()-t.getTime(),a=Math.floor(n/864e5),i=n%864e5,o=Math.floor(i/36e5),r=i%36e5,l=Math.floor(r/6e4),d=r%6e4,s=(Math.round(d/1e3),"");return 0!=a?s=a+"天之前":0==a&&0!=o?s=o+"小时之前":0==a&&0==o&&(s=l+"分钟之前"),s},t.formatDateTime=function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var i=t.getDate();i=i<10?"0"+i:i;var o=t.getHours();o=o<10?"0"+o:o;var r=t.getMinutes(),l=t.getSeconds();return n+"-"+a+"-"+i+" "+o+":"+(r=r<10?"0"+r:r)+":"+(l<10?"0"+l:l)},t.throttle=function(e,t,n){var a="",i=new Date;return function(){var o=new Date;clearTimeout(a),o-i<n?a=setTimeout(e,t):(e(),i=o)}}},173:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".edit-article-edit {\n  display: flex;\n  max-height: 100%;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  padding-top: 59px;\n}\n.edit-article-edit > div {\n  width: 50%;\n}\n.edit-article-edit .cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #333;\n}\n.edit-article-edit .cm-header-3 {\n  color: #1BA2F0;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.editor-pane {\n  position: relative;\n}\n.editor-pane > div {\n  height: 100%;\n}\n.CodeMirror {\n  height: 100%;\n}\n.markdown-body {\n  box-sizing: border-box;\n  min-width: 200px;\n  width: 1200px;\n  line-height: 2.5;\n}\n.edit-article_title {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  height: 59px;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  padding: 0 20px;\n}\n.edit-article_inp {\n  width: 88%;\n}\n.edit-article_inp input {\n  margin: 0;\n  padding: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #000;\n  border: none;\n  outline: none;\n  width: 100%;\n  height: 100%;\n}\n.edit-article-btn {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  cursor: pointer;\n  flex: 1;\n}\n.article-btn_user {\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.article-btn_user img {\n  width: 100%;\n  height: 100%;\n}\n.article-btn_subimt {\n  color: #007fff;\n  margin-right: 10px;\n  cursor: pointer;\n  font-size: 16px;\n}\n.result-pane {\n  padding: 10px 20px;\n  overflow: scroll;\n  position: relative;\n}\n.content {\n  width: 100%;\n  height: 116px;\n  background-color: #fff;\n  text-align: center;\n  line-height: 116px;\n  cursor: pointer;\n}\n.content p:hover {\n  background-color: #ddd;\n}\n.submit-box_tag span {\n  display: block;\n  width: 100%;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n.submit-box_tag li {\n  display: inline-block;\n  margin: 0 10px 14px 0;\n  padding: 3px 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  border: 1px solid #f1f1f1;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.submit-box_tag .article {\n  color: #007fff;\n  border-color: rgba(0, 127, 255, 0.15);\n  background-color: rgba(0, 127, 255, 0.05);\n}\n.article-submit_box {\n  min-width: 375px;\n}\n.submit-submit {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.uploadInput {\n  opacity: 0;\n  position: absolute;\n  top: -1000;\n}\n.edit-article-update_img {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.edit-article-update_img i {\n  font-size: 17px;\n  font-weight: bold;\n}\n.edit-article_img_box {\n  height: 100%;\n  max-width: 260px;\n  position: relative;\n}\n.edit-article_img_box span {\n  position: absolute;\n  top: -1px;\n  right: -4px;\n  width: 14px;\n  height: 14px;\n  background-color: red;\n  color: #fff;\n  line-height: 12px;\n  border-radius: 50%;\n}\n.textare-tools {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 50%;\n  height: 33px;\n  padding: 5px 26px;\n  background-color: #fff;\n  z-index: 2;\n  border-top: 1px solid #ddd;\n}\n.textare-tools li {\n  cursor: pointer;\n  margin-left: 18px;\n}\n.textare-tools li i {\n  font-size: 20px;\n}\n.engter-edit .markdown-body {\n  width: auto;\n  padding-bottom: 39px;\n}\n.preview-edit {\n  width: 100%!important;\n}\n.preview-edit .markdown-body {\n  width: 1200px;\n  margin: 0 auto;\n}\n.page-tools {\n  position: fixed;\n  bottom: 20px;\n  right: 22px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.page-tools i {\n  font-size: 22px;\n}\n",""])},174:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".chat-center-box .article-details_box {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  background-color: #f4f5f5;\n}\n.chat-center-box .markdown-body_box {\n  width: 1180px;\n  padding: 0 36px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  background-color: #fff;\n  padding-bottom: 100px;\n}\n.chat-center-box .markdown-body_box .markdown-body {\n  width: 100%;\n}\n.chat-center-box .markdown-body_box .article-user_box {\n  width: 100%;\n}\n.chat-center-box .markdown-body_box .markdown-body_title {\n  width: 100%;\n  font-size: 28px;\n  margin: 0 0 40px 0;\n  font-weight: bold;\n  color: #000;\n}\n.chat-center-box .markdown-body_box .article-user_box {\n  display: flex;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.chat-center-box .markdown-body_box .user-box_image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.chat-center-box .markdown-body_box .user-box_image img {\n  width: 100%;\n  height: 100%;\n}\n.chat-center-box .markdown-body_box .article-user_text {\n  min-width: 0;\n  flex-grow: 1;\n}\n.chat-center-box .markdown-body_box .article-user_text .user-text_title {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 14px;\n  font-weight: 700;\n  color: #333;\n}\n.chat-center-box .markdown-body_box .article-user_text .user-text_date {\n  font-size: 10px;\n  color: #909090;\n}\n.chat-center-box .markdown-body_box .article-user_text .user-text_date span {\n  margin-right: 5px;\n}\n.chat-center-box .markdown-body_box .article-user_text .user-text_date .article-edit_btn {\n  color: #007fff;\n  cursor: pointer;\n}\n.chat-center-box .markdown-body_box .article-user_text .user-text_date .article-edit_btn:last-child {\n  margin-left: 10px;\n}\n.chat-center-box .markdown-body_box .article-left-tools {\n  position: absolute;\n  top: 214px;\n  left: -62px;\n  cursor: pointer;\n}\n.chat-center-box .markdown-body_box .article-left-tools .left-tools_box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #fff;\n  margin-bottom: 10px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);\n  color: #595959;\n  position: relative;\n}\n.chat-center-box .markdown-body_box .article-left-tools .left-tools_box .left-tools-love_article {\n  color: #007fff;\n}\n.chat-center-box .markdown-body_box .article-left-tools .left-tools_box .left-tools_tip {\n  position: absolute;\n  top: -3px;\n  right: -1px;\n  width: 16px;\n  height: 16px;\n  font-size: 10px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: #cc1818;\n  line-height: 16px;\n  color: #fff;\n  font-weight: bold;\n}\n.chat-center-box .markdown-body_box i {\n  display: inline-block;\n  font-size: 24px;\n}\n.chat-center-box .markdown-body_box .left-tool_pinlun {\n  margin-top: 2px;\n}\n.chat-center-box .article-pinglun_box {\n  width: 1180px;\n  margin: 0 auto;\n  padding-bottom: 50px;\n  margin-top: 30px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #333;\n  margin-bottom: 10px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item {\n  margin-bottom: 22px;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 20px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-ul_item_top {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 16px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-ul_item_top .pinglun-ul_touxiang {\n  width: 32px;\n  height: 32px;\n  margin-right: 5px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-ul_item_top .pinglun-ul_touxiang img {\n  width: 100%;\n  height: 100%;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-ul_item_top .pinglun-span {\n  font-weight: bold;\n  color: #333;\n  margin-right: 5px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-ul_item_top .pinglun-created {\n  font-weight: 100;\n  color: #afafaf;\n  font-size: 12px;\n}\n.chat-center-box .article-pinglun_box .pinglun-ul_item .pinglun-text_box {\n  padding-left: 46px;\n}\n.chat-center-box .article-gotop {\n  position: fixed;\n  bottom: 39px;\n  right: 26px;\n  text-align: center;\n  cursor: pointer;\n}\n.chat-center-box .article-gotop i {\n  font-size: 26px;\n}\n.chat-center-box .pinglun-Text {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n",""])},260:function(e,t,n){"use strict";var a=x(n(23)),i=x(n(3)),o=x(n(7)),r=x(n(2)),l=x(n(5)),d=x(n(121)),s=x(n(652)),u=x(n(653)),c=x(n(654)),f=x(n(655)),p=x(n(656)),g=x(n(657)),m=x(n(658)),h=x(n(659));function x(e){return e&&e.__esModule?e:{default:e}}n(660);var v=n(1),b={sql:u.default,htmlbars:c.default,css:f.default,javascript:h.default,xml:p.default,stylus:g.default,json:m.default};(0,d.default)(b).forEach(function(e){s.default.registerLanguage(e,b[e])});var _=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.setRef=n.setRef.bind(n),n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"setRef",value:function(e){this.codeEl=e}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){s.default.highlightBlock(this.codeEl)}},{key:"render",value:function(){return v.createElement("pre",null,v.createElement("code",{ref:this.setRef,className:"language-"+this.props.language},this.props.value))}}]),t}(v.PureComponent);_.defaultProps={language:""},e.exports=_},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.put=t.post=t.get=void 0;var a=r(n(71)),i=r(n(4)),o=r(n(193));function r(e){return e&&e.__esModule?e:{default:e}}n(72);var l=r(n(291)).default.create({baseURL:"/api/"});l.interceptors.request.use(function(e){return e.headers.token=localStorage.getItem("token")||"",e},function(e){return o.default.reject(error)}),l.interceptors.response.use(function(e){var t=(0,i.default)({data:{code:-1,data:{}}},e);return 0===t.data.code?t:(-1===t.data.code&&a.default.error(t.data.message),"0001"===t.data.code?(a.default.error("未登陆，请登陆账号"),window.location.href="/#/login",o.default.reject(t)):{})}),t.get=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{params:{}};return l.get(e,{params:t.params,headers:{auth:t.auth}})},t.post=function(e,t){return l.post(e,t.params,{headers:{auth:t.auth}})},t.put=function(e,t){return l.put(e,t.params,{headers:{auth:t.auth}})},t.default=l},290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(194)),i=o(n(20));function o(e){return e&&e.__esModule?e:{default:e}}var r={state:{},set:function(e,t){return"object"===(void 0===t?"undefined":(0,i.default)(t))?this.state[e]=JSON.parse((0,a.default)(t)):this.state[e]=t,this.state[e]},remove:function(e){this.state[e]&&delete this.state[e]},get:function(e){return this.state[e]}};t.default=r},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delArticle=t.addCommentArticle=t.editArticleDetials=t.getPhoto=t.loveArticle=t.getArticleDetails=t.uploadImage=t.addArticle=t.getArticle=t.getMajor=t.getUserDate=t.getCity=t.getSimpleWeather=t.getTags=t.getArticleList=t.login=void 0;var a=l(n(4)),i=l(n(193)),o=n(289),r=l(n(290));function l(e){return e&&e.__esModule?e:{default:e}}t.login=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{userName:"",password:""};return new i.default(function(t,n){d().then(function(i){var r=i&&i.content&&i.content.address_detail||{},l=(0,a.default)({province:r.province,city:r.city,district:r.district},e);(0,o.post)("/user/login",{params:l,auth:!1}).then(function(e){t(e.data)}).catch(function(e){n(e)})}).catch(function(a){(0,o.post)("/user/login",{params:e,auth:!1}).then(function(e){t(e.data)}).catch(function(e){n(e)})})})},t.getArticleList=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{page:1,pageSize:10};return(0,o.get)("/get/article/list",{params:e,auth:!1}).then(function(e){return e.data})},t.getTags=function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0];var e=r.default.get("tags");return e?new i.default(function(t,n){t(e)}):(0,o.get)("/get/tags",{}).then(function(e){return e.data&&r.default.set("tags",e.data),e.data})},t.getSimpleWeather=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return(0,o.get)("/get/simple/weather",{params:e,auth:!1}).then(function(e){return e})};var d=t.getCity=function(){return new i.default(function(e,t){var n={};window.showLocation=function(e){n=e};var a=document.createElement("script");a.type="text/javascript",a.src="https://api.map.baidu.com/location/ip?ak=BhckEOslyspzdDFOnuniCNlULdljhPxl&coor=bd09ll&callback=showLocation",document.head.appendChild(a),a.onload=function(){e(n)},a.onerror=function(e){t(e)}})};t.getUserDate=function(){return(0,o.get)("/get/user/details",{auth:!0}).then(function(e){return e})},t.getMajor=function(){var e=r.default.get("major");return e?new i.default(function(t,n){t(e)}):(0,o.get)("/get/article/major").then(function(e){return e&&e.data&&e.data.data&&e.data.data&&r.default.set("major",e),e})},t.getArticle=function(e,t){var n=r.default.get("articleList"),a=r.default.get("articleParams")||{};return n&&a.page===e.page||n&&t?new i.default(function(e,t){e({data:n,page:a.page,isStore:!0})}):(0,o.get)("/get/article/list",{params:e}).then(function(t){var n=t&&t.data&&t.data.data&&t.data.data&&t.data.data.list;if(n&&n.length){r.default.set("articleParams",e);var i=r.default.get("articleList")||[];return{data:r.default.set("articleList",i.concat(n)),page:e.page,isStore:!1}}return{data:r.default.get("articleList")||[],isStore:!0,page:a.page}})},t.addArticle=function(e){return(0,o.put)("/add/article",{params:e,auth:!0}).then(function(e){return e})},t.uploadImage=function(e){return(0,o.post)("/upload-image",{params:e})},t.getArticleDetails=function(e){return(0,o.get)("/get/article/details",{params:e})},t.loveArticle=function(e){return(0,o.post)("/love/article",{params:e})},t.getPhoto=function(){0<arguments.length&&void 0!==arguments[0]&&arguments[0];var e=r.default.get("imgData");return e&&e.length?new i.default(function(t,n){t(e)}):(0,o.get)("/get/photo/data").then(function(e){if(e&&e.data&&0===e.data.code)return r.default.set("imgData",e.data.data||[])})},t.editArticleDetials=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return(0,o.post)("/endit/article",{params:e,auth:!0})},t.addCommentArticle=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return(0,o.post)("/add/article-comment",{params:e,auth:!0})},t.delArticle=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return(0,o.post)("/del/article",{params:e,auth:!0})}},621:function(e,t,n){"use strict";var a=s(n(23)),i=s(n(3)),o=s(n(7)),r=s(n(2)),l=s(n(5));n(622),n(623);var d=s(n(9));function s(e){return e&&e.__esModule?e:{default:e}}n(624),n(170),n(625),n(626),n(627),n(107),n(628),n(255),n(629),n(62),n(630),n(631),n(632),n(172),n(257),n(108),n(258),n(633),n(634),n(635),n(636),n(171),n(637),n(638),n(639),n(640),n(641),n(649),n(259),n(650),n(651);var u=n(1),c="undefined"==typeof navigator||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i),f=function(e){function t(e){(0,i.default)(this,t);var n=(0,r.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={isControlled:Boolean(n.props.value)},n.handleChange=n.handleChange.bind(n),n.editorRef=u.createRef(),n}return(0,l.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.props.forceTextArea||c||(this.editor=d.default.fromTextArea(this.editorRef.current,{keyMap:"sublime",mode:"markdown",theme:"seti",gitHubSpice:!0,taskLists:!0,strikethrough:!0,emoji:!1,lineWrapping:!0,value:this.props.value,autoRefresh:!0,json:!0,indentUnit:4,tabSize:4,coder:null,extraKeys:{Ctrl:"autocomplete"},onChange:this.props.onChange}),this.editor.on("change",this.handleChange))}},{key:"componentDidUpdate",value:function(){this.editor&&this.props.value&&this.editor.getValue()!==this.props.value&&this.editor.setValue(this.props.value)}},{key:"setCursor",value:function(e,t){this.editor.doc.setCursor(this.editor.doc.lineCount()-1,0)}},{key:"handleChange",value:function(){if(this.editor){var e=this.editor.getValue();e!==this.props.value&&(this.props.onChange&&this.props.onChange({target:{value:e}}),this.editor.getValue()!==this.props.value&&(this.state.isControlled?this.editor.setValue(this.props.value):this.props.value=e))}}},{key:"render",value:function(){var e=u.createElement("textarea",{ref:this.editorRef,value:this.props.value,readOnly:this.props.readOnly,defaultValue:this.props.defaultValue,onChange:this.props.onChange,className:this.props.textAreaClassName});return u.createElement("div",null,e)}}]),t}(u.Component);e.exports=f},661:function(e,t,n){var a=n(173);"string"==typeof a&&(a=[[e.i,a,""]]);var i=n(14)(a,{hmr:!0,transform:void 0,insertInto:void 0});a.locals&&(e.exports=a.locals),e.hot.accept(173,function(){var t=n(173);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},662:function(e,t,n){var a=n(174);"string"==typeof a&&(a=[[e.i,a,""]]);var i=n(14)(a,{hmr:!0,transform:void 0,insertInto:void 0});a.locals&&(e.exports=a.locals),e.hot.accept(174,function(){var t=n(174);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n(246)),i=v(n(57)),o=v(n(537)),r=v(n(4)),l=v(n(71)),d=v(n(23)),s=v(n(3)),u=v(n(7)),c=v(n(2)),f=v(n(5));n(538),n(109),n(540),n(72);var p=v(n(1)),g=v(n(247)),m=v(n(621)),h=v(n(260)),x=n(49);function v(e){return e&&e.__esModule?e:{default:e}}n(661),n(261);var b=function(e){function t(e){(0,s.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return n.clickFile=function(e){n.setState({editImage:e},function(){n.refs.uploadInput.click()})},n.state={form:{markdown:"",tagId:"",title:"",articleImg:""},preview:!0,tagData:[]},n.uploadImg=n.uploadImg.bind(n),n.onChange=n.onChange.bind(n),n.submit=n.submit.bind(n),n.setInp=n.setInp.bind(n),n.selectTag=n.selectTag.bind(n),n.removeImg=n.removeImg.bind(n),n.activedPreview=n.activedPreview.bind(n),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"videtd",value:function(){var e=this.state.form,t={ok:!0,msg:""};return(!e.markdown||e.markdown.length<60)&&(t={ok:!1,msg:"内容请最少输入60字"}),e.tagId||0===e.tagId||(t={ok:!1,msg:"请选择标签"}),(!e.title||e.title.length<3)&&(t={ok:!1,msg:"请输入标题,最少3个字符"}),t}},{key:"activedPreview",value:function(){this.setState({preview:!this.state.preview})}},{key:"submit",value:function(e){var t=this;e.stopPropagation();var n=this.videtd();if(n.ok){var a=this.state.form;a.id?(0,x.editArticleDetials)(a).then(function(e){e&&e.data&&0===e.data.code?(l.default.success("编辑成功"),t.props.history.go(-1)):l.default.error("编辑失败")}):(0,x.addArticle)(a).then(function(e){e&&e.data&&0===e.data.code?(l.default.success("保存成功"),t.props.history.go(-1)):l.default.error("保存失败")})}else l.default.error(n.msg)}},{key:"getNav",value:function(){var e=this;(0,x.getTags)().then(function(t){t&&e.setState({tagData:t.data.map(function(e){return e.checkouted=!1,e})}),e.props.history.location.query&&e.props.history.location.query.id&&e.getArticleDetails(e.props.history.location.query.id)})}},{key:"onChange",value:function(e){var t=this.state.form;t.markdown=e.target.value,this.setState({form:t})}},{key:"selectTag",value:function(e){var t=this.state,n=t.form,a=t.tagData;a.forEach(function(t){t.checkouted=!1,t.id===e.id&&(t.checkouted=!0)}),n.tagId=e.id,this.setState({form:n,tagData:a})}},{key:"setInp",value:function(e){var t=this.state.form;t.title=e.target.value,this.setState({form:t})}},{key:"getImgSize",value:function(){var e,t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"").replace("data:image/jpeg;base64,","").length;return e=(parseInt(t-t/8*2)/1024).toFixed(2),parseInt(e)}},{key:"compressImage",value:function(e,t){var n=new Image,a="";n.src=e,n.onload=function(){var e=n.width,i=n.height,o=document.createElement("canvas"),r=o.getContext("2d");o.width=e,o.height=i,r.drawImage(n,0,0,e,i),a=o.toDataURL("image/jpeg",.6),t(a)}}},{key:"uploadImg",value:function(e,t){var n=e.target.files[0];if(-1!==(n.type||"image/png").indexOf("image")){var a=new FileReader,i=this;a.readAsDataURL(n),a.onloadend=function(e){i.compressImage(e.target.result,function(e){5120<(i.getImgSize(e)||0)?l.default.info("上传图片过大"):(0,x.uploadImage)({file:e}).then(function(e){if(e&&e.data&&0===e.data.code){var t=e.data.data.path;i.state.editImage?i.enditImage.apply(i,[t]):i.setCover.apply(i,[t])}})})}}else l.default.info("文件类型错误o")}},{key:"enditImage",value:function(e){var t=this,n=this.state.form;n.markdown+="  ![]("+e+")",this.setState({form:n,editImage:!1},function(){t.refs.codeMirror.setCursor(),t.refs.uploadInput.value=""})}},{key:"setCover",value:function(e){var t=this,n=this.state.form;n.articleImg=e,this.setState({form:n},function(){t.refs.uploadInput.value=""})}},{key:"removeImg",value:function(){var e=this.state.form;e.articleImg="",this.refs.uploadInput.value="",this.setState({form:e})}},{key:"getArticleDetails",value:function(e){var t=this;(0,x.getArticleDetails)({id:e}).then(function(e){if(e&&e.data&&0===e.data.code){var n=e.data.data,a=t.state.form,i={markdown:n.markdown,tagId:n.tagId,title:n.title,articleImg:n.articleImg,id:t.props.history.location.query.id};t.selectTag({id:n.tagId}),t.setState({form:(0,r.default)({},a,i)})}})}},{key:"componentDidMount",value:function(){this.getNav()}},{key:"render",value:function(){var e=this,t=this.state,n=t.form,r=t.tagData,l=t.preview;return p.default.createElement("div",{className:"edit-article_box"},p.default.createElement("input",{type:"file",onChange:this.uploadImg,accept:"image/*",className:"uploadInput",ref:"uploadInput"}),p.default.createElement("div",{className:"edit-article_title"},p.default.createElement("div",{className:"edit-article_inp"},p.default.createElement("input",{value:n.title,onChange:this.setInp,placeholder:"请输入标题..."})),p.default.createElement("div",{className:"edit-article-btn"},p.default.createElement("div",{style:{marginRight:"10px",display:"flex",alignItems:"center"}},p.default.createElement(o.default,{placement:"bottom",title:"上传封面",content:p.default.createElement("div",{className:"content"},this.state.form.articleImg?p.default.createElement("div",{className:"edit-article_img_box"},p.default.createElement("span",{onClick:this.removeImg},"x"),p.default.createElement("img",{src:this.state.form.articleImg,style:{width:"100%",height:"100%"}})):p.default.createElement("p",{onClick:function(){e.clickFile()}},"点击添加封面")),trigger:"click"},p.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"35px",height:"35px",viewBox:"0 0 28 28",version:"1.1"},p.default.createElement("title",null,"699ED11E-7F16-40A5-89DD-C9ADE30CCB4C"),p.default.createElement("desc",null,"Created with sketchtool."),p.default.createElement("defs",null),p.default.createElement("g",{id:"0.1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},p.default.createElement("g",{id:"Markdown－编辑3",transform:"translate(-1247.000000, -18.000000)",fill:"#BFC6CE"},p.default.createElement("g",{id:"heder_img",transform:"translate(1247.000000, 18.000000)"},p.default.createElement("path",{d:"M5,7 L24,7 L24,21 L5,21 L5,7 Z M6,8 L23,8 L23,15 L6,15 L6,8 Z M9,11 C9.55228475,11 10,10.5522847 10,10 C10,9.44771525 9.55228475,9 9,9 C8.44771525,9 8,9.44771525 8,10 C8,10.5522847 8.44771525,11 9,11 Z M22,14 L10,14 L14.2570991,10.8078101 L15.778026,11.8338712 L19.2346782,8.98370162 L22,11.0150952 L22,14 Z"}))))))),p.default.createElement("div",{className:"article-btn_subimt"},p.default.createElement(o.default,{className:"article-box",placement:"bottom",title:"发布文章",content:p.default.createElement("div",{className:"article-submit_box"},p.default.createElement("ul",{className:"submit-box_tag"},p.default.createElement("span",null,"分类"),r.map(function(t){return p.default.createElement("li",{key:t.id,onClick:function(){e.selectTag(t)},className:t.checkouted?"article":""},t.tag)})),p.default.createElement("div",{className:"submit-submit"},p.default.createElement(i.default,{type:"primary",onClick:this.submit},"确定发布"))),trigger:"click"},"发布")),p.default.createElement("div",{className:"article-btn_user"},p.default.createElement("img",{src:"https://mirror-gold-cdn.xitu.io/168e08e1a5a2e53f643?imageView2/1/w/64/h/64/q/85/interlace/1"})))),p.default.createElement("div",{className:"edit-article-edit"},p.default.createElement("div",{className:"edit-article-textare editor-pane",style:{display:l?"block":"none"}},p.default.createElement(m.default,{ref:"codeMirror",value:n.markdown,onChange:this.onChange})),p.default.createElement("div",{className:"edit-article-markdown result-pane "+(l?"engter-edit":"preview-edit")},p.default.createElement(g.default,{className:"markdown-body",skipHtml:!0,renderers:{code:h.default},source:n.markdown}),p.default.createElement("ul",{className:"textare-tools"},p.default.createElement("li",{onClick:function(t){e.clickFile(!0)}},p.default.createElement(a.default,{title:"上传图片"},p.default.createElement("i",{className:"iconfont icon-shangchuan"}))),p.default.createElement("li",{onClick:this.activedPreview},p.default.createElement(a.default,{title:l?"预览":"收起"},p.default.createElement("i",{className:"iconfont "+(l?"icon-suofang":"icon-BMSzhuanqu_suofang")})))))))}}]),t}(p.default.Component);t.default=b},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n(57)),i=v(n(239)),o=v(n(71)),r=v(n(23)),l=v(n(3)),d=v(n(7)),s=v(n(2)),u=v(n(5)),c=v(n(245));n(109),n(72),n(263);var f=n(1),p=v(f),g=n(49),m=n(120),h=v(n(247)),x=v(n(260));function v(e){return e&&e.__esModule?e:{default:e}}n(662),n(261);var b=c.default.TextArea,_=function(e){function t(e){(0,l.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={details:{userName:"xxx",createDate:"2019-10-10",readNumber:0,title:"title",loverArticle:"",markdown:"<div></div>"},goTop:!1,pinglun:"",pinglunList:[]},n.loverArticle=n.loverArticle.bind(n),n.goPinLun=n.goPinLun.bind(n),n.editArticle=n.editArticle.bind(n),n.delArticle=n.delArticle.bind(n),n.scrollPage=n.scrollPage.bind(n),n.onChange=n.onChange.bind(n),n.submitPingLun=n.submitPingLun.bind(n),n}return(0,u.default)(t,e),(0,d.default)(t,[{key:"onChange",value:function(e){this.setState({pinglun:e.target.value})}},{key:"submitPingLun",value:function(){var e=this;this.state.pinglun&&5<=this.state.pinglun.length?(0,g.addCommentArticle)({text:this.state.pinglun,articleId:this.state.details.id}).then(function(t){if(t&&t.data&&0===t.data.code){o.default.success("评论成功");var n=e.state.pinglunList;n.unshift(t.data.data),e.setState({pinglunList:n})}}).catch(function(e){o.default.error("评论失败")}):o.default.info("请最少输入5个字符")}},{key:"scrollPage",value:function(){var e=this;window.addEventListener("scroll",(0,m.throttle)(function(){100<=document.documentElement.scrollTop?e.setState({goTop:!0}):e.setState({goTop:!1})},500,800))}},{key:"goPageTop",value:function(){window.scrollTo(0,0)}},{key:"getData",value:function(){var e=this,t=this.props.match.params.id;t&&(0,g.getArticleDetails)({id:t}).then(function(t){if(t&&t.data&&0===t.data.code){var n=t.data.data;e.setState({details:n,pinglunList:[].concat((0,i.default)(n.pinglunList))})}})}},{key:"loverArticle",value:function(){var e=this;(0,g.loveArticle)({id:this.state.details.id}).then(function(t){if(0===t.data.code){var n=e.state.details;n.userLoveStatus=t.data.data.status,n.loveLen=Number(t.data.data.loveLen),e.setState({details:n})}})}},{key:"goPinLun",value:function(){var e=document.querySelector(".article-details_box").getBoundingClientRect().height;window.scrollTo(0,e),this.refs.pinglunRef.focus()}},{key:"editArticle",value:function(e){e.preventDefault(),this.props.history.push({pathname:"/edit-article",query:{id:this.state.details.id}})}},{key:"delArticle",value:function(){console.log(1234),(0,g.delArticle)({id:this.state.details.id}).then(function(e){o.default.success("删除成功")})}},{key:"componentDidMount",value:function(){this.getData(),this.scrollPage()}},{key:"render",value:function(){var e=this.state,t=e.details,n=e.goTop,i=e.pinglun,o=e.pinglunList;return p.default.createElement("div",{className:"article-details_box",ref:"articleDetailsBox"},p.default.createElement("div",{className:"markdown-body_box"},p.default.createElement("div",{className:"article-user_box"},p.default.createElement("div",{className:"user-box_image"},p.default.createElement("img",{src:t.userImage})),p.default.createElement("div",{className:"article-user_text"},p.default.createElement("span",{className:"user-text_title"},t.userName),p.default.createElement("p",{className:"user-text_date"},p.default.createElement("span",null,(0,m.formatDateTime)(t.createDate)),p.default.createElement("span",null,"阅读: ",t.articleReadCountLen||0),t.isEdit&&p.default.createElement("a",{onClick:this.editArticle}," ",p.default.createElement("b",{className:"article-edit_btn",onClick:this.editArticle},"编辑")," "),t.isEdit&&p.default.createElement("a",{onClick:this.editArticle}," ",p.default.createElement("b",{className:"article-edit_btn",onClick:this.delArticle},"删除")," ")))),p.default.createElement("h2",{className:"markdown-body_title"},t.title),p.default.createElement(h.default,{className:"markdown-body",skipHtml:!0,renderers:{code:x.default},source:t.markdown}),p.default.createElement("div",{className:"article-left-tools"},p.default.createElement("div",{className:"left-tools_box",onClick:this.loverArticle},p.default.createElement("span",{className:"left-tools_tip"},t.loveLen),p.default.createElement("i",{className:"iconfont icon-dianzan-copy left-tools_love "+("1"===t.userLoveStatus?"left-tools-love_article":"")})),p.default.createElement("div",{className:"left-tools_box",onClick:this.goPinLun},p.default.createElement("i",{className:"iconfont icon-pinglun left-tool_pinlun"})))),p.default.createElement("div",{className:"article-pinglun_box"},p.default.createElement("ul",{className:"article-pinglun_ul"},p.default.createElement("p",{className:"pinglun-ul_title"},"评论"),p.default.createElement("div",{className:"pinglun-Text"},p.default.createElement(b,{ref:"pinglunRef",value:i,onChange:this.onChange,placeholder:"Controlled autosize",autosize:{minRows:3,maxRows:5}}),p.default.createElement(a.default,{type:"primary",style:{marginTop:"10px"},onClick:this.submitPingLun},"发表")),o.map(function(e){return p.default.createElement("li",{className:"pinglun-ul_item",key:e.createDate},p.default.createElement("div",{className:"pinglun-ul_item_top"},p.default.createElement("div",{className:"pinglun-ul_touxiang"},p.default.createElement("img",{src:e.userImage})),p.default.createElement("span",{className:"pinglun-span pinglun-userName"},e.userName),p.default.createElement("span",{className:"pinglun-span pinglun-created"},(0,m.getArticleDate)(e.createDate))),p.default.createElement("div",{className:"pinglun-text_box"},p.default.createElement("p",null,e.text)))}))),n&&p.default.createElement("div",{className:"article-gotop",onClick:this.goPageTop},p.default.createElement("i",{className:"iconfont icon-fanhuidingbu"})))}}]),t}(f.Component);t.default=_}}]);