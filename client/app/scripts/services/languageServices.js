/**
 * Created by ajay on 10/1/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.service('LanguageService', [ function () {
        var uiLabels = {
            menuSections: [
                {id: 1, label: 'Secções do menu'},
                {id: 2, label: 'Menu Sections'},
                {id: 3, label: 'Menu Secciones'},
                {id: 4, label: 'Menü-Abschnitte'},
                {id: 5, label: 'Menu Sections'},
                {id: 6, label: 'Sezioni del menu'}
            ],
            menu: [
                {id: 1, label: 'Menu'},
                {id: 2, label: 'Menu'},
                {id: 3, label: 'Menu'},
                {id: 4, label: 'Menü'},
                {id: 5, label: 'Menu'},
                {id: 6, label: 'Menu'}
            ],
            favorites: [
                {id: 1, label: 'Favoritos'},
                {id: 2, label: 'Favorites'},
                {id: 3, label: 'Favoritos'},
                {id: 4, label: 'Favoriten'},
                {id: 5, label: 'Favoris'},
                {id: 6, label: 'Preferiti'}
            ],
            cart: [
                {id: 1, label: 'Carrinho'},
                {id: 2, label: 'Cart'},
                {id: 3, label: 'Carro'},
                {id: 4, label: 'Karren'},
                {id: 5, label: 'Chariot'},
                {id: 6, label: 'Carrello'}
            ],
            changeLang: [
                {id: 1, label: 'Alterar Idioma'},
                {id: 2, label: 'Change Language'},
                {id: 3, label: 'Cambiar Idioma'},
                {id: 4, label: 'Sprache ändern'},
                {id: 5, label: 'Changer de langue'},
                {id: 6, label: 'Cambia lingua'}
            ],
            home: [
                {id: 1, label: 'Início'},
                {id: 2, label: 'Home'},
                {id: 3, label: 'Inicio'},
                {id: 4, label: 'Zuhause'},
                {id: 5, label: 'Maison'},
                {id: 6, label: 'Casa'}
            ],
            specials: [
                {id: 1, label: 'Especiais'},
                {id: 2, label: 'Specials'},
                {id: 3, label: 'Especiales'},
                {id: 4, label: 'Specials'},
                {id: 5, label: 'Promotions'},
                {id: 6, label: 'Speciali'}
            ],
            yelpRatings: [
                {id: 1, label: 'Yelp avaliações'},
                {id: 2, label: 'Yelp Ratings'},
                {id: 3, label: 'Yelp Clasificaciones'},
                {id: 4, label: 'Yelp Bewertungen'},
                {id: 5, label: 'Yelp évaluations'},
                {id: 6, label: 'Yelp avaliações'}
            ],
            grandTotal: [
                {id: 1, label: 'TOTAL GERAL'},
                {id: 2, label: 'GRAND TOTAL'},
                {id: 3, label: 'GRAN TOTAL'},
                {id: 4, label: 'GESAMTSUMME'},
                {id: 5, label: 'TOTAL'},
                {id: 6, label: 'SOMMA TOTALE'}
            ],
            allInclusive: [
                {id: 1, label: 'ALL INCLUSIVE, NO HIDDEN COST'},
                {id: 2, label: 'ALL INCLUSIVE, NO HIDDEN COST'},
                {id: 3, label: 'ALL INCLUSIVE COSTO, NO OCULTO'},
                {id: 4, label: 'KEINE VESRSTECKTEN KOSTEN'},
                {id: 5, label: 'ALL INCLUSIVE, SANS FRAIS CACHÉ'},
                {id: 6, label: 'NESSUN COSTO NASCOSTO'}
            ],
            addItems: [
                {id: 1, label: 'Adicionar mais itens'},
                {id: 2, label: 'Add more items'},
                {id: 3, label: 'Añadir más artículos'},
                {id: 4, label: 'Fügen weitere Artikel'},
                {id: 5, label: 'Ajouter d\'autres articles'},
                {id: 6, label: 'Aggiungi altri articoli'}
            ],
            sendOrder: [
                {id: 1, label: 'Enviar Order'},
                {id: 2, label: 'Send Order'},
                {id: 3, label: 'Enviar pedido'},
                {id: 4, label: 'Send Order'},
                {id: 5, label: 'Envoyer order'},
                {id: 6, label: 'Invia ordine'}
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