(function( $ ){
    $.fn.extend({
        storeEvents: function(){
            var _this = this;
            if(!_this.eventList){_this.eventList = []}
            var elemEvents = $._data(_this.get(0), 'events');
            try {
                $.each(elemEvents, function () {
                    $.each(this, function () {
                        _this.eventList.push({type: this.type, handler: this.handler});
                    });
                });
            }catch(e){
                console.error("Element doesn't have any event binders to store");
            }
            return _this;
        },
        bindStoredEvents: function(elem){
            if(!this.eventList){
                return this;
            }
            if(elem){
                if(!(elem instanceof jQuery)){
                    elem = $(elem);
                }
            }else{
                elem = this;
            }
            this.eventList.forEach(function (evElem, i) {
                elem.bind(evElem.type, evElem.handler);
            });
            this.eventList = [];
            return this;
        }
    });
})( jQuery );