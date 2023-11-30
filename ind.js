const input=document.querySelector('input')
const ol=document.querySelector('ol')
const img=document.querySelector('img')

const country=/996/ig
const country2=/7/ig
const country3=/994/ig
const country4=/998/ig
const country5=/995/ig

input.onchange=()=>{
    if(country.test(input.value)){
        ol.innerHTML=input.value.replace(country, 'Кыргызстан')
        img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/250px-Flag_of_Kyrgyzstan.svg.png'
    } else if(country2.test(input.value)){
        ol.innerHTML=input.value.replace(country2, 'Казахстан')
        img.src='https://img.freepik.com/premium-photo/flag-of-kazakhstan-as-the-background_454892-1282.jpg'
    } else if(country3.test(input.value)){
        ol.innerHTML=input.value.replace(country3, 'Aзербайджан')
        img.src='https://masterflag.ru/img/info-flagi/world/azer.png'
    } else if(country4.test(input.value)){
        ol.innerHTML=input.value.replace(country4, 'Узбекстан')
        img.src='https://masterflag.ru/img/info-flagi/world/uzbek.gif'
    } else if(country5.test(input.value)){
        ol.innerHTML=input.value.replace(country5, 'Грузия')
        img.src='https://flagof.ru/wp-content/uploads/2018/10/georgia-flag.gif'
    } 
    else{
        // ol.innerHTML=input.value 
    }
    input.value=''
}


