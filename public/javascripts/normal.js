/**
 * Created by HJ on 2017/11/24.
 */
requirejs(["https://code.jquery.com/jquery-1.9.1.min.js", "/javascripts/multifunction.js"], function(){
    var oWidth = $(window).width();
    if(oWidth <= 1280){
        plugs.midMenu();
    }
});