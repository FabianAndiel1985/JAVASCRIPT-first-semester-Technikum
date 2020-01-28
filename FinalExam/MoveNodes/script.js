// 1.

       left = document.querySelector("#left");
       formular =  document.querySelector("#feedback");

       left.appendChild(formular);   

       // 2.

       images = document.querySelectorAll("img"); 
       imageStore = document.querySelector("#image-store");

       images.forEach( (x)=>
            {
                imageStore.appendChild(x);    
            }

        )  

        // 3.

        menuItems = document.querySelectorAll(".menu");
        menu = document.querySelector("#menu");

        menuItems.forEach( (y)=>
            {
                menu.appendChild(y);    
            }

        ) 

        // 4.

        adminMenu= document.querySelector("#admin-menu");

        arrayAttr = ["#settings","#logout","#users"]; 

        links = document.querySelectorAll( "li a" );

        console.log(links);

        links.forEach((z) => {
            if(z.getAttribute("href") == "#settings" || z.getAttribute("href") == "#logout" || z.getAttribute("href") == "#users" )
            {	
            
             	let menuItem = z.closest("li");
             	console.log(menuItem);

             	adminMenu.appendChild(menuItem);
            }

        }

            )
