const cuadros = document.querySelectorAll(
  "[data-cuadro]"
)! as NodeListOf<HTMLDivElement>;

const imagen = document.getElementById("imagen")! as HTMLDivElement;

let dragElement: HTMLElement;

let lastTarget: HTMLElement;

imagen.addEventListener("dragstart", (e) => {
  const target = e.target as HTMLElement;
  dragElement = target;
  const parent = target.parentNode as HTMLElement;
  if (parent) lastTarget = parent;
});

imagen.addEventListener("dragend", () => {
  cuadros.forEach((cuadro) => {
    cuadro.classList.remove("empty");
    cuadro.classList.remove("hover");
  });
  imagen.style.left = "0";
});

cuadros.forEach((cuadro) => {
  cuadro.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  cuadro.addEventListener("dragenter", () => {
    imagen.style.left = "-3000%";
    cuadros.forEach((cuadro) => cuadro.classList.remove("hover"));
    cuadro.classList.add("hover");
    cuadro.classList.remove("empty");
  });
  cuadro.addEventListener("dragleave", () => {
    cuadro.classList.add("empty");
    cuadro.classList.remove("hover");
  });
  cuadro.addEventListener("drop", (e) => {
    e.preventDefault();
    
    const target = e.target as HTMLElement;
    if (target.className.includes("cuadro")) {
      target.appendChild(dragElement);
      target.classList.remove("hover");
    }
    imagen.style.left = "0";
  });
});
