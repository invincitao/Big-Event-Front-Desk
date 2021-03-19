$(function () {

    let id = location.search.split('=')[1];
    // alert(id)
    // 一周热门排行
    initHotList();
    function initHotList() {
        $.ajax({
            url: '/index/rank',
            success: (res) => {
                // console.log(res);
                let htmlStr = template('hot_list', { data: res.data });
                $('#HotList').html(htmlStr);
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

    // 文章详情
    initDetail();
    function initDetail() {
        // console.log(id);
        $.ajax({
            url: '/index/article',
            type: 'get',
            data: { id: id },
            success: (res) => {
                console.log("文章详情", res);
                if (res.code == 200) {
                    $('.article_title').text(res.data.title);
                    $('.article_con').html(res.data.content);
                    let htmlStr = template('listInfo', res);
                    $('.article_info').html(htmlStr);
                    $('#prev').text(res.data.prev.title)
                    $('#next').text(res.data.next.title)
                }
            }
        })
    };

    getComment();
    function getComment() {
        //2.评论列表
        $.ajax({
            url: '/index/latest_comment',
            type: 'get',
            data: {
                articleId: id
            },
            success: function (res) {
                let htmlStr = template('comment', { data: res.data })
                $('.comment_list_con').html(htmlStr);
                $('.comment_count').text(res.data.length + '条评论');
            }
        });
    }

    // 发表评论
    $('body').on('submit', '.comment_form', function (e) {
        e.preventDefault();
        let user = $('.comment_name').val().trim();
        let content = $('.comment_input').val().trim();

        if (user.length == 0 || content.length == 0) {
            return alert('不能为空');
        }
        console.log(user, content);
        $.ajax({
            url: '/index/post_comment',
            type: 'post',
            dataType: 'json',
            data: {
                author: user,
                content: content,
                articleId: id
            },
            success: (res) => {
                console.log(res);
                location.reload();
            }
        })
    });

    // 搜索

})