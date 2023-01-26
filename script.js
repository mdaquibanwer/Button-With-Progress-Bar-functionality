const button = document.querySelector(".button");
const btnText = document.querySelector(".text");

button.addEventListener("click",()=>{
    button.classList.add("progress");
    btnText.innerHTML = "Uploading..."
    setTimeout(() => {
        button.classList.remove("progress");
        btnText.innerHTML = "Uploaded successfully"
        setTimeout(() => {
            btnText.innerHTML = "Upload File"
            alert("Uploaded successfully")
        }, 2000);
    }, 5000);
})