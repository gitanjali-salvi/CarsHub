// import all images from assets/images directory
import img01 from "../all-images/cars-img/Maruti-Suzuki-Alto-K-10.jpg";
import img02 from "../all-images/cars-img/Renault_KWID.jpeg";
import img03 from "../all-images/cars-img/maruti-suzuki-s-presso.png";
import img04 from "../all-images/cars-img/bajaj qute.jpg";
import img05 from "../all-images/cars-img/pmv eas e.jpg";
import img06 from "../all-images/cars-img/tata punch.jpg";
import img07 from "../all-images/cars-img/toyota-taisor.jpg";
import img08 from "../all-images/cars-img/tata nexon.jpeg";
import img09 from "../all-images/cars-img/maruti brezza.jpg";
import img10 from "../all-images/cars-img/fronx.jpg";
import img11 from "../all-images/cars-img/mahindra thar.png";
import img12 from "../all-images/cars-img/hyundai creta.jpeg";
import img13 from "../all-images/cars-img/tata harrier.jpeg";
import img14 from "../all-images/cars-img/mahindra scorpio n.jpeg";
//import img15 from "../all-images/cars-img/Toyota Innova Crysta.jpg";
//import img16 from "../all-images/cars-img/hyundai creta.jpeg";
import img17 from "../all-images/cars-img/toyota fortuner.jpeg";
import img18 from "../all-images/cars-img/mahindra thar.png";
import img19 from "../all-images/cars-img/kia seltos.jpeg";
import img20 from "../all-images/cars-img/jeep compass.jpeg";
import img21 from "../all-images/cars-img/hyundai tucson.jpeg";
import img22 from "../all-images/cars-img/bmw x1.jpeg";
import img23 from "../all-images/cars-img/mg gloster.jpeg";
import img24 from "../all-images/cars-img/volkswagen tiguan.jpeg";
import img25 from "../all-images/cars-img/byd seal.png";
import img26 from "../all-images/cars-img/hyundai verna.jpeg";
import img27 from "../all-images/cars-img/tata tigor.jpeg";
import img28 from "../all-images/cars-img/bmw 3.jpeg";
import img29 from "../all-images/cars-img/Toyota Innova Crysta.jpg";
import img30 from "../all-images/cars-img/byd e6.jpeg";
import img31 from "../all-images/cars-img/maruti ertiga.jpeg";
import img32 from "../all-images/cars-img/renault triber.jpeg";
import img33 from "../all-images/cars-img/kia ev6.jpeg";

