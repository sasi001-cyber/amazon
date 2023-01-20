
//     const track=document.querySelector(".carosel__track")
// const slide=Array.from(track.children)
//     console.log(slide.length);
 


// const prebtn=document.querySelector(".prevbtn")
// const nxtbtn=document.querySelector(".nextbtn")

// let slidewidth=slide[0].getBoundingClientRect().width;
// slide.forEach((s,index)=>{
//     s.style.left=slidewidth*index+'px';
    
// })
// const moveToSlide=(track,curentslide,target)=>{
//   track.style.transform='translateX(-'+target.style.left+')'
//   curentslide.classList.remove("curent-slide")
//   target.classList.add("curent-slide")
// }
//  nxtbtn.addEventListener("click",()=>{
//   let  curentslide=track.querySelector(".curent-slide")

//    let  nxtslide=curentslide.nextElementSibling;
  
//      moveToSlide(track,curentslide,nxtslide)
//      alert("nxt")
// })
// prebtn.addEventListener("click",()=>{
//   let  curentslide=track.querySelector(".curent-slide")

//    let  preslide=curentslide.previousElementSibling;
// moveToSlide(track,curentslide,preslide)
// alert("pre")
// }
// )






const track=document.querySelector(".inside-container")
const slide=Array.from(track.children)
   


const prebtn=document.querySelector(".prevbtn")
const nxtbtn=document.querySelector(".nextbtn")

let slidewidth=slide[0].getBoundingClientRect().width;
console.log(slidewidth);
slide.forEach((s,index)=>{
    s.style.left=slidewidth*index+'px';
    
})
let sasi;
let a;
const moveToSlide=(curentslide,target)=>{
    slide.forEach((sasi,index)=>{
         
        sasi.style.transform='translateX(-'+target.style.left+')'
        curentslide.classList.remove("curent-slide")
        target.classList.add("curent-slide")
    
        
    })
   
    
}
nxtbtn.addEventListener("click",()=>{
let  curentslide=track.querySelector(".curent-slide")

let  nxtslide=curentslide.nextElementSibling;

 moveToSlide(curentslide,nxtslide)

})
prebtn.addEventListener("click",()=>{
let  curentslide=track.querySelector(".curent-slide")

let  preslide=curentslide.previousElementSibling;
moveToSlide(curentslide,preslide)

})


// // SMALL-IMAGE-SLIDER


// const track2=document.querySelector(".inside-container2")
// const slide2=Array.from(track2.children)
   
 


// const prebtn2=document.querySelector(".prevbtn-2")
// const nxtbtn2=document.querySelector(".nextbtn-2")

// let slidewidth2=slide2[0].getBoundingClientRect().width;
// slide2.forEach((s,index)=>{
//     s.style.left=slidewidth2*index+'px';
    
// })
// const moveToSlide2=(track2,curentslide2,target2)=>{
//     slide2.forEach((sasi2)=>{
        
//         sasi2.style.transform='translateX(-'+target2.style.left+')'
//         curentslide2.classList.remove("curent-slide-2")
//         target2.classList.add("curent-slide-2")
       
        
//     })
 
// }

// nxtbtn2.addEventListener("click",()=>{
// let  curentslide2=track2.querySelector(".curent-slide-2")
// console.log(curentslide2);
// let  nxtslide2=curentslide2.nextElementSibling;

//  moveToSlide2(track2,curentslide2,nxtslide2)

// })
// prebtn2.addEventListener("click",()=>{
// let  curentslide2=track2.querySelector(".curent-slide-2")

// let  preslide2=curentslide2.previousElementSibling;
// moveToSlide2(track2,curentslide2,preslide2)

// })
    
const track2=document.querySelector(".ul")
const slide2=Array.from(track2.children)
   
 
console.log(slide2);

const prebtn2=document.querySelector(".prevbtn-2")
const nxtbtn2=document.querySelector(".nextbtn-2")

