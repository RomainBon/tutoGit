'use strict'
function date_heure(id)
{
        let date = new Date;
        let annee = date.getFullYear();
        let moi = date.getMonth();
        let mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        let j = date.getDate();
        let jour = date.getDay();
        let jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        let h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        let m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        let s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        let ms = date.getMilliseconds();
        if(ms<10)
        {
                ms = "0"+ms;
        }
        let resultat = 'Nous sommes le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' il est '+h+':'+m+':'+s+':'+ms;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','100');
        return true;
}
