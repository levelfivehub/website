jQuery(document).ready(function ($) {
	
	var actionContent = $('#action-content'),
	h1 = $('h1');
	
	var prev = {
		link:  ppi.baseUrl + 'docs/' + actionContent.data('prevlink').replace('.php', ''),
		title: actionContent.data('prevpage')
	 };
	
	var next = {
		link:  ppi.baseUrl + 'docs/' + actionContent.data('nextlink').replace('.php', ''),
		title: actionContent.data('nextpage')
	 };
	
	h1.find('a').remove();
	 
	var newhtml = '<div class="section-subbar clearfix">';
	 if(prev.link !== undefined) {
		 newhtml += 
		 '<a class="prev-page btn" title="Getting Started" href="' + prev.link + '">' +
				 '<img src="../../images/docs/previous-page.png" alt="Previous">&nbsp;&nbsp;' + prev.title + 
		 '</a>';
	 }
	
	newhtml += '<h1>' + h1.html() + '</h1>';
	
	if(next.link !== undefined) {
	newhtml += 
	'<a class="next-page btn" title="Modules" href="' + next.link + '">' +
		   '' + next.title + '&nbsp;&nbsp;<img src="../../images/docs/next-page.png" alt="Next">' +
	'</a>';
	}
	
	newhtml += '</div>';
	
	 $(newhtml).insertAfter(h1);
	 
	 h1.hide();
	
});