let slidewidth2=slide2[0].getBoundingClientRect().width;
slide2.forEach((s,index)=>{
    s.style.left=slidewidth2*index+'px';
    
})
let sasi2;
const moveToSlide2=(curentslide2,target2)=>{
    slide2.forEach((sasi2)=>{
        
        sasi2.style.transform='translateX(-'+target2.style.left+')'
        curentslide2.classList.remove("curent-slide-2")
        target2.classList.add("curent-slide-2")
        console.log(slide2.length);
        
    })
 
}
nxtbtn2.addEventListener("click",()=>{
let  curentslide2=track2.querySelector(".curent-slide-2")

let  nxtslide2=curentslide2.nextElementSibling;

 moveToSlide2(curentslide2,nxtslide2)

})
prebtn2.addEventListener("click",()=>{
let  curentslide2=track2.querySelector(".curent-slide-2")

let  preslide2=curentslide2.previousElementSibling;
moveToSlide2(curentslide2,preslide2)

})



const track3=document.querySelector(".inside-container3")
const slide3=Array.from(track3.children)
   
 


const prebtn3=document.querySelector(".prevbtn-3")
const nxtbtn3=document.querySelector(".nextbtn-3")

let slidewidth3=slide3[0].getBoundingClientRect().width;
slide3.forEach((s,index)=>{
    s.style.left=slidewidth3*index+'px';
    
})
const moveToSlide3=(track3,curentslide3,target3)=>{
  track3.style.transform='translateX(-'+target3.style.left+')'
  curentslide3.classList.remove("curent-slide-3")
  target3.classList.add("curent-slide-3")
}
nxtbtn3.addEventListener("click",()=>{
let  curentslide3=track3.querySelector(".curent-slide-3")

let  nxtslide3=curentslide3.nextElementSibling;

 moveToSlide3(track3,curentslide3,nxtslide3)
 })
prebtn3.addEventListener("click",()=>{
let  curentslide3=track3.querySelector(".curent-slide-3")

let  preslide3=curentslide3.previousElementSibling;
moveToSlide3(track3,curentslide3,preslide3)
})
    











































































// const track2=document.querySelector(".carosel__track-2")
// const slide2=Array.from(track2.children)




// const prebtn2=document.querySelector(".prevbtn-2")
// const nxtbtn2=document.querySelector(".nextbtn-2")

// let slidewidth2=slide2[0].getBoundingClientRect().width;
// slide2.forEach((s,index)=>{
//     s.style.left=slidewidth2*index+'px';

// })
// const moveToSlide2=(track2,curentslide2,target2)=>{
//   track2.style.transform='translateX(-'+target2.style.left+')'
//   curentslide2.classList.remove("curent-slide-2")
//   target2.classList.add("curent-slide-2")
// }
// nxtbtn2.addEventListener("click",()=>{
// let  curentslide2=track2.querySelector(".curent-slide-2")

// let  nxtslide2=curentslide2.nextElementSibling;

//  moveToSlide2(track2,curentslide2,nxtslide2)

// })
// prebtn2.addEventListener("click",()=>{
// let  curentslide2=track2.querySelector(".curent-slide-2")

// let  preslide2=curentslide2.previousElementSibling;
// moveToSlide2(track2,curentslide2,preslide2)

// })



// const track3=document.querySelector(".carosel__track-3")
// const slide3=Array.from(track3.children)




// const prebtn3=document.querySelector(".prevbtn-3")
// const nxtbtn3=document.querySelector(".nextbtn-3")

// let slidewidth3=slide3[0].getBoundingClientRect().width;
// slide3.forEach((s,index)=>{
//     s.style.left=slidewidth3*index+'px';

// })
// const moveToSlide3=(track3,curentslide3,target3)=>{
//   track3.style.transform='translateX(-'+target3.style.left+')'
//   curentslide3.classList.remove("curent-slide-3")
//   target3.classList.add("curent-slide-3")
// }
// nxtbtn3.addEventListener("click",()=>{
// let  curentslide3=track3.querySelector(".curent-slide-3")

// let  nxtslide3=curentslide3.nextElementSibling;

//  moveToSlide3(track3,curentslide3,nxtslide3)
//  })
// prebtn3.addEventListener("click",()=>{
// let  curentslide3=track3.querySelector(".curent-slide-3")

// let  preslide3=curentslide3.previousElementSibling;
// moveToSlide3(track3,curentslide3,preslide3)
// })
