var cartlist = true
const totalAmount = true
const product = [
    {
        name: "Nike Shoes",
        price : 800,
    },
    {
        name: "Adidas Shoes",
        price : 900,
    },
    {
        name: "Puma Shoes",
        price : 1000,
    },
    {
        name: "Reebok Shoes",
        price : 750,
    },
    {
        name: "Speed Shoes",
        price : 12000,
    },
]
var cart = {
    cartlist : [],
    totalAmount : [],
    addproduct : function(id,name,price) {
        this.cartlist.push({id,name,price})
    },
    addprice : function(price) {
        this.totalAmount.push(price)
    }
}

function check(name,price){
    var id = cart.cartlist.length +1
    cart.addproduct(id,name,price)
    cart.addprice(price)
 showcart()
}
function showcart() {
    let send = document.querySelector("#fetch")
    send.innerHTML =  cart.cartlist.map((element)=>{
        const {name} =element
        return(`<div class="flex justify-between  mx-3 id=${element.id}" >
        <h1 class="text-2xl">${element.name}</h1>
        <h1 class="text-2xl ml-12 -mr-5">${element.price}</h1>
        <h1 class="text-2xl"><i class="fa fa-trash mr-2 text-2xl text-blue-500 hover:text-red-500 " aria-hidden="true" onclick="removeitm(${element.id})"></i></h1>
      </div>`)
    })

}

function addProduct(){
    console.clear()
let add = document.querySelector("#add")
add.innerHTML = product.map((element)=>{
    return(
        `<div class="card w-72 h-auto  rounded-md shadow-xl mx-3 ">
      <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7780835-521f-41cb-953d-04b2559f597a/air-force-1-low-retro-shoes-j9C2WJ.png" class="w-64 rounded-tl-md rounded-tr-md m-auto" alt="">
      <h1 class="text-3xl text-center my-2"><b>${element.name}</b></h1>
      <p class="text-1xl text-gray-400 my-3">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h1 class="text-3xl text-center my-3"><b>$${element.price}.00</b></h1>
      <button class="w-full bg-blue-500 rounded-bl-md rounded-br-md p-3 text-white " onclick="check('${element.name}',${element.price}),total()"><b class="text-2xl w-full">BUY NOW</b></button>
    </div>`
    )
    })
}
function total()  {
    const sum = cart.totalAmount.reduce((pre , cur)=> pre + cur , 0)
const doc = document.querySelector("#total")
doc.innerHTML = sum
}

const removeitm = (id) => {
    var index = cart.cartlist.map(x => {
        return x.Id;
      }).indexOf(id);
    cart.cartlist.splice(index, id);
    cart.totalAmount.splice(index,id)
    console.log(cart.cartlist);
   
   showcart()
total()
}
