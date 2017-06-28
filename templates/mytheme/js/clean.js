(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter40705954 = new Ya.Metrika({ id:40705954, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");

window.onload = function() {yaCounter40705954.reachGoal('pageLoad');};

    var form = "#contact_form";
    var onSubmit = function(token) {
		formSubmit(form, token);
     }
     
jQuery(function($){
 

$('#sp-menu').liLanding({topMargin:50});

$('#modal_form form').prepend($('#modal_content').html());

$('.openmodal').click(function(){openPopup($(this)); return false;});
$('.show_form').click(function(){openModalForm();});
$('.vacancy').click(function(){openVacancy();});

// =========================================================================  contact_form
    //Функция проверяет заполнено ли поле с телефоном
	var phone = $('#header .form .phone input');
	var email = $('#header .form .email input');
	var phone2 = $('#modal_form .form .phone input');
	var email2 = $('#modal_form .form .email input');

   	phone.mask("0999 999-999"); phone2.mask("0999 999-999");
	//phone.change(function(){phoneValid(phone);}); 	phone2.change(function(){phoneValid(phone2);});
	//email.change(function(){onlineValid(email);});	email2.change(function(){onlineValid(email2);});

	function openVacancy() {
		$('#vacancy .sppb-container').arcticmodal({
		beforeOpen: function(data, el) {$('.body-innerwrapper, .parallax-mirror').addClass('blurblur');},
		afterClose: function(data, el) {$('.body-innerwrapper, .parallax-mirror').removeClass('blurblur');}
		});
	}
	function openModalForm(service) {
	$('input.service').val($('.sppb-pricing-title', service).html());
	$('#modal_form').arcticmodal({
		closeOnEsc: false,
		closeOnOverlayClick: false,
		beforeOpen: function(data, el) {
        $('.body-innerwrapper, .parallax-mirror').addClass('blurblur');
		$('<div id="modal_form_close">закрыть</div>').insertBefore('#modal_form');
		$('#modal_form_close').click(function() {$('#modal_form').arcticmodal("close");});
		},
		afterClose: function(data, el) {
          $('.body-innerwrapper, .parallax-mirror').removeClass('blurblur');
		$('#modal_form_close').remove();
		}
		});
	}
	function openPopup(service) {
	$('#popup_opened').arcticmodal({
      	overlay: {css:	{opacity: .3}},
		beforeOpen: function(data, el) {
        $('.body-innerwrapper, .parallax-mirror').addClass('blur');
        $("#popup_text").html($('.sppb-pricing-features ul', service).html());
          
        $("li", "#popup_text").replaceWith(function(index, oldHTML){
  			return $("<p>").html(oldHTML);
		});
  
        $("#popup_title").html($('.sppb-pricing-title', service).html());
		$('<div id="popup_close">&#10006;</div>').insertBefore('#popup_text');
		$('#popup_close').click(function() {$('#popup_opened').arcticmodal("close");});
		},
		afterClose: function(data, el) {
          $('.body-innerwrapper, .parallax-mirror').removeClass('blur');
		$('#popup_close').remove();
		}
		});
	}
});
 