/*
* aff_id
* */
const urlParams = new URLSearchParams(window.location.search);
const aValue = urlParams.get('a');
let aff_id = 'sky88';
if (aValue) {
    localStorage.setItem('aff_id', aValue);
    aff_id = aValue;
} else if (localStorage.getItem('aff_id')) {
    aff_id = localStorage.getItem('aff_id');
}
jQuery(document).ready(function ($) {
    if (aff_id) {
        let affIdMetaTag = $('meta[name="affId"]');
        if (affIdMetaTag.length === 0) {
            $('head').append('<meta name="affId" content="">');
            affIdMetaTag = $('meta[name="affId"]');
        }
        affIdMetaTag.attr('content', aff_id);
        if ($('form#loginForm').length) {
            $('form#loginForm').append('<input type="hidden" name="aff_id" value="' + aff_id + '">');
        }
        if ($('form#registerForm').length) {
            $('form#registerForm').append('<input type="hidden" name="aff_id" value="' + aff_id + '">');
        }
    }
});
/*
* Page DangKy
* */
jQuery(document).ready(function ($) {
    $(".c-dangky-form .fa-eye").on("click", (function (e) {
            const inputEl = $(this).closest('.form-group').find('input');
            $(this).hasClass("fa-eye-slash") ? ($(this).removeClass("fa-eye-slash"),
                inputEl.attr("type", "password")) : ($(this).addClass("fa-eye-slash"),
                inputEl.attr("type", "text"))
        }
    ));
    $.validator.addMethod("regex", (function (n, e, t) {
            var r = new RegExp(t);
            return this.optional(e) || r.test(n)
        }
    ), ""), onRegFrmSubmit(), onLoginFrmSubmit();
});
var onRegFrmSubmit = function () {
    jQuery("#registerForm").validate({
        rules: {
            username: {
                required: !0,
                regex: /^[A-Za-z0-9]*$/g,
                minlength: 6,
                maxlength: 15
            },
            password: {
                required: !0,
                minlength: 6,
                maxlength: 39,
                regex: /^[A-Za-z0-9-`~!@#$%^&*()\-_+={}\[\]|\\;:,<.>/?]{6,39}$/gim
            },
            repeat_pwd: {
                required: !0,
                equalTo: "#pwd"
            }
        },
        messages: {
            username: {
                required: "Vui lòng nhập tên đăng nhập",
                regex: "Tên đăng nhập không hợp lệ",
                minlength: "Tên đăng nhập tối thiểu 6 ký tự",
                maxlength: "Tên đăng nhập tối đa 15 ký tự"
            },
            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự",
                maxlength: "Mật khẩu tối đa 39 ký tự",
                regex: "Mật khẩu không hợp lệ"
            },
            repeat_pwd: {
                required: "Vui lòng nhập mật khẩu",
                equalTo: "Nhập lại mật khẩu không đúng"
            }
        },
        errorElement: "div",
        errorPlacement: function (n, e) {
            n.addClass("errors"),
                "checkbox" === e.prop("type") ? n.insertAfter(e.parent("label")) : n.insertAfter(e)
        },
        highlight: function (n, e, t) {
        },
        unhighlight: function (n, e, t) {
        },
        showErrors: function (n, e) {
            this.defaultShowErrors()
        },
        submitHandler: function (n) {
            return onRegister(),
                !1
        }
    })
}
var conf = {
    "wg": "sky88b.com",
};
// var aff_id = 'GO88K';
var onRegister = function () {
    var $ = jQuery;
    $.ajax({
        url: "/wp-json/wp/v2/user-register",
        type: "POST",
        data: $("#registerForm").serialize(),
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr("content"));
            $('#alert-modal h4').html('Loading..');
            $('#alert-modal p').html('');
            $('[href="#alert-modal"]').click();
        },
        dataType: "json",
        success: function (e, t) {
            window.location.href = "https://" + conf.wg + "?token=" + e.data.token + "&a=" + aff_id;
        },
        error: function (e, t, n) {
            $('#alert-modal').append(`<button type="button" class="mfp-close"></button>`);
            $('#alert-modal h4').html('Thông báo');
            $('#alert-modal p').html(e?.responseJSON?.message);
            $('[href="#alert-modal"]').click();
        }
    });
}
/*
* Page DangNhap
* */

var onLoginFrmSubmit = function () {
    var $ = jQuery;
    $("#loginForm").validate({
        rules: {
            username: {
                required: !0,
                minlength: 6,
                maxlength: 15,
                regex: /^[A-z0-9-]*$/g
            },
            password: {
                required: !0,
                minlength: 6,
                maxlength: 39,
                regex: /^[A-Za-z0-9-`~!@#$%^&*()\-_+={}\[\]|\\;:,<.>/?]{6,39}$/gim
            }
        },
        messages: {
            username: {
                required: "Vui lòng nhập tên đăng nhập",
                minlength: "Tên đăng nhập từ 6 ký tự trở lên",
                maxlength: "Tên đăng nhập tối đa 15 ký tự",
                regex: "Tên đăng nhập không hợp lệ"
            },
            password: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự",
                maxlength: "Mật khẩu tối đa 39 ký tự",
                regex: "Mật khẩu không hợp lệ"
            }
        },
        errorElement: "div",
        errorPlacement: function (n, e) {
            n.addClass("errors"),
                "checkbox" === e.prop("type") ? n.insertAfter(e.parent("label")) : n.insertAfter(e)
        },
        highlight: function (n, e, t) {
        },
        unhighlight: function (n, e, t) {
        },
        showErrors: function (n, e) {
            this.defaultShowErrors()
        },
        submitHandler: function (n) {
            return onLogin(),
                !1
        }
    })
}
var onLogin = function () {
    var $ = jQuery;
    $.ajax({
        url: "/wp-json/wp/v2/user-login",
        type: "POST",
        data: $("#loginForm").serialize(),
        beforeSend: function (xhr) {
            $('#alert-modal h4').html('Loading..');
            $('#alert-modal p').html('');
            $('[href="#alert-modal"]').click();
        },
        dataType: "json",
        success: function (e, t) {
            window.location.href = "https://" + conf.wg + "?sessionid=" + e.data[0].session_id + "&a=" + aff_id;
        },
        error: function (e, t, n) {
            console.log('e, t, n', {e, t, n})
            $('#alert-modal').append(`<button type="button" class="mfp-close"></button>`);
            $('#alert-modal h4').html('Thông báo');
            $('#alert-modal p').html(e?.responseJSON?.message);
            $('[href="#alert-modal"]').click();
        }
    });
}