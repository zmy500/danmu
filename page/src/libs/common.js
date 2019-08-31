//Z0平台公共方法，其他业务信息禁止在这里写
let zsCommon = {};

zsCommon.CODE_SUCCESS = '1000';//成功
zsCommon.CODE_ERROR = '1001';//失败
zsCommon.CODE_PARAMS = '1002';//参数异常
zsCommon.CODE_JSON = '1003';//JSON异常
zsCommon.CODE_MISSING = '1004';//参数缺失
zsCommon.CODE_EXITS = '1005';//不存在

zsCommon.WARNING_SELECTION_NULL = '请先选择数据';
zsCommon.WARNING_SELECTION_SIGNAL = '请选择单条数据';
zsCommon.WARNING_ADD_CHILD = '请先保存主数据';
zsCommon.WARNING_TITLE = '警告';
zsCommon.WARNING_DELETE = '确认删除？';
zsCommon.WARNING_DELETE_SUCCESS = '删除成功';
zsCommon.WARNING_DELETE_ERROR = '删除失败';
zsCommon.WARNING_ACTIVE = "确认启用？";
zsCommon.WARNING_UNACTIVE = "确认停用？";
zsCommon.WARNING_START = "确认启动流程？";
zsCommon.INFO_ACTIVE_SUCCESS = "已启用";
zsCommon.INFO_ACTIVE_ERROR = "启用失败";
zsCommon.INFO_UNACTIVE_SUCCESS = "已停用";
zsCommon.INFO_UNACTIVE_ERROR = "停用失败";
zsCommon.INFO_SAVE_SUCCESS = '保存成功';
zsCommon.INFO_SAVE_ERROR = '保存失败';
zsCommon.URL="http://192.168.3.199:8099/";
zsCommon.INFO_START_SUCCESS = "启动成功";
zsCommon.INFO_START_ERROR = "启动失败";
zsCommon.REFRESH_TOKEN_TIME = 60;//前端刷新token间隔
zsCommon.BAIDU_MAP_AK = "sb6x84imnhtWNi9QIoEEXp56EMtFXTr3";

//系统参数
zsCommon.ZS_SYS_INDEX_TITLE = "ZS-SYS-INDEX-TITLE";//系统名称
zsCommon.ZS_SYS_INDEX_VERSION = 'ZS-SYS-INDEX-VERSION';//当前版本

/**
 * 检查是否列表单选
 * 入参
 * @param param:{
 *    messageObj $Message [必要参数]
 *    refsObj $refs [必要参数]
 *    moreWarnContent 多选提示语
 *    emptyWarnContent 没有选择提示语
 * }
 * @return 没有选择/多选返回undefined,单选返回单选对象
 */
zsCommon.isCheck = function(param) {
    var returnObj = undefined;
    var messageObj = param.messageObj;
    var refsObj = param.refsObj;
    var moreWarnContent = param.moreWarnContent == undefined?"请选择单条数据":param.moreWarnContent;
    var emptyWarnContent = param.emptyWarnContent == undefined?"请先选择数据":param.emptyWarnContent;

    var objArr = refsObj.selection.getSelection();
    if (objArr.length == 0) {
        messageObj.warning(emptyWarnContent);
    } else {
        if (objArr.length > 1){
            messageObj.warning(moreWarnContent);
        } else {
            returnObj = objArr[0];
        }
    }
    return returnObj;
}

/**
 * 确认框
 * @param param：{
 *    modal $Modal [必要参数]
 *    title 标题
 *    content 内容
 *    okFunction 确认操作执行的方法 [必要参数]
 * }
 */
zsCommon.confirm = function (param) {
    var modal = param.modal;
    var title = param.title == undefined?'警告':param.title;
    var content = param.content == undefined?'确认删除':param.content;
    var okFunction = param.okFunction;
    if (okFunction == undefined) {
        throw "zsCommon.confirm param error : okFunction is undefined";
    }
    if (modal == undefined) {
      throw "zsCommon.confirm param error : modal is undefined";
    }
    modal.confirm({
      title: title,
      content: content,
      onOk:okFunction
    });
}

zsCommon.judgeFlag = function(flag) {
    if (flag == '0') {
        return '已启用';
    }
    if (flag == '1') {
        return '已停用';
    }
    return '已启用';
}

/** 
 * 将时间按照格式转为字符串
 */
zsCommon.transferDateToStr = function(date,format) {
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    var returnDateStr = "";
    switch(format) {
      case 'yyyy':
        returnDateStr = y;
        break;
      case 'yyyy-MM':
      returnDateStr = y + '-' + m;
        break;
      case 'yyyy-MM-dd':
        returnDateStr = y + '-' + m + '-' +d;
        break;
      case 'yyyy-MM-dd HH':
        returnDateStr = y + '-' + m + '-' +d + ' ' + h;
        break;
      case 'yyyy-MM-dd HH:mm':
        returnDateStr = y + '-' + m + '-' +d + ' ' + h + ':' + minute;
        break;
      case 'yyyy-MM-dd HH:mm:ss':
        returnDateStr = y + '-' + m + '-' +d + ' ' + h + ':' + minute + ':' + second;
        break;
      default:
        returnDateStr = y + '-' + m + '-' +d + ' ' + h + ':' + minute + ':' + second;
    }
    return returnDateStr;  
}

zsCommon.transferZsTree = function(dataList,id,pId,text,image,extendArr) {
  var zstreeList = [];
  //查询出根级菜单
  // for (data in dataList) {
  dataList.forEach(function(data,i){
    var ztree = {};
    if (data[pId] != undefined && (data[pId] == '' || data[pId] == '#' || data[pId] == '-1' || data[pId] == '0')) {
      ztree.id = data[id];
      ztree.text = data[text];
      ztree.pId = data[pId];
      ztree.icon = 'ivu-icon ivu-icon-' + data[image];
      //赋值拓展字段
      extendArr.forEach(function(extendStr,i){
        ztree[extendStr] = data[extendStr];
      });
      queryChildrenData(ztree,dataList,id,pId,image,text,extendArr);
      zstreeList.push(ztree);
    }
  });
  return zstreeList;
};

//查询jstree上级目录
zsCommon.getParentsPath = function(ztreeObj,nodeId) {
  let path = " / ";
  if (nodeId != '#') {
      let parentNode = ztreeObj.getNode(nodeId);
      let parentNodeParentId = parentNode.parent;
      let parentNodeParentPath = this.getParentsPath(ztreeObj,parentNodeParentId);
      if (parentNodeParentPath == path) {
          parentNodeParentPath = '';
      }
      path = parentNodeParentPath + " / " + parentNode.text;
  } else {
      return path;
  }
  return path;
}

function queryChildrenData(parentMap,dataList,id,pId,image,text,extendArr) {
  var childrenList = [];
  dataList.forEach(function(data,i){
    var ztree = {};
    //判断是否是该节点的子节点
    if (data[pId] == parentMap.id) {
      ztree.id = data[id];
      ztree.text = data[text];
      ztree.pId = data[pId];
      ztree.icon = 'ivu-icon ivu-icon-' + data[image];
      //赋值拓展字段
      extendArr.forEach(function(extendStr,i){
        ztree[extendStr] = data[extendStr];
      });
      if (dataList.length> 0) {
        queryChildrenData(ztree, dataList, id, pId, image,text, extendArr);
      }
      childrenList.push(ztree);
    }
  });
  if (childrenList.length > 0) {
    parentMap.children = childrenList;
  }
}

export default zsCommon;