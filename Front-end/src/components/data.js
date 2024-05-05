const data = [
    {
      id: 0,
      // img: "/src/assets/img/product1.jpg",
      img : [
        {
          image: "/src/assets/img/product1.jpg",
        },
        {
          image1: "/src/assets/img/product1.jpg",
        },
        {
          image2: "/src/assets/img/product1.jpg",
        },
      ],
      name: "Nike Air01",
      price: "198.00",
      category : "Banarsi",
      colour : "Red",
      oldprice: "198.00",
      discount: "20% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 1,
      // img: "/src/assets/img/product2.jpg",
      img : [
        {
          image: "/src/assets/img/product2.jpg",
        },
        {
          image1: "/src/assets/img/product2.jpg",
        },
        {
          image2: "/src/assets/img/product2.jpg",
        },
      ],
      name: "Sportswear Futura",
      price: "208.00",
      oldprice: "198.00",
      category : "Banarsi",
      colour : "Red",
      discount: "40% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 2,
      // img: "/src/assets/img/product3.jpg",
      img : [
        {
          image: "/src/assets/img/product3.jpg",
        },
        {
          image1: "/src/assets/img/product3.jpg",
        },
        {
          image2: "/src/assets/img/product3.jpg",
        },
      ],
      name: "Royal Collection",
      price: "104.00",
      category : "Banarsi",
      colour : "Red",
      oldprice: "198.00",
      discount: "35% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 3,
      // img: "/src/assets/img/product4.jpg",
      img : [
        {
          image: "/src/assets/img/product4.jpg",
        },
        {
          image1: "/src/assets/img/product4.jpg",
        },
        {
          image2: "/src/assets/img/product4.jpg",
        },
      ],
      name: "t-shirt combo pack",
      price: "299.00",
      oldprice: "198.00",
      category : "Banarsi",
      colour : "Red",
      discount: "40% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 4,
      // img: "/src/assets/img/product5.jpg",
      img : [
        {
          image: "/src/assets/img/product5.jpg",
        },
        {
          image1: "/src/assets/img/product5.jpg",
        },
        {
          image2: "/src/assets/img/product5.jpg",
        },
      ],
      name: "CozyCraze Hoodies",
      price: "159.00",
      category : "Banarsi",
      colour : "Red",
      oldprice: "198.00",
      discount: "23% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 5,
      // img: "/src/assets/img/product6.jpg",
      img : [
        {
          image: "/src/assets/img/product6.jpg",
        },
        {
          image1: "/src/assets/img/product6.jpg",
        },
        {
          image2: "/src/assets/img/product6.jpg",
        },
      ],
      name: "LuxeLoom Purses",
      price: "189.00",
      oldprice: "198.00",
      category : "Banarsi",
      colour : "Red",
      discount: "30% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 6,
      // img: "/src/assets/img/product6.jpg",
      img : [
        {
          image: "/src/assets/img/product6.jpg",
        },
        {
          image1: "/src/assets/img/product6.jpg",
        },
        {
          image2: "/src/assets/img/product6.jpg",
        },
      ],
      name: "LuxeLoom Purses",
      price: "189.00",
      category : "Banarsi",
      colour : "Red",
      oldprice: "198.00",
      discount: "30% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
      id: 7,
      // img: "/src/assets/img/product6.jpg",
      img : [
        {
          image: "/src/assets/img/product6.jpg",
        },
        {
          image1: "/src/assets/img/product6.jpg",
        },
        {
          image2: "/src/assets/img/product6.jpg",
        },
      ],
      name: "LuxeLoom Purses",
      price: "189.00",
      category : "Banarsi",
      colour : "Red",
      oldprice: "198.00",
      discount: "30% Off",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia alias et soluta ratione? Voluptates!",
    },
    {
        id: 8,
        // img: "/src/assets/img/product7.jpg",
        img : [
          {
            image:  "/src/assets/img/product7.jpg",
          },
          {
            image1:  "/src/assets/img/product7.jpg",
          },
          {
            image2:  "/src/assets/img/product7.jpg",
          },
        ],
        name: "FrostFire Outerlayers",
        price: "398.00",
        category : "Banarsi",
        colour : "Red",
        discount: "24% Off",
        oldprice: "198.00",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 9,
        // img: "/src/assets/img/product8.jpg",
        img : [
          {
            image:  "/src/assets/img/product8.jpg",
          },
          {
            image1:  "/src/assets/img/product8.jpg",
          },
          {
            image2: "/src/assets/img/product8.jpg",
          },
        ],
        name: "DaintyDoll Dresses",
        price: "258.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 10,
        // img: "/src/assets/img/product9.jpg",
        img : [
          {
            image:  "/src/assets/img/product9.jpg",
          },
          {
            image1:  "/src/assets/img/product9.jpg",
          },
          {
            image2: "/src/assets/img/product9.jpg",
          },
        ],
        name: "TrendTraverse Bag",
        price: "104.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "35% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 11,
        // img: "/src/assets/img/product10.jpg",
        img : [
          {
            image:  "/src/assets/img/product10.jpg",
          },
          {
            image1: "/src/assets/img/product10.jpg",
          },
          {
            image2: "/src/assets/img/product10.jpg",
          },
        ],
        name: "Fitness Footgear",
        price: "299.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 12,
        // img: "/src/assets/img/product11.jpg",
        img : [
          {
            image:  "/src/assets/img/product11.jpg",
          },
          {
            image1: "/src/assets/img/product11.jpg",
          },
          {
            image2: "/src/assets/img/product11.jpg",
          },
        ],
        name: "UrbanBelle Hoodies",
        price: "129.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "28% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 13,
        // img: "/src/assets/img/product12.jpg",
        img : [
          {
            image:  "/src/assets/img/product12.jpg",
          },
          {
            image1: "/src/assets/img/product12.jpg",
          },
          {
            image2: "/src/assets/img/product12.jpg",
          },
        ],
        name: "Elite Handbags",
        price: "189.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "30% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 14,
        // img: "/src/assets/img/product7.jpg",
        img : [
          {
            image:  "/src/assets/img/product7.jpg",
          },
          {
            image1:  "/src/assets/img/product7.jpg",
          },
          {
            image2:  "/src/assets/img/product7.jpg",
          },
        ],
        name: "FrostFire Outerlayers",
        price: "398.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "24% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 15,
        // img: "/src/assets/img/product8.jpg",
        img : [
          {
            image:  "/src/assets/img/product8.jpg",
          },
          {
            image1:  "/src/assets/img/product8.jpg",
          },
          {
            image2: "/src/assets/img/product8.jpg",
          },
        ],
        name: "DaintyDoll Dresses",
        price: "258.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 16,
        // img: "/src/assets/img/product9.jpg",
        img : [
          {
            image:  "/src/assets/img/product9.jpg",
          },
          {
            image1:  "/src/assets/img/product9.jpg",
          },
          {
            image2: "/src/assets/img/product9.jpg",
          },
        ],
        name: "TrendTraverse Bag",
        price: "104.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "35% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 17,
        // img: "/src/assets/img/product10.jpg",
        img : [
          {
            image:  "/src/assets/img/product10.jpg",
          },
          {
            image1: "/src/assets/img/product10.jpg",
          },
          {
            image2: "/src/assets/img/product10.jpg",
          },
        ],
        name: "Fitness Footgear",
        price: "299.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 18,
        // img: "/src/assets/img/product11.jpg",
        img : [
          {
            image:  "/src/assets/img/product11.jpg",
          },
          {
            image1: "/src/assets/img/product11.jpg",
          },
          {
            image2: "/src/assets/img/product11.jpg",
          },
        ],
        name: "UrbanBelle Hoodies",
        price: "129.00",
        oldprice: "198.00",
        discount: "28% Off",
        category : "Banarsi",
        colour : "Red",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 19,
        // img: "/src/assets/img/product12.jpg",
        img : [
          {
            image:  "/src/assets/img/product12.jpg",
          },
          {
            image1: "/src/assets/img/product12.jpg",
          },
          {
            image2: "/src/assets/img/product12.jpg",
          },
        ],
        name: "Elite Handbags",
        price: "189.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "30% Off",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore repudiandae tempore, quos assumenda quae maiores!",
      },
      {
        id: 20,
        img : [
          {
            image: "/src/assets/img/product13.jpg",
          },
          {
            image1: "/src/assets/img/product13.jpg",
          },
          {
            image2: "/src/assets/img/product13.jpg",
          },
        ],
        name: "Canvas Sneakers",
        price: "298.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "28% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 21,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 22,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 23,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 24,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 25,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 26,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 27,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        category : "Banarsi",
        colour : "Red",
        price: "199.00",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 28,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        category : "Banarsi",
        colour : "Red",
        price: "198.00",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 29,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 30,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 31,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 32,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 33,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 34,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 35,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 36,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 37,
        img : [
          {
            image: "/src/assets/img/product14.jpg",
          },
          {
            image1: "/src/assets/img/product14.jpg",
          },
          {
            image2: "/src/assets/img/product14.jpg",
          },
        ],
        name: "Shirt Combo Pack",
        price: "199.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "40% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 38,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 39,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        category : "Banarsi",
        colour : "Red",
        oldprice: "198.00",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
      {
        id: 40,
        img : [
          {
            image: "/src/assets/img/product15.jpg",
          },
          {
            image1: "/src/assets/img/product15.jpg",
          },
          {
            image2: "/src/assets/img/product15.jpg",
          },
        ],
        name: "Hublot Watch",
        price: "198.00",
        oldprice: "198.00",
        category : "Banarsi",
        colour : "Red",
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam aliquam ad ipsa corrupti quaerat quas doloremque eligendi magni?",
      },
  ];
  export default data;