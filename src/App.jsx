import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Home/Navbar";
import { Hero } from "./components/Home/Hero";
import { Deals } from "./components/Home/Deals";
import { Banners } from "./components/Home/Banners";
import { FurnitureProducts } from "./components/FurnitureProd/FurnitureProducts";
import { ProtectedRoute } from "./components/PrivateRoute/ProtectedRoute";
import { StaticProd } from "./components/Home/StaticProd";
import { Login } from "./components/Login/Login";
import { ImageSlider } from "./components/Home/HomeCarousel";
import { Featured } from "./components/Home/Featured";
import { Footer } from "./components/Home/Footer";

function App() {
  const imagess = [
    {
      id: 1,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_2.jpg?imwidth=1920",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_3.jpg?imwidth=1920",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
      alt: "Image 3",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
      alt: "Image 3",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
      alt: "Image 3",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_1.jpg?imwidth=1920",
      alt: "Image 3",
    },
  ];
  // --------------Home Static Products -------------///
  const Static_Products = [
    {
      src: "https://i.postimg.cc/DzNmvYz8/11192021-Cat-Silo-Furniture.png",
      Title: "Furniture",
    },
    {
      src: "https://i.postimg.cc/tT2ymTM0/11152021-Cat-Silo-Area-Rugs.png",
      Title: "Area Rugs",
    },
    {
      src: "https://i.postimg.cc/W4fcMKFj/11152021-Cat-Silo-Bed-Bath.png",
      Title: "Bed & Baths",
    },
    {
      src: "https://i.postimg.cc/Xv5k8BXJ/11152021-Cat-Silo-Decor.png",
      Title: "Home Decor",
    },
    {
      src: "https://i.postimg.cc/V6RMGqwY/Cat-Silo-Window-040721.jpg",
      Title: "Window Treatment",
    },
    {
      src: "https://i.postimg.cc/yYJgc4D6/11152021-Cat-Silo-Kitchen.png",
      Title: "Kitchen",
    },
    {
      src: "https://i.postimg.cc/3JPyZSGX/11192021-Cat-Silo-Outdoor.png",
      Title: "Outdoor",
    },
    {
      src: "https://i.postimg.cc/4dNn3rCg/01112021-Cat-Silo-Home-Imp.jpg",
      Title: "Home Improvement",
    },
    {
      src: "https://i.postimg.cc/hvW7NgSK/05062021-gnp-jewelrywatches-Pop-Cat-10.jpg",
      Title: "Jwellery & Watches Store",
    },
    {
      src: "https://i.postimg.cc/fTXhwsD6/06232021-gnp-gifts-219x219-Small-Appliances.jpg",
      Title: "Gift Ideas",
    },
    {
      src: "https://i.postimg.cc/wxN3j5Z3/11152021-Cat-Silo-Lighting.png",
      Title: "Lightning",
    },
    {
      src: "https://i.postimg.cc/SsMQjqZH/Cat-Silo-All-Deals-040721.jpg",
      Title: "Shop All Deals",
    },
  ];
  const Offer_Deals = [
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_1.svg?imwidth=1920",
      title: "Select Garden & Patio",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_2.svg?imwidth=1920",
      title: "Select Living Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_3.svg?imwidth=1920",
      title: "Select Dining Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_4.svg?imwidth=1920",
      title: "Select Home Decor",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_V3_HB_DOMESTIC_5.svg?imwidth=1920",
      title: "Select Bedding & Bath",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_6.svg?imwidth=1920",
      title: "Select Lighting & Ceiling Fans",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Banners />}></Route>
        <Route path="/logout"></Route>
        <Route
          path="/furniture"
          element={
            <ProtectedRoute>
              <FurnitureProducts />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <Hero />
      <Deals offers={Offer_Deals} />
      <Banners
        src={
          "https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-FreshKitchenFurn-Desktop.svg"
        }
        title={" Home Decore Refresh"}
        subtitle={"Save On Fresh Styles to update yours space"}
      />
      <StaticProd prod={Static_Products} />
      <ImageSlider imagess={imagess} />
      <Banners
        src={
          "https://ak1.ostkcdn.com/img/mxc/04282022_SpringTimeSlumber_INTL_Desktop.svg?imwidth=1920"
        }
        title={" Home Decore Refresh"}
        subtitle={"Save On Fresh Styles to update yours space"}
      />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
