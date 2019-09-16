var initFunc = function () {

    var initLayout = function () {
        window.onload = function () {
            lazyload();

            //$.ajax({
            //    type: "get",
            //    url: "home.html", //需要获取的页面内容
            //    async: true,
            //    success: function (data) {
            //        $('.body-content').appen(data) //将获取到的内容放到当前页面的.contentBox中
            //    }
            //});

        }
    }

    var clickEvent = function () {
        //鼠标移到导航菜单上
        $(".navbar-nav").find("li").mouseover(function () {
            hideMenu();
            $(".drop-menu").hide();

            $(this).addClass("active-menu").siblings().removeClass("active-menu");
            var target = $(this).attr("menu");
            if (target != "") {  //有子菜单
                $($(this).find("strong")).removeClass("fa-caret-down").addClass("fa-caret-up");
                $(".drop-menu").slideDown();
                //$(".drop-menu").css("height", "400px");
                // $("#" + target).fadeIn(800);
                // $("#" + target).slideDown
                $("#" + target).show();
            }
        });



        //鼠标离开导航菜单
        $(".menu-list").mouseleave(function () {
            hideMenu();
            $(".drop-menu").slideUp();

        });

    }
    var hideMenu = function () {
        var $li = $(".active-menu");
        var target = $($li).attr("menu");
        if (target != "") {  //有子菜单
            $($($li).find("strong")).removeClass("fa-caret-up").addClass("fa-caret-down");
            $("#" + target).hide();
            // $(".drop-menu").css("height", "0px");
            $($li).removeClass("active-menu");
        }

    }


    return {
        init: function () {
            initLayout();
            clickEvent();
        }
    }


}();

initFunc.init();


