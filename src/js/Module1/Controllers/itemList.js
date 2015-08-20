//items available for purchase
var itemListModule = (function () {
    'use strict';
    var _items = [];
    var _template = _.template($('#listTemplate').html());
    var _rootElement = $('#phonesDiv');
    var _addEvents = function () {
        _rootElement.on('click', '.buyButton', function () {
            var buttonId = $(this).attr('id');
            var result = _.findWhere(_items, {id: buttonId});
            var purchase = {
                id: result.id,
                name: result.name,
                price: result.price
            };
            cartCollectionModel.addItem(purchase);
            cartListModule.render();
        });
    };
    return {
        initialize: function (items) {

            _items = items;
            _addEvents();
            this.render();
        },
        render: function () {
            var itemsCopy = _.map(_items, _.clone);
            var rendTemplate = _template({items: itemsCopy});
            _rootElement.html(rendTemplate);
        }

    };
}());
itemListModule.initialize(phones);