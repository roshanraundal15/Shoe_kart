const product =[
    {
        id: 0,
        image: 'srt1.webp',
        title: 'Black & White Shirt',
        price: 399,
    },
    {
        id: 1,
        image: 'srt2.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 2,
        image: 'srt6.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 3,
        image: 'srt3.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 4,
        image: 'srt4.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 5,
        image: 'srt5.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 6,
        image: 'srt7.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 7,
        image: 'srt8.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 8,
        image: 'srt9.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 9,
        image: 'srt10.webp',
        title: 'cotton Shirt',
        price: 499,
    },
    {
        id: 10,
        image: 'wn4.webp',
        title: 'cotton Shirt',
        price: 499,
    },{
        id: 11,
        image: 'wn4.webp',
        title: 'cotton Shirt',
        price: 499,
    },{
        id: 12,
        image: 'wn6.webp',
        title: 'cotton Shirt',
        price: 499,
    },

];                   
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
    var{image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
               <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2> ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
            
    )
    }).join('')

    var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>`+
                    "<i class='fa-solid fa-trash'onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    }