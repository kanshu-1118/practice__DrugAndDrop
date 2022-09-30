const box = document.querySelector(".box")

// ドラッグした時の動きの関数
function drugAndDrop(ev) {
    box.style.left = `${ev.clientX - 50}px`
    box.style.top = `${ev.clientY - 50}px`
};

box.addEventListener("mousedown", (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    window.addEventListener("mousemove",drugAndDrop);
    // ここでマウスを離したときのイベント消去
    box.addEventListener("mouseup" ,() => {
        window.removeEventListener("mousemove",drugAndDrop);
    });
});
