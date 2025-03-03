const completeBtn=document.querySelectorAll('.complete-btn');
 const incrimentId=document.getElementById('incriment-id');
 let convertIncrimentId=parseInt(incrimentId.innerText); 
 const decrimentId=document.getElementById('decriment-id');
 let convertDecrimentId=parseInt(decrimentId.innerText);
 const activityList=document.getElementById('activity-list');
let countButton=0;
    document.getElementById('clear-history-btn').addEventListener('click',function(){
        activityList.innerHTML=``

    })


    completeBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
    countButton++;
    alert('board updated successfully');

    convertIncrimentId++
    incrimentId.innerText=convertIncrimentId
    convertDecrimentId--
    decrimentId.innerText=convertDecrimentId
    btn.disabled=true;
    btn.classList.remove('bg-[#3752FD]','hover:bg-[#3752FD]');
    btn.classList.add('bg-[#3752FD]','opacity-30')
    const taskText=btn.closest('.rounded-lg').querySelector('.title').innerText;
    const p =document.createElement('p');
    p.classList.add('text-[10px]','bg-[#F4F7FF]','p-2','rounded-md','my-2');
    p.innerText=`You have Complete The ${taskText} at ${new Date().toLocaleTimeString()}`
    activityList.appendChild(p);
    if(countButton===6){
        alert('Congrats You Have Completed All Task!')
    }
    })
})