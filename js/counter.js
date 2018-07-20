/*
    Codigo fonte base retirado do post do imasters
    link: https://forum.imasters.com.br/topic/414682-resolvido%C2%A0contagem-regressiva-c-data-do-servidor/
    
*/

function atualizaContador() 
{  
    var hoje = new Date();  
    var dataFim = new Date(2018,11,19);

    var ss = parseInt((dataFim - hoje) / 1000);  
    var mm = parseInt(ss / 60);  
    var hh = parseInt(mm / 60);  
    var dd = parseInt(hh / 24);   
    ss = ss - (mm * 60);  
    mm = mm - (hh * 60);  
    hh = hh - (dd * 24);   
    
    var dias = '';  
    var horas = '';
    var minutos = '';
    var segundos = '';
    var porcentagem = '';

    dias = (dd && dd > 1) ? dd +' dias, ' : (dd==1 ? '1 dia, ' : '');  
    horas = (toString(hh).length) ? hh+' hora(s), ' : '';  
    minutos = (toString(mm).length) ? mm+' min e ' : '';  
    segundos = ss+' seg';

    porcentagem = (dd / 280) * 100;
    
    if (dd+hh+mm+ss > 0) 
    {
        document.getElementById('dias').innerHTML = dias;	
        document.getElementById('hora').innerHTML = horas;	
        document.getElementById('minuto').innerHTML = minutos;	
        document.getElementById('segundo').innerHTML = segundos;
        document.getElementById("progressBar").style.width = porcentagem+'%';
        document.getElementById("span-value").textContent = parseFloat(porcentagem.toFixed(2))+'%';
        setTimeout(atualizaContador,1000);  
    }
} 
