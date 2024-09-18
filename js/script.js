// start Object System
const System ={

 counters : document.querySelectorAll('.count'),
 scrolling : document.getElementById("scroll"),
 icon : document.getElementById("icon"),
  targets : [400, 600, 100],

  cheak:()=>{
    if(window.scrollY > 0){
      System.icon.classList.remove('fa-arrow-down')
      System.icon.classList.add('fa-arrow-up')

    }else{
      System.icon.classList.remove('fa-arrow-up')
      System.icon.classList.add('fa-arrow-down')
     
    }
  },
 
  updateCounters:  ()=>{
    System.counters.forEach((counter, index) => {
      const currentCount = parseInt(counter.innerHTML);
  
      if (currentCount < System.targets[index]) {
        counter.innerHTML = currentCount + 1;
      }
    })
  },

  scrollingFunction: ()=>{
    window.pageYOffset  < 10 ?  window.scrollTo({ top: 10000 }) :window.scrollTo({ top: 0 })
  }


}

// End Object System


setInterval(()=>{
    System.updateCounters()
}, 10);


window.onscroll = ()=>{
  System.cheak()
}


System.scrolling.onclick = ()=>{
  System.scrollingFunction()
}

 