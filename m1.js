// const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hanoi?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json"
// const getProducts = async () => {
//     const res = await axios.get(API_URL)
//     // console.log(res)
//     const data = res.data 
//     mapProducts(data)
// }

// getProducts()

// const productsQuery = document.querySelector('#products')

// const truncate =(string, length) => {
//     if (string.length > length) {
//         return string.substring(0, length) + '...'
//     } else {
//         return string
//     }
// }


// const mapProducts = (params) => {
//     console.log(params)
//     const products = params?.map((item, index) => {
//         console.log(item)
//         return `
                
//         <div class="card w-[300px] bg-base-100 shadow-xl image-full">
//         <div class="card-body w-[300px] h-[300px]">
//           <h2 class="card-title">${truncate(item.latitude)}</h2>
//           <h2 class="card-title">${truncate(item.longitude)}</h2>
//           <h2 class="card-title">${truncate(item.resolvedAddress)}</h2>
//           <h2 class="card-title">${truncate(item.description)}</h2>
//         </div>
//       </div>
                
//        `
//       })

//     productsQuery.innerHTML = products.join('')
// }


const API_URL = 'https://fakestoreapi.com/products?limit=10'

const fetchProducts = async () => {
  const response = await axios.get(API_URL) 
  // console.log(response)
  const data = response.data 
  // console.log(data)
  mapDataFromApi(data) 
}

fetchProducts()

const productsQuery = document.querySelector('#products')



const truncate =(string, length) => {
    if (string.length > length) {
        return string.substring(0, length) + '...'
    } else {
        return string
    }
}



const mapDataFromApi = (params) => {
  // nhận data truyền từ hàm fetchProducts thông qua biến params
  // console.log(params)
  // map data từ API
  const products = params?.map((item, index) => {
    console.log(item)
    return `
            
    <div class="card w-[300px] bg-base-100 shadow-xl image-full">
        <figure><img src=${item.image} alt="Shoes" class='w-[300px] h-[150px] object-cover ' /></figure>
        <div class="card-body w-[300px] h-[300px]">
            <h2 class="card-title">${truncate(item.title, 25)}</h2>
            <p>${truncate(item.description, 80)}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary "> $ ${item.price}</button>
            </div>
        </div>
    </div>
            
   `
  })

  productsQuery.innerHTML = products.join('')
}




const login = () =>{
    window.location.href = 'login.html'
}
const click = () =>{
    window.location.reload
}
const cick = () =>{
    window.location.href ='neon.html'
}
const cic = () =>{
    window.location.href ='clock.html'
}









