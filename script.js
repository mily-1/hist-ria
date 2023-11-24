let nomeEnable = document.getElementById("nomeEnable")
let perguntaJogar = document.getElementById("perguntaJogar")
let jogPerg = document.getElementById("jogPerg")

function funcaoNome (){
    
    document.getElementById("formNome").style.display= "none"
    let nameExample = document.getElementById("name-example").value;
    nomeEnable.innerHTML = `<p>Olá <b>${nameExample}</b></p>`
    document.getElementById("jogar").style.display="block"
    
    
}
function funcaoNao (){
document.getElementById("nomeEnable") .style.display="none"
document.getElementById("jogar") .style.display="none"
alert("Até logo!!!")

}

function funcaoSim (){
    document.getElementById("priPergunta").style.color="black"
    document.getElementById("segPergunta").style.color="black"
    document.getElementById("terPergunta").style.color="black"
    document.getElementById("quaPergunta").style.color="black"
    document.getElementById("quiPergunta").style.color="black"
    document.getElementById("sexPergunta").style.color="black"
    document.getElementById("setPergunta").style.color="black"
    document.getElementById("oitPergunta").style.color="black"
    document.getElementById("nonPergunta").style.color="black"
    document.getElementById("decPergunta").style.color="black"
    //document.getElementsByName("resposta").style.color="black"
    document.getElementById("checkbox0").style.color="black"
    document.getElementById("checkbox1").style.color="black"
    document.getElementById("checkbox2").style.color="black"
    document.getElementById("checkbox3").style.color="black"
    document.getElementById("jogar").style.display="none"
    document.getElementById("questionario").style.display="block"
    document.getElementById("resultado").style.display="none"
}
function Primeira ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function segunda ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function terceira ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function quarta ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function quinta ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function sexta ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function setima ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function oitava ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function nona ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function decima ()
{   let respostasCorretas = 0
    let terPergunta = document.getElementById("terPergunta")
    
    if(terPergunta.resposta[0].checked)
    {
    document.getElementById("checkbox0").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox0").style.color="red"
    
    if(terPergunta.resposta[1].checked)
    document.getElementById("checkbox1").style.color="red"
    else
    {
    document.getElementById("checkbox1").style.color="green"
    respostasCorretas += 0.25
    }
    if(terPergunta.resposta[2].checked)
    {
    document.getElementById("checkbox2").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox2").style.color="red"
    
    if(terPergunta.resposta[3].checked)
    {
    document.getElementById("checkbox3").style.color="green"
    respostasCorretas += 0.25
    }
    else
    document.getElementById("checkbox3").style.color="red"

    return respostasCorretas
}
function funcaoRespostas (){ 
    total = Primeira()+segunda()+terceira()+quarta()+quinta()+sexta()+setima()+oitava()+nona()+decima()+decima1()+decima2()+decima3()+decima4()+decima5() 
    total *=(100/10).toFixed()
let resultado = document.getElementById("resultado")
document.getElementById("resultado").style.display="block"
document.getElementById("resultado").style.fontSize ="30px"
resultado.innerHTML += `<b>${total.toFixed()}%</b>`
jogPerg.innerHTML = (`Gostaria de repetir?`)
//document.getElementsByName("resposta").setAttribute('readOnly',true)
funcaoNome();
}


