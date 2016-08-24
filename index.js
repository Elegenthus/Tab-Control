//  var tabs = document.getElementsByClassName('tab'),
//     box = document.getElementById('table'),
//     table = box.getElementsByTagName('div');
// for(let i = 0; i < tabs.length ; i++){
//     tabs[i].addEventListener("click",function(){
//       select(i);
//     });
//   }
//     function select(n){
//       for(var i = 0; i < tabs.length ; i++){
//          if(i == n){
//           tabs[i].className = "tab currenttab";
//           table[i].style.display = "table-cell";
//         }
//         else{
//           tabs[i].className = "tab";
//           table[i].style.display = "none";
//         }
//       }     
//     }
//     select(0);
//     
// 上为用let解决js变量提升方案，但在Safari中由于不支持let所以不可行，
// 
// 下为将类数组转化成数组的方案，在Safari中亦可行
//    
//     
 var tabs = document.getElementsByClassName('tab'),
    box = document.getElementById('table'),
    table = box.getElementsByTagName('div');
    tabs = Array.prototype.slice.call(tabs);
     tabs.forEach(function(tab, i) {
      tab.addEventListener("click", function() { select(i); });
    });
    function select(n){
      tabs.forEach(function(tab,i){
         if(i == n){
          tab.className = "tab currenttab";
          table[i].style.display = "table-cell";
        }
        else{
          tab.className = "tab";
          table[i].style.display = "none";
        }
      });     
    }
select(0);














