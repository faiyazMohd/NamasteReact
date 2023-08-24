export const MENU_DATA = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "42580",
              name: "Burger King",
              city: "Mumbai",
              slugs: {
                restaurant: "burger-king-ag-patil-marg-nerul-nerul",
                city: "mumbai",
              },
              uniqueId: "dfcc61be-457d-4e29-b153-4ef8bbc9c69b",
              cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              locality: "AG Patil Marg",
              areaName: "Nerul",
              costForTwo: "35000",
              costForTwoMessage: "₹350 for two",
              cuisines: ["Burgers", "American"],
              avgRating: 4.2,
              feeDetails: {
                restaurantId: "42580",
                fees: [
                  { name: "distance", fee: 9900 },
                  { name: "time" },
                  { name: "special" },
                ],
                totalFee: 9900,
                icon: "SurgeAssets/distSurge",
                message:
                  "Based on distance, an additional delivery fee will apply",
              },
              parentId: "166",
              avgRatingString: "4.2",
              totalRatingsString: "10K+ ratings",
              sla: {
                restaurantId: "42580",
                deliveryTime: 38,
                minDeliveryTime: 38,
                maxDeliveryTime: 38,
                lastMileTravel: 9.7,
                serviceability: "SERVICEABLE",
                stressFactor: 0.5832153,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                zoneId: 289,
                slaString: "38 MINS",
                lastMileTravelString: "9.6 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2023-08-23 03:45:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "135 off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹135 off | Use SOCIETY135",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "60% off | Use STEALDEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹135 off | Use code SOCIETY135",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "60% off up to ₹120 | Use code STEALDEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "burger-king-ag-patil-marg-nerul-nerul",
              multiOutlet: true,
              isOpen: true,
              labels: [
                { title: "Timings", message: "null" },
                {
                  title: "Address",
                  message:
                    "Plot no 5, sector 1, AG Patil Marg, Nerul, Navi Mumbai 410706",
                },
                { title: "Cuisines", message: "Burgers,American" },
              ],
              logo: "rng/md/carousel/production/pkcgpsd4df6i5ud3eyuk",
              totalRatings: 10000,
              aggregatedDiscountInfoV2: {
                header: "135 off",
                shortDescriptionList: [
                  {
                    meta: "Flat ₹135 off | Use SOCIETY135",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "60% off | Use STEALDEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Flat ₹135 off | Use code SOCIETY135",
                    discountType: "Flat",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "60% off up to ₹120 | Use code STEALDEAL",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  minValue: 209,
                  maxValue: 299,
                  priority: 1,
                  couponCode: "SOCIETY135",
                  discountInfo: { discountType: "Flat", value: 135 },
                  lockedMessage:
                    "Add items worth ₹<amount> to save ₹135 | Code SOCIETY135",
                  unlockedMessage:
                    "SOCIETY135 Coupon Unlocked! Use it to save ₹135",
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/42580",
              },
              expectationNotifiers: [
                {
                  text: "Based on distance, an additional delivery fee will apply",
                  icon: { imageId: "SurgeAssets/distSurge" },
                  popup: { cta: {} },
                  type: "DISTANCE_FEE_FOOD_LM",
                  enrichedText:
                    "Based on distance, an additional delivery fee will apply",
                  halfCardPopup: { halfCardPopupHeader: {} },
                },
              ],
              generalPurposeInfoListV2: [
                { cta: { info: { recordings: {} }, linkCta: {} } },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              nearestOutletNudge: {
                nearestOutletInfo: {
                  siblingOutlet: {
                    id: "31423",
                    city: "0",
                    slugs: {},
                    areaName: "Cbd Belapur",
                    costForTwo: "0",
                    feeDetails: {},
                    sla: {
                      deliveryTime: 28,
                      lastMileTravel: 5.8,
                      slaString: "28 MINS",
                      lastMileTravelString: "5.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: { restaurantClosedMeta: {} },
                    aggregatedDiscountInfo: { visible: true },
                    badges: {},
                    aggregatedDiscountInfoV2: { visible: true },
                    availabilityServiceabilityMessage:
                      "Temporarily closed for delivery",
                    cartOrderabilityNudgeBanner: {
                      parameters: {},
                      presentation: {},
                    },
                  },
                },
                nearestOutletComms: {
                  title: { text: "Get your order 10 min faster" },
                  subTitle: { text: "Switch to the faster outlet" },
                },
              },
              cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
              latLong: "19.046116003468708,73.02416268736124",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: { left: 10, right: 10, bottom: 16 },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "FLAT ₹135 OFF",
                      offerTagColor: "#E46D47",
                      offerIds: ["4b36e770-aefe-4254-b9ff-afa97755e864"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE SOCIETY135",
                      description: "ABOVE ₹299",
                      offerType: "offers",
                      restId: "42580",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "60% OFF UPTO ₹120",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["f227f8fa-0643-47c1-b311-d536899e437c"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE STEALDEAL",
                      description: "ABOVE ₹189",
                      offerType: "offers",
                      restId: "42580",
                      offerLogo: "offers/deal-of-day",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "10% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      offerIds: ["e30769e2-705a-4cf8-942d-be0b6dda1634"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE INDUSIND100",
                      description: "ABOVE ₹699",
                      offerType: "offers",
                      restId: "42580",
                      offerLogo:
                        "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹80",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "rng/md/ads/production/6de08393313dbf29b8b4c610c30702ad",
                      offerIds: ["9b4931b9-0bea-4fdb-acb9-afa86da43919"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE ONECARD",
                      description: "ABOVE ₹250",
                      offerType: "offers",
                      restId: "42580",
                      offerLogo:
                        "rng/md/ads/production/6de08393313dbf29b8b4c610c30702ad",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                  {
                    info: {
                      header: "FLAT ₹150 OFF",
                      offerTagColor: "#E46D47",
                      offerIds: ["48d18cb2-1e06-4a99-a98f-af1da3043752"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE MYCAMPUS",
                      description: "ABOVE ₹349",
                      offerType: "offers",
                      restId: "42580",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: { type: "OFFER_HALF_CARD" },
                  },
                ],
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {},
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                      title: "Top Picks",
                      carousel: [
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "1079521",
                          creativeId: "TopPicks/PnrRoyWrap",
                          title: "Paneer Royale Wrap",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "116076597",
                              name: "Paneer Royale Wrap",
                              category: "Burgers & Wraps",
                              description:
                                "Loaded wrap with thick paneer patty, lots of veggies and sauces",
                              imageId: "ac57be9fa688f3c2ac5833cd97bb3343",
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "764857",
                          creativeId: "TopPicks/HotnCheez",
                          title: "Hot 'N' Cheezy Burger",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "85689084",
                              name: "Hot 'N' Cheezy Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Chilli Cheese patty, spicy sauce, soft square masala buns. It's cheezy & spicy.",
                              imageId: "zv7fx1ed433greh6tpvn",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "765483",
                          creativeId: "TopPicks/FieryChk",
                          title: "Fiery Chicken Burger",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "11717995",
                              name: "Fiery Chicken Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening.",
                              imageId: "ppxmlepv15e3qexhhq9v",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          type: "TopCarousel",
                          subtype: "image",
                          bannerId: "765562",
                          creativeId: "TopPicks/CknTand",
                          title: "Chicken Tandoori Burger",
                          description: " ",
                          fontColor: "#FFFFFF",
                          dish: {
                            info: {
                              id: "85689109",
                              name: "Chicken Tandoori Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onions.",
                              imageId: "x7zs6wy8jpqbambap3us",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              itemBadge: {},
                              badgesV2: {},
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62374920",
                              name: "Veg Whopper",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "sgnlylsa7gqijo2qydq3",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "87896812",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "549 ratings",
                                  ratingCountV2: "549",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62374911",
                              name: "Chicken Whopper",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "xbcxtblwjmlj36kqkzjo",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379791",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "995 ratings",
                                  ratingCountV2: "995",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689084",
                              name: "Hot 'N' Cheezy Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Chilli Cheese patty, spicy sauce, soft square masala buns. It's cheezy & spicy.",
                              imageId: "zv7fx1ed433greh6tpvn",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "106 ratings",
                                  ratingCountV2: "106",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777413",
                              name: "Paneer Royale Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer.",
                              imageId: "gq6qbyomdgkuql8aevd1",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "65 ratings",
                                  ratingCountV2: "65",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62100517",
                              name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
                              category: "Burger Doubles.",
                              description:
                                "Crispy Veg Double Patty + Crispy Veg Double Patty",
                              imageId: "n3xekdsgny6jdboxy4xw",
                              inStock: 1,
                              isVeg: 1,
                              price: 19800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313501",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "328 ratings",
                                  ratingCountV2: "328",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66985331",
                              name: "Veg Makhani Burst +  Whopper Jr Veg",
                              category: "Burger Doubles.",
                              description:
                                "Veg Makhani Burst + Lite Whopper Jr Veg",
                              imageId: "vrs4vlu7go8nr7q4mcwb",
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313499",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "38 ratings",
                                  ratingCountV2: "38",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66985333",
                              name: "Chicken Makhani Burst + Whopper Jr Chicken",
                              category: "Burger Doubles.",
                              description:
                                "Chicken Makhani Burst + Lite Whopper Jr Chicken",
                              imageId: "gavlmj9y7wo9fubryx19",
                              inStock: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379802",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "70 ratings",
                                  ratingCountV2: "70",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "105241746",
                              name: "Cheezy Bite",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              description:
                                "MRP: 318 |  Save 15%, Hot 'N' Cheezy Burger+1King Fries",
                              imageId: "m5wgy2mjxgzla05jqdsi",
                              inStock: 1,
                              isVeg: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "105241747",
                              name: "Fire Me Up",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              description:
                                "MRP: 318 |  Save 15%, Fiery Chicken Burger + 1 King Fries",
                              imageId: "h3abpmfvnui7auc6lcdt",
                              inStock: 1,
                              price: 27000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.3",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100379554",
                              name: "1 Jr Veg Whopper +1 Chocolate Thick Shake",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              description:
                                "Save Rs. 49 | 1 Jr. Veg Whopper +1 Chocolate Thick Shake",
                              imageId: "guewpefkkopaurmjxwlf",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100379555",
                              name: "1 Jr Chicken Whopper+1 Chocolate Thick Shake",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              description:
                                "Save Rs 49 | 1 Jr. Chicken Whopper+1 Chocolate Thick Shake",
                              imageId: "rt1iucvp8tpwnoi3tiv7",
                              inStock: 1,
                              price: 28900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64775996",
                              name: "2 Crispy Veg Double Patty + 1King Fries + 1Veggie strips",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              imageId: "nijanydurnusuwckrzim",
                              inStock: 1,
                              isVeg: 1,
                              price: 38700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121069070",
                              name: "2 Crispy Chicken Double Patty + 1 King Fries + 1 Chicken Fries",
                              category:
                                "Friends & Family Combo (Save upto 20%)",
                              description:
                                "2 Crispy Chicken Double Patty + 1King Fries + 1 Chicken Fries",
                              imageId: "ocdotiepljysvejigli5",
                              inStock: 1,
                              price: 46700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "33303733",
                              name: "Crispy Veg Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 | Our best-selling burger with crispy veg patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)",
                              imageId: "deyyaxafzufypp1xtpij",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313482",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "481 ratings",
                                  ratingCountV2: "481",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777426",
                              name: "King Fries",
                              category: "Sides",
                              description: "The Perfect Crispy Partner",
                              imageId: "uttwq3j7gos3thsaposd",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313469",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313470",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "572 ratings",
                                  ratingCountV2: "572",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23932414",
                              name: "Chocolate Thick Shake",
                              category: "Beverages",
                              description:
                                "Our Signature Chocolate Thick Shake",
                              imageId: "iixakii4wvkq3dgmpsvc",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "531 ratings",
                                  ratingCountV2: "531",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "83706789",
                              name: "Choco Lava Cup",
                              category: "Desserts",
                              description: "Melty Chocolate filled in cupcake",
                              imageId: "nsm44tzuxpceproaymyr",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64907495",
                              name: "Boneless Wings Large",
                              category: "Chicken Wings.",
                              description: "7pcs Boneless Chicken Bites",
                              imageId: "qefyb4gxjhh0i9iz6ozu",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313444",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      showOutsidePanel: true,
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Whop-A-Dosti Combos ( Save Rs 122)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622489",
                              name: "BFF Combo- Veg",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description: "2 Whopper Jr Veg+2Med Fries+2Pepsi",
                              imageId: "f35ceb73777f02ae2beed92cd174991e",
                              inStock: 1,
                              isVeg: 1,
                              price: 59600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622490",
                              name: "BFF Combo- Chicken",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description:
                                "2Whopper Jr Chicken+2Med Fries+2Pepsi",
                              imageId: "28ec9e7f61902f5dd1be6a091d3c12f6",
                              inStock: 1,
                              price: 63600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622491",
                              name: "Roomies Combo- Veg",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description: "2Veg Whopper+2Med Fries+2Pepsi",
                              imageId: "f3493fdfb6c72748e9a7558dbf8a40ea",
                              inStock: 1,
                              isVeg: 1,
                              price: 65600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622492",
                              name: "Roomies Combo- Chicken",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description: "2Chicken Whopper+2Med Fries+2Pepsi",
                              imageId: "c8381149894036a48afe8cd6f250d6a4",
                              inStock: 1,
                              price: 69600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622493",
                              name: "Soul Bae Combo- Veg",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description:
                                "2Mexican Veg Whopper+2Med Fries+2Pepsi",
                              imageId: "4a0c25bdd1b9b774bf8549802d3503ba",
                              inStock: 1,
                              isVeg: 1,
                              price: 73600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "121622494",
                              name: "Soul Bae Combo- Chicken",
                              category: "Whop-A-Dosti Combos ( Save Rs 122)",
                              description:
                                "2Mexican Chicken Whopper+2Med Fries+2Pepsi",
                              imageId: "3e6587106d2df35985009ac256322347",
                              inStock: 1,
                              price: 77600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "New BK DUOS (Save upto 15%)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716075",
                              name: "Crispy Veg Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "7798d7bed74c81bc0e5ffc677a7d2eef",
                              inStock: 1,
                              isVeg: 1,
                              price: 15000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716076",
                              name: "Veg Crunchy Taco+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "88171677adbbb5f960501fca28514955",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716073",
                              name: "Crispy Chicken Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "53601f4ac59713a4ee2f87de0ddc7cd7",
                              inStock: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716074",
                              name: "Crispy Veg Double Patty Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "2b8b717cfc1d7aac9c1c9d16594735f8",
                              inStock: 1,
                              isVeg: 1,
                              price: 17500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716081",
                              name: "Crunchy Chicken Taco+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "2c42dae7ad0c577c5c99e0ba5e64ade1",
                              inStock: 1,
                              price: 19000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716078",
                              name: "BK Veggie Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "4b6ff71f1ac7fcbba197092e1a178fd3",
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716072",
                              name: "Crispy Chicken Double Patty Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "d065d5e9870ed98fb74d6b58c6e4f455",
                              inStock: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716090",
                              name: "BK Chicken Burger+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "974e1bf8d8c4da51df62bb7116899f1f",
                              inStock: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716088",
                              name: "Whopper Jr Veg+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "9059c61098a54b2fe504515db2cf9bf6",
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716087",
                              name: "Veg Whopper+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "3a2be71b18bcb304c51c1cd2b259bb6d",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716092",
                              name: "Paneer Royale Wrap+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "a7070fe1bdf0ea1f798e0c00b18802ce",
                              inStock: 1,
                              isVeg: 1,
                              price: 27900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120716085",
                              name: "Chicken Whopper+Fries(M)",
                              category: "New BK DUOS (Save upto 15%)",
                              imageId: "33877b9af067d651cf87ee22657e34ff",
                              inStock: 1,
                              price: 27900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Family Feast for 4 (Save upto 37%)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114912595",
                              name: "Premium Family Feast for 4- Veg",
                              category: "Family Feast for 4 (Save upto 37%)",
                              description:
                                "Save Rs. 261 | Veg Whopper + Paneer Royale + Crispy Veg + BK Veggie + 2 Med Fries + 1 Dip + Peri Peri Sachet + Pepsi + Chocolate Thick Shake",
                              imageId: "1a14fabe23a03b7248d11b17a80caeee",
                              inStock: 1,
                              isVeg: 1,
                              price: 84900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114912594",
                              name: "Premium Family Feast for 4- Chicken",
                              category: "Family Feast for 4 (Save upto 37%)",
                              description:
                                "Save Rs. 242 | Chicken Whopper + Fiery Chicken + Crispy Chicken + Chicken Crunchy Taco + 2 Med Fries + 1 Dip + Peri Peri Sachet + Pepsi + Chocolate Thick Shake",
                              imageId: "5a51cefe8054adaede6cfa7137e7c1e3",
                              inStock: 1,
                              price: 89900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114912597",
                              name: "Classic Family Feast for 4- Veg",
                              category: "Family Feast for 4 (Save upto 37%)",
                              description:
                                "Save Rs. 238 | 2 Crispy Veg + BK Veggie + Veg Crunchy Taco + 2 Med Fries + 2 Dips + Pepsi + Chocolate Thick Shake",
                              imageId: "3ff9747682a64122fd4b4a6e0601130c",
                              inStock: 1,
                              isVeg: 1,
                              price: 64900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114912596",
                              name: "Classic Family Feast for 4- Chicken",
                              category: "Family Feast for 4 (Save upto 37%)",
                              description:
                                "Save Rs. 218 | 2 Crispy Chicken + BK Chicken + Chicken Crunchy Taco + 2 Med Fries + 2 Dips + Pepsi + Chocolate Thick Shake",
                              imageId: "abf2088a65b3dfcd30d66d2cfd99e138",
                              inStock: 1,
                              price: 74900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Super Saver Combos (Save upto Rs 90)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453488",
                              name: "Whopper Duo - Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 755. Save Rs 90 | 2Veg Whopper+1King Fries+1Chocolate Shake+1Pepsi(M)",
                              imageId: "415f80050234d1dd8a44566fd24d12f0",
                              inStock: 1,
                              isVeg: 1,
                              price: 66500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453491",
                              name: "Whopper Duo- Non Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 795. Save Rs 90 | 2Chicken Whopper+1King Fries +1Chocolate Shake +1Pepsi(M)",
                              imageId: "7dba38a12fbd8ccb09122fbd18ef2706",
                              inStock: 1,
                              price: 70500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453490",
                              name: "Cheezy Duo - Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 695. Save Rs 90 | 2Hot'N'Cheezy+1King Fries+2Pepsi(M)",
                              imageId: "d42d1a0b7fac4000c38688855cef9266",
                              inStock: 1,
                              isVeg: 1,
                              price: 60500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453502",
                              name: "Fiery Duo - Non Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 695. Save Rs 90 | 2FieryChicken+1King Fries+2Pepsi(M)",
                              imageId: "34535700757b596f4ae80502e7ec9884",
                              inStock: 1,
                              price: 60500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453498",
                              name: "Binging Duo - Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 647. Save Rs 90 | 2Crispy Veg Double Patty+1King Fries+2Chocolate Shake",
                              imageId: "9bce3075b3fb801e41039b325f7bc1bd",
                              inStock: 1,
                              isVeg: 1,
                              price: 55700,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453496",
                              name: "Binging Duo - Non  Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 755. Save Rs 90 | 2Crispy Chicken Double Patty+1King Fries+2Chocolate Shake",
                              imageId: "2feb7d4684459eae42ee8c094d46036d",
                              inStock: 1,
                              price: 66500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453493",
                              name: "Indulgent Duo - Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 695. Save Rs 90 | 2Paneer Royale+1King Fries+2Pepsi(M)",
                              imageId: "8012d8109750604d89914f48fb118570",
                              inStock: 1,
                              isVeg: 1,
                              price: 60500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "119453489",
                              name: "Indulgent Duo - Non Veg",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 695. Save Rs 90 | 2Chicken Tandoor Grill+1King Fries+2Pepsi(M)",
                              imageId: "f9da4f4bdb8e577ae5e3733daea532d2",
                              inStock: 1,
                              price: 60500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88342692",
                              name: "Paneer Royale Burger + Hot 'N' Cheezy Burger + 1 Med Fries",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 533. Save Rs 95! With this Limited Time Offer",
                              imageId: "onssgrtxft7udr5ds7qy",
                              inStock: 1,
                              isVeg: 1,
                              price: 41800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88342693",
                              name: "2 Hot 'N' Cheezy Burger + 1 Med Fries",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 533. Save Rs 95! With this Limited Time Offer",
                              imageId: "pqm4ofmptidnqw9e6pmy",
                              inStock: 1,
                              isVeg: 1,
                              price: 41800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88342694",
                              name: "2 Fiery Chicken Burger + 1 Med Fries",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 533. Save Rs 95! With this Limited Time Offer",
                              imageId: "hyvhcr4g1efoo71itzk5",
                              inStock: 1,
                              price: 41800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88342695",
                              name: "2 Paneer Royale Burger + 1 Med Fries",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 533. Save Rs 95! With this Limited Time Offer",
                              imageId: "zftsnjnvvbmbshojb5zk",
                              inStock: 1,
                              isVeg: 1,
                              price: 41800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "88342696",
                              name: "2 Chicken Tandoori Burger + 1 Med Fries",
                              category: "Super Saver Combos (Save upto Rs 90)",
                              description:
                                "MRP 533. Save Rs 95! With this Limited Time Offer",
                              imageId: "dpceu2bvm3dcrgsdba7f",
                              inStock: 1,
                              price: 41800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Whopper",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "32447487",
                              name: "Mutton Whopper",
                              category: "Whopper",
                              description:
                                "Flame Grilled Signature Mutton Patty Whopper",
                              imageId: "md9oorm6eku5e4nktmuy",
                              inStock: 1,
                              price: 31900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379787",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "152 ratings",
                                  ratingCountV2: "152",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62374920",
                              name: "Veg Whopper",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "sgnlylsa7gqijo2qydq3",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "87896812",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "549 ratings",
                                  ratingCountV2: "549",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "71131955",
                              name: "Veg Whopper with Cheese",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty With Cheese Slice, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "vriqohxtrafiqxmx6k2p",
                              inStock: 1,
                              isVeg: 1,
                              price: 20400,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313467",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "60 ratings",
                                  ratingCountV2: "60",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62374911",
                              name: "Chicken Whopper",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "xbcxtblwjmlj36kqkzjo",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379791",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "995 ratings",
                                  ratingCountV2: "995",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60383972",
                              name: "Mexican Whopper Mutton",
                              category: "Whopper",
                              description:
                                "Taste the fiesta in our Limited Time Mexican Mutton Whopper with a mix of nachos, cheese, a flame-grilled mutton patty, loads of veggies and Mexican flavours between XXL buns.",
                              imageId: "e842b175918475bbbe5255854d7c14f2",
                              inStock: 1,
                              price: 35900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379793",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "41929099",
                              name: "Mutton Whopper Double Patty",
                              category: "Whopper",
                              description:
                                "Two Much Mutton As Delicious Flame-Grilled Patties, Farm-Fresh Veggies And Mayo Is What Makes This Mutton Double Whopper A Feast For The Beast",
                              imageId: "tneo5sklih4wywug1acj",
                              inStock: 1,
                              price: 38900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379788",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "41929171",
                              name: "Veg Whopper Double Patty",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Double Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "xrcphbn2qqfzz7uus38l",
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313458",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "76 ratings",
                                  ratingCountV2: "76",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "71131958",
                              name: "Chicken Whopper with Cheese",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Patty With Cheese Slice, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "nueqj3ssms88hue3eofs",
                              inStock: 1,
                              price: 22400,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379795",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "66 ratings",
                                  ratingCountV2: "66",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60383976",
                              name: "Mexican Whopper Veg",
                              category: "Whopper",
                              description:
                                "Taste the fiesta in our Limited Time Mexican Veg Whopper with a mix of nachos, cheese, an extra crunchy veg patty, loads of veggies and Mexican flavours between XXL buns.",
                              imageId: "0e5ee766e2e3c23c577d1321db0a42ec",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313449",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "106 ratings",
                                  ratingCountV2: "106",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "60383973",
                              name: "Mexican Whopper Chicken",
                              category: "Whopper",
                              description:
                                "Taste the fiesta in our Limited Time Mexican Chicken Whopper with a mix of nachos, cheese, a flame-grilled chicken patty, loads of veggies and Mexican flavours between XXL buns.",
                              imageId: "e59a23d462685204c52c31b43864754d",
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379792",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "41929120",
                              name: "Chicken Whopper Double Patty",
                              category: "Whopper",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Double Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces With Xxl Buns. It’S Not A Burger, It’S A Whopper",
                              imageId: "jcnbdjyhjs6kmbkoxojz",
                              inStock: 1,
                              price: 25900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379789",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "234 ratings",
                                  ratingCountV2: "234",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burgers & Wraps",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777402",
                              name: "Crispy Veg Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Veg Patty, Fresh Onion And Our Signature Sauce",
                              imageId: "eqaon8guufklmil7ayhr",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313454",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "1944 ratings",
                                  ratingCountV2: "1944",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "116076597",
                              name: "Paneer Royale Wrap",
                              category: "Burgers & Wraps",
                              description:
                                "Loaded wrap with thick paneer patty, lots of veggies and sauces",
                              imageId: "ac57be9fa688f3c2ac5833cd97bb3343",
                              inStock: 1,
                              isVeg: 1,
                              price: 20900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117498568",
                              name: "Chicken Makhani Burst Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Enjoy Rich Makhani Flavour With Crispy Chicken Patty Topped With Fresh Onion",
                              imageId: "ajxjn6rht9vc8aplkvbw",
                              inStock: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313446",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "77 ratings",
                                  ratingCountV2: "77",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777403",
                              name: "Crispy Veg Double Patty Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Veg Double Patty, Fresh Onion And Our Signature Sauce",
                              imageId: "phm3t2g7v0lpczvtu6g7",
                              inStock: 1,
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313453",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "408 ratings",
                                  ratingCountV2: "408",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "109618732",
                              name: "BK-Veggie Double Patty Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our tribute to classic American taste. BK veg double patty, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce",
                              imageId: "iajmq3xmw6cg13easydh",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777405",
                              name: "Veg Crunchy Taco",
                              category: "Burgers & Wraps",
                              description:
                                "Crunchy Shell with mix veg filling, crunchy veggies and spicy sauce",
                              imageId: "424358cb32c40669f3aab9ba92d27141",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313447",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777406",
                              name: "Crispy Chicken Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Chicken Patty, Onion And Classic Mayo Sauce",
                              imageId: "mqr237klqgnu0w2pzd94",
                              inStock: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313451",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "1910 ratings",
                                  ratingCountV2: "1910",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "117498567",
                              name: "Veg Makhani Burst Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Enjoy Rich Makhani Flavour With Mix Veg Patty Topped Up With Fresh Onion",
                              imageId: "rnljd0ea2zwgfbhkzwwh",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313443",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777407",
                              name: "Crispy Veg Double Patty with Cheese",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Veg Double Patty, Cheese Slice, Fresh Onion And Our Signature Sauce",
                              imageId: "ndp3akjkdainthdpugjp",
                              inStock: 1,
                              isVeg: 1,
                              price: 12400,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313472",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "118862804",
                              name: "Crispy Veg with Cheese Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger Withcrispy Veg Patty, Cheese Slice, Fresh Onion And Our Signature Sauce",
                              imageId: "whfmakrbktn8fqqtcixu",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313448",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "367 ratings",
                                  ratingCountV2: "367",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777408",
                              name: "BK Chicken Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our tribute to classic American taste. BK chicken patty, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce.",
                              imageId: "9c394429dd2ed06f5fac0305ddea1188",
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "104022463",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777409",
                              name: "Crispy Chicken with Cheese Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Chicken Patty, Cheese Slice, Onion And Classic Mayo Sauce",
                              imageId: "ieec9d9wdbunnpe98vun",
                              inStock: 1,
                              price: 11500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313450",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "448 ratings",
                                  ratingCountV2: "448",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777410",
                              name: "Crunchy Chicken Taco",
                              category: "Burgers & Wraps",
                              description:
                                "Crunchy Shell with chicken patty, crunchy veggies and spicy sauce",
                              imageId: "kzekifdu0vakjkebcxml",
                              inStock: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313442",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "90 ratings",
                                  ratingCountV2: "90",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777411",
                              name: "Whopper Jr Veg",
                              category: "Burgers & Wraps",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns In A Convenient Size. Extra Crunchy Veg Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces",
                              imageId: "y9paueit9iwqcdwv62kf",
                              inStock: 1,
                              isVeg: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313476",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62374928",
                              name: "Whopper Jr Chicken",
                              category: "Burgers & Wraps",
                              description:
                                "Our Signature Whopper With 7 Layers Between The Buns In A Convenient Size. Flame Grilled Chicken Patty, Fresh Onion, Crispy Lettuce, Juicy Tomatoes(seasonal), Tangy Gherkins, Creamy And Smoky Sauces",
                              imageId: "imehwx5nybd2mvbdspag",
                              inStock: 1,
                              price: 16900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379798",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "153 ratings",
                                  ratingCountV2: "153",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777412",
                              name: "Crispy Chicken Double Patty Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Chicken Double Patty, Onion And Classic Mayo Sauce",
                              imageId: "vfagr7gcirgouhiewq66",
                              inStock: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313452",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "680 ratings",
                                  ratingCountV2: "680",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "102670890",
                              name: "Crispy Chicken Double Patty with Cheese",
                              category: "Burgers & Wraps",
                              description:
                                "Our Best-Selling Burger With Crispy Chicken Double Patty, Cheese Slice, Onion And Classic Mayo Sauce.",
                              imageId: "okvymi5tdwyu0io6gr3b",
                              inStock: 1,
                              price: 15400,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379796",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777404",
                              name: "BK Veggie Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our Tribute To Classic American Taste. Bk Veg Patty, Garden Fresh Crispy Lettuce, Juicy Tomato(seasonal) & Our Signature Sauce",
                              imageId: "ylt69e6eeeltgwnf8jla",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "249 ratings",
                                  ratingCountV2: "249",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85586847",
                              name: "BK-Chicken Double Patty Burger",
                              category: "Burgers & Wraps",
                              description:
                                "Our tribute to classic American taste. BK chicken double patty, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce",
                              imageId: "mvuj0ttjafdeebulhop4",
                              inStock: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Kings Premium Burgers",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689084",
                              name: "Hot 'N' Cheezy Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Chilli Cheese patty, spicy sauce, soft square masala buns. It's cheezy & spicy.",
                              imageId: "zv7fx1ed433greh6tpvn",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "106 ratings",
                                  ratingCountV2: "106",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777413",
                              name: "Paneer Royale Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer.",
                              imageId: "gq6qbyomdgkuql8aevd1",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "65 ratings",
                                  ratingCountV2: "65",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11717995",
                              name: "Fiery Chicken Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening.",
                              imageId: "ppxmlepv15e3qexhhq9v",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "1059 ratings",
                                  ratingCountV2: "1059",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689109",
                              name: "Chicken Tandoori Burger",
                              category: "Kings Premium Burgers",
                              description:
                                "Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onions.",
                              imageId: "x7zs6wy8jpqbambap3us",
                              inStock: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "97 ratings",
                                  ratingCountV2: "97",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burger Doubles.",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62100517",
                              name: "Crispy Veg Double Patty + Crispy Veg Double Patty",
                              category: "Burger Doubles.",
                              description:
                                "Crispy Veg Double Patty + Crispy Veg Double Patty",
                              imageId: "n3xekdsgny6jdboxy4xw",
                              inStock: 1,
                              isVeg: 1,
                              price: 19800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313501",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "328 ratings",
                                  ratingCountV2: "328",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66985331",
                              name: "Veg Makhani Burst +  Whopper Jr Veg",
                              category: "Burger Doubles.",
                              description:
                                "Veg Makhani Burst + Lite Whopper Jr Veg",
                              imageId: "vrs4vlu7go8nr7q4mcwb",
                              inStock: 1,
                              isVeg: 1,
                              price: 22900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313499",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "38 ratings",
                                  ratingCountV2: "38",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "55206821",
                              name: "Chicken Whopper + Chicken Whopper",
                              category: "Burger Doubles.",
                              imageId: "yn8qemarnba8st8woxrx",
                              inStock: 1,
                              price: 39800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379801",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "235 ratings",
                                  ratingCountV2: "235",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62382988",
                              name: "BK Veggie Burger + BK Veggie Burger",
                              category: "Burger Doubles.",
                              description:
                                "BK Veggie Burger + BK Veggie Burger",
                              imageId: "bxzazdbhgsttmnoqdhdu",
                              inStock: 1,
                              isVeg: 1,
                              price: 27800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "75 ratings",
                                  ratingCountV2: "75",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "66985333",
                              name: "Chicken Makhani Burst + Whopper Jr Chicken",
                              category: "Burger Doubles.",
                              description:
                                "Chicken Makhani Burst + Lite Whopper Jr Chicken",
                              imageId: "gavlmj9y7wo9fubryx19",
                              inStock: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379802",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "70 ratings",
                                  ratingCountV2: "70",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62100516",
                              name: "Crispy Chicken Double Patty + Crispy Chicken Double Patty",
                              category: "Burger Doubles.",
                              description:
                                "Crispy Chicken Double Patty + Crispy Chicken Double Patty",
                              imageId: "rbsdsxa1esuwgdh3bsh0",
                              inStock: 1,
                              price: 25800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313490",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "352 ratings",
                                  ratingCountV2: "352",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62382979",
                              name: "BK Chicken Burger + BK Chicken Burger",
                              category: "Burger Doubles.",
                              description:
                                "BK Chicken Burger + BK Chicken Burger",
                              imageId: "qfrcbn4v04lkctjsyeoa",
                              inStock: 1,
                              price: 29800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "62 ratings",
                                  ratingCountV2: "62",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "59386383",
                              name: "Veg Whopper + Veg Whopper",
                              category: "Burger Doubles.",
                              description: "Veg Whopper + Veg Whopper",
                              imageId: "kjeubraveyclzcylvfnj",
                              inStock: 1,
                              isVeg: 1,
                              price: 35800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313496",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "89 ratings",
                                  ratingCountV2: "89",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111414520",
                              name: "2 Crispy Veg",
                              category: "Burger Doubles.",
                              imageId: "5cab04c856cc023e482522be309fc5b1",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Friends & Family Combo (Save upto 20%)",
                      categories: [
                        {
                          title: "Buddy Box",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77829565",
                                  name: "6 Crispy Veg",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description: "6 Crispy Veg",
                                  imageId: "deb01939e3eded4c4a633e2085b16139",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.7",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77829566",
                                  name: "4 Crispy Veg + 2 Medium Fries",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description: "4 Crispy Veg + 2 Medium Fries",
                                  imageId: "bd23501ff2292a42b77a8cdcce803a4b",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 38000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "38 ratings",
                                      ratingCountV2: "38",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77829568",
                                  name: "6 Crispy Chicken",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description: "6 Crispy Chicken",
                                  imageId: "617d4dcdb3319a8469bfc0665309523d",
                                  inStock: 1,
                                  price: 45000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "77829567",
                                  name: "4 Crispy Chicken + 2 Medium Fries",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "4 Crispy Chicken + 2 Medium Fries",
                                  imageId: "ff09695b642a74ef985f9acc71a59b5b",
                                  inStock: 1,
                                  price: 46000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "Snack Attack",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75214064",
                                  name: "Veggie Strips(5Pcs) + 1 Dip",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Veggie Strips(5Pcs)+1Easy Cheesy Dip",
                                  imageId: "uxohy5swq99mzwihgqbz",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 7281,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "100313487",
                                      groupName: "Choose your Dips",
                                      choices: [
                                        {
                                          id: "74594800",
                                          name: "Fiery Hell Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594801",
                                          name: "Easy Cheesy Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594802",
                                          name: "Herby Garlic",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75214065",
                                  name: "Chicken Fries(5Pcs)+1Fiery Hell Dip",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Chicken Fries(5Pcs)+1Fiery Hell Dip",
                                  imageId: "imxpwhf0bmxjlvvhjzoj",
                                  inStock: 1,
                                  price: 10281,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "100313489",
                                      groupName: "Choose your Dips",
                                      choices: [
                                        {
                                          id: "74594800",
                                          name: "Fiery Hell Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594801",
                                          name: "Easy Cheesy Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594802",
                                          name: "Herby Garlic",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "34 ratings",
                                      ratingCountV2: "34",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75214066",
                                  name: "Boneless Chicken Wings(4pcs)+1Herby Garlic Dip",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Boneless Chicken Wings(4pcs)+1Herby Garlic Dip",
                                  imageId: "fnhs2dhyb1jkpoqd4veh",
                                  inStock: 1,
                                  price: 17281,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "100313488",
                                      groupName: "Choose your Dips",
                                      choices: [
                                        {
                                          id: "74594800",
                                          name: "Fiery Hell Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594801",
                                          name: "Easy Cheesy Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594802",
                                          name: "Herby Garlic",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "17 ratings",
                                      ratingCountV2: "17",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "75214067",
                                  name: "Boneless Chicken Wings(7Pcs)+1Herby Garlic Dip",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  imageId: "fnhs2dhyb1jkpoqd4veh",
                                  inStock: 1,
                                  price: 27281,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "100313502",
                                      groupName: "Choose your Dips",
                                      choices: [
                                        {
                                          id: "74594800",
                                          name: "Fiery Hell Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594801",
                                          name: "Easy Cheesy Dip",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "74594802",
                                          name: "Herby Garlic",
                                          price: 2381,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "105241746",
                                  name: "Cheezy Bite",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "MRP: 318 |  Save 15%, Hot 'N' Cheezy Burger+1King Fries",
                                  imageId: "m5wgy2mjxgzla05jqdsi",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "105241747",
                                  name: "Fire Me Up",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "MRP: 318 |  Save 15%, Fiery Chicken Burger + 1 King Fries",
                                  imageId: "h3abpmfvnui7auc6lcdt",
                                  inStock: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "109265817",
                                  name: "2 Classic Cold Coffee @139 each",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs. 120 | 2 Classic Cold Coffee @139 each",
                                  imageId: "qxsa61hpfwhrx34v8zfh",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100379554",
                                  name: "1 Jr Veg Whopper +1 Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs. 49 | 1 Jr. Veg Whopper +1 Chocolate Thick Shake",
                                  imageId: "guewpefkkopaurmjxwlf",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100379555",
                                  name: "1 Jr Chicken Whopper+1 Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 49 | 1 Jr. Chicken Whopper+1 Chocolate Thick Shake",
                                  imageId: "rt1iucvp8tpwnoi3tiv7",
                                  inStock: 1,
                                  price: 28900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "105241752",
                                  name: "Fiery Twins",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "MRP: 398 |  Save 15%, Fiery Chicken Burger+Fiery Chicken Burger",
                                  imageId: "muqfnlrqyivs7vwq1xvo",
                                  inStock: 1,
                                  price: 33800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "105241751",
                                  name: "Cheezy Twins",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "MRP: 398 |  Save 15%, Hot 'N' Cheezy Burger + Hot 'N' Cheezy Burger",
                                  imageId: "npimka56foklar6xs6fp",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 33800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "64775996",
                                  name: "2 Crispy Veg Double Patty + 1King Fries + 1Veggie strips",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  imageId: "nijanydurnusuwckrzim",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 38700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "64 ratings",
                                      ratingCountV2: "64",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "121069070",
                                  name: "2 Crispy Chicken Double Patty + 1 King Fries + 1 Chicken Fries",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "2 Crispy Chicken Double Patty + 1King Fries + 1 Chicken Fries",
                                  imageId: "ocdotiepljysvejigli5",
                                  inStock: 1,
                                  price: 46700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100379549",
                                  name: "2 Crispy Chicken+1 King Fries+1 Cold Coffee+1 Medium Pepsi",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs. 108 | 2 Crispy Chicken+1 King Fries+1 Cold Coffee+1 Medium Pepsi",
                                  imageId: "cqcktlyu3dbywdcrxsum",
                                  inStock: 1,
                                  price: 48900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100379552",
                                  name: "1 Crispy Veg Double Patty+1 Classic Cold Coffee",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs. 50 | 1 Crispy Veg Double Patty+1 Classic Cold Coffee",
                                  imageId: "naxcbpisx7szjqsqkxi1",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "100379553",
                                  name: "1 Crispy Chicken+1 Classic Cold Coffee",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs.  50 | 1 Crispy Chicken+1 Classic Cold Coffee",
                                  imageId: "bvn4sv7sfmfses78eb02",
                                  inStock: 1,
                                  price: 23400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "2.4",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                        {
                          title: "King Deals (Save Rs 99)",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087686",
                                  name: "Crispy Veg + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | Crispy Veg + Med Fries + Chocolate Thick Shake",
                                  imageId: "307556c7b9964434829feda7e363e0c9",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087687",
                                  name: "Crispy Chicken + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | Crispy Chicken + Med Fries + Chocolate Thick Shake",
                                  imageId: "50894d7b5b546fdb9a41175d83b63f73",
                                  inStock: 1,
                                  price: 28500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087688",
                                  name: "BK Veggie + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | BK Veggie + Med Fries + Chocolate Thick Shake",
                                  imageId: "1c448fd8d9ab3e3ff00450bb28285bd4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 31400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087689",
                                  name: "BK Chicken + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  imageId: "16147f1ede2c7638bcdc7d65b079ceda",
                                  inStock: 1,
                                  price: 33400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087690",
                                  name: "Veg Whopper + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  imageId: "f45eb69ba06bbb4d6ba034567650cbad",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087691",
                                  name: "Chicken Whopper + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | Chicken Whopper + Med Fries + Chocolate Thick Shake",
                                  imageId: "7e1ed5df6f157130c9419edab8e513d9",
                                  inStock: 1,
                                  price: 39400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                  },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087693",
                                  name: "Paneer Royale + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | Paneer Royale + Med Fries + Chocolate Thick Shake",
                                  imageId: "8baef885118770aedda5b938fc4b28ae",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 39400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "VEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "113087697",
                                  name: "Fiery Chicken + Med Fries + Chocolate Thick Shake",
                                  category:
                                    "Friends & Family Combo (Save upto 20%)",
                                  description:
                                    "Save Rs 99 | Fiery Chicken + Med Fries + Chocolate Thick Shake",
                                  imageId: "58ad0a8171f8bfee39b9ddab134f453b",
                                  inStock: 1,
                                  price: 39400,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: { vegClassifier: "NONVEG" },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: { aggregatedRating: {} },
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Cricket Mania Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339307",
                              name: "Kungfu Brothers Combo- Veg",
                              category: "Cricket Mania Combos",
                              description:
                                "2 BK Crispy Veg Burgers + Med Pepsi + Classic Cold Coffee + Med Fries",
                              imageId: "2b92859bd189acbd8920d0416b66eff6",
                              inStock: 1,
                              isVeg: 1,
                              price: 54900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339308",
                              name: "Kungfu Brothers Combo- Chicken",
                              category: "Cricket Mania Combos",
                              description:
                                "2 BK Crispy Chicken Burgers + Med Pepsi + Classic Cold Coffee + Med Fries",
                              imageId: "8f66b9d39d10fc1099f24e41f9284648",
                              inStock: 1,
                              price: 58900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339311",
                              name: "Toss Ka Boss Combo- Veg",
                              category: "Cricket Mania Combos",
                              description:
                                "Paneer Royale Burger + BK Classic Veg Burger + Med Fries +2Pepsi",
                              imageId: "ab72007cae26333b3de9d08d69ca72d1",
                              inStock: 1,
                              isVeg: 1,
                              price: 64300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339312",
                              name: "Toss Ka Boss Combo- Non Veg",
                              category: "Cricket Mania Combos",
                              description:
                                "Fiery Chicken Burger + Crispy Chicken Double Patty + 2Med Pepsi + 1Med Fries",
                              imageId: "805407e73c3f3914eb5082bd7c7ee0f7",
                              inStock: 1,
                              price: 63300,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339309",
                              name: "Whopper Partnership Combo- Veg",
                              category: "Cricket Mania Combos",
                              description:
                                "2Veg Whopper + 2Med Pepsi + 1King Fries",
                              imageId: "31cdff103fdf86f07e0dd63786a83f0a",
                              inStock: 1,
                              isVeg: 1,
                              price: 67800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "84339310",
                              name: "Whopper Partnership Combo- Chicken",
                              category: "Cricket Mania Combos",
                              description:
                                "2Chicken Whopper + 2Med Pepsi + 1King Fries",
                              imageId: "2a3b147904ea0b25fdbf31391ed040e3",
                              inStock: 1,
                              price: 71800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "BK Cafe",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "107186690",
                              name: "Masala Chai",
                              category: "BK Cafe",
                              description: "Masala Chai",
                              imageId: "9784c1fba62f646f985518145ec2c5c7",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120458620",
                              name: "Chocochip Muffin",
                              category: "BK Cafe",
                              description:
                                "Soft & Fluffy chocolate cake topped with chocolate chips.",
                              imageId: "lhkmuwim5nfedoaye6lc",
                              inStock: 1,
                              isVeg: 1,
                              price: 12900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817328",
                              name: "Café Latte (Small)",
                              category: "BK Cafe",
                              description:
                                "Our signature BK Café Coffee with steamed milk.",
                              imageId: "rxo7t0cvvcz4yqcjnqxt",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313507",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817324",
                              name: "Cappuccino (Small)",
                              category: "BK Cafe",
                              description:
                                "Espresso with steamed milk & milk froth",
                              imageId: "mkm2kxtsjaaej5adzosw",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313505",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817326",
                              name: "Cappuccino (Regular)",
                              category: "BK Cafe",
                              description:
                                "Espresso with steamed milk & milk froth",
                              imageId: "mkm2kxtsjaaej5adzosw",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313506",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817330",
                              name: "Mocha Cappuccino (Small)",
                              category: "BK Cafe",
                              description: "Rich Chocolate Flavoured Coffee",
                              imageId: "pwcengrvuiwin79ftiim",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313509",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817329",
                              name: "Café Latte (Regular)",
                              category: "BK Cafe",
                              description:
                                "Our signature BK Café Coffee with steamed milk.",
                              imageId: "rxo7t0cvvcz4yqcjnqxt",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313508",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "83231700",
                              name: "Classic Cold Coffee",
                              category: "BK Cafe",
                              description:
                                "Our signature BK Café Coffee ice blended with milk & cream",
                              imageId: "spupzyvwrsv4yjegs4gf",
                              inStock: 1,
                              isVeg: 1,
                              price: 19900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817331",
                              name: "Mocha Cappuccino (Regular)",
                              category: "BK Cafe",
                              description: "Rich Chocolate Flavoured Coffee",
                              imageId: "pwcengrvuiwin79ftiim",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313456",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817338",
                              name: "Mocha Frappe",
                              category: "BK Cafe",
                              description:
                                "Chocolate Flavoured Cold Coffee topped with Cream",
                              imageId: "oakfdc83as9rhjwwij8y",
                              inStock: 1,
                              isVeg: 1,
                              price: 26900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313455",
                                  groupName: "Add Extra Shot",
                                  choices: [
                                    {
                                      id: "94993338",
                                      name: "Extra Shot",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "100817336",
                              name: "Hot Chocolate",
                              category: "BK Cafe",
                              description:
                                "The chocolate which you can drink. Rich Creamy Chocolate with steamed milk.",
                              imageId: "bbcnyic4eczdu81trzaf",
                              inStock: 1,
                              isVeg: 1,
                              price: 17900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Meal Combos(Save Rs. 45)",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "33303733",
                              name: "Crispy Veg Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 | Our best-selling burger with crispy veg patty, fresh onion and our signature sauce. Comes with Fries (M) + Pepsi (M)",
                              imageId: "deyyaxafzufypp1xtpij",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313482",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "481 ratings",
                                  ratingCountV2: "481",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62383009",
                              name: "BK Veggie Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 | Our tribute to classic American taste. BK veg patty, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce. Comes with Fries (M) + Pepsi (M)",
                              imageId: "zmn1fymdtkprk5vlkud1",
                              inStock: 1,
                              isVeg: 1,
                              price: 24800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313483",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "22 ratings",
                                  ratingCountV2: "22",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "32447880",
                              name: "Crispy Chicken Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45  | Our best-selling burger with crispy chicken patty, onion and classic mayo sauce. Comes with Fries (M) + Pepsi (M)",
                              imageId: "kc81hwtkyuoaj7ecrhv2",
                              inStock: 1,
                              price: 23900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379799",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "521 ratings",
                                  ratingCountV2: "521",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62383007",
                              name: "BK Chicken Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Our tribute to classic American taste. BK chicken patty, garden fresh crispy lettuce, juicy tomato (seasonal) & our signature sauce. Comes with Fries (M) + Pepsi (M)",
                              imageId: "ketwbup2ikpyy7cn37x5",
                              inStock: 1,
                              price: 26800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "104022465",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62383002",
                              name: "Whopper Jr Chicken Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Our signature Whopper with 7 layers between the buns in a convenient size. Flame Grilled chicken Patty, fresh onion, crispy lettuce, juicy tomatoes, tangy gherkins, creamy and smoky sauces. Comes with Fries (M) + Pepsi (M)",
                              imageId: "lagxcnkkbyl9wh4owhyq",
                              inStock: 1,
                              price: 28800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379797",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "108365764",
                              name: "Veg Whopper Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Our signature Whopper with 7 layers between the buns. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces with xxl buns. It’s Not A Burger, it’s a Whopper. Comes with Fries (M) + Pepsi (M)",
                              imageId: "msp9yzcm0mo0hgc7nltp",
                              inStock: 1,
                              isVeg: 1,
                              price: 31800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313475",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62382993",
                              name: "Chicken Whopper Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Our signature Whopper with 7 layers between the buns. Flame Grilled chicken Patty, fresh onion, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces with xxl buns. It’s Not A Burger, it’s a Whopper. Comes with Fries (M) + Pepsi (M)",
                              imageId: "lrthnkvmbbgftttfe8hm",
                              inStock: 1,
                              price: 34800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379790",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "35 ratings",
                                  ratingCountV2: "35",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689137",
                              name: "Hot 'N' Cheezy Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Chilli Cheese patty, spicy sauce, soft square masala buns. It's cheezy & spicy. Comes with Fries (M) + Pepsi (M)",
                              imageId: "rviwuzgjzwfnncsah6ht",
                              inStock: 1,
                              isVeg: 1,
                              price: 34800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313462",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689146",
                              name: "Paneer Royale Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Thick Paneer Patty, loads of sauces in soft square masala buns. It's Royally Paneer. Comes with Fries (M) + Pepsi (M)",
                              imageId: "jrvhuujbgioijvapv5sv",
                              inStock: 1,
                              isVeg: 1,
                              price: 34800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313465",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689159",
                              name: "Chicken Tandoori Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 | Desiness Alert! Flame grilled Tandoori Chicken, mint sauce with fresh onions. Comes with Fries (M) + Pepsi (M)",
                              imageId: "hzva8r58mrp8pu4p7ixc",
                              inStock: 1,
                              price: 34800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379800",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "52510067",
                              name: "Mutton Whopper - Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Spicy,Saucy & Desi Masala Whopper for a limited time. Comes with Fries (M) + Pepsi (M)",
                              imageId: "hqmgyqhdglqeeokunste",
                              inStock: 1,
                              price: 44800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "103379794",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "62383005",
                              name: "Whopper Jr Veg Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Our signature Whopper with 7 layers between the buns in a convenient size. Extra crunchy veg Patty, fresh onion, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces. Comes with Fries (M) + Pepsi (M)",
                              imageId: "ctrtjnt4kbua0aptyelj",
                              inStock: 1,
                              isVeg: 1,
                              price: 26800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313474",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "85689153",
                              name: "Fiery Chicken Burger Combo",
                              category: "Meal Combos(Save Rs. 45)",
                              description:
                                "Save Rs 45 |Spicy Fried Chicken, loads of sauces in soft square masala buns. It's hot and happening. Comes with Fries (M) + Pepsi (M)",
                              imageId: "itfyqnfpxdpfqakoairw",
                              inStock: 1,
                              price: 34800,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313466",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Sides",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777420",
                              name: "Fiery Hell Dip",
                              category: "Sides",
                              description: "Chef's Special Spicy Sauce",
                              imageId: "nsqnarjlxmzioj5zotty",
                              inStock: 1,
                              isVeg: 1,
                              price: 2381,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777421",
                              name: "Herby Garlic Dip",
                              category: "Sides",
                              description:
                                "Chef's Special Garlic Sauce With Herbs",
                              imageId: "pocqti14flqmqyqghelf",
                              inStock: 1,
                              isVeg: 1,
                              price: 2381,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777422",
                              name: "Easy Cheesy Dip",
                              category: "Sides",
                              description: "Cheese & Jalapeno Sauce",
                              imageId: "cfxufomgselawz85bhbo",
                              inStock: 1,
                              isVeg: 1,
                              price: 2381,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.2",
                                  ratingCount: "21 ratings",
                                  ratingCountV2: "21",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777423",
                              name: "Hashbrown",
                              category: "Sides",
                              description: "What Every Potato Wants To Be",
                              imageId: "hslhhbg0ix0ptxl1egez",
                              inStock: 1,
                              isVeg: 1,
                              price: 4900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "322 ratings",
                                  ratingCountV2: "322",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777424",
                              name: "Peri Peri Spice Mix",
                              category: "Sides",
                              imageId: "1200974eb60f9c4489cad469e5485498",
                              inStock: 1,
                              isVeg: 1,
                              price: 2857,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101197082",
                              name: "Veggie Strips(5 Pcs)",
                              category: "Sides",
                              description: "Vegetarian's Favourite Finger Food",
                              imageId: "jez2tqz2d0euumrrpvbn",
                              inStock: 1,
                              isVeg: 1,
                              price: 5900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313485",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313486",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "460 ratings",
                                  ratingCountV2: "460",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777425",
                              name: "Chicken Fries - 5 Pcs",
                              category: "Sides",
                              description: "Chicken In A Spicy New Avatar",
                              imageId: "tqhq4zd5sxa6qdc8yhwj",
                              inStock: 1,
                              price: 7900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313503",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313504",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "846 ratings",
                                  ratingCountV2: "846",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "101197085",
                              name: "Medium Fries",
                              category: "Sides",
                              description: "The Perfect Crispy Partner",
                              imageId: "uttwq3j7gos3thsaposd",
                              inStock: 1,
                              isVeg: 1,
                              price: 11500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "209 ratings",
                                  ratingCountV2: "209",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777426",
                              name: "King Fries",
                              category: "Sides",
                              description: "The Perfect Crispy Partner",
                              imageId: "uttwq3j7gos3thsaposd",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313469",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313470",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "572 ratings",
                                  ratingCountV2: "572",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777427",
                              name: "Medium Peri Peri Fries",
                              category: "Sides",
                              description:
                                "Crispy Fries With Peri Peri Spice. Hot Indeed",
                              imageId: "mgipyyoulmma7rjwofoj",
                              inStock: 1,
                              isVeg: 1,
                              price: 14400,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313510",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "101 ratings",
                                  ratingCountV2: "101",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43114176",
                              name: "Cheesy Fries",
                              category: "Sides",
                              description:
                                "Crispy French Fries, Loads Of Cheese, Yum!",
                              imageId: "bs5oedbj1ihduwvbuj8z",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313494",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313495",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "388 ratings",
                                  ratingCountV2: "388",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43114174",
                              name: "Creamy Italian Fries",
                              category: "Sides",
                              description:
                                "The Lip-Smacking Duo Of Creamy Classic Mayo And Tangy Tomato Herb Mayo Make These Fries Very Hard To Resist!",
                              imageId: "b3hgwlbtnnuovkb4rvcv",
                              inStock: 1,
                              isVeg: 1,
                              price: 13900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313491",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "100313492",
                                  groupName: "Add Peri Peri Spice Mix",
                                  choices: [
                                    {
                                      id: "94993339",
                                      name: "Peri Peri Spice Mix",
                                      price: 2857,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "233 ratings",
                                  ratingCountV2: "233",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "72692794",
                              name: "King Peri Peri Fries",
                              category: "Sides",
                              description:
                                "Crispy Fries With Peri Peri Spice. Hot Indeed",
                              imageId: "mgipyyoulmma7rjwofoj",
                              inStock: 1,
                              isVeg: 1,
                              price: 15900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313511",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "108 ratings",
                                  ratingCountV2: "108",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Beverages",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111131704",
                              name: "Lipton Ice Tea (Medium)",
                              category: "Beverages",
                              imageId: "04a04ee85ec1512de3f0df739627142b",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "114777429",
                              name: "Pepsi Medium",
                              category: "Beverages",
                              imageId: "jjsk5itomwsjmfz3sd3b",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111131702",
                              name: "Mirinda Medium",
                              category: "Beverages",
                              imageId: "39e3ce914464c6eac8e601ec3f4dded4",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111131703",
                              name: "Mountain Dew Medium",
                              category: "Beverages",
                              imageId: "8766c3abdc752653526a3663bd86c550",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "111131705",
                              name: "7 Up Medium",
                              category: "Beverages",
                              imageId: "09b99545c6879dfb5cbae7525544026e",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23932414",
                              name: "Chocolate Thick Shake",
                              category: "Beverages",
                              description:
                                "Our Signature Chocolate Thick Shake",
                              imageId: "iixakii4wvkq3dgmpsvc",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "531 ratings",
                                  ratingCountV2: "531",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "23932425",
                              name: "Mango Thick Shake",
                              category: "Beverages",
                              description: "Our Signature Mango Thick Shake",
                              imageId: "e5fk28ospzzsy5a7m7hc",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "229 ratings",
                                  ratingCountV2: "229",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "71898605",
                              name: "Berry Blast Thick Shake",
                              category: "Beverages",
                              description:
                                "Rich Creamy Black Currant Thick shake",
                              imageId: "yzkpob5ifvenc79yqjvs",
                              inStock: 1,
                              isVeg: 1,
                              price: 18900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "93 ratings",
                                  ratingCountV2: "93",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "120458618",
                              name: "Pepsi Black Medium",
                              category: "Beverages",
                              description: "Pepsi Black",
                              imageId: "f8320b1b518af3ccb404687e2e185e58",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "83706789",
                              name: "Choco Lava Cup",
                              category: "Desserts",
                              description: "Melty Chocolate filled in cupcake",
                              imageId: "nsm44tzuxpceproaymyr",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "33 ratings",
                                  ratingCountV2: "33",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "83624738",
                              name: "Chocolate Mousse Cup",
                              category: "Desserts",
                              description:
                                "Airy and creamy chocolate mousse topped with chocolate ganache and choco chips",
                              imageId: "hxpyxm2e2dasvebpzkoz",
                              inStock: 1,
                              isVeg: 1,
                              price: 10900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chicken Wings.",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64907496",
                              name: "Boneless Wings Regular",
                              category: "Chicken Wings.",
                              description: "4pcs Boneless Chicken Bites",
                              imageId: "qlpzsgwyrjwzd3g43iol",
                              inStock: 1,
                              price: 14900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313445",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "149 ratings",
                                  ratingCountV2: "149",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64907495",
                              name: "Boneless Wings Large",
                              category: "Chicken Wings.",
                              description: "7pcs Boneless Chicken Bites",
                              imageId: "qefyb4gxjhh0i9iz6ozu",
                              inStock: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "100313444",
                                  groupName: "Choose your Dips",
                                  choices: [
                                    {
                                      id: "74594800",
                                      name: "Fiery Hell Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594801",
                                      name: "Easy Cheesy Dip",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "74594802",
                                      name: "Herby Garlic",
                                      price: 2381,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: { vegClassifier: "NONVEG" },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11517017000768"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Burger King",
                      area: "Nerul",
                      completeAddress:
                        "Plot no 5, sector 1, AG Patil Marg, Nerul, Navi Mumbai 410706",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "d29ce4ee-5803-4225-8fb7-a793d00e0e17",
  sid: "8wg081e0-a8ed-413a-ae5f-5588b3054c26",
  deviceId: "d35ef463-2e55-7b85-ebc3-956ef5288545",
  csrfToken: "3tDFf37E5QPp-Icud5BWipWk-eanYjQ_Tl1sCRjk",
};
