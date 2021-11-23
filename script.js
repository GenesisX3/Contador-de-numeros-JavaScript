function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar'
        //window.alert('[ERRO] Faltam dados')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Num vai dar não')
        }
        let c = i

        if(i < f){
            for(c; c<= f; c+= p){
                res.innerHTML += `${c} \u{1F812} `
            }
             
        }else {
            for(c; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F812}`
            }
        }
        res.innerHTML += `\u{1F633}`
    }
}