const carData = [
  {
    brand: "Maruti",
    rating: 275,
    carName: "Maruti Alto K10",
    imgUrl: img01,
    Mileage: "24.39-24 kmpl",
    price: "₹ 3.99 - 5.96 Lakh",
    Fuel: "CNG/Petrol",
    Seating_Capacity: "5",
    Transmission_type: "Manual",
    no_of_cylinder: "3",
    body_type: "Hatchback",
    description:
    "Maruti Alto K10 is a 4, 5 seater Hatchback car. Maruti Alto K10 Price starts from ₹ 3.99 Lakh & top model price goes upto ₹ 5.96 Lakh. This model is available with 998 cc engine option. This car is available in CNG and Petrol options with both Manual & Automatic transmission. It's CNG mileage is 33.85 km/kg & Petrol mileage ranges between 24.39 to 24.9 kmpl. This model is available in 7 colours. Based on Maruti Alto K10 user reviews, it has earned an overall user rating of 4.4 out of 5.",
    category: ["1 to 5 lakh", "Hatchback", "Petrol", "CNG", "5", "Manual"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag",
      engine: "998 cc",
      max_power: "55.92bhp@5300rpm",
      max_torque: "82.1Nm@3400rpm",
      fuel_capacity: "55 Litres",
      ground: "167 mm",
      url: "https://www.marutisuzuki.com/alto-k10?utm_source=google&utm_medium=cpc&utm_campaign=20984751303&utm_term=maruti%20alto%20k10&utm_content=c&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkAdLkI85zLmTGCCbMj53RceTyCQtaoYvjOBJohVp2aPx8-WQTWgKP8aAtFvEALw_wcB"

    },

    {
      brand: "Renault",
      rating: 810,
      carName: "Renault KWID",
      imgUrl: img02,
      Mileage: "21.46-22.30 kmpl",
      price: "₹ 4.70 - 6.45 Lakh",
      Fuel: "Petrol",
      Seating_Capacity: "5",
      Transmission_type: "Manual",
      no_of_cylinder: "3",
      body_type: "Hatchback",
      description:
        "Renault KWID is a 5 seater Hatchback car. Renault KWID Price starts from ₹ 4.70 Lakh & top model price goes upto ₹ 6.45 Lakh. This model is available with 999 cc engine option. This car is available in Petrol option with both Automatic & Manual transmission. It's Petrol mileage ranges between 21.46 to 22.3 kmpl. This model has 2 safety airbags. & 279 Litres boot space. This model is available in 7 colours. Based on Renault KWID user reviews, it has earned an overall user rating of 4.2 out of 5.",
      category: ["1 to 5 lakh","Hatchback","Petrol","5","Manual"],
      key_features: "Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Multi-function Steering Wheel",
      engine: "999 cc",
      max_power: "67.06bhp@5300rpm",
      max_torque: "91Nm@4250rpm",
      fuel_capacity: "28 Litres",
      ground: "184 mm",
      url: "https://www.renault.co.in/cars/renault-kwid.html"
    },
  
    {
      brand: "Maruti",
      rating: 419,
      carName: "Maruti S-Presso",
      imgUrl: img03,
      Mileage: "24.12-25.30 kmpl",
      price: "₹ 4.26 - 6.12 Lakh",
      Fuel: "Petrol/CNG",
      Seating_Capacity: "5",
      Transmission_type: "Manual/Automatic",
      no_of_cylinder: "3",
      body_type: "Hatchback",
      description:
        "Maruti S-Presso is a 4, 5 seater Hatchback car. Maruti S-Presso Price starts from ₹ 4.26 Lakh & top model price goes upto ₹ 6.12 Lakh. This model is available with 998 cc engine option. This car is available in CNG and Petrol options with both Manual & Automatic transmission. It's CNG mileage is 32.73 km/kg & Petrol mileage ranges between 24.12 to 25.3 kmpl. This model has 2 safety airbags. This model is available in 7 colours. Based on Maruti S-Presso user reviews, it has earned an overall user rating of 4.3 out of 5.",
      category: ["1 to 5 lakh","Hatchback","Petrol","CNG","5","Both"],
      key_features: "Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Multi-function Steering Wheel",
      engine: "998 cc",
      max_power: "55.92bhp@5300rpm",
      max_torque: "82.1Nm@3400rpm",
      fuel_capacity: "55 Litres",
      ground: "180 mm",
      url: "https://www.marutisuzuki.com/s-presso?form=testdrive&utm_source=google&utm_medium=cpc&utm_campaign=13800028694&utm_term=suzuki%20s-presso&utm_content=c&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkDl6C6ipOkiN1flWhqSPiQWSohi0GH2cj-xpA9vfIpKwNirf3r3IuEaAh2NEALw_wcB"
    },
  
    {
      brand: "Bajaj",
      rating: 56,
      carName: "Bajaj Qute (RE60)",
      imgUrl: img04,
      Mileage: "43 kmpl",
      price: "₹ 3.61 Lakh",
      Fuel: "CNG",
      Seating_Capacity: "4",
      Transmission_type: "Manual",
      no_of_cylinder: "1",
      body_type: "Hatchback",
      description:
        "Bajaj Qute (RE60) is a 4 seater Hatchback car. Bajaj Qute (RE60) Price is ₹ 3.61 Lakh (ex-showroom). This model is available with 216 cc engine option. This car is available in CNG option with Manual transmission. It's CNG mileage is 43 km/kg. This model has 1 safety airbags. This model is available in 3 colours. Based on Bajaj Qute (RE60) user reviews, it has earned an overall user rating of 4.1 out of 5.",
      category: ["1 to 5 lakh","Hatchback","CNG","4","Manual"],
      key_features: "Alloy Wheels",
      engine: "216 cc",
      max_power: "10.83bhp@5500rpm",
      max_torque: "16.1Nm@4000rpm",
      fuel_capacity: "35 Litres",
      ground: "180 mm",
      url: "https://www.bajajauto.com/three-wheelers/qute"
    },
  
    {
      brand: "PMV",
      rating: 18,
      carName: "PMV EaS-E",
      imgUrl: img05,
      Mileage: "NA",
      price: "₹ 4.79 Lakh",
      Fuel: "Electric",
      Seating_Capacity: "2",
      Transmission_type: "Automatic",
      no_of_cylinder: "NA",
      body_type: "Hatchback",
      description:
        "PMV EaS E is a 2 seater electric car. PMV EaS E Price is ₹ 4.79 Lakh (ex-showroom). It comes with the 160 km battery range. This model has 1 safety airbags. It delivers a top speed of 70 kmph. This model is available in 5 colours. Based on PMV EaS E EV user reviews, it has earned an overall user rating of 4.5 out of 5.",
      category: ["1 to 5 lakh","Hatchback","Electric","2","Automatic"],
      key_features: "Power Windows Front, Alloy Wheels, Air Conditioner",
      engine: "NA",
      max_power: "13.41bhp",
      max_torque: "50Nm",
      fuel_capacity: "Battery Capacity(10 kWh)",
      ground: "170 mm",
      url: "https://pmvelectric.com/product/ease/"
    },


    {
      brand: "Tata",
      rating: 1092,
      carName: "Tata Punch",
      imgUrl: img06,
      Mileage: "18.8-20.09 kmpl",
      price: "₹ 6.13 - 10.20 Lakh",
      Fuel: "Petrol",
      Seating_Capacity: "5",
      Transmission_type: "Automatic",
      no_of_cylinder: "3",
      body_type: "SUV",
      description:
      "Tata Punch is a 5 seater SUV car with FWD option. Tata Punch Price starts from ₹ 6.13 Lakh & top model price goes upto ₹ 10.20 Lakh. This model is available with 1199 cc engine option. This car is available in Petrol and CNG options with both Manual & Automatic transmission. It's Petrol mileage ranges between 18.8 to 20.09 kmpl & CNG mileage is 26.99 km/kg. Punch has got 5 Star safety rating in global NCAP crash test & has 2 safety airbags. & 366 Litres boot space. This model is available in 13 colours. Based on Tata Punch user reviews, it has earned an overall user rating of 4.5 out of 5",
        category: ["5 to 10 lakh","SUV","Petrol","5","Automatic"],
       key_features: "KEY FEATURE : SteeringPower Windows, FrontAnti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate ControlFog Lights , FrontAlloy Wheels",
       engine: "1199 cc",
       max_power: "86.63bhp@6000rpm",
       max_torque: "115Nm@3250+/-100rpm",
       fuel_capacity: "37 Litres",
       ground: "187 mm",
       url: "https://cars.tatamotors.com/punch/ice.html"
      },
      
      {
        brand: "Toyota",
        rating: 3,
        carName: "Toyota Taisor",
        imgUrl: img07,
        Mileage: "20 - 22.8 kmpl",
        price: "₹ 7.74 - 13.04 Lakh",
        Fuel: "Petrol",
        Seating_Capacity: "5",
        Transmission_type: "Automatic",
        no_of_cylinder: "3",
        body_type: "SUV",
        description:
        "Toyota Taisor is a 5 seater SUV car with FWD option. Toyota Taisor Price starts from ₹ 7.74 Lakh & top model price goes upto ₹ 13.04 Lakh. It offers 12 variants in the 998 cc & 1197 cc engine options. This car is available in Petrol and CNG options with both Manual & Automatic transmission. It's Petrol mileage ranges between 20 to 22.8 kmpl & CNG mileage is 28.5 km/kg. This model has 2-6 safety airbags. This model is available in 8 colours. Based on Toyota Taisor user reviews, it has earned an overall user rating of 4.5 out of 5.",
          category: ["5 to 10 lakh","SUV","Petrol","5","Automatic"],
          key_features: "KEY FEATURES : Cruise control, engine-idle start-stop functionability, flat-bottom steering wheel",
          engine: "998 cc",
          max_power: "98.69bhp@5500rpm",
          max_torque: "147.6Nm@2000-4500rpm",
          fuel_capacity: "37 Litres",
          ground: "190 mm",
          url: "https://www.toyotabharat.com/showroom/urbancruiser-taisor/"
         },

        {
          brand: "Tata",
          rating: 461,
          carName: "Tata Nexon",
          imgUrl: img08,
          Mileage: "17.01-24.08 kmpl",
          price: "₹ 8.15 - 15.80 Lakh",
          Fuel: "Diesel",
          Seating_Capacity: "5",
          Transmission_type: "Automatic",
          no_of_cylinder: "4",
          body_type: "SUV",
          description:
          "The Tata Nexon is a compact SUV produced by the Indian automotive manufacturer Tata Motors. Launched in 2017, the Nexon is known for its modern design, spacious interior, and competitive pricing. It offers various features such as touchscreen infotainment system, multiple engine options including petrol and diesel, and a range of safety features like dual front airbags, ABS with EBD, and rear parking sensors. The Nexon has gained popularity for its blend of style, performance, and affordability in the compact SUV segment.",
            category: ["5 to 10 lakh","SUV","Diesel","Automatic","5",],
            key_features: "10.25” Digital Driver’s Display, 360° Camera, Front Seat Ventilation",
            engine: "1497 cc",
            max_power: "113.31bhp@3750rpm",
            max_torque: "260Nm@1500-2750rpm",
            fuel_capacity: "37 Litres",
            ground: "208 mm",
            url: "https://cars.tatamotors.com/nexon/ice.html"
  
          },
          {
          brand: "Maruti",
          rating: 559,
          carName: "Maruti Brezza",
          imgUrl: img09,
          Mileage: "17.38-19.89kmpl",
          price: "₹ 8.34 - 14.14 Lakh",
          Fuel: "Petrol",
          Seating_Capacity: "5",
          Transmission_type: "Automatic",
          no_of_cylinder: "4",
          body_type: "SUV",
          description:
          "Maruti Brezza is a 5 seater SUV car with FWD option. Maruti Brezza Price starts from ₹ 8.34 Lakh & top model price goes upto ₹ 14.14 Lakh. This model is available with 1462 cc engine option. This car is available in Petrol and CNG options with both Manual & Automatic transmission. It's Petrol mileage ranges between 17.38 to 19.89 kmpl & CNG mileage is 25.51 km/kg. This model has 2-6 safety airbags. & 328 Litres boot space. This model is available in 10 colours. Based on Maruti Brezza user reviews, it has earned an overall user rating of 4.4 out of 5.",
            category: ["5 to 10 lakh","SUV","5","Automatic","Petrol"],
            key_features: "Digital Instrument Cluster ,Engine Start/Stop Button,Sunroof,Powered Driver Seat,360 Degree Camera, 360-degree camera, Heads-up display, 9-inch touchscreen",
            engine: "1462 cc",
            max_power: "101.64bhp@6000rpm",
            max_torque: "136.8Nm@4400rpm",
            fuel_capacity: "48 Litres",
            ground: "198 mm",
            url: "https://cars.tatamotors.com/nexon/ice.html"


          },

          {
            brand: "Maruti",
            rating: 435,
            carName: "Maruti FRONX",
            imgUrl: img10,
            Mileage: "20.01-22.89 kmpl",
            price: "₹ 7.51 - 13.04 Lakh",
            Fuel: "Petrol",
            Seating_Capacity: "5",
            Transmission_type: "Automatic",
            no_of_cylinder: "3",
            body_type: "SUV",
            description:
            "Maruti FRONX is a 5 seater SUV car with FWD option. Maruti FRONX Price starts from ₹ 7.51 Lakh & top model price goes upto ₹ 13.04 Lakh. It offers 14 variants in the 998 cc & 1197 cc engine options. This car is available in CNG and Petrol options with both Manual & Automatic transmission. It's CNG mileage is 28.51 km/kg & Petrol mileage ranges between 20.01 to 22.89 kmpl. This model has 2-6 safety airbags. This model is available in 10 colours. Based on Maruti FRONX user reviews, it has earned an overall user rating of 4.6 out of 5.",
              category: ["5 to 10 lakh","10 to 15 lakh","SUV","5","petrol","Automatic"],
              key_features: "Heads-up display, 360-degree camera, Wireless Android Auto and Apple CarPlay",
              engine: "998 cc",
              max_power: "98.69bhp@5500rpm",
              max_torque: "147.6Nm@2000-4500rpm",
              fuel_capacity: "37 Litres",
              ground: "190 mm",
              url: "https://www.nexaexperience.com/fronx"
        
            },
    


    {
      brand: "Mahindra",
      rating: 1163,
      carName: "Mahindra Thar",
      imgUrl: img11,
      Mileage: "9 kmpl",
      price: "₹ 11.25 - 17.60 Lakh",
      Fuel: "Diesel",
      Seating_Capacity: "4",
      Transmission_type: "Automatic",
      no_of_cylinder: "4",
      body_type: "SUV",
      description: "Mahindra Thar is a 4 seater SUV car with 4WD / RWD options. Mahindra Thar Price starts from ₹ 11.25 Lakh & top model price goes upto ₹ 17.60 Lakh. It offers 19 variants in the 1497 cc & 2184 cc engine options. This car is available in Petrol and Diesel options with both Automatic & Manual transmission. It's Petrol mileage is 15.2 kmpl & Diesel mileage is 15.2 kmpl. This model has 2 safety airbags. This model is available in 5 colours. Based on Mahindra Thar user reviews, it has earned an overall user rating of 4.5 out of 5.",
      category: ["15 to 20 lakh","SUV","Diesel","4","Automatic"],
      key_features: "Power Steering,Power Windows Front,Anti Lock Braking System, Air Conditioner, Driver Airbag, Alloy Wheels, Passenger Airbag, Multi-function Steering Wheel",
      engine: "2184 cc",
      max_power: "130.07bhp@3750rpm",
      max_torque: "300Nm@1600-2800rpm",
      fuel_capacity: "57 Litres",
      ground: "226mm",
      url: "https://auto.mahindra.com/suv/thar"
    },

    {
      brand: "Hyundai",
      rating: 235,
      carName: "Hyundai Creta",
      imgUrl: img12,
      Mileage: "17.4-21.8 kmpl",
      price: "₹ 11 - 20.15 Lakh",
      Fuel: "Petrol",
      Seating_Capacity: "5",
      Transmission_type: "Automatic",
      no_of_cylinder: "4",
      body_type: "SUV",
      description:
      " Hyundai Creta is a 5 seater SUV car with FWD option. Hyundai Creta Price starts from ₹ 11 Lakh & top model price goes upto ₹ 20.15 Lakh. It offers 28 variants in the 1482 cc & 1497 cc engine options. This car is available in Petrol and Diesel options with both Manual & Automatic transmission. It's Petrol mileage ranges between 17.4 to 18.4 kmpl & Diesel mileage ranges between 19.1 to 21.8 kmpl. This model has safety airbags. This model is available in 7 colours. Based on Hyundai Creta user reviews, it has earned an overall user rating of 4.5 out of 5.",
        category: ["20 to 35 lakh","SUV","Petrol","5","Automatic"],
        key_features: 
        "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
        engine: "1482 cc",
        max_power: "157.57bhp@5500rpm",
        max_torque: "253Nm@1500-3500rpm",
        fuel_capacity: "50 Litres",
        ground: "190 mm",
        url: "https://www.hyundai.com/in/en/find-a-car/creta/highlights.html?utm_source=Google-Search&utm_medium=CPC&utm_campaign=Always_On_2024_Creta&utm_term=hyundai%20creta&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkAdlErV-9ZXpgdgOwlFyCWUA4dNlSlnGZXbDnEWfSb-BKLKObUJWtUaAqWwEALw_wcB"
    },
  
  
    {
      brand: "Tata",
      rating: 178,
      carName: "Tata Harrier",
      imgUrl: img13,
      Mileage: "16.80 kmpl",
      price: "₹ 15.49 - 26.44 Lakh",
      Fuel: "Diesel",
      Seating_Capacity: "5",
      Transmission_type: "Automatic",
      no_of_cylinder: "4",
      body_type: "SUV",
      description: "Tata Harrier is a 5 seater SUV car with FWD option. Tata Harrier Price starts from ₹ 15.49 Lakh & top model price goes upto ₹ 26.44 Lakh. This model is available with 1956 cc engine option. This car is available in Diesel option with both Manual & Automatic transmission. It's Diesel mileage is 16.8 kmpl. This model has 6-7 safety airbags. This model is available in 7 colours. Based on Tata Harrier user reviews, it has earned an overall user rating of 4.4 out of 5.",
      category: ["15 to 20 lakh","SUV","Diesel","5","Automatic"],
      key_features: "Power Steering,Power Windows Front,Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1497 cc",
      max_power: "167.62bhp@3750rpm",
      max_torque: "350Nm@1750-2500rpm",
      fuel_capacity: "50 Litres",
      ground: "208mm",
      url: "https://cars.tatamotors.com/nexon/ice.html"
    },
  
    {
      brand: "Mahindra",
      rating: 715,
      carName: "Mahindra Scorpio N",
      imgUrl: img14,
      Mileage: "16.80 kmpl",
      price: "₹ 15.49 - 26.44 Lakh",
      Fuel: "Diesel",
      Seating_Capacity: "8",
      Transmission_type: "Manual",
      no_of_cylinder: "4",
      body_type: "SUV",
      description: "Mahindra Scorpio is a 7, 9 seater SUV car with RWD option. Mahindra Scorpio Price starts from ₹ 13.59 Lakh & top model price goes upto ₹ 17.35 Lakh. This model is available with 2184 cc engine option. This car is available in Diesel option with Manual transmission. This model has 2 safety airbags. This model is available in 4 colours. Based on Mahindra Scorpio user reviews, it has earned an overall user rating of 4.7 out of 5.",
      category: ["15 to 20 lakh", "SUV", "Diesel", "8", "Manual"],
      key_features: "Power Steering,Power Windows Front,Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "2184 cc",
      max_power: "130bhp@3750rpm",
      max_torque: "300Nm@1600-2800rpm",
      fuel_capacity: "60 Litres",
      ground: "187 mm",
      url: "https://auto.mahindra.com/suv/scorpio-n"
    },
  
  {
    brand: "Toyota",
    rating: 490,
    carName: "Toyota Fortuner",
    imgUrl: img17,
    Mileage: "10 kmpl",
    price: "₹ 33.43 - 51.44 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "7",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Toyota Fortuner is a 7 seater SUV car with RWD / 4WD options. Toyota Fortuner Price starts from ₹ 33.43 Lakh & top model price goes upto ₹ 51.44 Lakh. It offers 7 variants in the 2694 cc & 2755 cc engine options. This car is available in Petrol and Diesel options with both Manual & Automatic transmission. It's Petrol mileage is 10 kmpl & Diesel mileage is 8 kmpl. Fortuner has got 4 Star safety rating in global NCAP crash test & has 7 safety airbags. This model is available in 7 colours. Based on Toyota Fortuner user reviews, it has earned an overall user rating of 4.5 out of 5.",
      category: ["20 to 35 lakh","SUV","Diesel","7","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels,Fog Lights-Front",
      engine: "2755 cc",
      max_power: "201.15bhp@3000-3400rpm",
      max_torque: "500Nm@1600-2800rpm",
      fuel_capacity: "80 Litres",
      ground: "200-220mm",
      url: "https://www.toyotabharat.com/showroom/fortuner/index-fortuner.html"
  },

  {
    brand: "Mahindra",
    rating: 490,
    carName: "Mahindra XUV700",
    imgUrl: img18,
    Mileage: "17 kmpl",
    price: "₹ 13.99 - 26.99 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "7",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Mahindra XUV700 is a 5, 6, 7 seater SUV car with FWD / AWD options. Mahindra XUV700 Price starts from ₹ 13.99 Lakh & top model price goes upto ₹ 26.99 Lakh. It offers 37 variants in the 1999 cc & 2198 cc engine options. This car is available in Petrol and Diesel options with both Manual & Automatic transmission. It's Petrol mileage is 15 kmpl & Diesel mileage ranges between 16.57 to 17 kmpl. This model has safety airbags. This model is available in 11 colours. Based on Mahindra XUV700 user reviews, it has earned an overall user rating of 4.6 out of 5.",
      category: ["20 to 35 lakh","SUV","Diesel","7","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "2198 cc",
      max_power: "182.38bhp@3500rpm",
      max_torque: "450Nm@1750-2800rpm",
      fuel_capacity: "60 Litres",
      ground: "200 mm",
      url: "https://auto.mahindra.com/suv/xuv700"
  },

  {
    brand: "Kia",
    rating: 338,
    carName: "Kia Seltos",
    imgUrl: img19,
    Mileage: "17-20.7 kmpl",
    price: "₹ 10.90 - 20.35 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Kia Seltos is a 5 seater SUV car with FWD option. Kia Seltos Price starts from ₹ 10.90 Lakh & top model price goes upto ₹ 20.35 Lakh. It offers 26 variants in the 1482 cc & 1497 cc engine options. This car is available in Petrol and Diesel options with both Automatic & Manual transmission. It's Petrol mileage ranges between 17 to 17.9 kmpl & Diesel mileage ranges between 17 to 20.7 kmpl. This model has safety airbags. This model is available in 9 colours. Based on Kia Seltos user reviews, it has earned an overall user rating of 4.5 out of 5.",
      category: ["20 to 35 lakh","SUV","Diesel","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1493 cc",
      max_power: "114.41bhp@4000rpm",
      max_torque: "250Nm@1500-2750rpm",
      fuel_capacity: "50 Litres",
      ground: "190 mm",
      url: "https://www.kia.com/in/our-vehicles/seltos/showroom.html?utm_source=google&utm_medium=sem&utm_campaign=search_seltos_brand_exact&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkAxRqDOgKfsJY9jPgJ-bkh9wdToL3jFrbUBr-DIbrhOz3-zfbQLdo0aAg_gEALw_wcB"
  },

  {
    brand: "Jeep",
    rating: 256,
    carName: "Jeep Compass",
    imgUrl: img20,
    Mileage: "14.9 - 17.1 kmpl",
    price: "₹ 20.69 - 32.27 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Jeep Compass is a 5 seater SUV car with FWD / 4WD options. Jeep Compass Price starts from ₹ 20.69 Lakh & top model price goes upto ₹ 32.27 Lakh. This model is available with 1956 cc engine option. This car is available in Diesel option with both Manual & Automatic transmission. It's Diesel mileage ranges between 14.9 to 17.1 kmpl. This model has 2-6 safety airbags. This model is available in 7 colours. Based on Jeep Compass user reviews, it has earned an overall user rating of 4.2 out of 5.",
      category: ["20 to 35 lakh","SUV","Diesel","5","Automatic"],      
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1956 cc",
      max_power: "167.67bhp@3700-3800rpm",
      max_torque: "350Nm@1750-2500rpm",
      fuel_capacity: "60 Litres",
      ground: "190 mm",
      url: "https://www.jeep-india.com/new-compass.html"
  },

  {
    brand: "Hyundai",
    rating: 73,
    carName: "Hyundai Tucson",
    imgUrl: img21,
    Mileage: "18 kmpl",
    price: "₹ 29.02 - 35.94 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Hyundai Tucson is a 5 seater SUV car with FWD / 4WD options. Hyundai Tucson Price starts from ₹ 29.02 Lakh & top model price goes upto ₹ 35.94 Lakh. It offers 8 variants in the 1997 cc & 1999 cc engine options. This car is available in Petrol and Diesel options with Automatic transmission. It's Petrol mileage is 13 kmpl & Diesel mileage is 18 kmpl. This model has 6 safety airbags. This model is available in 7 colours. Based on Hyundai Tucson user reviews, it has earned an overall user rating of 4.2 out of 5.",
      category: ["20 to 35 lakh","SUV","Diesel","5", "Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1997 cc",
      max_power: "183.72bhp@4000rpm",
      max_torque: "416Nm@2000-2750rpm",
      fuel_capacity: "54 Litres",
      ground: "192 mm",
      url: "https://www.hyundai.com/in/en/find-a-car/tucson/highlights.html?utm_source=Google-Search&utm_medium=CPC&utm_campaign=Always_On_2024_Tucson&utm_term=hyundai%20tucson&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkCI6sptJCJqyQUWF7NV-tetsbrW_27EyDtBeJVgStFP3cXeMOxMb4gaAiIUEALw_wcB"
  },

  {
    brand: "BMW",
    rating: 73,
    carName: "BMW X1",
    imgUrl: img22,
    Mileage: "20.37 kmpl",
    price: "₹ 49.50 - 52.50 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "BMW X1 is a 5 seater SUV car with FWD option. BMW X1 Price starts from ₹ 49.50 Lakh & top model price goes upto ₹ 52.50 Lakh. It offers 2 variants in the 1499 cc & 1995 cc engine options. This car is available in Diesel and Petrol options with Automatic transmission. It's Diesel mileage is 20.37 kmpl & Petrol mileage is 20.37 kmpl. This model has 10 safety airbags. This model is available in 5 colours. Based on BMW X1 user reviews, it has earned an overall user rating of 4.2 out of 5.",
      category: ["35 to 50 lakh","SUV","Diesel","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Fog Lights - Front",
      engine: "1995 cc",
      max_power: "147.51bhp@3750-4000rpm",
      max_torque: "360Nm@1500–2500rpm",
      fuel_capacity: "51 Litres",
      ground: "183 mm",
      url: "https://www.bmw.in/en/all-models/x-series/X1/2022/bmw-x1-overview.html"
  },

  {    
    brand: "MG",
    rating: 148,
    carName: "MG Gloster",
    imgUrl: img23,
    Mileage: "12.04 - 13.92 kmpl",
    price: "₹ 38.80 - 43.87 Lakh",
    Fuel: "Diesel",
    Seating_Capacity: "7",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "MG Gloster is a 6, 7 seater SUV car with RWD / 4WD options. MG Gloster Price starts from ₹ 38.80 Lakh & top model price goes upto ₹ 43.87 Lakh. This model is available with 1996 cc engine option. This car is available in Diesel option with Automatic transmission. It's Diesel mileage ranges between 12.04 to 13.92 kmpl. This model has 6 safety airbags. This model is available in 4 colours. Based on MG Gloster user reviews, it has earned an overall user rating of 4.2 out of 5.",
    category: ["35 to 50 lakh","SUV","Diesel","7","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Fog Lights - Front",
      engine: "1996 cc",
      max_power: "212.55bhp@4000rpm",
      max_torque: "478.5Nm@1500-2400rpm",
      fuel_capacity: "75 Litres",
      ground: "210 mm",
      url: "https://www.mgmotor.co.in/vehicles/mggloster"
  },

  {    
    brand: "Volkswagen",
    rating: 148,
    carName: "Volkswagen Tiguan",
    imgUrl: img24,
    Mileage: "12.65 kmpl",
    price: "₹ 35.17 Lakh",
    Fuel: "Petrol",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "SUV",
    description:
    "Volkswagen Tiguan is a 5 seater SUV car with AWD option. Volkswagen Tiguan Price is ₹ 35.17 Lakh (ex-showroom). This model is available with 1984 cc engine option. This car is available in Petrol option with Automatic transmission. It's Petrol mileage is 12.65 kmpl. Tiguan has got 5 Star safety rating in global NCAP crash test & has 6 safety airbags. This model is available in 7 colours. Based on Volkswagen Tiguan user reviews, it has earned an overall user rating of 4.2 out of 5.",
    category: ["35 to 50 lakh","SUV","Petrol","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1984 cc",
      max_power: "187.74bhp@4200-6000rpm",
      max_torque: "320Nm@1500-4100rpm",
      fuel_capacity: "60 Litres",
      ground: "191 mm",
      url: "https://www.volkswagen.co.in/en/models/tiguan.html"
  },

  {    
    brand: "BYD",
    rating: 15,
    carName: "BYD Seal",
    imgUrl: img25,
    Mileage: "NA",
    price: "₹ 41 - 53 Lakh",
    Fuel: "Electric",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "NA",
    body_type: "Sedan",
    description:
    "BYD Seal is a 5 seater electric car. BYD Seal Price starts from ₹ 41 Lakh & top model price goes upto ₹ 53 Lakh. It offers 3 variants with a battery range between 510 to 650 km. This model has 9 safety airbags. It can reach 0-100 km in just 5.9 Seconds. This model is available in 4 colours. Based on BYD Seal EV user reviews, it has earned an overall user rating of 4.2 out of 5.",
    category: ["35 to 50 lakh","Sedan","Electric","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1984 cc",
      max_power: "308.43bhp",
      max_torque: "360Nm",
      fuel_capacity: "Battery Capacity(82.56 kWh)",
      ground: "145 mm",
      url: "https://www.byd.com/eu/car/seal"
  },

  {    
    brand: "Hyundai",
    rating: 442,
    carName: "Hyundai Verna",
    imgUrl: img26,
    Mileage: "18.6-20.6 kmpl",
    price: "₹ 11 - 17.42 Lakh",
    Fuel: "Petrol",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "4",
    body_type: "Sedan",
    description:
    "Hyundai Verna is a 5 seater Sedan car. Hyundai Verna Price starts from ₹ 11 Lakh & top model price goes upto ₹ 17.42 Lakh. It offers 14 variants in the 1482 cc & 1497 cc engine options. This car is available in Petrol option with both Manual & Automatic transmission. It's Petrol mileage ranges between 18.6 to 20.6 kmpl. This model has 6 safety airbags. This model is available in 9 colours. Based on Hyundai Verna user reviews, it has earned an overall user rating of 4.6 out of 5.",
    category: ["10 to 15 lakh","Sedan","Petrol","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
      engine: "1482 cc",
      max_power: "157.57bhp@5500rpm",
      max_torque: "253Nm@1500-3500rpm",
      fuel_capacity: "45 Litres",
      ground: "165 mm",
      url: "https://www.hyundai.com/in/en/find-a-car/verna/highlights"
  },

  {    
    brand: "Tata",
    rating: 341,
    carName: "Tata Tigor",
    imgUrl: img27,
    Mileage: "19.28 - 19.6 kmpl",
    price: "₹ 6.30 - 9.55 Lakh",
    Fuel: "CNG/Petrol",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "3",
    body_type: "Sedan",
    description:
    "Tata Tigor is a 5 seater Sedan car. Tata Tigor Price starts from ₹ 6.30 Lakh & top model price goes upto ₹ 9.55 Lakh. This model is available with 1199 cc engine option. This car is available in CNG and Petrol options with both Automatic & Manual transmission. It's CNG mileage ranges between 26.49 to 28.06 km/kg & Petrol mileage ranges between 19.28 to 19.6 kmpl. This model has 2 safety airbags. This model is available in 5 colours. Based on Tata Tigor user reviews, it has earned an overall user rating of 4.2 out of 5.",
    category: ["5 to 10 lakh","Sedan","Petrol","CNG","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Wheel Covers, Automatic Climate Control, Multi-function Steering Wheel",
      engine: "1199 cc",
      max_power: "72.41bhp@6000rpm",
      max_torque: "95Nm@3500rpm",
      fuel_capacity: "70 Litres",
      ground: "170 mm",
      url: "https://cars.tatamotors.com/tigor/ice.html"
  },

  {    
    brand: "BMW",
    rating: 91,
    carName: "BMW 3",
    imgUrl: img28,
    Mileage: "13.02 kmpl",
    price: "₹ 72.9 Lakh",
    Fuel: "Petrol",
    Seating_Capacity: "5",
    Transmission_type: "Automatic",
    no_of_cylinder: "6",
    body_type: "Sedan",
    description:
    "BMW 3 Series is a 5 seater Luxury car with 4WD option. BMW 3 Series Price is ₹ 72.90 Lakh (ex-showroom). This model is available with 2998 cc engine option. The model is equipped with EngineType engine that produces 368.78bhp@5500-6500rpm and 500Nm@1900-5000rpm of torque. It can reach 0-100 km in just 4.4 Seconds & delivers a top speed of 253 kmph. It's Petrol mileage is 13.02 kmpl. Its other key specifications include its boot space of 480 Litres. This model is available in 2 colours. Based on BMW 3 Series user reviews, it has earned an overall user rating of 4.1 out of 5.",
    category: ["35 to 50 lakh","Sedan","Petrol","5","Automatic"],
      key_features: 
      "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Fog Lights-Front, Alloy Wheels",
      engine: "2998 cc",
      max_power: "368.78bhp@5500-6500rpm",
      max_torque: "500Nm@1900-5000rpm",
      fuel_capacity: "59 Litres",
      ground: "165 mm",
      url: "https://www.bmw-bavariamotors.in/new-cars/3-series-3-Gran-Limousine?bmw_leadsource=googlesearch_3gl_goa_nov&gad_source=1#testdriveform"
  },

  {    
  brand: "Toyota",
  rating: 237,
  carName: "Toyota Innova Crysta",
  imgUrl: img29,
  Mileage: "12 kmpl",
  price: "₹ 19.99 - 26.30 Lakh",
  Fuel: "Diesel",
  Seating_Capacity: "7",
  Transmission_type: "Manual",
  no_of_cylinder: "4",
  body_type: "MUV",
  description:
  "Toyota Innova Crysta is a 7, 8 seater MUV car. Toyota Innova Crysta Price starts from ₹ 19.99 Lakh & top model price goes upto ₹ 26.30 Lakh. This model is available with 2393 cc engine option. This car is available in Diesel option with Manual transmission. This model has 3-7 safety airbags. This model is available in 5 colours. Based on Toyota Innova Crysta user reviews, it has earned an overall user rating of 4.5 out of 5.",
  category: ["15 to 20 lakh","20 to 35 lakh","MUV","Diesel","7","Both"],
    key_features: 
    "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
    engine: "2393 cc",
    max_power: "147.51bhp@3400rpm",
    max_torque: "343Nm@1400-2800rpm",
    fuel_capacity: "55 Litres",
    ground: "176 mm",
    url: "https://www.toyotabharat.com/showroom/innova-crysta/"
},

{
  brand: "BYD",
  rating: 237,
  carName: "BYD E6",
  imgUrl: img30,
  Mileage: "NA",
  price: "₹ 29.15 Lakh",
  Fuel: "Electric",
  Seating_Capacity: "5",
  Transmission_type: "Automatic",
  no_of_cylinder: "NA",
  body_type: "MUV",
  description:
  "BYD E6 is a 5 seater electric car. BYD E6 Price is ₹ 29.15 Lakh (ex-showroom). It comes with the 520 km battery range. It can be charged in 12H-AC-6.6kW-(0-100%) & also has fast charging facility. This model has 4 safety airbags. & 580 Litres boot space. It delivers a top speed of 130 kmph. This model is available in 3 colours. Based on BYD E6 EV user reviews, it has earned an overall user rating of 4.1 out of 5.",
  category: ["20 to 35 lakh","MUV","Electric","5","Automatic"],
    key_features: 
    "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
    engine: "NA",
    max_power: "93.87bhp",
    max_torque: "180Nm",
    fuel_capacity: "Battery Capacity(71.7 kWh)",
    ground: "170 mm",
    url: "https://bydautoindia.com/all-new-e6"

},

{    
  brand: "Maruti",
  rating: 493,
  carName: "Maruti Ertiga",
  imgUrl: img31,
  Mileage: "20-21 kmpl",
  price: "₹ 8.69 - 13.03 Lakh",
  Fuel: "Petrol/CNG",
  Seating_Capacity: "7",
  Transmission_type: "Manual/Automatic",
  no_of_cylinder: "4",
  body_type: "MUV",
  description:
  "Maruti Ertiga is a 7 seater MUV car. Maruti Ertiga Price starts from ₹ 8.69 Lakh & top model price goes upto ₹ 13.03 Lakh. This model is available with 1462 cc engine option. This car is available in Petrol and CNG options with both Manual & Automatic transmission. It's Petrol mileage ranges between 20.3 to 20.51 kmpl & CNG mileage is 26.11 km/kg. This model has 2-4 safety airbags. This model is available in 7 colours. Based on Maruti Ertiga user reviews, it has earned an overall user rating of 4.5 out of 5.",
  category: ["5 to 10 lakh","10 to 15 lakh","MUV","Petrol","CNG","7","Both"],
    key_features: 
    "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Alloy Wheels, Multi-function Steering Wheel",
    engine: "1462 cc",
    max_power: "101.64bhp@6000rpm",
    max_torque: "136.8Nm@4400rpm",
    fuel_capacity: "45 Litres",
    ground: "185 mm",
    url: "https://www.marutisuzuki.com/ertiga"
},

{    
  brand: "Renault",
  rating: 1084,
  carName: "Renault Triber",
  imgUrl: img32,
  Mileage: "18.2-20 kmpl",
  price: "₹ 6 - 8.97 Lakh",
  Fuel: "Petrol",
  Seating_Capacity: "7",
  Transmission_type: "Manual/Automatic",
  no_of_cylinder: "3",
  body_type: "MUV",
  description:
  "Renault Triber is a 7 seater MUV car. Renault Triber Price starts from ₹ 6 Lakh & top model price goes upto ₹ 8.97 Lakh. This model is available with 999 cc engine option. This car is available in Petrol option with both Manual & Automatic transmission. It's Petrol mileage ranges between 18.2 to 20 kmpl. Triber has got 4 Star safety rating in global NCAP crash test & has 2-4 safety airbags. & 84 Litres boot space. This model is available in 10 colours. Based on Renault Triber user reviews, it has earned an overall user rating of 4.3 out of 5.",
  category: ["5 to 10 lakh","MUV","Petrol","CNG","7","Both"],
    key_features: 
    "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Wheel Covers, Multi-function Steering Wheel, Engine Start Stop Button",
    engine: "999 cc",
    max_power: "71.01bhp@6250rpm",
    max_torque: "96Nm@3500rpm",
    fuel_capacity: "40 Litres",
    ground: "182 mm",
    url: "https://www.renault.co.in/cars/renault-triber.html"
},

{    
  brand: "Kia",
  rating: 104,
  carName: "Kia EV6",
  imgUrl: img33,
  Mileage: "NA",
  price: "₹ 60.95 - 65.95 Lakh",
  Fuel: "Electric",
  Seating_Capacity: "5",
  Transmission_type: "Automatic",
  no_of_cylinder: "NA",
  body_type: "SUV",
  description:
  "Kia EV6 is a 5 seater electric car. Kia EV6 Price starts from ₹ 60.95 Lakh & top model price goes upto ₹ 65.95 Lakh. It offers 2 variants with a battery range 708 km. It can be charged in 18Min DC 350 kW-(0-80%) & also has fast charging facility. This model has 8 safety airbags. This model is available in 5 colours. Based on Kia EV6 user reviews, it has earned an overall user rating of 4.4 out of 5.",
  category: ["35 to 50 lakh","SUV","Electric","5","Automatic"],
    key_features: 
    "KEY FEATURES: Power Steering, Power Windows Front, Anti Lock Braking System, Air Conditioner, Driver Airbag, Passenger Airbag, Automatic Climate Control, Fog Lights - Front, Alloy Wheels",
    engine: "NA",
    max_power: "320.55bhp",
    max_torque: "605Nm",
    fuel_capacity: "Battery Capacity(77.4 kWh)",
    ground: "178 mm",
    url: "https://www.kia.com/in/our-vehicles/ev6/showroom.html?utm_source=google&utm_medium=sem&utm_campaign=search_ev6_brand&gad_source=1&gclid=CjwKCAjw8diwBhAbEiwA7i_sJcK3CVNeJo-Ha7PxGqL_8RF9xtd464IE7rPdMEzxSDD2bjHvxJctoxoCgxIQAvD_BwE#block-3"
},





];

export default carData;