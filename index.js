//法一：用立即执行的函数（IIFE）解决变量提升问题
var tabs = document.getElementsByClassName('tab'),
    box = document.getElementById('table'),
    table = box.getElementsByTagName('div');
for(var i = 0; i < tabs.length ; i++){
    (function(){
      var that = i;
      tabs[that].addEventListener("click",function(){
        select(that);
      });
    })(i);
  }
function select(n){
      for(var i = 0; i < tabs.length ; i++){
         if(i == n){
          tabs[i].className = "tab currenttab";
          table[i].style.display = "table-cell";
        }
        else{
          tabs[i].className = "tab";
          table[i].style.display = "none";
        }
      }     
};
select(0);
    
// 
// 法二：下为将类数组转化成数组的方案
//    
//     
//  var tabs = document.getElementsByClassName('tab'),
//     box = document.getElementById('table'),
//     table = box.getElementsByTagName('div');
//     tabs = Array.prototype.slice.call(tabs);
//      tabs.forEach(function(tab, i) {
//       tab.addEventListener("click", function() { select(i); });
//     });
//     function select(n){
//       tabs.forEach(function(tab,i){
//          if(i == n){
//           tab.className = "tab currenttab";
//           table[i].style.display = "table-cell";
//         }
//         else{
//           tab.className = "tab";
//           table[i].style.display = "none";
//         }
//       });     
//     }
// select(0);