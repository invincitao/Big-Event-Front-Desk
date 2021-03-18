$(function () {
    // 渲染焦点图
    initFocusImg();
    function initFocusImg() {
        $.ajax({
            url: '/index/hotpic',
            type: 'get',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('focus_list', { data: res.data });
                $('.focus_list').html(htmlStr);
            }
        })
    };

    // 一周热门排行
    initHotList();
    function initHotList() {
        $.ajax({
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('hot_list', { data: res.data });
                $('.hotrank_list').html(htmlStr);
            }
        })
    };

    // 焦点关注
    initFocus();
    function initFocus() {
        $.ajax({
            url: '/index/attention',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('Focus', { data: res.data });
                $('.guanzhu_list').html(htmlStr);
            }
        })
    };

    // 最新评论
    initComment();
    function initComment() {
        $.ajax({
            url: '/index/latest_comment',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('Comment', { data: res.data });
                $('.comment_list').html(htmlStr);
            }
        })
    };

    // 最新资讯
    commentNews();
    function commentNews() {
        $.ajax({
            url: '/index/latest',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('CommentNews', { data: res.data });
                $('.common_news').html(htmlStr)
            }
        })
    }
})