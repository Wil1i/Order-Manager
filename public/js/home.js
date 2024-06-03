var rescrapBtn = document.getElementById("rescrap")
var autoUpdateBtn = document.getElementById("autoUpdate")

rescrapBtn.addEventListener("click", () => {
    axios.post("/rescrap")
    alert("درخواست ارسال شد. این فرآیند ممکن است چند دقیقه زمان ببرد.")
})

autoUpdateBtn.addEventListener("click", () => {
    const status = autoUpdateBtn.innerText.split(" ")[autoUpdateBtn.innerText.split(" ").length - 1]
    const newStatus = (status == "فعال") ? "غیرفعال" : "فعال"
    const ask = confirm(`آیا برای ${newStatus} کردن آپدیت اتومات قیمت ها در سایت اطمینان دارید؟`)
    if(ask){
        axios.post("/autoUpdate")
        autoUpdateBtn.innerText = `آپدیت اتومات قیمت: ${newStatus}`
        alert(`آپدیت اتومات با موفقیت ${newStatus} شد`)
    }
})