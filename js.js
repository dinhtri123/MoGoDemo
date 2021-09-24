
///////click scroll top //////////
var btn_top = document.getElementById("scroll");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 150){
        btn_top.style.display = 'flex'
    }
    else{
        btn_top.style.display = 'none'
    }
    btn_top.addEventListener('click', function(){
        document.documentElement.scrollTop = '0'
    })
}
///////// show input search
var btn_search = document.getElementById("btn_search");
var btn_close = document.getElementById("btn_close");
var input_search = document.getElementById("input_search");

btn_search.addEventListener('click', function(){
    input_search.style.transform = "translateY(0%)";
    input_search.style.opacity = "1"
})


/// close input_search=------
btn_close.addEventListener('click', function(){
    input_search.style.transform = "translateY(-100%)";
    input_search.style.opacity = "0";
})

///click photographer/////
var btn_we = document.getElementById('btn_we');
var btn_we1 = document.getElementById('btn_we1');
var btn_we2 = document.getElementById('btn_we2');
var btn_we3 = document.getElementById('btn_we3');
var btn_we4 = document.getElementById('btn_we4');
var btn_we5 = document.getElementById('btn_we5');
var content = document.getElementById('content');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
var content4 = document.getElementById('content4');
var content5 = document.getElementById('content5');

btn_we.addEventListener('click', function(){
        if(content.style.maxHeight == '100px' ){
            content.style.maxHeight = '0px';
             content.style.margin = '0px';
        }
        else{
             content.style.maxHeight = "100px";
            content.style.margin = "15px 20px";
        }
})
btn_we1.addEventListener('click', function(){
    if(content1.style.maxHeight == '100px' ){
        content1.style.maxHeight = '0px';
         content1.style.margin = '0px';
    }
    else{
         content1.style.maxHeight = "100px";
        content1.style.margin = "15px 20px";
    }
})
btn_we2.addEventListener('click', function(){
    if(content2.style.maxHeight == '100px' ){
        content2.style.maxHeight = '0px';
         content2.style.margin = '0px';
    }
    else{
         content2.style.maxHeight = "100px";
        content2.style.margin = "15px 20px";
    }
})
btn_we3.addEventListener('click', function(){
if(content3.style.maxHeight == '100px' ){
    content3.style.maxHeight = '0px';
     content3.style.margin = '0px';
}
else{
     content3.style.maxHeight = "100px";
    content3.style.margin = "15px 20px";
}
})

btn_we4.addEventListener('click', function(){
    if(content4.style.maxHeight == '100px' ){
        content4.style.maxHeight = '0px';
         content4.style.margin = '0px';
    }
    else{
         content4.style.maxHeight = "100px";
        content4.style.margin = "15px 20px";
    }
})
btn_we5.addEventListener('click', function(){
if(content5.style.maxHeight == '100px' ){
    content5.style.maxHeight = '0px';
     content5.style.margin = '0px';
}
else{
     content5.style.maxHeight = "100px";
    content5.style.margin = "15px 20px";
}
})

///close menu
var close_menu = document.getElementById('menu_close');
var menu = document.getElementById('menu');

close_menu.addEventListener('click', function(){
    // menu.style.transform = "translateX(0%)"
    menu.style.right = "-50%"
})

/// menu toggle 

var btn_menu = document.getElementById('btn_menu');
btn_menu.addEventListener('click', function(){
        // menu.style.transform = 'translateX(100%)';
        menu.style.right = '0%';
})


