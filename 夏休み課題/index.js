const tem = document.getElementById('tem');
const hum = document.getElementById('hum');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    let t = tem.value;
    let h = hum.value;
    t = Number(t); h = Number(h);
    var DI = 0.81*t+0.0099*t*h-0.143*h+46.3;
    let bod;
    if(DI>=85)bod = "暑くてたまらない";
    else if(DI>=80)bod = "暑くて汗が出る";
    else if(DI>=75)bod = "やや暑い";
    else if(DI>=70)bod = "暑くない";
    else if(DI>=65)bod = "快い";
    else if(DI>=60)bod = "何も感じない";
    else if(DI>=55)bod = "肌寒い";
    else bod = "寒い";
    let text = "温度: "+String(t)+"℃\t湿度: "+String(h)+"%\n不快指数: "+String(DI)+"\n体感: "+bod;

    result.innerText = text;
})