marker = {
			focusCustomAttribute() {
				var tagsSpec = document.querySelectorAll("[showfocus]"); 
				tagsSpec.forEach ( (z) => {
					for(let ind = 0; ind< tagsSpec.length; ind++) {
							z.addEventListener("focus", ( evt ) => {
  								evt.target.style.background = "yellow";
  								evt.target.style.border = "4px red solid";
  								evt.target.closest("label").classList.add("highlight");
								});	
							z.addEventListener("blur", ( evt ) => {
  								evt.target.style.background = "none";
  								evt.target.style.border = "1px black solid";
  								evt.target.closest("label").classList.remove("highlight");
								});							
						}
					}
				)	
			}

		}	

marker.focusCustomAttribute();