const spinner = document.getElementById("loading-spinner");

function showLoading() {
    spinner.classList.add("show");
}

function hideLoading() {
    spinner.classList.remove("show");
}