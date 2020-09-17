(() => {
    function HiddenReveal(Elements) {
        Elements.forEach((elem, index) => {
            if ((elem.getBoundingClientRect().y < 0 && elem.getBoundingClientRect().y + elem.getBoundingClientRect().height < 0) || elem.getBoundingClientRect().y > window.innerHeight){
                elem.classList.remove("Reveal");
                elem.classList.add("Hidden");
            } else {
                elem.classList.remove("Hidden");
                elem.classList.add("textReveal");
            }
        });
    }
    function App() {
        const instruction = document.querySelector(".instruction");
        const texts = Array.prototype.slice.call(document.getElementsByClassName("Hidden"));
        const images = Array.prototype.slice.call(document.querySelectorAll("img"));
        window.addEventListener("scroll", function() {
            HiddenReveal(texts);
            HiddenReveal(images);
            if (window.scrollY > 100) {
                instruction.style.display = "none";
            } 
        });
    }
    App();
})();