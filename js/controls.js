export function Controls() {
  const backgroundBody = document.querySelector(".body");
  const linkHome = document.querySelector(".buttonHome");
  const linkUniverse = document.querySelector(".buttonUniverse");
  const linkExploration = document.querySelector(".buttonExploration");
  
  function handleHome() {
    backgroundBody.classList.add("backgroundHome");
    backgroundBody.classList.remove("backgroundExploration");
    backgroundBody.classList.remove("backgroundUniverse");

    linkHome.classList.add("on")
    linkUniverse.classList.remove("on")
    linkExploration.classList.remove("on")
  };
  
  function handleUniverse() {
    backgroundBody.classList.add("backgroundUniverse");
    backgroundBody.classList.remove("backgroundExploration");
    backgroundBody.classList.remove("backgroundHome");

    linkUniverse.classList.add("on")
    linkExploration.classList.remove("on")
    linkHome.classList.remove("on")
  };
  
  function handleExploration() {
    backgroundBody.classList.add("backgroundExploration");
    backgroundBody.classList.remove("backgroundUniverse");
    backgroundBody.classList.remove("backgroundHome");

    linkExploration.classList.add("on")
    linkUniverse.classList.remove("on")
    linkHome.classList.remove("on")
  };

  return {
    handleHome,
    handleUniverse,
    handleExploration
  }
}