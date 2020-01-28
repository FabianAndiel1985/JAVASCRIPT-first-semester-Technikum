pList = document.querySelectorAll("p[wikipedia]");

words = ["erat","diam","vero"]

pList.forEach( (x)=> {
	if(x.hasAttribute("wikipedia")) 
	{
		let words1 = x.getAttribute( "wikipedia" ).split( "," );
		text = x.innerHTML;
		words1.forEach( (y) => 
		{
			htmlWord = "https://en.wikipedia.org/wiki/" + y;
			text = text.split(y).join(htmlWord);

		})
	}
	x.innerHTML = text;
	} )