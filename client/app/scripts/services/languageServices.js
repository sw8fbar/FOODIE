/**
 * Created by ajay on 10/1/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.service('LanguageService', [ function () {
        var uiLabels = {
            LangIndex: [
              {id: 'DE', label: 'Deutsch'},
              {id: 'EN', label: 'English'},
              {id: 'FR', label: 'Français'},
              {id: 'IT', label: 'Italiano'},
              {id: 'PR', label: 'Português'},
              {id: 'SP', label: 'Español'}
            ],
            menuSections: [
              {id: 'DE', label: 'Menü-Abschnitte'},
              {id: 'EN', label: 'Menu Sections'},
              {id: 'FR', label: 'Menu Sections'},
              {id: 'IT', label: 'Sezioni del menu'},
              {id: 'PR', label: 'Secções do menu'},
              {id: 'SP', label: 'Menu Secciones'}
            ],
            menu: [
              {id: 'DE', label: 'Menü'},
              {id: 'EN', label: 'Menu'},
              {id: 'FR', label: 'Menu'},
              {id: 'IT', label: 'Menu'},
              {id: 'PR', label: 'Menu'},
              {id: 'SP', label: 'Menu'}
            ],
            favorites: [
              {id: 'DE', label: 'Favoriten'},
              {id: 'EN', label: 'Favorites'},
              {id: 'FR', label: 'Favoris'},
              {id: 'IT', label: 'Preferiti'},
              {id: 'PR', label: 'Favoritos'},
              {id: 'SP', label: 'Favoritos'}
            ],
            cart: [
              {id: 'DE', label: 'Karren'},
              {id: 'EN', label: 'Cart'},
              {id: 'FR', label: 'Chariot'},
              {id: 'IT', label: 'Carrello'},
              {id: 'PR', label: 'Carrinho'},
              {id: 'SP', label: 'Carro'}
            ],
            changeLang: [
              {id: 'DE', label: 'Sprache ändern'},
              {id: 'EN', label: 'Change Language'},
              {id: 'FR', label: 'Changer de langue'},
              {id: 'IT', label: 'Cambia lingua'},
              {id: 'PR', label: 'Alterar Idioma'},
              {id: 'SP', label: 'Cambiar Idioma'}
            ],
            home: [
              {id: 'DE', label: 'Zuhause'},
              {id: 'EN', label: 'Home'},
              {id: 'FR', label: 'Maison'},
              {id: 'IT', label: 'Casa'},
              {id: 'PR', label: 'Início'},
              {id: 'SP', label: 'Inicio'}
            ],
            specials: [
                {id: 'PR', label: 'Especiais'},
                {id: 'EN', label: 'Specials'},
                {id: 'SP', label: 'Especiales'},
                {id: 'DE', label: 'Specials'},
                {id: 'FR', label: 'Promotions'},
                {id: 'IT', label: 'Speciali'}
            ],
            yelpRatings: [
              {id: 'DE', label: 'Yelp Bewertungen'},
              {id: 'EN', label: 'Yelp Ratings'},
              {id: 'FR', label: 'Yelp évaluations'},
              {id: 'IT', label: 'Yelp avaliações'},
              {id: 'PR', label: 'Yelp avaliações'},
              {id: 'SP', label: 'Yelp Clasificaciones'}
            ],
            grandTotal: [
              {id: 'DE', label: 'BESTELLEN TOTAL'},
              {id: 'EN', label: 'ORDER TOTAL'},
              {id: 'FR', label: 'TOTAL COMMANDE'},
              {id: 'IT', label: 'TOTALE ORDINE'},
              {id: 'PR', label: 'TOTAL DA ENCOMENDA'},
              {id: 'SP', label: 'TOTAL DEL PEDIDO'}
            ],
            allInclusive: [
              {id: 'DE', label: 'Anderen Gebühren und Trinkgeld ausgeschlossen'},
              {id: 'EN', label: 'Other charges and gratuity excluded'},
              {id: 'FR', label: 'Autres charges et pourboire exclus'},
              {id: 'IT', label: 'Altri oneri e mancia escluse'},
              {id: 'PR', label: 'Outros encargos e gratuidade excluídos'},
              {id: 'SP', label: 'Otros cargos y propinas excluidos'}
            ],
            addItems: [
              {id: 'DE', label: 'Fügen weitere Artikel'},
              {id: 'EN', label: 'Add more items'},
              {id: 'FR', label: 'Ajouter d\'autres articles'},
              {id: 'IT', label: 'Aggiungi altri articoli'},
              {id: 'PR', label: 'Adicionar mais itens'},
              {id: 'SP', label: 'Añadir más artículos'}
            ],
            sendOrder: [
              {id: 'DE', label: 'Send Order'},
              {id: 'EN', label: 'Send Order'},
              {id: 'FR', label: 'Envoyer order'},
              {id: 'IT', label: 'Invia ordine'},
              {id: 'PR', label: 'Enviar Order'},
              {id: 'SP', label: 'Enviar pedido'}
            ],
            skipToMenu: [
              {id: 'DE', label: 'Direkt zum Menü'},
              {id: 'EN', label: 'Skip to menu'},
              {id: 'FR', label: 'Aller au menu'},
              {id: 'IT', label: 'Salta al menu'},
              {id: 'PR', label: 'Saltar para o menu'},
              {id: 'SP', label: 'Ir al menú'}
            ]
        };

        var getLabels = function() {
            return uiLabels;
        }

        return {
            getLabels: getLabels
        };
    }]);

})();
