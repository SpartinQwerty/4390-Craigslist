document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".post-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // so the page wont reload

        const title = document.getElementById("title").value;
        const category = document.getElementById("category").value;
        const price = document.getElementById("price").value;
        const location = document.getElementById("location").value;
        const description = document.getElementById("description").value;

        if (!title || !price || !location) {
            alert("Please fill in all required fields.");
            return;
        }

        form.reset();
    });
});