let cleartext = ()=>{
  document.getElementById("moviename").value = null;
  document.getElementById("url").value = null;
  document.getElementById("ratting").value = null;
}
let addnewmovie = ()=>{
  let moviename = document.getElementById("moviename").value;
  let url = document.getElementById("url").value;
  let userratting = document.getElementById("ratting").value;
  if(moviename == "" && url == "" && userratting == ""){
      alert("bhai fill up karen");
  }
  else{
      let tittle = document.createElement("h1");
      let newimg = document.createElement("img");
      let ratting = document.createElement("h2");
      let div = document.createElement("div");
      div.id = "mybox";
      newimg.src = url;
      tittle.innerHTML = moviename;
      ratting.innerHTML = userratting;
      document.getElementById("container").appendChild(div);
      document.getElementById("mybox").appendChild(tittle);
      document.getElementById("mybox").appendChild(newimg);
      document.getElementById("mybox").appendChild(ratting);
cleartext();

  }
}