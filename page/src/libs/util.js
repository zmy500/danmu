//Z0平台方法，其他业务信息禁止在这里写
import axios from 'axios';

import Cookies from 'js-cookie';

let util = {};
let vueObj = undefined;
//初始化util 使得axios可以使用vue实例使得axios可以使用vue实例,只在网络请求时需要初始化
util.initVm = function(vm) {
    vueObj = vm;
};
//浏览器系统标题
util.title = function (title) {
    title = title || 'Z1-门户';
    window.document.title = title;
};


 const ajaxUrl = ' http://10.10.60.14:8085/'

util.ajaxUrl = ajaxUrl;
//封装axios网络请求方法
util.ajax = axios
  .create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    }
  });
//请求拦截器
util.ajax.interceptors.request.use(config => {
    if (vueObj == undefined) {
        console.error('util.js 未执行initVm(vm)进行初始化');
        return false;
    }
    if (Cookies.get("token")) {
        config.headers.Authorization = 'Zsplat ' + Cookies.get("token");
    }

    return config;
},error =>{
    return Promise.reject(error);
});
//返回状态拦截器
util.ajax.interceptors.response.use(data=> {
    return data;
  }, error => {
      //注意：接口请求不到的情况下拦截不到状态码
      if (error && error.response) {
          //Token验证失败
        if (error.response.status == 1008) {
            vueObj.$Message.error("TOKEN令牌验证失败");
            vueObj.$router.replace({name:'login'});
        }
        //Token过期
        if (error.response.status == 1010) {
            vueObj.$Notice.warning({
                title: '提醒',
                desc: '长时间未操作，请重新登陆',
                duration: 0
            });
            Cookies.remove('token');
            // 跳回登陆页面
            vueObj.$router.replace({name:'login'});
            //vueObj.$store.commit("setTokenCheckPage",true);

        }
        //Token下线
        if (error.response.status == 1009) {
            vueObj.$Notice.warning({
                title: '提醒',
                desc: '账号已在其他地方登陆，请重新登陆',
                duration: 0
            });
            vueObj.$store.commit("setTokenCheckPage",true);
        }
      } else {
        if (error.toString().indexOf('Network Error')!=-1) {
          vueObj.$Message.error("网络异常");
        }
      }
    return Promise.reject(error);
  }
)

util.inOf = function (arr, targetArr) {
    let res = true;
    arr.map(item => {
        if (targetArr.indexOf(item) < 0) {
            res = false;
        }
    });
    return res;
};

util.oneOf = function (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};

util.showThisRoute = function (itAccess, currentAccess) {
    if (typeof itAccess === 'object' && itAccess.isArray()) {
        return util.oneOf(currentAccess, itAccess);
    } else {
        return itAccess === currentAccess;
    }
};

util.getRouterObjByName = function (routers, name) {
    let routerObj = {};
    routers.forEach(item => {
        if (item.name === 'otherRouter') {
            item.children.forEach((child, i) => {
                if (child.name === name) {
                    routerObj = item.children[i];
                }
            });
        } else {
            if (item.children.length === 1) {
                if (item.children[0].name === name) {
                    routerObj = item.children[0];
                }
            } else {
                item.children.forEach((child, i) => {
                    if (child.name === name) {
                        routerObj = item.children[i];
                    }
                });
            }
        }
    });
    return routerObj;
};

util.handleTitle = function (vm, item) {
    return item.title;
};

