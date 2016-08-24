 var tabs = document.getElementsByClassName('tab'),
    box = document.getElementById('table'),
    table = box.getElementsByTagName('div');
for(let i = 0; i < tabs.length ; i++){
    tabs[i].addEventListener("click",function(){
      select(i);
    });
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
    }
    select(0);




