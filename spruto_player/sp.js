!function(){function extend(e,t){for(var i in t)e[i]=t[i];return e}if(!window.SP){var ADVARK_DETECTOR="//s3.advarkads.com/modules/advarksprutoplugin.swf",PLUGIN_ID="AdvarkSprutoPlayerPlugin",IFRAME_MANAGER_URL="//s3.advarkads.com/modules/iframeapi.js",ADVARK_MANAGER_URL="//s3.advarkads.com/modules/advark.js",SUPPORTED_HOSTS=["myvi.ru","www.myvi.ru","myvi.tv","videoplayer.ru","player.vimple.ru","vimple.ru","playertest.vimple.ru","playertest2.vimple.ru","vimplevideo.com"];window.advark||(window.advark={});var AdvarkManager=void 0,_iframeMode=!1,_queue=[],initSprutoPlugin=function(e,t,i){var o=void 0;o=_iframeMode?{slot:t,videoSlotCanAutoPlay:e.features.autoplay}:{slot:t,videoSlot:e.getVideoSlot(),videoSlotCanAutoPlay:!0};var n=new AdvarkManager(o),a={},r=!1;t.style.height="100%",t.style.width="100%",t.style.left=0,t.style.top=0,t.style.display="none";var l=function(){return e.getAutoplay()},s=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t&&t.extensions&&t.extensions[PLUGIN_ID]&&t.extensions[PLUGIN_ID].id?t.extensions[PLUGIN_ID].id:i.id},d=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t&&t.extensions&&t.extensions[PLUGIN_ID]&&t.extensions[PLUGIN_ID].categoryId?t.extensions[PLUGIN_ID].categoryId:i.categoryId},p=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t&&t.extensions&&t.extensions[PLUGIN_ID]&&t.extensions[PLUGIN_ID].videoUrl?t.extensions[PLUGIN_ID].videoUrl:t.video[0].url},u=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t&&t.extensions&&t.extensions[PLUGIN_ID]&&t.extensions[PLUGIN_ID].videoUrl?t.extensions[PLUGIN_ID].videoUrl:t.link},c=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t.videoId},y=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t.type},v=function(){var t=e.getPlaylist()[e.getCurrentVideoIndex()];return t&&t.extensions&&t.extensions[PLUGIN_ID]&&t.extensions[PLUGIN_ID].videoTitle?t.extensions[PLUGIN_ID].videoTitle:t.title},f=function(){},h=function(){},g=function(){r||e.lock(a,function(){_iframeMode&&(e.getVideoSlot().style.display="none"),t.style.display="block",n.startAd("start",x)})},m=function(){r||e.lock(a,function(){_iframeMode&&(e.getVideoSlot().style.display="none"),t.style.display="block",n.startAd("end",x)})},b=function(){},w=function(){},P=function(){},k=function(){if("video"!=y())return void(r=!0);r=!1,e.lock(a);var t=i.referer;t||(t=document.location.href),n.initModule(s(),{autoplay:l(),videoId:c(),videoTitle:v(),videoUrl:p(),videoPageUrl:u(),referer:t,categoryId:d(),test:i.test})},x=function(i,o,n){"linear"==n&&(_iframeMode&&(e.getVideoSlot().style.removeProperty?e.getVideoSlot().style.removeProperty("display"):e.getVideoSlot().style.removeAttribute("display")),t.style.display="none",e.unlock(a))},C=function(){e.unlock(a)},E=function(){},I=function(){_iframeMode&&(e.getVideoSlot().style.display="none"),t.style.display="block";try{i.onAdStarted&&"function"==typeof i.onAdStarted&&i.onAdStarted()}catch(o){console.error(o.message)}},S=function(){_iframeMode&&(e.getVideoSlot().style.removeProperty?e.getVideoSlot().style.removeProperty("display"):e.getVideoSlot().style.removeAttribute("display")),t.style.display="none";try{i.onAdStopped&&"function"==typeof i.onAdStopped&&i.onAdStopped()}catch(o){console.error(o.message)}},V=function(){_iframeMode&&(e.getVideoSlot().style.removeProperty?e.getVideoSlot().style.removeProperty("display"):e.getVideoSlot().style.removeAttribute("display")),t.style.display="none",e.unlock(a),r=!0};e.addEventListener("onPlayerStarted",g),e.addEventListener("onPlayerStopped",m),e.addEventListener("onLockPlayer",b),e.addEventListener("onUnlockPlayer",w),e.addEventListener("onPlayerVideoMidpoint",P),e.addEventListener("onCurrentVideoChange",k),e.addEventListener("onPlayerPaused",f),e.addEventListener("onPlayerPlaying",h),n.subscribe(E,"AdError"),n.subscribe(I,"AdStarted"),n.subscribe(S,"AdStopped"),n.subscribe(V,"NoAds"),n.subscribe(C,"Ready"),k()},oldManagerReady=window.advark.managerReady;window.advark.managerReady=function(e){AdvarkManager||setManager(e),oldManagerReady&&oldManagerReady(e)};var setManager=function(e){AdvarkManager=e;for(var t=0;t<_queue.length;t++)initSprutoPlugin(_queue[t].player,_queue[t].container,_queue[t].settings)},advark=function(e,t,i){if(i&&(i.id||(i.id=window.advark.id),i.id)){if(!e)throw new Error("No player specified");if(-1==SUPPORTED_HOSTS.indexOf(document.location.host))if(_iframeMode=!0,window.advark.IframeManager)setManager(window.advark.IframeManager);else{var o=document.createElement("script");o.type="text/javascript",o.src=IFRAME_MANAGER_URL,document.getElementsByTagName("head")[0].appendChild(o)}else if(_iframeMode=!1,window.advark.AdvarkManager)setManager(window.advark.AdvarkManager);else{var o=document.createElement("script");o.type="text/javascript",o.src=ADVARK_MANAGER_URL,document.getElementsByTagName("head")[0].appendChild(o)}"html5"==e.features.type?AdvarkManager?initSprutoPlugin(e,t,i):_queue.push({player:e,container:t,settings:i}):console.error("html5 player not detected")}},SprutoError=function(e){return this instanceof SprutoError?void(this.message=e):new SprutoError(e)};SprutoError.prototype=Error.prototype;var mobileOs={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return this.Android()||this.BlackBerry()||this.iOS()||this.Opera()||this.Windows()}},clone=function(e){switch(Object.prototype.toString.apply(e)){case"[object Array]":for(var t=[],i=0;i<e.length;i++)t[i]=clone(e[i]);return t;case"[object Object]":var o={};for(var i in e)o[i]=clone(e[i]);return o;default:return e}},utils={show:function(e,t){"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]),"string"!=typeof t&&(t="block");for(var i in e)"object"==typeof e[i]&&(e[i].style.display=t)},hide:function(e){"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);for(var t in e)"object"==typeof e[t]&&(e[t].style.display="none")},createElement:function(e,t,i){var o=document.createElement(e);if("object"==typeof t)for(var n in t)o.setAttribute(n,t[n]);return"undefined"!=typeof i&&i.appendChild(o),o},removeElement:function(e){e.parentElement&&e.parentElement.removeChild(e)},addClass:function(e,t){e&&e.setAttribute("class",((e.getAttribute("class")||"")+" "+t).trim())},removeClass:function(e,t){if(e&&e.getAttribute("class")){for(var i=e.getAttribute("class").split(" "),o="",n=0;n<i.length;n++)i[n]!=t&&(o+=i[n].trim()+" ");o=o.trim(),e.setAttribute("class",o)}},hasClass:function(e,t){return e&&-1!=e.getAttribute("class").split(" ").indexOf(t)}},requestUtils={getXmlHttp:function(){var e;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(i){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e},request:function(url,data,accept,headers,type,async,success,error){var xmlhttp=this.getXmlHttp();if(xmlhttp.open(type||"GET",url+data,async===!0),"[object Array]"===Object.prototype.toString.call(headers))for(var i=0;i<headers.length;i++)"string"==typeof headers[i].header&&"string"==typeof headers[i].value&&xmlhttp.setRequestHeader(headers[i].header,headers[i].value);return"string"==typeof accept?xmlhttp.setRequestHeader("Accept",accept):xmlhttp.setRequestHeader("Accept","application/json;charset=utf-8"),xmlhttp.onreadystatechange=function(){if(4==xmlhttp.readyState)if(200==xmlhttp.status){var response=JSON&&JSON.parse(xmlhttp.responseText)||eval("("+xmlhttp.responseText+")");success&&success(response)}else error&&error(xmlhttp.status,xmlhttp.statusText)},xmlhttp.send(null),200==xmlhttp.status?JSON.parse(xmlhttp.responseText):null}},callFunction=function(e,t){var i=Array.prototype.slice.call(arguments,2);if("[object Function]"==Object.prototype.toString.apply(e))return e.apply(t,i);for(var o=e.split("."),n=o.pop(),a=0;a<o.length;a++)t=t[o[a]];return t[n].apply(t,i)},assetsroot=splayer.assetsroot?splayer.assetsroot:"http://s3.spruto.org/images/",css='div.splayer{display:block;position:relative;background-color:#000}div.splayer .iframe-container{position:absolute;left:0;top:0;width:100%;height:100%}div.splayer video{background:black;position:absolute;left:0;top:0;z-index:150}div.splayer .preview{position:relative;width:100%;height:100%;z-index:1;cursor:pointer;background-repeat:no-repeat;background-position:center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}div.splayer .preview.playlist{z-index:1}div.splayer>a.play-button:before{content:"";display:block;padding-top:100%}div.splayer>a.play-button{background:url("'+assetsroot+'play-btn.png") no-repeat scroll center center;background-size:cover;-webkit-background-size:cover;left:50%;margin-left:-6.75%;margin-top:-6.75%;position:absolute;top:50%;width:13.5%;z-index:100}div.splayer .iframe-container iframe{cursor:pointer;opacity:.01;position:absolute;top:0;left:0;z-index:150}div.splayer .iframe-container iframe.play{opacity:1}div.splayer div.error{display:block;position:relative;width:100%;height:100%;line-height:100%;vertical-align:top;background-color:#303030;z-index:175}div.splayer div.error div.error-container{display:block;position:absolute;top:50%;width:100%}div.splayer div.error div.error-img{display:inline-block;margin:0 5% 0 10%;background-color:#883232;text-align:center;-webkit-border-radius:50em;-moz-border-radius:50em;-o-border-radius:50em;border-radius:50em;width:70px;height:70px}div.splayer div.error div.error-img span{color:white;display:inline-block;font-weight:bold;font-size:50px;vertical-align:middle;line-height:68px}div.splayer div.error span.error-text{width:63%;font-size:1.3em;display:inline-block;line-height:130%;vertical-align:middle;color:white;font-size:14px;font-family:Tahoma}.splayer{margin:0;padding:0;border:0;position:relative}.splayer .playlist-overlay{background:none repeat scroll 0 0 rgba(0,0,0,0.85);display:none;font-family:Tahoma;height:100%;left:0;position:absolute;text-align:center;top:0;width:100%;z-index:250}.splayer .playlist-overlay.after-play a.replay-btn{display:none}.splayer .playlist{display:block;height:58%;margin-top:35px;position:relative;text-align:left;width:100%}.splayer .playlist .arrow{position:absolute;display:inline-block;border-radius:100px;vertical-align:middle;top:45%}.splayer .playlist-overlay.square .arrow{top:35%}.splayer .playlist .arrow.right{padding:2.5%;right:.75%;background:rgba(255,255,255,0.1) url("'+assetsroot+'right-icon.png") 50% 50% no-repeat;background-size:35% auto}.splayer .playlist .arrow.left{padding:2.5%;left:.75%;background:rgba(255,255,255,0.1) url("'+assetsroot+'left-icon.png") 40% 50% no-repeat;background-size:35% auto}.splayer .playlist-content{width:85%;height:100%;margin:8% auto 0}.splayer .playlist-overlay.square .playlist-content{margin:17% auto 0}.splayer .nodisplay{display:none}.splayer .video-item{display:inline-block;height:46%;margin:0 0 3% 3.5%;overflow:hidden;position:relative;vertical-align:top;width:22.3%}.splayer .video-item.first{margin-left:0}.splayer .playlist-overlay.square .video-item{height:35%}.splayer .video-item .img{height:100%;width:100%;background-repeat:no-repeat;background-position:center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}.splayer .video-item .num{background:none repeat scroll 0 0 #000;border-radius:0 0 3px 3px;color:#969696;font-size:1.1em;left:3%;padding:1% 8% 2%;position:absolute;top:0;z-index:100}.splayer .playlist-overlay:not(.after-play) .video-item.current-video .replay-over{background:rgba(255,255,255,0.3);position:absolute;width:100%;height:99%;top:0;left:0;cursor:pointer;z-index:20}.splayer .video-item.current-video .replay-over .icon{background:url("'+assetsroot+'replay-big-icon.png") 0 0 no-repeat;width:20%;height:30%;position:relative;display:block;margin:22% auto 0;background-size:100% auto}.splayer .video-item .title-video{position:absolute;bottom:0;left:0;width:100%;background:rgba(51,51,51,0.7);color:#fff;z-index:1;padding:1% 0 2% 3%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.splayer .playlist-overlay:not(.after-play) .video-item.current-video .title-video{display:none}.splayer .replay-btn,.splayer .show-playlist-btn{border-radius:2px;color:#fff;display:inline-block;font-size:1.1em;line-height:2em;margin-top:2.5%;position:relative;text-align:center;text-decoration:none}.splayer .replay-btn{background:url("'+assetsroot+'replay-small-icon.png") no-repeat scroll 8% center / 12% auto rgba(255,255,255,0.1);padding:0 3% 0 8%}.splayer .show-playlist-container{display:block;position:relative;text-align:center}.splayer .show-playlist-btn{background:rgba(255,255,255,0.1);padding:0 3% 0 3%}.splayer .playlist-overlay.square .replay-btn{line-height:1.8em;font-size:1.1em;margin-top:0}div.splayer>.plugin{z-index:200;pointer-events:none}div.splayer>.plugin>*{pointer-events:auto}',tag=document.createElement("style");tag.innerHTML=css,document.getElementsByTagName("head")[0].appendChild(tag);var behavior={beforePlay:{none:"none",playlist:"playlist"},afterPlay:{black:"black",playlist:"playlist",nextvideo:"nextvideo",repeat:"repeat",start:"start",picture:"picture"},loopMode:{none:"none",playlist:"playlist"}},playerTypes={youtube:"youtube",video:"video",myvi:"myvi",unknown:"unknown"},errorMessages={0:"unspecified_error"},options={playerClassName:"splayer",playBtnClassName:"play-button",previewClassName:"preview",videoUrlClassName:"video-url",videoTypeClassName:"type",playlistClassName:"playlist-overlay",playlistOptions:{defaultPosterURL:assetsroot+"default-poster.png",videoNotFoundPosterUrl:assetsroot+"video-not-found.jpg",playlistContentClass:"playlist-content",currentPlaylistContentClass:"current",nodisplayPlaylistContentClass:"nodisplay",currentVideoClass:"current-video"},localization:{ru:{repeat_button:"Повторить",video_not_found:"видео не найдено",show_playlist:"Показать плейлист",player:{unspecified_error:"Ошибка плеера. Проверьте доступность видео и правильность настройки плеера."}},en:{repeat_button:"Repeat",video_not_found:"video not found",show_playlist:"Show Playlist",player:{unspecified_error:"Player error. Check whether the video is available and whether the player is configured correctly."}}},getPlayerParamUrl:"http://spruto.com/cabinet/api/public/GetPlayerSettings"},settingsUtils={detectPlayerType:function(e){return/^(?:(?:https?:)?\/\/)?www.youtube.com\//i.test(e)?playerTypes.youtube:/^(?:(?:https?:)?\/\/)?youtu.be\//.test(e)?playerTypes.youtube:/^https?:\/\/fs[0-9]*.myvi.ru\//i.test(e)?playerTypes.video:/^(?:(?:https?:)?\/\/)?([a-z0-9]*.)?myvi.ru\//i.test(e)||/^(?:(?:https?:)?\/\/)?([a-z0-9]*.)?myvi.tv\//i.test(e)?playerTypes.myvi:playerTypes.video},detectVideoType:function(e){return"string"!=typeof e?null:-1!=e.indexOf(".m3u8")?"application/x-mpegurl":-1!=e.indexOf(".webm")?"video/webm":-1!=e.indexOf(".ogv")?"video/ogg":-1!=e.indexOf(".mp4")||-1!=e.indexOf(".m4v")||-1!=e.indexOf(".mov")?"video/mp4":null},getConstrainedString:function(e,t,i){return t[e]?e:i},getMyviVideoId:function(e){var t=e.replace(/\/+$/,"");if(/^(?:(?:https?:)?\/\/)?myvi.ru\/ru\/videodetail.aspx/i.test(t)){if(t=t.split("?")[1])for(var i=t.split("&"),o=0;o<i.length;o++)"video"==i[o].split("=")[0]&&(t=i[o].split("=")[1])}else if(-1!=t.toLowerCase().indexOf("/embed/html/"))t=t.split("/embed/html/")[1],t&&(t=t.split("?")[0]);else{-1!=t.indexOf("?")&&(t=t.slice(0,t.indexOf("?")));var n=t.split("/");t=n.pop(),23!=t.length&&-1!=t.indexOf("_")&&(t=t.slice(t.indexOf("_")+1))}return t},getYTVideoId:function(e){var i=void 0;if(/^(?:(?:https?:)?\/\/)?www.youtube.com\/v\//i.test(e))i=e.replace(/^(?:(?:https?:)?\/\/)?www.youtube.com\/v\//i,"");else if(/^(?:(?:https?:)?\/\/)?youtu.be\//.test(e))i=e.replace(/^(?:(?:https?:)?\/\/)?youtu.be\//,"");else for(var o=e.split("?")[1].split("&"),n=0;n<o.length;n++)if(t=o[n].split("="),"v"==t[0]){i=t[1];break}return i},getDefaultPosterUrl:function(e){switch(e.type){case playerTypes.myvi:return"http://fs.myvi.ru/thumbnail/"+e.id+"/default_hq.jpg";case playerTypes.youtube:return"http://img.youtube.com/vi/"+e.id+"/hqdefault.jpg";default:return options.playlistOptions.defaultPosterURL}},getVideoData:function(e){if(e.video){for(var t=0;t<e.video.length;t++){var i=e.video[t];i["default"]&&(e.default_index=t),i.type=this.getConstrainedString(i.type,{"video/mp4":!0,"video/webm":!0,"video/ogg":!0,"application/x-mpegurl":!0,"application/vnd.apple.mpegurl":!0},this.detectVideoType(i.url))}switch(isNaN(e.default_index)&&(e.default_index=0),e.getVideoFunction?e.type="video":e.type=this.detectPlayerType(e.video[e.default_index].url),e.type){case playerTypes.myvi:e.id=this.getMyviVideoId(e.video[e.default_index].url);break;case playerTypes.youtube:e.id=this.getYTVideoId(e.video[e.default_index].url)}}return e.posterUrl||(e.posterUrl=this.getDefaultPosterUrl(e)),e.secondPosterUrl||(e.secondPosterUrl=e.posterUrl),e.thumbnailUrl||(e.thumbnailUrl=e.posterUrl),e},checkParams:function(e,t){if(e.partial&&t&&(t.playlist&&(e.playlist=t.playlist),t.playlistIndex&&(e.playlistIndex=t.playlistIndex),t.behavior&&(t.behavior.beforePlay&&(e.behavior.beforePlay=t.behavior.beforePlay),t.behavior.afterPlay&&(e.behavior.afterPlay=t.behavior.afterPlay),t.behavior.loopMode&&(e.behavior.loopMode=t.behavior.loopMode),t.behavior.autoplay&&(e.behavior.autoplay=t.behavior.autoplay))),e.playlist)for(var i=0;i<e.playlist.length;i++)settingsUtils.getVideoData(e.playlist[i]);else e.playlist=[];if(e.playlistIndex?e.playlistIndex<1?e.playlistIndex=1:e.playlistIndex>e.playlist.length&&(e.playlistIndex=e.playlist.length):e.playlistIndex=1,e.uiLanguage=this.getConstrainedString(e.uiLanguage,{ru:"ru",en:"en"},"en"),e.behavior){if(e.behavior.beforePlay=this.getConstrainedString(e.behavior.beforePlay,behavior.beforePlay,behavior.beforePlay.none),e.behavior.afterPlay=this.getConstrainedString(e.behavior.afterPlay,behavior.afterPlay,behavior.afterPlay.start),e.behavior.loopMode=this.getConstrainedString(e.behavior.loopMode,behavior.loopMode,behavior.loopMode.none),e.behavior.autoplay=Boolean(splayer.playerFeatures.autoplay&&e.behavior.autoplay&&"true"==e.behavior.autoplay.toString()),e.behavior.afterPlay==behavior.afterPlay.start)switch(e.behavior.beforePlay){case behavior.beforePlay.none:e.behavior.afterPlay=behavior.afterPlay.picture;break;case behavior.beforePlay.playlist:e.behavior.afterPlay=behavior.afterPlay.playlist}}else e.behavior={afterPlay:behavior.afterPlay.picture,beforePlay:behavior.beforePlay.none,loopMode:behavior.loopMode.none,autoplay:!1};return e},getParams:function(e,t,i){if("undefined"!=typeof e.UserID){var o="";return"undefined"!=typeof e.UserID&&(o+=(o.length?"&":"?")+"public_user_id="+e.UserID),"undefined"!=typeof e.AlbumID&&(o+=(o.length?"&":"?")+"album_id="+e.AlbumID),"undefined"!=typeof e.VideoID&&(o+=(o.length?"&":"?")+"video_id="+e.VideoID),void requestUtils.request(options.getPlayerParamUrl,o,null,[{header:"Content-Type",value:"application/json;charset=utf-8"}],null,!0,function(e){t(settingsUtils.checkParams(e))},i)}return"undefined"!=typeof e.settingsUrl?void requestUtils.request(e.settingsUrl,"","*/*",null,null,!0,function(i){t(settingsUtils.checkParams(i,e))},i):void setTimeout(function(){t(settingsUtils.checkParams(clone(e)))},0)}},getLocalResource=function(e,t){var i=options.localization[t];return void 0==typeof i&&(i=options.localization.en),i[e]},MyviPlayer=function(e,t){var i=this,o=splayer.playerFeatures.autoplay,n=void 0,a=void 0,r=!1,l=!1,s=!1,d=1,p=!0,u=!1,c=function(e){a.setSize("100%","100%"),"function"==typeof i.oninit&&i.oninit()},y=function(){utils.addClass(a.getIframe(),"play"),a.setSize("100%","100%")},v=function(){utils.removeClass(a.getIframe(),"play"),a.setSize("1px","1px")},f=function(e){switch(isPlaying=!1,e.data){case window.Myvi.PlayerState.BUFFERING:case window.Myvi.PlayerState.PLAYING:isPlaying=!0,p=!1,utils.addClass(a.getIframe(),"play"),s?"function"==typeof i.onresume&&i.onresume():(u||(u=!0,"function"==typeof i.onload&&i.onload()),"function"==typeof i.onplay&&i.onplay());break;case window.Myvi.PlayerState.ENDED:s=!1,p=!0,u=!1,"function"==typeof i.onended&&i.onended();break;case window.Myvi.PlayerState.PAUSED:s=!0,p=!1,"function"==typeof i.onpause&&i.onpause()}},h=function(e){},g=function(e){},m=function(e){};this.lock=function(){r=!0,v(),a.pauseVideo()},this.unlock=function(){r=!1,p||(y(),l&&o&&a.playVideo())},this.init=function(){for(var i="player",o=1;null!=document.getElementById(i+"-"+ ++o););if(i+="-"+o,n=utils.createElement("div",{id:i},t),readyMyvi)a=new window.Myvi.Player({id:i,videoId:e.id,width:"1px",height:"1px",listeners:{onReady:c,onStateChange:f,onVolumeChange:g,onTimeChange:h,onError:m}});else{requestedMyvi||(tag=document.createElement("script"),tag.src="//myvi.ru/playertest/content/scripts/iframe_api.min.js?v="+Math.floor(new Date/864e5),document.getElementsByTagName("head")[0].appendChild(tag));var r=window.SP.myviReady;window.SP.myviReady=function(){r&&r(),a=new window.Myvi.Player({id:i,videoId:e.id,width:"1px",height:"1px",listeners:{onReady:c,onStateChange:f,onVolumeChange:g,onTimeChange:h,onError:m}})}}},this.play=function(){r||(l=!0,p=!1,u||(u=!0,"function"==typeof i.onload&&i.onload()),r||(y(),a&&o&&a.playVideo()))},this.pause=function(){r||a&&a.pauseVideo()},this.getVolume=function(){return a?a.getVolume():d},this.setVolume=function(e){e>100&&(e=100),0>e&&(e=0),d=e,a&&a.setVolume(e)},this.hide=function(){v()},this.remove=function(){a&&a.destroy(),n.parentNode.removeChild(n)}},VideoPlayer=function(e,t){var i=this,o=!1,n=e.default_index,a=!1,r=!1,l=void 0,s=1,d=!1,p=!1,u=!1,c=!1,y=!1;if(t.canPlayType&&e.video&&e.video.length&&e.video[n]&&!t.canPlayType(e.video[n].type).replace(/no/,""))for(var v=0;v<e.video.length;v++)if(e.video[v].type&&t.canPlayType(e.video[v].type).replace(/no/,"")){n=v;break}var f=function(){o||(console.log("VideoPlayer.onPlay",t.seeking),t.seeking||(p&&!u?(p=!1,l&&(t._currentTime=l,l=void 0),r?y||(y=!0,"function"==typeof i.onplay&&i.onplay()):t.pause()):d?"function"==typeof i.onresume&&i.onresume():(y=!0,"function"==typeof i.onplay&&i.onplay()),u=!1))},h=function(){},g=function(){o||(r=!1,d=!1,p=!1,u=!0,"function"==typeof i.onended&&i.onended())},m=function(){o||(console.log("VideoPlayer.onPause",t.seeking),t.seeking||(r=!1,d=!0,"function"==typeof i.onpause&&i.onpause()))},b=function(e){o||c||!t.error||"function"==typeof i.onerror&&i.onerror()},w=function(){s=t.volume,"function"==typeof i.onvolumechange&&i.onvolumechange()};this.lock=function(){o=!0,p=!1,t&&(l=t._currentTime,c=!0,t.autoplay=!1,t.pause(),t.removeAttribute("controls"),t.poster="",t.src="",t.removeAttribute("src"))},this.unlock=function(){o=!1,a&&(p=!0,u||(t.src=e.video[n].url,c=!1,utils.removeClass(t,"nodisplay"),t.load(),t.play()),t.controls=!0)},this.init=function(){"function"==typeof i.oninit&&i.oninit()},this.play=function(){o||(r=!0,utils.removeClass(t,"nodisplay"),a?(c&&(t.poster=e.posterUrl,t.autoplay=!0,t.controls=!0,t.src=e.video[n].url,t.load()),u&&(u=!1,"function"==typeof i.onload&&i.onload()),o||t.play()):(a=!0,t.poster=e.posterUrl,t.autoplay=!0,t.controls=!0,t.src=e.video[n].url,t.volume=s,t.addEventListener("play",f),t.addEventListener("ended",g),t.addEventListener("pause",m),t.addEventListener("error",b),t.addEventListener("durationchange",h),t.addEventListener("volumechange",w),t.load(),"function"==typeof i.onload&&i.onload(),o||t.play()))},this.pause=function(){o||(r=!1,t.pause())},this.getVolume=function(){return 100*s},this.setVolume=function(e){0>e&&(e=0),e>100&&(e=100),volume=e/100,t&&(t.volume=e/100)},this.hide=function(){o||utils.addClass(t,"nodisplay")},this.remove=function(){t&&(t.removeEventListener("play",f),t.removeEventListener("ended",g),t.removeEventListener("pause",m),t.removeEventListener("error",b),t.removeEventListener("durationchange",h),t.removeEventListener("volumechange",w),a=!1,t.pause(),t.autoplay=!1,t.src="",t.removeAttribute("src"))}},YoutubePlayerManager=function(e){var t=splayer.playerFeatures.autoplay,i=this,o=!1,n=!1,a=void 0,r="1px",l="1px";this.onStateChange=void 0,this.onError=void 0;var s=function(){o=!0,a&&i.player.cueVideoById(a),n&&i.player.playVideo()},d=function(e){switch(e.target.getPlayerState()){case window.YT.PlayerState.BUFFERING:case window.YT.PlayerState.PLAYING:utils.addClass(i.player.getIframe(),"play");break;case window.YT.PlayerState.ENDED:utils.removeClass(i.player.getIframe(),"play")}e.data==window.YT.PlayerState.PLAYING&&(t=!0),"function"==typeof i.onStateChange&&i.onStateChange(e)},p=function(e){"function"==typeof i.onError&&i.onError(e)};this.player=void 0,this.show=function(){r="100%",l="100%",i.player&&i.player.setSize("100%","100%")},this.hide=function(){r="1px",l="1px",i.player&&i.player.setSize("1px","1px")},this.loadVideo=function(t){if(a=t,i.player)o&&i.player.cueVideoById(t);else{for(var n="player",u=1;null!=document.getElementById(n+"-"+ ++u););if(n+="-"+u,utils.createElement("div",{id:n},e),readyYoutube)i.player=new window.YT.Player(n,{width:r,height:l,playerVars:{autoplay:"0",controls:"1",rel:"0",egm:"1",showsearch:"0",showinfo:"0",wmode:"opaque"},events:{onReady:s,onStateChange:d,onError:p}});else{requestedYoutube||(tag=document.createElement("script"),tag.src="https://www.youtube.com/iframe_api",document.getElementsByTagName("head")[0].appendChild(tag));var c=window.SP.youtubeReady;window.SP.youtubeReady=function(){c&&c(),i.player=new window.YT.Player(n,{width:r,height:l,playerVars:{autoplay:"0",controls:"1",rel:"0",egm:"1",showsearch:"0",showinfo:"0",wmode:"opaque"},events:{onReady:s,onStateChange:d,onError:p}})}}}},this.play=function(){t?(n=!0,o&&i.player.playVideo()):(utils.addClass(i.player.getIframe(),"play"),"function"==typeof i.onNoAutoplay&&i.onNoAutoplay())},this.pause=function(){n=!1,o&&i.player.pauseVideo()},this.getVolume=function(){return i.player.getVolume()},this.setVolume=function(e){i.player.setVolume(e)}},YTPlayer=function(e,t){var i=this,o=!1,n=!1,a=!1,r=!1,l=!1,s=function(){n=!1,l=!1},d=function(e){if(!o)switch(n=!1,e.target.getPlayerState()){case window.YT.PlayerState.BUFFERING:case window.YT.PlayerState.PLAYING:n=!0,l=!1,a?"function"==typeof i.onresume&&i.onresume():(r||(r=!0,"function"==typeof i.onload&&i.onload()),"function"==typeof i.onplay&&i.onplay());break;case window.YT.PlayerState.ENDED:a=!1,r=!1,l=!0,"function"==typeof i.onended&&i.onended();break;case window.YT.PlayerState.PAUSED:a=!0,"function"==typeof i.onpause&&i.onpause()}},p=function(e){"function"==typeof i.onerror&&i.onerror()};this.init=function(){t.onNoAutoplay=s,t.onStateChange=d,t.onError=p,t.loadVideo(e.id),t.show(),"function"==typeof i.oninit&&i.oninit()},this.play=function(){o||(t.show(),r||(r=!0,"function"==typeof i.onload&&i.onload(),n=!0,o||t.play()))},this.pause=function(){o||t.pause()},this.getVolume=function(){return t.getVolume()},this.setVolume=function(e){t.setVolume(e)},this.lock=function(){o=!0,t.hide(),n&&t.player.pauseVideo()},this.unlock=function(){o=!1,l||(t.show(),n&&t.play())},this.hide=function(){t.hide()},this.remove=function(){t.hide()}},Playlist=function(e,t){var i=this,o=void 0,n=function(e,n,a){var r,l,s=(t?t.uiLanguage||"en":"en",utils.createElement("div",{"class":"video-item"+(a==t.playlistIndex-1?" "+options.playlistOptions.currentVideoClass:"")+(a%4==0?" first":"")},e));if("unknown"==n.type){var d=utils.createElement("div",{"class":"img"},s);d.style.backgroundImage="url("+options.playlistOptions.videoNotFoundPosterUrl+")",r=utils.createElement("span",{"class":"num"},s),r.innerHTML=a+1,l=utils.createElement("span",{"class":"title-video"},s),l.innerHTML=getLocalResource("video_not_found",t.uiLanguage)}else{var d=utils.createElement("div",{"class":"img"},s);d.style.backgroundImage="url("+n.thumbnailUrl+")",r=utils.createElement("span",{"class":"num"},s),r.innerHTML=a+1,null!=n.title&&n.title.length&&(l=utils.createElement("span",{"class":"title-video"},s),l.innerHTML=n.title);var p=utils.createElement("div",{"class":"replay-over"},s);utils.createElement("span",{"class":"icon"},p),s.addEventListener("click",function(){i.onChangeVideo&&"[object Function]"==Object.prototype.toString.apply(i.onChangeVideo)&&i.onChangeVideo(a),utils.removeClass(o.getElementsByClassName(options.playlistOptions.currentVideoClass)[0],options.playlistOptions.currentVideoClass),utils.addClass(this,options.playlistOptions.currentVideoClass)})}},a=function(e,i){i=i||parseInt((e-1)/8+1);var a=8*(i-1),r=o.getElementsByClassName("page-"+i)[0];if(!r.getElementsByTagName("*").length)for(var l=a;a+8>l&&l<=t.playlist.length-1;++l){var s=t.playlist[l];n(r,s,l)}},r=function(){var n=utils.createElement("div",{"class":"playlist-overlay"},e);o=n;var a=utils.createElement("div",{"class":"playlist"},n),r=utils.createElement("a",{"class":"left arrow",href:"javascript:void(0)"},a);r.addEventListener("click",function(){l("left")});for(var s=parseInt(t.playlistIndex/8+1),d=1;d<t.playlist.length/8+1;d++)utils.createElement("div",{"class":options.playlistOptions.playlistContentClass+" page-"+d+(d==s?" "+options.playlistOptions.currentPlaylistContentClass:" "+options.playlistOptions.nodisplayPlaylistContentClass)},a);var p=utils.createElement("a",{"class":"right arrow",href:"javascript:void(0)"},a);p.addEventListener("click",function(){l("right")});var u=utils.createElement("a",{href:"javascript:void(0)","class":"replay-btn"},n);u.innerHTML+=getLocalResource("repeat_button",t.uiLanguage),u.addEventListener("click",function(){i.onChangeVideo&&"[object Function]"==Object.prototype.toString.apply(i.onChangeVideo)&&i.onChangeVideo(index)})},l=function(e){for(var t=-1,i=-1,n=o.getElementsByClassName(options.playlistOptions.playlistContentClass),r=n.length,l=0;l<n.length;l++)if(utils.hasClass(n[l],options.playlistOptions.currentPlaylistContentClass)){i=l,t=l-1,r=l+1;break}utils.hide(n[i]),utils.removeClass(n[i],options.playlistOptions.currentPlaylistContentClass),utils.addClass(n[i],options.playlistOptions.nodisplayPlaylistContentClass);var s;switch(e){case"left":0>t&&(t=n.length-1),s=t;break;default:r>n.length-1&&(r=0),s=r}utils.addClass(n[s],options.playlistOptions.currentPlaylistContentClass),utils.removeClass(n[s],options.playlistOptions.nodisplayPlaylistContentClass),utils.show(n[s]),n[s].getElementsByTagName("*").length||a(null,s+1)},s=function(e,t){var i=!1;if(e.video.length==t.video.length){i=!0;for(var o=0;o<e.video.length;o++)i=i&&e.video[o].url==t.video[o].url}return i||e.link&&e.link==t.link||e.videoId&&e.videoId==t.videoId},d=function(e){p=!0;try{for(var o=-1,n=0;n<e.length;n++)settingsUtils.getVideoData(e[n]),s(t.playlist[t.playlistIndex-1],e[n])&&(o=n);if(-1!=o)t.playlist=e,t.playlistIndex=o+1;else for(var n=0;n<e.length;n++)t.push(e[n])}catch(a){}i.show()},p=!0;this.available=t.playlist.length>1,this.show=function(n){p?(o||r(),o.setAttribute("style","font-size:"+e.clientHeight*(12/365)+"px"),e.clientWidth/e.clientHeight<1.5?utils.addClass(o,"square"):utils.removeClass(o,"square"),n?utils.addClass(o,"after-play"):utils.removeClass(o,"after-play"),utils.show(o),a(t.playlistIndex)):requestUtils.request(t.playlistUrl,"","*/*",[{header:"Content-Type",value:"application/json;charset=utf-8"}],null,!0,d,function(){p=!0,i.show()})},this.hide=function(){utils.hide(o)}},readyYoutube=!1,readyMyvi=!1,requestedYoutube=!1,requestedMyvi=!1;window.YT&&(youtubeReady=!0),window.Myvi&&(myviReady=!0),window.SP={ready:!0,myviReady:function(){readyMyvi=!0},youtubeReady:function(){readyYoutube=!0},Player:function(e,t,i){var o=this,n=void 0,a={},r=-1,l=void 0,s=void 0,d=void 0,p=void 0,u=void 0,c=!1,y=document.getElementById(e),v=1,f=void 0,h=t.Width||t.width,g=t.Height||t.height;h&&(h.toString().match(/(?:%|in|cm|mm|em|ex|pt|pc|px)$/)||(h+="px"),y.style.width=h),g&&(g.toString().match(/(?:%|in|cm|mm|em|ex|pt|pc|px)$/)||(g+="px"),
y.style.height=g),utils.addClass(y,"splayer");var m={playBtn:void 0,preview:void 0,iframeContainer:void 0,errorContainer:void 0};m.preview=utils.createElement("div",{"class":"preview nodisplay"},y),m.playBtn=utils.createElement("a",{"class":"play-button nodisplay",href:"javascript:void(0)"},y),m.iframeContainer=utils.createElement("div",{"class":"iframe-container"},y),n=utils.createElement("video",{width:y.style.width,height:y.style.height},y),utils.addClass(n,"nodisplay");var b={onError:[],onPlayerLoaded:[],onPlayerSkipped:[],onPlayerVideoComplete:[],onPlayerStopped:[],onPlayerStarted:[],onPlayerPaused:[],onPlayerPlaying:[],onPlayerRemainingTimeChange:[],onPlayerVolumeChange:[],onPlayerVideoStart:[],onBeforeCurrentVideoChange:[],onCurrentVideoChange:[],onLockPlayer:[],onUnlockPlayer:[]},w=function(e,t){var i=!0;if(b[e])for(var o=0;o<b[e].length;o++){var n=callFunction(b[e][o],window,t);i=i&&n!==!1}return i},P=new YoutubePlayerManager(m.iframeContainer),k=void 0,x=function(e,i){if(w("onError",{code:e})){var o=t?t.uiLanguage||"en":"en";if(m.errorContainer)for(;m.errorContainer.childNodes.length;)m.errorContainer.removeChild(m.errorContainer.childNodes[0]);else m.errorContainer=utils.createElement("div",{"class":"error unspecified-error"},y);var n=utils.createElement("div",{"class":"error-container"},m.errorContainer),a=utils.createElement("div",{"class":"error-img"},n),r=utils.createElement("span",{},a);r.textContent="!";var l=utils.createElement("span",{"class":"error-text"},n);if(l.textContent=getLocalResource("player",o)[errorMessages[e]],n.style.marginTop="-"+n.offsetHeight/2+"px",i){var s=utils.createElement("div",{"class":"show-playlist-container"},erroContainer),d=utils.createElement("a",{href:"javascript:void(0)","class":"show-playlist-btn"},s);d.innerHtml+=getLocalResource("show_playlist",o),d.addEventListener("click",function(){utils.removeElement(m.errorContainer),utils.show([m.preview]),k.show(!0)})}}},C=function(e){m.preview.style.backgroundImage="url("+e+")",utils.show(m.preview)},E=function(e){switch(e.type){case playerTypes.myvi:return new MyviPlayer(e,m.iframeContainer);case playerTypes.youtube:return new YTPlayer(e,P);default:return new VideoPlayer(e,n)}},I=function(e){c=!1,p&&(p.remove(),p=void 0),d?p=E(d):x(0),p.oninit=e?L:T,p.onload=N,p.onplay=U,p.onended=O,p.onpause=M,p.onerror=D,p.onresume=_,p.init()},S=function(){if(!s)switch(t.behavior.beforePlay){case behavior.beforePlay.playlist:k.available?k.show(!0):(C(d.posterUrl),utils.show([m.playBtn]));break;default:C(d.posterUrl),utils.show(m.playBtn)}},V=function(){if(d.getVideoFunction){u=function(){utils.hide([m.playBtn,m.preview]),k.hide(),p.play()};var e=d.getVideoFunction;d.getVideoFunction=void 0,callFunction(e,window,d.video)}else utils.hide([m.playBtn,m.preview]),k.hide(),p.play()},A=function(){p&&p.pause()};m.playBtn.addEventListener("click",V),m.preview.addEventListener("click",V);var L=function(){r=5,c=!0,w("onPlayerLoaded"),s?l=V:V()},T=function(){r=5,c=!0,w("onPlayerLoaded"),S()},M=function(){r=2,w("onPlayerPaused")},_=function(){r=1,w("onPlayerPlaying")},U=function(){r=1,w("onPlayerVideoStart")},N=function(){r=1,w("onPlayerStarted")},R=function(){if(!s)switch(p.hide(),t.behavior.afterPlay){case behavior.afterPlay.black:utils.show([m.playBtn]);break;case behavior.afterPlay.nextvideo:if(t.playlistIndex++,t.playlistIndex>t.playlist.length){if("playlist"!=t.behavior.loopMode){t.playlistIndex=t.playlist.length,k.available?k.show():(C(d.secondPosterUrl),utils.show([m.playBtn]));break}t.playlistIndex=1}d=t.playlist[t.playlistIndex-1],w("onCurrentVideoChange"),I(!0);break;case behavior.afterPlay.picture:C(d.secondPosterUrl),utils.show([m.playBtn]);break;case behavior.afterPlay.playlist:k.available?k.show():(C(d.secondPosterUrl),utils.show([m.playBtn]));break;case behavior.afterPlay.repeat:V()}},O=function(){r=0,w("onPlayerVideoComplete"),w("onPlayerStopped"),s?l=R:R()},D=function(){p&&(p.remove(),p=void 0),x(0)},z=[],B=function(){s=!0,utils.hide([m.playBtn,m.preview]),p&&p.lock(),utils.removeClass(n,"nodisplay"),w("onLockPlayer")},j=function(){switch(s=!1,utils.addClass(n,"nodisplay"),r){case-1:case 5:S();break;case 0:switch(t.behavior.afterPlay){case behavior.afterPlay.black:utils.show([m.playBtn]);break;case behavior.afterPlay.playlist:k.available?k.show():utils.show([m.playBtn,m.preview]);break;case behavior.afterPlay.picture:utils.show([m.playBtn,m.preview]);break;case behavior.afterPlay.nextvideo:case behavior.afterPlay.repeat:}break;case 1:case 2:case 3:}if(p&&p.unlock(),w("onUnlockPlayer"),!s&&l&&"function"==typeof l){var e=l;l=void 0,e()}},q=function(e){d==t.playlist[e]?V():w("onBeforeCurrentVideoChange",e)&&(t.playlistIndex=e+1,d=t.playlist[e],w("onCurrentVideoChange",e),s?l=function(){I(!0)}:I(!0))};this.features=splayer.playerFeatures,this.registerPlugin=function(e,i,n){var r={};if(t.plugins)for(var l=0;l<t.plugins.length;l++)t.plugins[l].name==e&&extend(r,t.plugins[l].settings);if(extend(r,n),a[e])throw new SprutoError("plugin already registered");a[e]={container:utils.createElement("div",{"class":e.replace(/[^A-z0-9_\-]/gi,"")+" plugin"},y),settings:r,plugin:i},a[e].container.style.position="absolute",i(o,a[e].container,r)},this.addEventListener=function(e,t){b[e]&&b[e].push(t)},this.removeEventListener=function(e,t){if(b[e]){var i=b[e].indexOf(t);-1!=i&&b[e].splice(i,1)}},this.setVideoUrls=function(e,t){if(u){d.getVideoFunction=void 0,d.video=t;for(var i=0;i<d.video.length;i++){var o=d.video[i];o["default"]&&(d.default_index=i),o.type=settingsUtils.detectVideoType(o.url)}isNaN(d.default_index)&&(d.default_index=0),u(),u=null}},this.getPlaylist=function(){return clone(t.playlist)},this.getCurrentVideoIndex=function(){return t.playlistIndex-1},this.isLocked=function(){return s},this.getVideoSlot=function(){return n},this.lock=function(e,t,i){z.push({callback:t,object:e,context:i}),1==z.length&&(B(),1==z.length&&t&&z[0].callback.apply(i))},this.unlock=function(e){for(var t=0;t<z.length&&z[t].object!=e;t++);t>=z.length?console.warn("Invalid releaseVideoSlot call"):0==t?(z.shift(),z.length?z[0].callback&&z[0].callback.apply(z[0].context):j()):z.splice(t,1)},this.playVideo=function(){s||c&&V()},this.pauseVideo=function(){s||c&&A()},this.stopVideo=function(){},this.getVolume=function(){return p?p.getVolume():v},this.setVolume=function(e){0>e&&(e=0),e>100&&(e=100),v=e,p&&p.setVolume(e)},this.getAutoplay=function(){return t.behavior.autoplay},this.getCurrentTime=function(){},this.getDuration=function(){},settingsUtils.getParams(t,function(e){t=e,k=new Playlist(y,t),k.onChangeVideo=q,d=t.playlist[t.playlistIndex-1];try{i&&callFunction(i,o)}catch(n){}try{t.onPlayerReady&&callFunction(t.onPlayerReady,window)}catch(n){}if(f=t.behavior.autoplay,t.plugins)for(var a=0;a<t.plugins.length;a++)if(t.plugins[a].url&&-1!=t.plugins[a].url.indexOf(ADVARK_DETECTOR)||"advark"==t.plugins[a].name){t.plugins[a].name="advark",o.registerPlugin("advark",advark);break}I(t.behavior.autoplay)},function(){try{i&&callFunction(i,o)}catch(e){}try{t.onPlayerReady&&callFunction(t.onPlayerReady,window)}catch(e){}x(0)})}},window.onMyviIframeAPIReady=function(){SP.myviReady()},window.onYouTubeIframeAPIReady=function(){SP.youtubeReady()},splayer.SPReady()}}();