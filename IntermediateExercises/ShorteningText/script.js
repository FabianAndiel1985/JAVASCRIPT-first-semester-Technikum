shortener =  {

        hasNeededAttribute: true,

        getPList() {
          let pList = document.querySelectorAll("p");
          return pList;
        },

        attributeAdder() {
         let pList = this.getPList();
         pList.forEach((x) => (x.setAttribute("wordLength","100")))         
        },

        textShortener () { 
          let pList = this.getPList();

          pList.forEach(
              (x)=> {
                if (x.hasAttribute("wordLength")) {
                  console.log("right");
                }  
                else {
                  console.log("wrong");
                }
              } 
            );

          pList.forEach(
            (x)=> {
              var indvAttribute =parseInt(x.getAttribute("wordLength")); 
              let text = x.innerHTML;
              let textShort = text.substring(0,indvAttribute) +"...";

              // console.log(text.length);
              if(text.length > textShort.length) {
                 x.innerHTML = textShort; 
              }
            }    
          );  
        }
    }

      // shortener.attributeAdder();
      shortener.textShortener();