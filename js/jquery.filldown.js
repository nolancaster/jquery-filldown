(function($, undefined){
    $.widget('nl.filldown', {

        options: {},

        _create: function() {
            var self = this;
            //skip submit buttons and hidden fields
            if (self.element.is(':not(:input),:submit,input[type=hidden]')) {
                return false;
            }
            self.row = self.element.closest('tr');
            if(self.row.length === 0) {
                return false;
            }
            self.tdIndex = self.row.children('td').index(self.element.closest('td'));
            self.fillButton = $('<img>').attr({
                src: '../images/icons/arrow_down.png',
                class: 'filldown-button',
                alt: 'Fill',
                title: 'Fill down'
            }).on('click', function() {
                if( self.options.disabled === true || self._trigger('onfill') === false) {
                    return;
                }
                self.fill();
            });
            self.element.addClass('filldown').after(self.fillButton);
        },

        fill: function() {
            var value = this.element.val();
            this.row.nextAll().find('td:eq(' + this.tdIndex + ') :input').val(value);
        },

        _setOption: function(key, value) {
            switch( key ) {}
            $.Widget.prototype._setOption.apply(this, arguments);
        },

        destroy: function() {
            this.element.removeClass('filldown');
            this.fillButton.remove();
            $.Widget.prototype.destroy.call(this);
        }
    });
})(jQuery, undefined);
 
