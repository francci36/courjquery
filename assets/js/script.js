$(document).ready(function(){
    // On mets à jour le titre
    $('#title').text(params.title);
    // Au clic sur une case
    $('.day').on('click',function(event){
        // On récupère l'élement
        let element = $(event.target);
        // On récupère la date du jour
        let date = new Date();
        let today_day = date.getDate();
        let today_month = date.getMonth();

        // On récupère ensuite le jour de la case
        let day_request = Number(element.text());
        // On récupère le mois renseigné dans les paramètres
        let month_request = params.month;

        // On vérifie que le mois et le jour correspondent
        let show_day = false;
        if(today_month != month_request) {
            show_day = true;
        } else {
            if(day_request == today_day) {
                show_day = true;
            }
        }
        // Affichage des modals
        if(show_day) {
            // On charge le cadeau
            let aleatoire = Math.floor((Math.random()*25));
            $.get(params.data_folder+aleatoire+".html",function(data){
                // On met à jour notre modal avec le code HTML
                $('.day-content').html(data);
                if(day_request == 25){
                    let son4 = document.createElement('audio');
                    son4.src="assets/son/papanoel.mp3";
                    son4.play();
                }
                else{
                    let son3 = document.createElement('audio');
                    son3.src="assets/son/ouverture.mp3";
                    son3.play();
                }
                
                // On ouvre la modal
                $('#day-modal').modal({
                    size:'large',
                    fadeDuration:200,
                    fadeDelay: 0.30
                });
            },'text');
        } else {
            // Si on sélectionne un jour déjà passé
            if(day_request < today_day) {
                let son1 = document.createElement('audio');
                son1.src="assets/son/fermeture2.mp3";
                son1.play();
                $('#passed-day-modal').modal({
                    fadeDuration: 200
                });
            }
            else{
                let son2 = document.createElement('audio');
                son2.src="assets/son/fermeture1.mp3";
                son2.play();
                $('#no-day-modal').modal({
                    fadeDuration: 200
                });
            }
            
        }
    });
});
function papaNoel(){
    let papa = document.getElementById('papanoel');
    let position_top = Math.floor((Math.random()*500));
    let position_bottom = Math.floor((Math.random()*600));
    papa.style.top = position_top+'px';
    papa.style.left = position_bottom+'px';
    console.log(position_top);
    //$('#papanoel').css('top',position_top);
    let bouger = setTimeout("papaNoel()",1000);
}
papaNoel();
