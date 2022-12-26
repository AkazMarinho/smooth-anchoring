

const listAnchor = document.querySelectorAll(".anchor");

console.log(listAnchor.length);


function getScrollTopByHref(eleProject){

    const id = eleProject.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(toSection){

    window.scroll({
        top: toSection,
        behavior: "smooth"
    });
}

listAnchor.forEach( item => {

    item.addEventListener("click", (e) => {
        e.preventDefault();
    
        const toSection = getScrollTopByHref(e.target);
    
        scrollToPosition(toSection);
        
    });
})

