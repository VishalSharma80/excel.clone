

$(document).ready(function (){
    let cellcontainer =$(".Input-cell-container");
    
        for(let i = 1 ; i < 100 ;i++){
    
    
        let ans = "";
    
        let n = i;
        
        while(n>0){
            let rem = n % 26; 
            if(rem == 0){
                ans = "Z" + ans;
                n = Math.floor(n/26-1);
                console.log(n);
        
            }else {
                ans = String.fromCharCode(rem-1+65) + ans;
                n = Math.floor(n/26);
            
        
            }
        
        }
    
    
        let column =$(`<div class="column-name" id ="colCod-${ans} colid-${i}">${ans}</div>`)
    $(".column-name-container").append(column);
    }});
