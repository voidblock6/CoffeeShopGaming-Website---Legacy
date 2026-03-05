
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");

    if (btn) {
        // check preference
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }

       
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            //  store preference
            const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", mode);
            
            console.log("Thema is nu:", mode); // debug
        });
    } else {
        console.error("Theme Toggle not found!");
    }
})

