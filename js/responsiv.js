$(function (){
    $('header .nav_bar .nav_bar_item').mouseover(function (){
        $('header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
        $(this).find('> div > .sub_menu').show();
    });
    
    $('header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div').mouseover(function (){
        $('header .nav_bar .nav_bar_item .sub_menu .sub_menu_item > div > .sub_menu:visible').hide();
       $(this).find('> .sub_menu').show();
    });
    
    
     isNavBarHidden = true;
    $('body > header .menu_icon img').click(function (){
         if(isNavBarHidden){
             $('body > header .nav_bar').fadeIn("slow");
             isNavBarHidden = false;
         }
         else{
             $('body > header .nav_bar').fadeOut("slow");
             isNavBarHidden = true;
         }
    });
});