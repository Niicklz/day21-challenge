const cuadros = document.querySelectorAll(
  "[data-cuadro]"
)! as NodeListOf<HTMLDivElement>;

const imagen = document.getElementById("imagen")! as HTMLDivElement;

let dragElement: HTMLElement;

let lastTarget: HTMLElement;

imagen.addEventListener("dragstart", (e) => {
 
  const target = e.target as HTMLElement;
  dragElement = target;
  const parent = target.parentNode as HTMLElement
  if(parent) lastTarget = parent
  

  
});

imagen.addEventListener("dragend", ()=> {
  setTimeout(()=> {
    imagen.classList.add("imagen");
    imagen.classList.remove("hidden");
  },50)
  
})

imagen.addEventListener("drag", ()=> {
  imagen.classList.remove("imagen")
  imagen.classList.add("hidden")
  
})
imagen.addEventListener("dragover",()=> {
  imagen.classList.add("imagen")
  imagen.classList.remove("hidden")
})

cuadros.forEach((cuadro) => {

  
  cuadro.addEventListener("dragover", (e) => {
    e.preventDefault();
    const target = e.target as HTMLElement
    if(target) lastTarget = target

    
  });
  cuadro.addEventListener("dragenter", () => {
    
   
    
  
    cuadros.forEach((cuadro) => cuadro.classList.remove("hover"));
    cuadro.classList.add("hover");
  
  });
  cuadro.addEventListener("dragleave", () => {
    
    cuadro.classList.remove("hover");
  });
  cuadro.addEventListener("drop", (e) => {
    e.preventDefault();
  
    const target = e.target as HTMLElement;
  
    if (dragElement !== target && !target.contains(dragElement)) {
      if (target.className.includes("cuadro")) {
        target.appendChild(dragElement);
      } else {
        lastTarget.appendChild(dragElement);
        
      }
  
      target.classList.remove("hover");
      imagen.classList.add("imagen");
      imagen.classList.remove("hidden");
    }
  });
});



