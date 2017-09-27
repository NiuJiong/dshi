(function(glable,undefined){
	
	var tools = {
		
		setFontSize:function(size){
			
			var oHtml = document.querySelector("html");
			
			var width = oHtml.getBoundingClientRect().width;
			
			oHtml.style.fontSize = width/size + 'px';
			var x = width/size;
			
			if(x>=56.8889){
				x = 35.5556;
			}
			
			
			oHtml.style.fontSize =  x + 'px';
			
		}
		
	}
	
	
	
	glable.to = tools;
	
	
	
})(window,undefined);
