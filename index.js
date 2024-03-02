const container=document.querySelector('.container')

container.addEventListener('submit',(event)=>{
    event.preventDefault()
    let decimal=0;
    let counter=0;
    const result=document.querySelector('.result')
    let binary=document.getElementById('binary').value;
    while(binary>0){
        let lastdigit=Math.round(binary%10);
        decimal+=Math.pow(2,counter)*lastdigit;
        counter++
        binary /=10
    }
    result.innerHTML=`Decimal Conversion: ${decimal}`
})