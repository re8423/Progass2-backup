

window.addEventListener('load',async function(event){
    
   event.preventDefault();

   let response = await fetch('http://127.0.0.1:8090/getall',{method: 'GET',})
   .then(response => response.json())

   for(var i=0; i<response.outtwo.length; i++){
        var gdiv = "imgdiv".concat(i.toString())
        var imgid = "imgid".concat(i.toString())

        var g = document.createElement('div');
        g.setAttribute("id", gdiv);
        g.classList.add("imgdiv1");
        document.getElementById("wrapper2").appendChild(g)

        var img = document.createElement('IMG');
        img.setAttribute("id", imgid);
        g.appendChild(img);  
        img.setAttribute("src", response.outtwo[i]);
        img.setAttribute("style", "max-width: 600px; max-height: 300px");
        
        var infodiv = "infodiv".concat(i.toString())
        var hid = "hid".concat(i.toString())
        var h = document.createElement('h4');
        h.setAttribute("id", hid);

        var info = document.createElement('div');
        info.setAttribute("id", infodiv);
        info.classList.add("infodiv1");


        info.appendChild(h);  
        document.getElementById("wrapper2").appendChild(info)
        h.appendChild(document.createTextNode("Route info:"))

        var pid1 = "p1".concat(i.toString())
        var p1 = document.createElement('P');
        p1.setAttribute("id", pid1);
        info.appendChild(p1);  
        var text = document.createTextNode("Route name: ".concat(response.Name[i]));
        p1.appendChild(text)

        var pid2 = "p2".concat(i.toString())
        var p2 = document.createElement('P');
        p2.setAttribute("id", pid2);
        info.appendChild(p2);  
        var text2 = document.createTextNode("Diffculty: ".concat(response.difficulty[i]));
        p2.appendChild(text2)


        var pid3 = "p3".concat(i.toString())
        var p3 = document.createElement('P');
        p3.setAttribute("id", pid3);
        info.appendChild(p3);  
        var text3 = document.createTextNode("Completed: ".concat(response.completed[i]));
        p3.appendChild(text3)
    }

   console.log('000')
}) 

let submit4 = document.getElementById('person_submit');

submit4.addEventListener('click',async function(event){
   event.preventDefault();

   var newtext = 'http://127.0.0.1:8090/getinfo'
   newtext = newtext.concat('?imgname3=')
   newtext = newtext.concat(document.getElementById('imgname3').value)
   let response = await fetch(newtext,{method: 'GET',})
   .then(response => response.json())
   
   console.log(response)

   var cleardiv = document.getElementById("wrapper3");
              
   while(cleardiv.firstChild) {
         cleardiv.removeChild(cleardiv.firstChild);
   }

   for(var i=0; i<response.outtwo.length; i++){
        var gdiv = "imgdiv".concat(i.toString())
        var imgid = "imgid".concat(i.toString())

        var g = document.createElement('div');
        g.setAttribute("id", gdiv);
        g.classList.add("imgdiv1");
        document.getElementById("wrapper3").appendChild(g)

        var img = document.createElement('IMG');
        img.setAttribute("id", imgid);
        g.appendChild(img);  
        img.setAttribute("src", response.outtwo[i]);
        img.setAttribute("style", "max-width: 600px; max-height: 300px");
        
        var infodiv = "infodiv".concat(i.toString())
        var hid = "hid".concat(i.toString())
        var h = document.createElement('h4');
        h.setAttribute("id", hid);

        var info = document.createElement('div');
        info.setAttribute("id", infodiv);
        info.classList.add("infodiv1");


        info.appendChild(h);  
        document.getElementById("wrapper3").appendChild(info)
        h.appendChild(document.createTextNode("Route info:"))

        var pid1 = "p1".concat(i.toString())
        var p1 = document.createElement('P');
        p1.setAttribute("id", pid1);
        info.appendChild(p1);  
        var text = document.createTextNode("Route name: ".concat(response.Name[i]));
        p1.appendChild(text)

        var pid2 = "p2".concat(i.toString())
        var p2 = document.createElement('P');
        p2.setAttribute("id", pid2);
        info.appendChild(p2);  
        var text2 = document.createTextNode("Diffculty: ".concat(response.difficulty[i]));
        p2.appendChild(text2)


        var pid3 = "p3".concat(i.toString())
        var p3 = document.createElement('P');
        p3.setAttribute("id", pid3);
        info.appendChild(p3);  
        var text3 = document.createTextNode("Completed: ".concat(response.completed[i]));
        p3.appendChild(text3)
    }
   console.log('000')
}) 


let submit2 = document.getElementById('img_submit');

submit2.addEventListener('click',async function(event){
   event.preventDefault();
   console.log('hello')
   var text = 'http://127.0.0.1:8090/getimg2'
   text = text.concat('?imgname2=')
   text = text.concat(document.getElementById('imgname2').value)
   let response = await fetch(text,{method: 'GET',})
   .then(response => response.json())
   console.log(response)

   document.getElementById('imgid').src=response.out2
   document.getElementById('outdiff').innerHTML="Diffculty: ".concat(response.outdiff)
   document.getElementById('outcomp').innerHTML="Completed: ".concat(response.outcomp)
   document.getElementById('outname').innerHTML="Course Name: ".concat(response.outname.replace(".png", ""))
   document.getElementById('Rinfo').style.display = "block"

   console.log('000')
}) 

async function getimg(event){
   event.preventDefault();
   console.log('hello')
   var text = 'http://127.0.0.1:8090/getimg2'
   text = text.concat('?imgname2=')
   text = text.concat(document.getElementById('coursename').value)
   let response = await fetch(text,{method: 'GET',})
   .then(response => response.json())
   console.log(response)
   document.getElementById('imgid').src=response.out2
   document.getElementById('outdiff').innerHTML="Diffculty: ".concat(response.outdiff)
   document.getElementById('outcomp').innerHTML="Completed: ".concat(response.outcomp)
   document.getElementById('outname').innerHTML="Course Name: ".concat(response.outname.replace(".png", ""))
   document.getElementById('Rinfo').style.display = "block"

}


let submit3 = document.getElementById('comp_post');

submit3.addEventListener('click',async function(event){
   
   let response = await fetch('http://127.0.0.1:8090/addcomp',{method: 'Post',})
   console.log('idhaopjfdioapj')
   console.log(response)
   getimg(event)


   console.log('000')
}) 
