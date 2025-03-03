function currentDate(){
    const week =document.getElementById('week');
    const currentDate=document.getElementById('current-date');
    const dates=new Date()
    const weekDay=dates.toLocaleDateString('en-US',{weekday:'short'})
    week.innerText=weekDay;
    const month=dates.toLocaleDateString('en-US',{month:'short'});
    const day=dates.getDate();
    const year=dates.getFullYear();
    currentDate.innerHTML=`<span>${month} ${day}, ${year}</span>`
}
currentDate();