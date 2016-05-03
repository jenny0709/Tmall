/*
轮播图
*/
window.onload=function(){
   var imgs=getClass('bannerimgbox')[0].getElementsByTagName('a');
   var btns=getClass('btn')[0].getElementsByTagName('li');   
   var index=0;
   var t=setInterval(wheel,2000);
   function wheel(){
      index++;
      if(index>imgs.length-1){
         index=0;
      }
      for (var i = 0; i < imgs.length; i++) {
         imgs[i].style.zIndex="0";
         btns[i].style.background="#a2a2a2";
      };
      imgs[index].style.zIndex="99";
      btns[index].style.background="#f2f2f2";
   }
   for (var i = 0; i < btns.length; i++) {
      btns[i].index=i;
        btns[i].onclick=function(){
         for (var j = 0; j < imgs.length; j++) {
            imgs[j].style.zIndex="0";
            btns[j].style.background="#a2a2a2";
           };
           imgs[this.index].style.zIndex="99";
           btns[this.index].style.background="#f2f2f2";
        }
   };
   var box=getClass('banner')[0];
   box.onmouseover=function(){
         clearInterval(t);
   }
   box.onmouseout=function(){
         t=setInterval(wheel,2000);
   }

/*
选项卡效果
*/
var links=getClass('re-titleright')[0].getElementsByTagName('a');
var img2s=getClass('repaigoods-right');
   for (var i = 0; i < links.length; i++) {
      links[i].aa=i;
      links[i].onclick=function(){
         // console.log(this.aa)
         for (var j = 0; j < img2s .length; j++) {
            img2s[j].style.zIndex="1";
            links[j].style.color="#666";
            links[j].style.borderBottom="0";
            links[j].style.fontWeight="0";
         };
         img2s[this.aa].style.zIndex="99";
         links[this.aa].style.color="#2f2f2f";
         links[this.aa].style.borderBottom="2px solid #000";
         links[this.aa].style.fontWeight="700";
      }
   };   
}

