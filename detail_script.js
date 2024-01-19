let collections
let name = localStorage.getItem("name");
let selectedProduct = tshirts.find((data)=>{
  if(data.name == name )
  {
    return data
  }
})
console.log(selectedProduct);
document.addEventListener('DOMContentLoaded', function() {
 
    collections = document.querySelectorAll('.cloth-collections img')  ;
    renderData(); 
    // console.log(collections);
    domActivity();

});

function renderData()
{
  let head_name = document.querySelector('.head-name');
  console.log(head_name);
  head_name.innerText = selectedProduct.name;
  for(let i=0;i<collections.length;i++)
  {
    collections[i].src = selectedProduct.images[i];
  }

  let main_image = document.querySelector('.main-img img');
  main_image.src = selectedProduct.images[0];

  let cloth_name = document.querySelector('.cloth-name');
  cloth_name.innerText = selectedProduct.name;

  let price = document.querySelector('.price');
  price.innerText = "RS."+selectedProduct.price;

  let mrp = document.querySelector('.mrp');
  mrp.innerText = "RS."+selectedProduct.mrp;

}
function domActivity()
{
    
    for(let i=0;i<collections.length;i++)
    {
      collections[i].addEventListener('click',(e=>{
        console.log(collections[i]);
        collections[i].style.border ="1px solid black";
        collections[i].style.borderRadius ="3px";
        let  selectedImage =collections[i].getAttribute('src');
        console.log(selectedImage);
       let mainImg = this.document.querySelector('.main-img img');
       console.log(mainImg);
        mainImg.setAttribute('src',selectedImage);

         collections.forEach((element) => {
                 if(element != collections[i])
                 {
                   element.style.border ="none";
                 }
         });
      }))
    }
}

function directToWhatsapp()
{
    window.open(`https://api.whatsapp.com/send?phone=918220162220&text=Hai I Want Shop a Cloth ! `, '_blank');
}