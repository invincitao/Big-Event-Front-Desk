$(function () {
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
    };

    // 一周热门排行
    initHotList();
    function initHotList() {
        $.ajax({
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('hot_list', { data: res.data });
                $('#hotpic').html(htmlStr);
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

    // 搜索
    $('.search_btn').on('click', function () {
        // console.log(1);
        // 获取输入框的值
        let text = $('.search_txt').val();
        // console.log(text);
        $.ajax({
            url: '/index/search',
            type: 'get',
            dataType: 'json',
            data: {
                page: 1,
                perpage: 10,
                key: text
            },
            success: (res) => {
                console.log(res);
                // $('.common_news').html(template('CommentNews', { data: res.item }))
                let htmlStr = template('CommentNews', { data: res.data })
                $('.common_news').html(htmlStr);
            }
        })
        //页面一加载：默认搜索全部
        $('.search_btn').trigger('click');
    })


})