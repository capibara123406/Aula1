const aa = document.getElementById('a');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const Saida = document.getElementById('rst');

btn1.onclick = function () {
    const Geral = 160;

    const a = aa.value;

    if (a === 's') {
        
        const Total = (Geral * 1.20);
        const conv = Geral - Total;

        Saida.textContent = 'Total: ' + conv;

    } else {
        Saida.textContent = 'Total: ' + Geral;
    }
}

btn2.onclick = function () {
    const Especialista = 240;

    const b = a.value;

    if (b === 's') {
        const bev = Especialista * 1.33;

        const rst = Especialista - bev;

        Saida.textContent = 'Total: ' + rst;
    } else {
        Saida.textContent = 'Total: ' + Especialista;
    }
}