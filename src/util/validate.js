/**
 * 过滤特殊字符
 * @param {要过滤的字符串} str 
 */
export function stripScript(str) {
    var pattern = new RegExp("[`~!@#$%^&*()=|{}',:\\[\\].<>?￥（）；｛｝【】’‘；：“”。，、？']");
    var res = "";
    for (let i = 0; i < str.length; i++) {
        res = res + str.substr(i, 1).replace(pattern, '');
    }
    return res;
}