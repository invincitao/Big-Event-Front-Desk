// 接口
let baseURL = "http://120.24.171.137:1337/api/v1";
$.ajaxPrefilter(function (options) {

    options.url = baseURL + options.url;
})