<<<<<<< HEAD
$(document).ready(function () {
    var offset = 0;
    var lim = 12;
    var filterarray = [];
    function uniqueVal(value, index, self) {
        return self.indexOf(value) === index;
    }
    function loadlist(offset,lim) {
        var pokapi = 'https://pokeapi.co/api/v1/pokemon/?offset='+offset+'&tags=mount+rainier&limit='+lim;
        $.getJSON( pokapi, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        })
        .done(function( data ) {
            $('#next').attr('href', data.meta.next);
            if (data.meta.prev==undefined){}
            var html = '';
            for (var i=0; i < data.objects.length; ++i) {
                var typename = [];
                $.each(data.objects[i].types, function(i, item) {
                    typename.push(item.name);
                    filterarray.push(item.name);
                });
                var filterarrayitemsclass = typename.sort().reverse().join(" ");
                var filterarrayitems = filterarray.filter(uniqueVal).sort().reverse();
                html += '<div class="col-sm-4 pok '+filterarrayitemsclass+'">';
                html += '<div class="in">';
                html += '<input type="hidden" value="'+data.objects[i].pkdx_id+'">';
                html += '<div class="img">';
                html += '<img src="http://pokeapi.co/media/img/' + data.objects[i].pkdx_id + '.png">';
                html += '</div>';
                html += '<h3>'+ data.objects[i].name +'</h3>';
                $.each(typename, function(index, value){
                    html += '<a href="javascript:void(0)" class="abtn ' + value +'">' + value +'</a>';
                });
                //html += '<h3>'+ filterarrayitemsclass+'</h3>';
                html += '</div>';
                html += '</div>';
            }
            $('#placeholder').append(html);
            $('#filters').nextAll().remove();
            for (var i=0; i < filterarrayitems.length; ++i) {
                $('#filters').after('<li><a class="filterbtn" id="'+filterarrayitems[i]+'" href="javascript:void(0)" title="'+filterarrayitems[i]+'">'+filterarrayitems[i]+'</a></li>');
            }
        })
        .fail(function() {
            console.log( "error" );
        });
    };
    loadlist(offset,lim);
    $('body').on('click', '.loadmore', function() {
        offset = offset + lim;
        loadlist(offset,lim);
    });
    $('body').on('click', 'a.filterbtn', function() {
        var filterid = $( this ).attr( "id" );
        $('body').find($("[class*=pok]")).hide();
        $('body').find($("[class*="+filterid+"]")).show();
        $('#showbtn').text(filterid);
    });
    $('body').on('click', '#showall', function() {
        $('body').find($("[class*=pok]")).show();
    });
    $('body').on('click', '.pok', function() {
        var hiddenval = $(this).find("input").val();
        (function() {
            var pokapi = "https://pokeapi.co/api/v1/pokemon/"+hiddenval;
            $.getJSON( pokapi, {
                tags: "mount rainier",
                tagmode: "any",
                format: "json"
            })
            .done(function( datadet ) {
                $('#detail').empty();
                var detailtypename = [];
                $.each(datadet.types, function(i, item) {
                    detailtypename.push(item.name);
                });
                function PrefInt(number, len) {
                   return (Array(len).join('0') + number).slice(-length);
                }
                $('#detail').append('<div class="detail">'+
                    '<div class="img">'+
                        '<img src="http://pokeapi.co/media/img/' + datadet.pkdx_id + '.png">'+
                    '</div>'+
                    '<h3>'+ datadet.name +' #'+  ("00" + datadet.pkdx_id).substr(-3)+'</h3>'+
                    '<div class="table-responsive"><table class="table table-striped table-hover">'+
                    '<tr><td>Type</td><td>'+detailtypename.join("<br />")+'</td></tr>'+
                    '<tr><td>Attack</td><td>'+datadet.attack+'</td></tr>'+
                    '<tr><td> Defense </td><td>'+datadet.defense+'</td></tr>'+
                    '<tr><td> HP </td><td>'+datadet.hp+'</td></tr>'+
                    '<tr><td> SP Attack </td><td>'+datadet.sp_atk+'</td></tr>'+
                    '<tr><td> SP Defense </td><td>'+datadet.sp_def+'</td></tr>'+
                    '<tr><td> Speed </td><td>'+datadet.speed+'</td></tr>'+
                    '<tr><td> Weight </td><td>'+datadet.weight+'</td></tr>'+
                    '<tr><td> Total moves </td><td>'+datadet.moves.length+'</td></tr>'+
                    '</table></div>'+
                '</div>');
            })
            .fail(function() {
                console.log( "error" );
            });
        })();
    });
   $('.toTop ').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });
   $('.toBottom').click(function(){
      $('html,body').animate({scrollTop: $(document).height()}, 600);
      return false;
   });
});
$(document).bind("ajaxSend", function(){
   $("#loading").show();
}).bind("ajaxComplete", function(){
   $("#loading").hide();
=======
$(document).ready(function () {
    var offset = 0;
    var lim = 12;
    var filterarray = [];
    function uniqueVal(value, index, self) {
        return self.indexOf(value) === index;
    }
    function loadlist(offset,lim) {
        var pokapi = 'https://pokeapi.co/api/v1/pokemon/?offset='+offset+'&tags=mount+rainier&limit='+lim;
        $.getJSON( pokapi, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        })
        .done(function( data ) {
            $('#next').attr('href', data.meta.next);
            if (data.meta.prev==undefined){}
            var html = '';
            for (var i=0; i < data.objects.length; ++i) {
                var typename = [];
                $.each(data.objects[i].types, function(i, item) {
                    typename.push(item.name);
                    filterarray.push(item.name);
                });
                var filterarrayitemsclass = typename.sort().reverse().join(" ");
                var filterarrayitems = filterarray.filter(uniqueVal).sort().reverse();
                html += '<div class="col-sm-4 pok '+filterarrayitemsclass+'">';
                html += '<div class="in">';
                html += '<input type="hidden" value="'+data.objects[i].pkdx_id+'">';
                html += '<div class="img">';
                html += '<img src="http://pokeapi.co/media/img/' + data.objects[i].pkdx_id + '.png">';
                html += '</div>';
                html += '<h3>'+ data.objects[i].name +'</h3>';
                $.each(typename, function(index, value){
                    html += '<a href="javascript:void(0)" class="abtn ' + value +'">' + value +'</a>';
                });
                //html += '<h3>'+ filterarrayitemsclass+'</h3>';
                html += '</div>';
                html += '</div>';
            }
            $('#placeholder').append(html);
            $('#filters').nextAll().remove();
            for (var i=0; i < filterarrayitems.length; ++i) {
                $('#filters').after('<li><a class="filterbtn" id="'+filterarrayitems[i]+'" href="javascript:void(0)" title="'+filterarrayitems[i]+'">'+filterarrayitems[i]+'</a></li>');
            }
        })
        .fail(function() {
            console.log( "error" );
        });
    };
    loadlist(offset,lim);
    $('body').on('click', '.loadmore', function() {
        offset = offset + lim;
        loadlist(offset,lim);
    });
    $('body').on('click', 'a.filterbtn', function() {
        var filterid = $( this ).attr( "id" );
        $('body').find($("[class*=pok]")).hide();
        $('body').find($("[class*="+filterid+"]")).show();
        $('#showbtn').text(filterid);
    });
    $('body').on('click', '#showall', function() {
        $('body').find($("[class*=pok]")).show();
    });
    $('body').on('click', '.pok', function() {
        var hiddenval = $(this).find("input").val();
        (function() {
            var pokapi = "https://pokeapi.co/api/v1/pokemon/"+hiddenval;
            $.getJSON( pokapi, {
                tags: "mount rainier",
                tagmode: "any",
                format: "json"
            })
            .done(function( datadet ) {
                $('#detail').empty();
                var detailtypename = [];
                $.each(datadet.types, function(i, item) {
                    detailtypename.push(item.name);
                });
                function PrefInt(number, len) {
                   return (Array(len).join('0') + number).slice(-length);
                }
                $('#detail').append('<div class="detail">'+
                    '<div class="img">'+
                        '<img src="http://pokeapi.co/media/img/' + datadet.pkdx_id + '.png">'+
                    '</div>'+
                    '<h3>'+ datadet.name +' #'+  ("00" + datadet.pkdx_id).substr(-3)+'</h3>'+
                    '<div class="table-responsive"><table class="table table-striped table-hover">'+
                    '<tr><td>Type</td><td>'+detailtypename.join("<br />")+'</td></tr>'+
                    '<tr><td>Attack</td><td>'+datadet.attack+'</td></tr>'+
                    '<tr><td> Defense </td><td>'+datadet.defense+'</td></tr>'+
                    '<tr><td> HP </td><td>'+datadet.hp+'</td></tr>'+
                    '<tr><td> SP Attack </td><td>'+datadet.sp_atk+'</td></tr>'+
                    '<tr><td> SP Defense </td><td>'+datadet.sp_def+'</td></tr>'+
                    '<tr><td> Speed </td><td>'+datadet.speed+'</td></tr>'+
                    '<tr><td> Weight </td><td>'+datadet.weight+'</td></tr>'+
                    '<tr><td> Total moves </td><td>'+datadet.moves.length+'</td></tr>'+
                    '</table></div>'+
                '</div>');
            })
            .fail(function() {
                console.log( "error" );
            });
        })();
    });
   $('.toTop ').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });
   $('.toBottom').click(function(){
      $('html,body').animate({scrollTop: $(document).height()}, 600);
      return false;
   });
});
$(document).bind("ajaxSend", function(){
   $("#loading").show();
}).bind("ajaxComplete", function(){
   $("#loading").hide();
>>>>>>> f6596ae3927f799331eeb5170468f2b5ae67dc94
});