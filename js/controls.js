export function Controls() {
  const bodyChange = document.querySelector(".body")
  const linkHome = document.querySelector(".home")
  const linkUniverse = document.querySelector(".universe")
  const linkExploration = document.querySelector(".exploration")
  
  function homeStyle() {
    bodyChange.classList.add("bg-home")
    bodyChange.classList.remove("bg-exploration");
    bodyChange.classList.remove("bg-universe");
  
    linkHome.classList.add("focus")
    linkUniverse.classList.remove("focus");
    linkExploration.classList.remove("focus");
  }
  
  function universeStyle() {
    bodyChange.classList.add("bg-universe");
    bodyChange.classList.remove("bg-home");
    bodyChange.classList.remove("bg-exploration");
  
    linkUniverse.classList.add("focus");
    linkHome.classList.remove("focus");
    linkExploration.classList.remove("focus");
  }
  function explorationStyle() {
    bodyChange.classList.add("bg-exploration");
    bodyChange.classList.remove("bg-home");
    bodyChange.classList.remove("bg-universe");
  
    linkExploration.classList.add("focus");
    linkHome.classList.remove("focus");
    linkUniverse.classList.remove("focus");
  }

  return { homeStyle, universeStyle, explorationStyle };
}