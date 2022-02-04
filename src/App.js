import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carosel from './Components/Carosel';
import Sponsers from './Components/Sponsers';
import { useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Banner from './Components/Banner';
import Fasion from './Components/Fasion';
import Popup from './Components/Popup';
import Cart from './Components/Cart';
import Card from './Components/Card';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  
  const [close , setClose]=useState(false)
  const[product, setProduct]=useState(false)


    const [electronicsData, satElectronicsData]=useState([
      { 
       
        id: 1,
        pic: './img/electronics/m30.png',
        name: 'SAMSUNG Galaxy M30',
        price: 13999 ,
        category:'Electronics'
      },
      { 
        id: 2,
        pic: './img/electronics/vivobooks15.jpg',
        name: 'ASUS Vivobook S15',
        price: 65895 ,
        category:'Electronics'
      },
      { 
        id: 3,
        pic: './img/electronics/ideapad.jpg',
        name: 'Lenovo Ideapad 12',
        price: 55999 ,
        category:'Electronics'
      },
      { 
        id: 4,
        pic: './img/electronics/mouse.jpg',
        name: 'Zebronics Transformer-M',
        price: 399 ,
        category:'Electronics'
      },
      { 
        id: 5,
        pic: './img/electronics/wondertainment.jpg',
        name: 'Samsung Wondertainment-LED',
        price: 15999 ,
        category:'Electronics'
      },
      { 
        id: 6,
        pic: './img/electronics/hp.png',
        name: 'HP Laptop',
        price: 42999 ,
        category:'Electronics'
      },
      { 
        id: 7,
        pic: './img/electronics/c2y1.jfif',
        name: 'realme C21Y',
        price: 9999 ,
        category:'Electronics'
      },
      { 
        id: 8,
        pic: './img/electronics/realme8.jfif',
        name: 'realme 8',
        price: 17999 ,
        category:'Electronics'
      },
      { 
        id: 9,
        pic: './img/electronics/aspire7.webp',
        name: 'acer Aspire 7',
        price: 52999 ,
        category:'Electronics'
      },
      { 
        id: 10,
        pic: './img/electronics/immortals.jpg',
        name: 'boAt Immortal 400',
        price: 1999 ,
        category:'Electronics'
      },
      { 
        id: 11,
        pic: './img/electronics/watch.jpg',
        name: 'boAt Smart Watch',
        price: 1599 ,
        category:'Electronics'
      },
      { 
        id: 12,
        pic: './img/electronics/powerbank.jpg',
        name: 'Mi Laptop PowerBank',
        price: 1799 ,
        category:'Electronics'
      },
      { 
        id: 13,
        pic: './img/electronics/earbuds.jpg',
        name: 'realme Buds',
        price: 999,
        category:'Electronics'
      }
    ])
  
    const[items, setItems]=useState(
      [
        { 
          id: 23,
          pic: './img/product/buy-2.jpg',
          name: 'HRX - Sneakers (Black)',
          price: 1999 ,
          category:'Fashion Wear'
        },
        { 
          id: 10,
          pic: './img/electronics/immortals.jpg',
          name: 'boAt Immortal 400',
          price: 1999,
          category:'Electronics'
        },
        { 
          id: 11,
          pic: './img/electronics/watch.jpg',
          name: 'boAt Smart Watch',
          price: 1599,
          category:'Electronics'
        },
      ]
    )
    const [selected, setSelected]=useState()
    const deleteItem =(id)=>{
      setItems(items.filter((items)=>items.id!==id))
      console.log(items)
    }
    const get = (id)=>{
      electronicsData.map((electronicsData)=>
      electronicsData.id===id && setSelected(electronicsData),
      
      )
    }
    const add =(id)=>{
      setItems([...items,selected])
}
  //  const add =(id)=>{

  //  }

  return (
  <Router>

    <div className="App">
       <Nav popup={()=> setClose(!close)}/>
       {close && <Popup toggle={()=>setClose(!close)}/>}
       {product && <Card hide={()=>setProduct(!product)} add={add} order={selected}/>}
        

       
        
       <Routes>
            <Route exact path = "/" element={
           <div>
             <Carosel/>
             <Products electronicsData={electronicsData} get={get} show={()=>setProduct(!product)}/>
             <Banner/>
             <Fasion/>
             <Sponsers/>
           </div>           
          } />

            
            <Route path = "/cart" element={<Cart onDelete={deleteItem} items={items}/>} />
            
       </Routes>





       
       <Footer/>
    </div>

 </Router>

  );
}

export default App;
