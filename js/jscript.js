$(document).ready(function(){

$(".tabsActive").tabs(
  { show: {  easing: 'easeInOutCubic' , duration: 200 } },
  { hide: {  easing: 'easeInOutCubic' ,duration: 200 } }
); 
/********************************* disable enable tabs ******************************/
$('#expand').click(function() {
		$('nav.lang').toggleClass('hide');
        $('.tab-content').each(function () {
        	if ($(this).hasClass("opened")){
        		$(this).css("display", "none")
        		$(this).removeClass('opened')
        	}
        	else if ($(this).css("display") == "none"){
        		$(this).css("display", "block")
        		if ($(this).attr('aria-hidden')){
        			$(this).addClass('opened')
        		}
        	}
            
        });
});


/********************************* select all checkboxes ******************************/

$('.select-all').click(function(event) {   
	id = $(this).attr('id');
    if(this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
        	if (id == "select-all-" + $(this).parents().eq(4).attr('id')) {
        		this.checked = true;
        	}
                                
        });
    }
    else{
    	$(':checkbox').each(function() {
            if (id == "select-all-" + $(this).parents().eq(4).attr('id'))  {
        		this.checked = false;
        	}                       
        });
    }
});


/****************************wysiwyg**********************/


  jQuery(function(){
   var textarea = $('.editor');
   
    $('.editor').each(function() {
    	var wysiwyg  = new Wysiwyg;
        $(this).before(wysiwyg.el);                    
    });
    
  });

  /** fix, et tekiksid p tagid **/

$(".editor").each(function(){
    $(this).keypress( function(ev){
    if(ev.keyCode == '13')

    	if (document.queryCommandValue('formatBlock') === 'h1') {
	        return document.execCommand('formatBlock', false,'h1');

	    } else if (document.queryCommandValue('formatBlock') === 'h2') {
	        return document.execCommand('formatBlock',false, 'h2');
	    }

	    else {
	        document.execCommand('formatBlock', false, 'p');
	    }        
	});
});


/**/
    Wysiwyg.prototype.exec = function(type, arg) {
      if (arg == null) {
        arg = null;
      }
      return this.document.execCommand(type, false, arg);
    };

    Wysiwyg.prototype.query = function(type) {
      return this.document.queryCommandValue(type);
    };



/* copy from div to textarea */

$(".editor").each(function(){
    $(this).bind('DOMSubtreeModified', function(event){
        	var tid = $(this).attr('id');
        	var did = $(this).attr('textarea');
    		var content = document.getElementById(tid).innerHTML;
    		document.getElementById(did).value = content;
	});

});




/* modal box */

$('.openModal').click(function() {

    var id = $(this).attr('modalId');
    $('#'+id).modalBox('open');
        
});


/** tooltip **/

$( document ).tooltip();


});//ready fn

