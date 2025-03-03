
function bgRandomClr(){
    const clrCode='0123456789ABCDEF';
    let clr='#';
    
    for(let i=0;i<6;i++){
        clr+=clrCode[Math.floor(Math.random()*16)]
    }

    return clr;
}


document.getElementById('bg-clr-genarate-btn').addEventListener('click',function(){
   document.body.style.backgroundColor=bgRandomClr()
})