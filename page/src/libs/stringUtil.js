let stringUtil = {};

/**
 * 检查是否包含特殊字符
 */
stringUtil.checkSpecialChar = function() {
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    if(pattern.test(_value)){
        return true;
    } else {
        return false;
    }
}

export default stringUtil;