util.setCurrentPath = function (vm, name) {
    let title = '';
    let isOtherRouter = false;
    vm.$store.state.app.routers.forEach(item => {
        if (item.children.length === 1) {
            if (item.children[0].name === name) {
                title = util.handleTitle(vm, item);
                if (item.name === 'otherRouter') {
                    isOtherRouter = true;
                }
            }
        } else {
            item.children.forEach(child => {
                if (child.name === name) {
                    title = util.handleTitle(vm, child);
                    if (item.name === 'otherRouter') {
                        isOtherRouter = true;
                    }
                }
            });
        }
    });
    let currentPathArr = [];
    if (name === 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '',
                name: 'home_index'
            }
        ];
    } else if ((name.indexOf('_index') >= 0 || isOtherRouter) && name !== 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.app.routers, 'home_index')),
                path: '/home',
                name: 'home_index'
            },
            {
                title: title,
                path: '',
                name: name
            }
        ];
    } else {
        let currentPathObj = vm.$store.state.app.routers.filter(item => {
            if (item.children.length <= 1) {
                return item.children[0].name === name;
            } else {
                let i = 0;
                let childArr = item.children;
                let len = childArr.length;
                while (i < len) {
                    if (childArr[i].name === name) {
                        return true;
                    }
                    i++;
                }
                return false;
            }
        })[0];
        if (currentPathObj.children.length <= 1 && currentPathObj.name === 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '',
                    name: 'home_index'
                }
            ];
        } else if (currentPathObj.children.length <= 1 && currentPathObj.name !== 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: name
                }
            ];
        } else {
            let childObj = currentPathObj.children.filter((child) => {
                return child.name === name;
            })[0];
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: currentPathObj.name
                },
                {
                    title: childObj.title,
                    path: currentPathObj.path + '/' + childObj.path,
                    name: name
                }
            ];
        }
    }
    vm.$store.commit('setCurrentPath', currentPathArr);

    return currentPathArr;
};

util.openNewPage = function (vm, name, argu, query) {
    let pageOpenedList = vm.$store.state.app.pageOpenedList;
    let openedPageLen = pageOpenedList.length;
    let i = 0;
    let tagHasOpened = false;
    while (i < openedPageLen) {
        if (name === pageOpenedList[i].name) {  // 页面已经打开
            vm.$store.commit('pageOpenedList', {
                index: i,
                argu: argu,
                query: query
            });
            tagHasOpened = true;
            break;
        }
        i++;
    }
    if (!tagHasOpened) {
        let tag = vm.$store.state.app.tagsList.filter((item) => {
            if (item.children) {
                return name === item.children[0].name;
            } else {
                return name === item.name;
            }
        });
        tag = tag[0];
        if (tag) {
            tag = tag.children ? tag.children[0] : tag;
            if (argu) {
                tag.argu = argu;
            }
            if (query) {
                tag.query = query;
            }
            vm.$store.commit('increateTag', tag);
        }
    }
    vm.$store.commit('setCurrentPageName', name);
};

util.toDefaultPage = function (routers, name, route, next) {
    let len = routers.length;
    let i = 0;
    let notHandle = true;
    while (i < len) {
        if (routers[i].name === name && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            });
            notHandle = false;
            next();
            break;
        }
        i++;
    }
    if (notHandle) {
        next();
    }
};

util.fullscreenEvent = function (vm) {
    // 权限菜单过滤相关
    vm.$store.commit('updateMenulist');
};

util.tagListFormat = function(menuList) {
    //简单检查是否是可以处理的数据
    if (!(menuList instanceof Array)) {
        return false;
    }
    //处理后的容器
    let fmTagList = [];
    //处理后的容器
    menuList.forEach(menu => {
        let {
            menuUrlFront,
            image,
            menuName,
            menuAction,
            menuSimpleName,
            children
        } = menu;
        //如果有子组件，递归处理
        if (children && children instanceof Array) {
            children = this.tagListFormat(children);
        }
        let fmTag = {
            name: menuSimpleName,
            children: children,
            title:menuName,
            path:menuAction
        };
        fmTagList.push(fmTag);
    });
    return fmTagList;
}

util.routerFormat = function(routers) {
    //简单检查是否是可以处理的数据
    if (!(routers instanceof Array)) {
        return false;
    }
    //处理后的容器
    let fmRouters = [];
    routers.forEach(router => {
        let {
            menuUrlFront,
            image,
            menuName,
            menuAction,
            menuSimpleName,
            children
        } = router;
        menuUrlFront = menuUrlFront == '' ? '/' : menuUrlFront;
        menuAction = menuAction == '' ? 'Home' : menuAction;
        children = children == undefined ? []:children;
        //如果有子组件，递归处理
        if (children && children instanceof Array) {
            children = this.routerFormat(children);
        }
        let fmRouter = {
            path: menuUrlFront,
            icon: image,
            title: menuName,
            component (resolve) {
                require(['../views/' + menuAction + '.vue'], resolve)
            },
            name: menuSimpleName,
            children: children
        };
        fmRouters.push(fmRouter);
    });
    return fmRouters;
}

