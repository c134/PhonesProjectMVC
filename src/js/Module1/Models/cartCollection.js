var cartCollectionModel = (function () {
    'use strict';
    var _items = [];
    var _itemTotalPrice = function () {

        for (var i = 0; i < _items.length; i++) {
            _items [i].thisItemTotal = _items [i].item.price * _items [i].quantity;
        }
    };
    return {

        addItem: function (obj) {
            var purchase = {
                item: _.pick(obj, 'id', 'name', 'price'),
                thisItemTotal: obj.price,
                quantity: 1
            };
            var result = _.find(_items, function (item) {
                return item.item.id === purchase.item.id;
            });
            console.log(result);
            if (typeof result !== 'undefined') {
                result.quantity++;
                _itemTotalPrice();
            }
            else {
                _items.push(purchase);
            }
            console.log(_items);
        },
        removeItem: function (buttonId) {

            console.log(buttonId);
            var result = _.find(_items, function (item) {
                return item.item.id === buttonId;
            });
            console.log(result);
            if (typeof  result !== 'undefined' && result.quantity > 0) {
                result.quantity--;
                _itemTotalPrice();
                console.log(result.quantity);
            }
            else if (result.quantity === 0) {
                _items = _.without(_items, _.findWhere(_items, result));
                console.log('deleted:' + _items);
            }
        },
        getItems: function () {

            return _items;
        },

        getTotalPrice: function () {

            _itemTotalPrice();
            var total = 0;
            for (var i = 0; i < _items.length; i++) {
                total += _items [i].thisItemTotal;
            }
            return total;

        },
        getTotalQuantity: function () {

            var totalQnt = 0;
            for (var i = 0; i < _items.length; i++) {
                totalQnt += _items [i].quantity;
            }
            return totalQnt;
        }
    };
}());




