FormHelper = {
		    tokenize: function () 
		    {
		    	let textareaList = document.querySelectorAll("textarea");
		    	
		    	textareaList.forEach( (x) => {
		    		if(x.hasAttribute("tokenize")) 
		    			{
		    				x.addEventListener("blur", function( evt )
		    				{
			    				let text = x.value;	
			    				console.log(text);
			    				text1 = text.replace("iaeo","IAEO");
			    				text2 = text1.replace("unido","UNIDO");
			    				text3 = text2.replace("osze","OSZE");

			    				x.value = text3;
		    				})
		    			}
		    	}
		    	)
		    }
		};

FormHelper.tokenize();