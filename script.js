let lists
document.addEventListener('DOMContentLoaded', function() {
    lists = document.querySelector('.lists')  ;
    console.log(lists);
    clothList();
});

function clothList()
{
    for(let i=0;i<tshirts.length;i++ )
    {
        let a =  document.createElement('a');
        a.classList.add("container");
        // a.href = "./details.html";
        a.onclick = function(){selectContent(tshirts[i].name)} 
        let img = document.createElement('img');
        img.src = "./assets/images/blue.jpg";
        img.src = tshirts[i].images[0];
        a.appendChild(img);
      
        let brand_name = document.createElement('p');
        brand_name.innerHTML = 'MS';
        brand_name.classList.add("brand-name");
        a.appendChild(brand_name);
      
        let cloth_name = document.createElement('p');
        cloth_name.innerHTML = tshirts[i].name;
        cloth_name.classList.add("cloth-name");
        a.appendChild(cloth_name);
      
        let price_container = document.createElement('p');
        price_container.classList.add("rate");
      
        let cloth_price = document.createElement('span');
        cloth_price.innerHTML = "Rs."+ tshirts[i].price;
        cloth_price.classList.add("cloth-price");
        price_container.appendChild(cloth_price);
      
        let cloth_mrp = document.createElement('span');
        cloth_mrp.innerHTML = "Rs."+ tshirts[i].mrp;
        cloth_mrp.classList.add("cloth-mrp");
        price_container.appendChild(cloth_mrp);
      
        a.appendChild(price_container);
      
        lists.appendChild(a)
        console.log(a);
    }
 
  
}

function selectContent(selected)
{
    console.log("executed");
    localStorage.setItem('name', selected)
    window.location.href = '/details.html';
}

function directToWhatsapp()
{
    window.open(`https://api.whatsapp.com/send?phone=918220162220&text=Hai I Want Shop a Cloth ! `, '_blank');
}

