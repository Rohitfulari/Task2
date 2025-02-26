function toggleBox(event) {
    const clickedBox = event.currentTarget.closest(".box2");
    if (!clickedBox) return;

    
    if (event.target.closest(".expanded-content")) {
        return;
    }

    
    document.querySelectorAll(".box2").forEach(box => {
        if (box !== clickedBox) {
            box.classList.remove("expanded");
            box.querySelector(".expanded-content").style.display = "none";
            box.querySelector(".radio").checked = false;
        }
    });

   
    const expandedContent = clickedBox.querySelector(".expanded-content");
    const radioButton = clickedBox.querySelector(".radio");

    clickedBox.classList.toggle("expanded");

    if (clickedBox.classList.contains("expanded")) {
        expandedContent.style.display = "block";
        radioButton.checked = true;
    } else {
        expandedContent.style.display = "none";
        radioButton.checked = false;
    }
}


document.querySelectorAll(".top-section").forEach(section => {
    section.addEventListener("click", toggleBox);
});
