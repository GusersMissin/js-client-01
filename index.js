// ここにJavaScriptコードを書く
const tarea = document.getElementById('tarea');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const bin = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    let findtxt = input1.value;
    let reptxt = input2.value;
    // let tagtxt = tarea.value;
    let tagtxt = "吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。";

    findtxt = new RegExp(findtxt, 'g');
    tagtxt = tagtxt.replace(findtxt,reptxt);

    result.innerText = tagtxt;
})