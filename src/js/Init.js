import $ from "jquery";
export default function () {
    if (
        ($(".toggle-nav").click(function () {
            $(".nav-menu").css("left", "0px");
        }),
        $(".mobile-back").click(function () {
            $(".nav-menu").css("left", "-410px");
        }),
        $(".page-wrapper").attr("class", "page-wrapper " + localStorage.getItem("page-wrapper")),
        $(".page-body-wrapper").attr("class", "page-body-wrapper " + localStorage.getItem("page-body-wrapper")),
        null === localStorage.getItem("page-wrapper") && $(".page-wrapper").addClass("compact-wrapper"),
        $("#pageWrapper").hasClass("compact-wrapper"))
    )
        jQuery(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
            jQuery(".submenu-title").click(function () {
                jQuery(".submenu-title").removeClass("active"),
                    jQuery(".submenu-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
                    jQuery(".submenu-content").slideUp("normal"),
                    1 == jQuery(this).next().is(":hidden")
                        ? (jQuery(this).addClass("active"), jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'), jQuery(this).next().slideDown("normal"))
                        : jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }),
            jQuery(".submenu-content").hide(),
            jQuery(".menu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
            jQuery(".menu-title").click(function () {
                jQuery(".menu-title").removeClass("active"),
                    jQuery(".menu-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
                    jQuery(".menu-content").slideUp("normal"),
                    1 == jQuery(this).next().is(":hidden")
                        ? (jQuery(this).addClass("active"), jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'), jQuery(this).next().slideDown("normal"))
                        : jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }),
            jQuery(".menu-content").hide();
    else if ($("#pageWrapper").hasClass("horizontal-wrapper")) {
        jQuery(window).width() < "992" &&
            ($("#pageWrapper").removeClass("horizontal-wrapper").addClass("compact-wrapper"),
            $(".page-body-wrapper").removeClass("horizontal-menu").addClass("sidebar-icon"),
            jQuery(".submenu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
            jQuery(".submenu-title").click(function () {
                jQuery(".submenu-title").removeClass("active"),
                    jQuery(".submenu-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
                    jQuery(".submenu-content").slideUp("normal"),
                    1 == jQuery(this).next().is(":hidden")
                        ? (jQuery(this).addClass("active"), jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'), jQuery(this).next().slideDown("normal"))
                        : jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }),
            jQuery(".submenu-content").hide(),
            jQuery(".menu-title").append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
            jQuery(".menu-title").click(function () {
                jQuery(".menu-title").removeClass("active"),
                    jQuery(".menu-title").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>'),
                    jQuery(".menu-content").slideUp("normal"),
                    1 == jQuery(this).next().is(":hidden")
                        ? (jQuery(this).addClass("active"), jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'), jQuery(this).next().slideDown("normal"))
                        : jQuery(this).find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }),
            jQuery(".menu-content").hide());
    }
    $(".toggle-sidebar").click(function () {
        $(".main-nav").toggleClass("close_icon"), $(".page-main-header").toggleClass("close_icon");
    });
    var a = $(window),
        e = a.width();
    !(function (a) {
        "use strict";
        e + 17 <= 993 && (a(".toggle-sidebar").attr("checked", !1), a(".main-nav").addClass("close_icon"), a(".page-main-header").addClass("close_icon"));
    })(jQuery),
        $(window).resize(function () {
            a.width() + 17 <= 991
                ? ($(".toggle-sidebar").attr("checked", !1), $(".main-nav").addClass("close_icon"), $(".page-main-header").addClass("close_icon"))
                : ($(".toggle-sidebar").attr("checked", !1), $(".main-nav").removeClass("close_icon"), $(".page-main-header").removeClass("close_icon")),
                e >= 768 &&
                    $(".toggle-sidebar").click(function () {
                        $(".main-nav").toggleClass("close_icon"), $(".page-main-header").toggleClass("close_icon");
                    });
        });
    var i = $("#mainnav"),
        l = "500px",
        t = $(".sidebar-wrapper").innerWidth();
    if (t >= "1660") var s = -3e3;
    else s = t >= "1440" ? -3600 : -4200;
    $("#left-arrow").addClass("disabled"),
        $("#right-arrow").click(function () {
            var a = parseInt(i.css("marginLeft"));
            a >= s && ($("#left-arrow").removeClass("disabled"), i.stop(!1, !0).animate({ marginLeft: "-=" + l }, { duration: 400 }), a == s && ($(this).addClass("disabled"), console.log("sliderLimit", s)));
        }),
        $("#left-arrow").click(function () {
            var a = parseInt(i.css("marginLeft"));
            a < 0 && (i.stop(!1, !0).animate({ marginLeft: "+=" + l }, { duration: 400 }), $("#right-arrow").removeClass("disabled"), $("#left-arrow").removeClass("disabled"), a >= -500 && $(this).addClass("disabled"));
        }),
        $(".main-navbar").find("a").removeClass("active"),
        $(".main-navbar").find("li").removeClass("active");
    var r = window.location.pathname;
    $(".main-navbar ul>li a").filter(function () {
        var a = $(this).attr("href");
        if (a && -1 != r.indexOf(a))
            return (
                $(this).parents().children("a").addClass("active"),
                $(this).parents().parents().children("ul").css("display", "block"),
                $(this).addClass("active"),
                $(this).parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'),
                $(this).parent().parent().parent().parent().parent().children("a").find("div").replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>'),
                !1
            );
    });
    var o = localStorage.getItem("primary") || "#24695c",
        c = localStorage.getItem("secondary") || "#ba895d";
    (window.vihoAdminConfig = { primary: o, secondary: c }),
        $("#default-demo").click(function () {
            localStorage.setItem("page-wrapper", "page-wrapper compact-wrapper"), localStorage.setItem("page-body-wrapper", "sidebar-icon");
        }),
        $("#compact-demo").click(function () {
            localStorage.setItem("page-wrapper", "page-wrapper compact-wrapper compact-sidebar"), localStorage.setItem("page-body-wrapper", "sidebar-icon");
        }),
        $("#modern-demo").click(function () {
            localStorage.setItem("page-wrapper", "page-wrapper compact-wrapper modern-sidebar"), localStorage.setItem("page-body-wrapper", "sidebar-icon");
        }),
        (function (a) {
            "use strict";
            a(".mobile-toggle").click(function () {
                a(".nav-menus").toggleClass("open");
            }),
                a(".mobile-toggle-left").click(function () {
                    a(".left-header").toggleClass("open");
                }),
                a(".mobile-search").click(function () {
                    a(".form-control-plaintext").toggleClass("open");
                }),
                a(".bookmark-search").click(function () {
                    a(".form-control-search").toggleClass("open");
                }),
                a(".filter-toggle").click(function () {
                    a(".product-sidebar").toggleClass("open");
                }),
                a(".toggle-data").click(function () {
                    a(".product-wrapper").toggleClass("sidebaron");
                }),
                a(".form-control-search").keyup(function (e) {
                    e.target.value ? a(".page-wrapper.horizontal-wrapper").addClass("offcanvas-bookmark") : a(".page-wrapper.horizontal-wrapper").removeClass("offcanvas-bookmark");
                });
        })(jQuery),
        $(".loader-wrapper").fadeOut("slow", function () {
            $(this).remove();
        }),
        $(window).on("scroll", function () {
            $(this).scrollTop() > 600 ? $(".tap-top").fadeIn() : $(".tap-top").fadeOut();
        }),
        $(".media-size-email svg").on("click", function (a) {
            $(this).toggleClass("like");
        }),
        $(".tap-top").click(function () {
            return $("html, body").animate({ scrollTop: 0 }, 600), !1;
        }),
        (function (a, e, i, l) {
            "use strict";
            var t = a(".js-ripple");
            t.on("click.ui.ripple", function (e) {
                var i = a(this),
                    l = i.parent().offset(),
                    t = i.find(".c-ripple__circle"),
                    s = e.pageX - l.left,
                    r = e.pageY - l.top;
                t.css({ top: r + "px", left: s + "px" }), i.addClass("is-active");
            }),
                t.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (e) {
                    a(this).removeClass("is-active");
                });
        })(jQuery, window, document),
        $(".chat-menu-icons .toogle-bar").click(function () {
            $(".chat-menu").toggleClass("show");
        });
    function d(a) {
        $(".lan-1").text(n[0][a]),
            $(".lan-2").text(n[1][a]),
            $(".lan-3").text(n[2][a]),
            $(".lan-4").text(n[3][a]),
            $(".lan-5").text(n[4][a]),
            $(".lan-6").text(n[5][a]),
            $(".lan-7").text(n[6][a]),
            $(".lan-8").text(n[7][a]),
            $(".lan-9").text(n[8][a]);
    }
    $(document).ready(function () {
        if (null != localStorage.getItem("primary")) {
            var a = localStorage.getItem("primary");
            $("#ColorPicker1").val(a);
            var e = localStorage.getItem("secondary");
            $("#ColorPicker2").val(e);
        }
        $(document).click(function (a) {
            $(".translate_wrapper, .more_lang").removeClass("active");
        }),
            $(".translate_wrapper .current_lang").click(function (a) {
                a.stopPropagation(),
                    $(this).parent().toggleClass("active"),
                    setTimeout(function () {
                        $(".more_lang").toggleClass("active");
                    }, 5);
            }),
            d("en"),
            $(".more_lang .lang").click(function () {
                $(this).addClass("selected").siblings().removeClass("selected"), $(".more_lang").removeClass("active");
                var a = $(this).find("i").attr("class"),
                    e = $(this).attr("data-value");
                d(e), $(".current_lang .lang-txt").text(e), $(".current_lang i").attr("class", a);
            });
    });
    var n = [
        { en: "General", pt: "Geral", es: "Generalo", fr: "GÃ©nÃ©rale", de: "Generel", cn: "ä¸€èˆ¬", ae: "Ø­Ø¬Ù†Ø±Ø§Ù„ Ù„ÙˆØ§Ø¡" },
        {
            en: "Dashboards,widgets & layout.",
            pt: "PainÃ©is, widgets e layout.",
            es: "Paneloj, fenestraÄµoj kaj aranÄo.",
            fr: "Tableaux de bord, widgets et mise en page.",
            de: "Dashboards, widgets en lay-out.",
            cn: "ä»ªè¡¨æ¿ï¼Œå°å·¥å…·å’Œå¸ƒå±€ã€‚",
            ae: "Ù„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ§Ù„ØªØ®Ø·ÙŠØ·.",
        },
        { en: "Dashboards", pt: "PainÃ©is", es: "Paneloj", fr: "Tableaux", de: "Dashboards", cn: " ä»ªè¡¨æ¿ ", ae: "ÙˆØ­Ø§Øª Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© " },
        { en: "Default", pt: "PadrÃ£o", es: "Vaikimisi", fr: "DÃ©faut", de: "Standaard", cn: "é›»å­å•†å‹™", ae: "ÙˆØ¥ÙØªØ±Ø§Ø¶ÙŠ" },
        { en: "Ecommerce", pt: "ComÃ©rcio eletrÃ´nico", es: "Komerco", fr: "Commerce Ã©lectronique", de: "E-commerce", cn: "é›»å­å•†å‹™", ae: "ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©" },
        { en: "Widgets", pt: "Ferramenta", es: "Vidin", fr: "Widgets", de: "Widgets", cn: "å°éƒ¨ä»¶", ae: "ÙˆØ§Ù„Ø­Ø§Ø¬ÙŠØ§Øª" },
        { en: "Page layout", pt: "Layout da pÃ¡gina", es: "PaÄa aranÄo", fr: "Tableaux", de: "Mise en page", cn: "é é¢ä½ˆå±€", ae: "ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„ØµÙØ­Ø©" },
        { en: "Applications", pt: "FormulÃ¡rios", es: "Aplikoj", fr: "Applications", de: "Toepassingen", cn: "æ‡‰ç”¨é ˜åŸŸ", ae: "ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª" },
        { en: "Ready to use Apps", pt: "Pronto para usar aplicativos", es: "Preta uzi Apps", fr: " Applications prÃªtes Ã  lemploi ", de: "Klaar om apps te gebruiken", cn: "ä»ªè¡¨æ¿", ae: "Ø¬Ø§Ù‡Ø² Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª" },
    ];
    $(".bg-center").parent().addClass("b-center"),
        $(".bg-img-cover").parent().addClass("bg-size"),
        $(".bg-img-cover").each(function () {
            var a = $(this),
                e = a.attr("src");
            a.parent().css({ "background-image": "url(" + e + ")", "background-size": "cover", "background-position": "center", display: "block" }), a.hide();
        }),
        $(".show-hide").show(),
        $(".show-hide span").addClass("show"),
        $(".show-hide span").click(function () {
            $(this).hasClass("show") ? ($('input[name="login[password]"]').attr("type", "text"), $(this).removeClass("show")) : ($('input[name="login[password]"]').attr("type", "password"), $(this).addClass("show"));
        }),
        $('form button[type="submit"]').on("click", function () {
            $(".show-hide span").addClass("show"), $(".show-hide").parent().find('input[name="login[password]"]').attr("type", "password");
        }),
        $(".toggle-menu").click(function () {
            $(".landing-menu").toggleClass("open");
        }),
        $(".menu-back").click(function () {
            $(".landing-menu").toggleClass("open");
        }),
        $(".product-size ul li ").on("click", function (a) {
            $(".product-size ul li ").removeClass("active"), $(this).addClass("active");
        }),
        $(".email-sidebar .email-aside-toggle ").on("click", function (a) {
            $(".email-sidebar .email-left-aside ").toggleClass("open");
        }),
        $(".job-sidebar .job-toggle ").on("click", function (a) {
            $(".job-sidebar .job-left-aside ").toggleClass("open");
        }),
        $(".mode").on("click", function () {
            $(".mode i").toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o"), $("body").toggleClass("dark-only"), $(this).attr("data-attr"), localStorage.setItem("body", "dark-only");
        }),
        localStorage.getItem("color") && $("#color").attr("href", "../assets/css/" + localStorage.getItem("color") + ".css"),
        localStorage.getItem("dark") && $("body").attr("class", "dark-only"),
        $(
            '<div class="customizer-links"> <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#layout-type"> <div class="settings"><i class="icofont icofont-laptop-alt"></i></div><span>Check Layout</span> </a> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home"> <div class="settings"><i class="icofont icofont-ui-settings"></i></div><span>Sidebar Type</span> </a> <a class="nav-link" id="c-pills-home-tab1" data-bs-toggle="pill" href="#c-pills-profile"> <div class="settings color-settings"><i class="icofont icofont-color-bucket"></i></div><span>Color Picker</span> </a> </div><div class="customizer-contain"> <div class="tab-content" id="c-pills-tabContent"> <div class="customizer-header"> <i class="icofont-close icon-close"></i> <h5>Live customizer</h5> <p class="mb-0">Customize &amp; Preview Real Time</p></div><div class="customizer-body custom-scrollbar"> <div class="tab-pane fade show active" id="layout-type"> <ul class="sidebar-type layout-grid layout-types"> <li data-attr="defaul-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/1.jpg" alt=""></a> <h6>Defaul layout</h6> </div></li><li data-attr="compact-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/2.jpg" alt=""></a> <h6>Compact layout</h6> </div></li><li data-attr="modern-layout"> <div class="layout-img"> <a href="javascript:void(0)"><img class="img-fluid" src="../assets/images/landing/demo/3.jpg" alt=""></a> <h6>Modern layout</h6> </div></li></ul> </div><div class="tab-pane fade" id="c-pills-home"> <h6>Layout Type</h6> <ul class="main-layout layout-grid"> <li class="active" data-attr="ltr"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul> </div></li><li data-attr="rtl"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light body"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul> </div></li><li class="box-layout px-3" data-attr="ltr"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul> </div></li></ul> <h6>Sidebar Typedd</h6> <ul class="sidebar-type layout-grid"> <li data-attr="normal-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li data-attr="compact-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar compact"></li><li class="bg-light body"></li></ul> </div></li></ul> </div><div class="tab-pane fade" id="c-pills-profile"> <h6>Light layout</h6> <ul class="layout-grid customizer-color"> <li class="color-layout" data-attr="color-1" data-primary="#24695c" data-secondary="#ba895d"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#d97f3d" data-secondary="#f25f4c"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#168eea" data-secondary="#90b4cd"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#665ed5" data-secondary="#d1d1e9"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#3a9aa8" data-secondary="#984ff3"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#7951aa" data-secondary="#72757D"> <div></div></li></ul> <h6>Dark Layout</h6> <ul class="layout-grid customizer-color dark"> <li class="color-layout" data-attr="color-1" data-primary="#24695c" data-secondary="#ba895d"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#d97f3d" data-secondary="#f25f4c"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#168eea" data-secondary="#90b4cd"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#665ed5" data-secondary="#d1d1e9"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#3a9aa8" data-secondary="#984ff3"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#7951aa" data-secondary="#72757D"> <div></div></li></ul> <h6>Mix Layout</h6> <ul class="layout-grid customizer-mix"> <li class="color-layout active" data-attr="light-only"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-only"> <div class="header bg-dark"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-dark body"></li></ul> </div></li></ul> </div></div></div></div></div>'
        ).appendTo($("body")),
        $(document).ready(function () {
            $(".customizer-color li").on("click", function () {
                $(".customizer-color li").removeClass("active"), $(this).addClass("active");
                var a = $(this).attr("data-attr"),
                    e = $(this).attr("data-primary"),
                    i = $(this).attr("data-secondary");
                localStorage.setItem("color", a),
                    localStorage.setItem("primary", e),
                    localStorage.setItem("secondary", i),
                    localStorage.removeItem("dark"),
                    $("#color").attr("href", "../assets/css/" + a + ".css"),
                    $(".dark-only").removeClass("dark-only"),
                    location.reload(!0);
            }),
                $(".customizer-color.dark li").on("click", function () {
                    $(".customizer-color.dark li").removeClass("active"), $(this).addClass("active"), $("body").attr("class", "dark-only"), localStorage.setItem("dark", "dark-only");
                }),
                null != localStorage.getItem("primary") && document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary")),
                null != localStorage.getItem("secondary") && document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary")),
                $(".customizer-links #c-pills-home-tab , .customizer-links #c-pills-layouts-tab , .customizer-links  #c-pills-home-tab1").click(function () {
                    $(".customizer-contain").addClass("open"), $(".customizer-links").addClass("open");
                }),
                $(".close-customizer-btn").on("click", function () {
                    $(".floated-customizer-panel").removeClass("active");
                }),
                $(".customizer-contain .icon-close").on("click", function () {
                    $(".customizer-contain").removeClass("open"), $(".customizer-links").removeClass("open");
                }),
                $(".color-apply-btn").click(function () {
                    location.reload(!0);
                }),
                $(".customizer-color.dark li").on("click", function () {
                    $(".customizer-color.dark li").removeClass("active"), $(this).addClass("active"), $("body").attr("class", "dark-only"), localStorage.setItem("dark", "dark-only");
                }),
                $(".customizer-mix li").on("click", function () {
                    $(".customizer-mix li").removeClass("active"), $(this).addClass("active");
                    var a = $(this).attr("data-attr");
                    $("body").attr("class", a);
                }),
                $(".sidebar-main-bg-setting li").on("click", function () {
                    $(".sidebar-main-bg-setting li").removeClass("active"), $(this).addClass("active");
                    var a = $(this).attr("data-attr");
                    $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + a);
                }),
                $(".main-layout li").on("click", function () {
                    $(".main-layout li").removeClass("active"), $(this).addClass("active");
                    var a = $(this).attr("data-attr");
                    $("body").attr("class", a), $("html").attr("dir", a);
                }),
                $(".main-layout .box-layout").on("click", function () {
                    $(".main-layout .box-layout").removeClass("active"), $(this).addClass("active");
                    var a = $(this).attr("data-attr");
                    $("body").attr("class", "box-layout"), $("html").attr("dir", a);
                }),
                $(".sidebar-type li").on("click", function () {
                    $("body").append(""), console.log("test");
                    var a = $(this).attr("data-attr"),
                        e = "";
                    switch (($(".page-wrapper").hasClass("box-layout") && (e = "box-layout"), a)) {
                        case "defaul-layout":
                            $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + e), $(this).addClass("active"), localStorage.setItem("page-wrapper", "compact-wrapper");
                            break;
                        case "modern-layout":
                            $(".page-wrapper").attr("class", "page-wrapper compact-wrapper modern-sidebar" + e), localStorage.setItem("page-wrapper", "compact-wrapper modern-sidebar");
                            break;
                        case "compact-layout":
                            $(".page-wrapper").attr("class", "page-wrapper compact-sidebar" + e), localStorage.setItem("page-wrapper", "compact-wrapper compact-sidebar");
                            break;
                        case "normal-sidebar":
                            $(".page-wrapper").attr("class", "page-wrapper horizontal-wrapper " + e),
                                $(".logo-wrapper").find("img").attr("src", "../assets/images/logo/logo.png"),
                                localStorage.setItem("page-wrapper", "horizontal-wrapper"),
                                localStorage.setItem("page-body-wrapper", "horizontal-menu");
                            break;
                        case "compact-sidebar":
                            $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + e), $(this).addClass("active"), localStorage.setItem("page-wrapper", "compact-wrapper ");
                            break;
                        default:
                            $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + e), localStorage.setItem("page-wrapper", "compact-wrapper");
                    }
                    location.reload(!0);
                });
        }),
        feather.replace();
}