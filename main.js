const resumeButton = document.querySelector(".resume")
const githubButton = document.querySelector(".github")
const achievementsButton = document.querySelector(".achievements")

resumeButton.addEventListener("click", () => {
    window.location.href = "http://localhost:5500/views/resume.html"
})

githubButton.addEventListener("click", () => {

    window.location.href = "https://github.com/PatAll1305"
})

achievementsButton.addEventListener("click", () => {
    window.location.href = "http://localhost:5500/views/achievements.html"
}) 