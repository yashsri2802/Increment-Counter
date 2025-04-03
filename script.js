const counters = document.querySelectorAll('.counter');   //All:for multiple counter class
counters.forEach((counter) => {
    counter.innerHTML = 0;   //initial value
    const updateCounter = () => {
        const targeCount = +counter.getAttribute('data-target');   //to get the value of data-target    data obtained is in string from,convert to number using unary operator(+)
        const startingCount = Number(counter.innerHTML);   //convert to number
        const incr = targeCount/100;   //get diff of 100 while incrementing
        
        if(startingCount<targeCount){
            counter.innerHTML=`${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHTML = targeCount;
        }
        
    }
    updateCounter();
})