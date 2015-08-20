var cartListModule = (function () {
    'use strict';
    var _itemsCollections = [];
    var _template = _.template($('#cartTemplate').html());
    var _rootElement = $('#ordersCartDiv');
    var _addEvents = function () {
        _rootElement.on('click', '.removeButton', function (e) {
            var buttonId = $(e.currentTarget).attr('id');
            cartCollectionModel.removeItem(buttonId);
            cartListModule.render();
        });
    };
    return {

        initialize: function (collection) {

            _itemsCollections = collection;
            _addEvents();
        },
        render: function () {
            var data = {
                items: _itemsCollections.getItems(),
                total: _itemsCollections.getTotalPrice(),
                TotalQuantity: _itemsCollections.getTotalQuantity()
            };
            var rendTemplate = _template({data: data});
            _rootElement.html(rendTemplate);
        }

    };
}());
cartListModule.initialize(cartCollectionModel);
