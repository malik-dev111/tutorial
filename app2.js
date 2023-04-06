const data = [
  'Sveji-3.00 azn',
  'Pendir-3.00 azn',
  'Turşu-3.00 azn',
  'Süzmə-2.00 azn',
  'Acika-2.00 azn',
  'Nar turşusu-1.00 azn',
  'Limon-1.00 azn',
  'Zeytun-3.00 azn',
  'Manqal salatı-3.00 azn',
  'Turşu-3.00 azn',
  'Süzmə-2.00 azn',
  'Paytaxt salatı-3.00 azn',
  'Antrikod-7.00 azn      ',
  'Tikə-6.00 azn          ',
  'Lülə-6.00 azn          ',
  'Basdırma-6.00 azn      ',
  'Toyuq-4.00 azn         ',
  'içalat-5.00 azn        ',
  'Xan kababı-5.00 azn    ',
  'Kartof Lülə-2.00 azn   ',
  'Tərəvəzlər-0.5/1.00 azn',
  'Kartof quyuruq-4.00 azn',
  'Çolpa setka-12.00 azn  ',
  'Antrikod dana-10.00 azn',
  'Saç(quzu əti)-8.00 azn       ',
  'Saç(mal əti)-8.00 azn        ',
  'Saç(kənd çolpası)-16.00 azn  ',
  'Saç(qarışıq)-7.00 azn        ',
  'Saç(içalat)-7.00 azn         ',
  'Saç(toyuq)-17.00 azn         ',
  'Quzu qovurma -7.00 azn       ',
  'Dana qovurma -8.00 azn       ',
  'Kənd çolpa qovurma -15.00 azn',
  'İçalat qovurma-6.00 azn      ',
  'Kənd çolpa çığırtma-15.00 azn',
  ]
  
  let inpt = document.querySelector("#searhInpt");
  let list = document.querySelector("#list");
  
  inpt.addEventListener('input',()=>{
      let link = document.querySelectorAll("li");
      link.forEach((item) => {
        item.remove()
      })
      let filteredData = data.filter(word=> word.toLowerCase().includes(inpt.value.toLowerCase()))
      filteredData.forEach((item) => {
        const newLi = document.createElement("li");
        newLi.innerText = item;
        list.appendChild(newLi)
      });   
      
      if(inpt.value.length==0){
          let link = document.querySelectorAll("li");
           link.forEach((item) => {
             item.remove();
           });  
      }
  })
  