util.refreshMenu = function(menuCache,editMenuCache,refreshRoute) {
    let menuList = JSON.parse(menuCache);
    let editMenuList = JSON.parse(editMenuCache);

    let routers = this.routerFormat(menuList);
    let editRouters = this.routerFormat(editMenuList);

    let tags = this.tagListFormat(menuList);
    let editTags = this.tagListFormat(editMenuList);

    //tag集合添加路由信息，达到点击菜单出现tag
    vueObj.$store.commit("addRouter",routers);
    vueObj.$store.commit("addRouter",editRouters);

    if (refreshRoute) {
        vueObj.$router.addRoutes(routers);
        vueObj.$router.addRoutes(editRouters);
    }
    //初始化菜单
    vueObj.$store.commit("initMenuList",routers);
    let tagsList = [];
    tags.map((item) => {
        if (item.children.length <= 1) {
            tagsList.push(item.children[0]);
        } else {
            tagsList.push(...item.children);
        }
    });
    editTags.map((item) => {
        if (item.children.length <= 1) {
            tagsList.push(item.children[0]);
        } else {
            tagsList.push(...item.children);
        }
    });

    vueObj.$store.commit('setTagsList', tagsList);
}

/**
 * 文件下载
 * 参数-url:服务端地址，data:所带参数,type:服务端响应文件类型，fujName:所生成文件的名字
 *
 */
util.downFile = function (url,data,type,fujName){
    axios({
        method: 'POST',
        url:url,
        data:data,
        headers: {
            "Content-Type": "application/json",
            "Authorization" : 'Zsplat ' + Cookies.get("token")
        },
        responseType: 'blob'
    }).then((res) => {
        const link = document.createElement('a')
        let blob = new Blob([res.data],{type:type});
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', fujName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }).catch(error => {
        vueObj.$Message.error("网络异常");
        console.log(error)
    })
};

util.formatDate = function(date,fmt) {
      if (date == undefined) {
          return '';
      }
      let myDate = new Date(date)
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (myDate.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      let o = {
        'M+': myDate.getMonth() + 1,
        'd+': myDate.getDate(),
        'h+': myDate.getHours(),
        'm+': myDate.getMinutes(),
        's+': myDate.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
      }
      return fmt;
};
util.getAge = function(identityCard) {
    var len = (identityCard + "").length;
    if (len == 0) {
        return 0;
    } else {
        if ((len != 15) && (len != 18))//身份证号码只能为15位或18位其它不合法
        {
            return 0;
        }
    }
    var strBirthday = "";
    if (len == 18)//处理18位的身份证号码从号码中得到生日和性别代码
    {
        strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
    }
    if (len == 15) {
        strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }
    //时间字符串里，必须是“/”
    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
//服务鉴权
util.checkPermission = function(code) {
    let hasPermission = false;
    let permissionsCache = JSON.parse(sessionStorage.getItem("permissionsCache"));
    if (permissionsCache != undefined && permissionsCache.contains(code)) {
        hasPermission = treu;
    }
    return hasPermission;
}
//获得系统参数
util.getSystemParam = function(paCode) {
    let content = '';
    let commonParamCache = JSON.parse(sessionStorage.getItem("commonParamCache"));
    if (commonParamCache != undefined) {
        content = commonParamCache[paCode];
    }
    if (content == undefined) {
        content = '';
    }
    return content;
}

util.checkBrowserVersion = function() 
{ 
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
  // var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
  var isIE=window.ActiveXObject || "ActiveXObject" in window
  // var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器 
  var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1&&!isEdge; //判断Chrome浏览器 
 
  if (isIE)  
  { 

     var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
     reIE.test(userAgent); 
     var fIEVersion = parseFloat(RegExp["$1"]); 
     if(userAgent.indexOf('MSIE 6.0')!=-1){
       return "IE6";
     }else if(fIEVersion == 7) 
       { return "IE7";} 
     else if(fIEVersion == 8) 
       { return "IE8";} 
     else if(fIEVersion == 9) 
       { return "IE9";} 
     else if(fIEVersion == 10) 
       { return "IE10";} 
     else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
           return "IE11";
       } 
     else
       { return "0"}//IE版本过低
   }//isIE end 
     
   if (isFF) { return "FF";} 
   if (isOpera) { return "Opera";} 
   if (isSafari) { return "Safari";} 
   if (isChrome) { return "Chrome";} 
   if (isEdge) { return "Edge";} 
 }

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};


export default util;
