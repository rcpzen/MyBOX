/* ilçe isimleri jquery*/

 $('select#Il').on('change',function() {
    var _this=$(this);
    $('select#Ilce>option').remove();
    $.getJSON(_ilce, function (index) {
        $.each(index,function (i,item) {
            if ( _this.val() == item['il']) {
                $('select#Ilce').append('<option value='+(item.ilce)+'>'+item.ilce+'</option>');
            }
          
        });
   });

});
