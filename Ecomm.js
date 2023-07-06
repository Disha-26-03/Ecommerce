function hello(){
    fetch("https://dummyjson.com/products")
    .then((response)=>{
       return response.json()
    })
    .then((result)=>{
        console.log(result.products)
        showData(result.products)
    })
}
hello()
function showData(data){
    for(let i=0;i<=data.length;i++){
    let box=document.createElement("div");
    box.classList.add("product");
    let img=document.createElement("img")
    img.src=data[i].thumbnail;
    let link=document.createElement("a")
    link.href="singleproduct.html?id="+data[i].id;
    link.append(img)
    let title=document.createElement("h2");
    title.innerHTML=data[i].title;
    let description=document.createElement("p")
    description.innerHTML=data[i].description;
    let price=document.createElement("h4")
    let icon=document.createElement("i")
    icon.classList.add("fa-solid", "fa-indian-rupee-sign")
    price.append(icon)
    price.innerHTML += data[i].price;
    let icons=document.createElement("h3")
    icons.classList.add("fa-solid", "fa-cart-shopping")
    let addtocart=document.createElement("h4")
    addtocart.append(icons)
    addtocart.innerHTML += data[i].addtocart;

    box.append(link)
//    box.append(image)
   box.append(title)
   box.append(description)
   box.append(price)
   box.append(icons)
   document.querySelector("#products").append(box)
    }
  }
  



