$(function(){
     // #intro Animation
     $(window).scroll(function() {    
          if($(window).scrollTop() <= 50){
               $('#intro_body').fadeOut(1500, function(){
                    $('#portfolio').css('display','block'),
                    scroll({ top: 0 });
                    $('#intro_body').remove();
               });    
          }else {
               $('#intro_body').fadeIn('slow');
             }
      });

      //mune+nav
      $('.menu').on("click", function(){
          let x = $('i').attr('class') == 'fas fa-bars';
          if(x){
               $('nav').css('left','0');
               $('i').attr('class', 'fas fa-times');
          } 
          else{
               $('nav').css('left','-150%');
               $('i').attr('class', 'fas fa-bars');
          }
      });

     //  works 
     var web = $('.works_inner');
     var graphic = $('.works_inner2');
     var inner = $('.works_in');
     console.log(inner);
     var btn = $('.works_type p');
     var btnAction = $('.btnAction');
     

     btn.on("click", function(){
          btn.removeClass("btnAction");
          $(this).addClass("btnAction");
          const index = btn.index(this);
          console.log(index);
          inner.removeClass("works_innerShow").eq(index).addClass("works_innerShow");
     });

     //fly
     $(window).scroll(function(){
          var contact = $('.worksIntro_detail');
          var contact_scroll = contact.offset().top;
          // console.log(contact_scroll);

          var window_scroll = $(this).scrollTop();
          // console.log(window_scroll);

          if(window_scroll >= contact_scroll + 51){
               $('.contact_anime').addClass('animeFly');
          }
     });

     
     // fly > toTop
     $('.contact_anime').on('click', function(){
          $("body,html").stop().animate({
			scrollTop:$($('.logo')).offset().top
		});
     });

});