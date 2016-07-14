(function( $ ){
    $.fn.extend({
        eventList: [],
        unbindAndStoreAll: function(){
            var _this = this;
            $.each($._data(_this.get(0), 'events'), function () {
                $j.each(this, function () {
                    _this.eventList.push({type: this.type, handler: this.handler});
                });
            });
            _this.unbind();
            return _this;
        },
        bindStoredEvents: function(){
            this.eventList.forEach(function (evElem, i) {
                _this.bind(evElem.type, evElem.handler);
            });
            this.eventList = [];
            return this;
        }
    });
})( jQuery );