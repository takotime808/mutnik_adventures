// Copyright (c) 2025 takotime808
const markers = [
  // ------------------------- Fam -------------------------
  {
    lat: 42.6507,
    lng: 18.0944,
    label: "Dubrovnik",
    color: "lightpink",
  },
  {
    lat: 37.9838,
    lng: 23.7275,
    label: "Greece Coastline",
    color: "lightpink",
    // url: "galleries/og-mutniks/greece/index.html"
  },
  {
    lat: 43.7102,
    lng: 7.262,
    label: "Nice, France",
    color: "lightpink",
    // url: "galleries/og-mutniks/nice/index.html"
  },
  {
    lat: 26.1276,
    lng: -80.2331,
    label: "Fam - OG Mutniks",
    color: "lightpink",
    url: "galleries/og-mutniks/index.html",
  },
  {
    lat: -0.9538,
    lng: -90.9656,
    label: "Galapagos Islands",
    color: "lightpink",
    url: "galleries/og-mutniks/galapagos/index.html"
  },
  {
    lat: 21.6415,
    lng: -158.0671,
    label: "Family Dino Feeding",
    color: "lightpink",
    url: "images/fam/44e22af4-5c32-4d96-ba3d-48abf198a002.webp",
  },
  // ** Chicago is duplicate from mel and carl (same photos) **
  {
    lat: 41.8781,
    lng: -87.6298,
    label: "Fam - Chicago",
    color: "lightpink",
    url: "galleries/og-mutniks/chicago/index.html",
  },
  // ** NC is duplicate from mel and carl **
  {
    lat: 35.7596,
    lng: -79.0193,
    label: "Fam - North Carolina",
    color: "lightpink",
    url: "galleries/og-mutniks/NC/index.html",
  },
  // ** NY (sr.bobs) is duplicate from mel and carl **
  {
    lat: 44.2562,
    lng: -73.7921,
    label: "Tyler & Sr. Bob's Wedding (NY)",
    color: "lightpink",
    url: "galleries/og-mutniks/ny-tyler-sr-bobs/index.html",
  },
  // ** AK and Ohio are duplicate from jeff and beth (with different image layout) **
  {
    lat: 58.3019,
    lng: -134.4197,
    label: "Fam - Juneau",
    color: "lightpink",
    url: "galleries/og-mutniks/juneau/index.html"
  },
  { lat: 39.0974, lng: -84.5071, label: "Fam - Ohio", color: "lightpink", url: "images/dukes/Ohio.webp" },
  // ------------------------- Nenee and Joe -------------------------
  { lat: 8.997, lng: -79.5917, label: "Panama Canal", color: "silver", url: "images/dukes/IMG_2904_Panama_Canal.png" },
  { lat: 10.8992, lng: -80.3467, label: "Captain Kate", color: "silver", url: "images/dukes/panama_canal/panama_canal_with_captain_kate.jpeg" },
  { lat: 20.2114, lng: -87.4654, label: "Tulum", color: "silver", url: "galleries/jeff-and-beth/Tulum/index.html" },
  { lat: 42.0, lng: -88.0, label: "Zacks Bootcamp Graduation", color: "silver", url: "images/dukes/zack_bc.jpeg" },
  { lat: 12.5211, lng: -69.9683, label: "Aruba", color: "silver", url: "images/dukes/Aruba.webp" },
  // ------------------------- Zack and Brit -------------------------
  {
    lat: 36.8508,
    lng: -76.2859,
    label: "Norfolk, Virginia",
    color: "orange",
    // url: "galleries/zack/norfolk/index.html"
  },
  { 
    lat: 42.3124,
    lng: -87.8414,
    label: "Zack's Bootcamp Graduation (Great Lakes IL)",
    color: "orange",
    url: "images/zack-and-brit/IMG_1099.webp"
  },
  // Duplicated from dukes
  { lat: 26.9298, lng: -82.0454, label: "Punta Gorda", color: "orange", url: "images/dukes/Punta_Gorda.webp" },
  // ------------------------- Mel and Carl -------------------------
  { lat: 27.9517, lng: -82.4588, label: "Tampa Bay", color: "purple", url: "images/dukes/Tampa Bay.webp" },
  {
    lat: 30.4463,
    lng: -140.9758,
    label: "HI <-- CA",
    color: "purple",
    url: "images/mel-and-carl/20180527_152936.webp",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    label: "Mel & Carl - London",
    color: "purple",
    url: "galleries/mel-and-carl/london/index.html",
  },
  {
    lat: 33.7490,
    lng: -84.3880,
    label: "Mel & Carl - Georgia",
    color: "purple",
    url: "galleries/mel-and-carl/GA/index.html",
  },
  {
    lat: 35.7596,
    lng: -79.0193,
    label: "Mel & Carl - North Carolina",
    color: "purple",
    url: "galleries/mel-and-carl/NC/index.html",
  },
  {
    lat: 40.7128,
    lng: -74.0060,
    label: "Mel & Carl - New York",
    color: "purple",
    url: "galleries/mel-and-carl/NY/index.html",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    label: "Mel & Carl - Paris",
    color: "purple",
    url: "galleries/mel-and-carl/Paris/index.html",
  },
  {
    lat: 37.4316,
    lng: -78.6569,
    label: "Mel & Carl - Virginia",
    color: "purple",
    url: "galleries/mel-and-carl/VA/index.html",
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    label: "Mel & Carl - Amsterdam",
    color: "purple",
    url: "galleries/mel-and-carl/amsterdam/index.html",
  },
  {
    lat: 51.2093,
    lng: 3.2247,
    label: "Mel & Carl - Bruges, Belgium",
    color: "purple",
    url: "galleries/mel-and-carl/bruges_belgium/index.html",
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    label: "Mel & Carl - Chicago",
    color: "purple",
    url: "galleries/mel-and-carl/chicago/index.html",
  },
  {
    lat: 36.1699,
    lng: -115.1398,
    label: "Mel & Carl - Las Vegas",
    color: "purple",
    url: "galleries/mel-and-carl/vegas/index.html",
  },
  {
    lat: 53.5511,
    lng: 9.9937,
    label: "Mel & Carl - Hamburg, Germany",
    color: "purple",
    url: "galleries/mel-and-carl/hamburg_germany/index.html",
  },
  {
    lat: 21.4389,
    lng: -157.9633,
    label: "Mel & Carl - O'ahu",
    color: "purple",
    url: "galleries/mel-and-carl/oahu/index.html",
  },
  {
    lat: 44.2562,
    lng: -73.7921,
    label: "Tyler & Sr. Bob's Wedding (NY)",
    color: "purple",
    url: "galleries/mel-and-carl/ny-tyler-sr-bobs/index.html",
  },
  // ------------------------- Tako -------------------------
  {
    lat: 21.4389,
    lng: -157.9633,
    label: "O'ahu - Tako Gallery",
    color: "gold",
    url: "galleries/tako/hawaii/index.html"
  },
  // { lat: 14.87, lng: 100.9925, label: "Mathilde", color: "gold", url:  "images/tako/thai-steps.jpeg" },
  {
    lat: 15.87,
    lng: 100.9925,
    label: "Thailand",
    color: "gold",
    // url: "galleries/tako/thailand/index.html"
    url: "galleries/tako/thailand/index.html"
  },
  {
    lat: 18.9361,
    lng: -155.6465,
    label: "BI",
    color: "gold",
    // url:  "https://cmutnik.github.io/takophotos/gallery/gallery01/"
    url: "images/tako/IMG-20211209-WA0018.webp"
  },
  {
    lat: 57.6733,
    lng: -136.8209,
    label: "Orange Baby Orca",
    color: "gold",
    url:  "images/tako/ak-orca.jpeg"
  },
  {
    lat: 45.1,
    lng: 15.2,
    label: "Croatia",
    color: "gold",
    // url: "galleries/tako/croatia/index.html"
  },
  {
    lat: 53.5511,
    lng: 9.9937,
    label: "Hamburg, Germany",
    color: "gold",
    // url: "galleries/tako/hamburg/index.html"
  },
  {
    lat: 41.2753,
    lng: 28.7519,
    label: "Istanbul Airport, Turkey",
    color: "gold",
    url: "galleries/tako/turkey_airport/index.html"
  },
  {
    lat: -0.9538,
    lng: -90.9656,
    label: "Galapagos Islands",
    color: "gold",
    url: "galleries/og-mutniks/galapagos/index.html"
  },
  {
    lat: 19.1326,
    lng: -99.5332,
    label: "Mexico City",
    color: "gold",
    // url: "galleries/tako/mexico_city/index.html"
  },
  {
    lat: 10.4632,
    lng: -84.7033,
    label: "Arenal Volcano, Costa Rica",
    color: "gold",
    // url: "galleries/tako/arenal_volcano/index.html"
  },
  {
    lat: 45.677,
    lng: -111.0429,
    label: "Bozeman, Montana",
    color: "gold",
    // url: "galleries/tako/bozeman/index.html"
  },
  {
    lat: 36.2168,
    lng: -81.6746,
    label: "Boone, North Carolina",
    color: "gold",
    url: "galleries/tako/boone/index.html"
  },
  {
    lat: 35.5586,
    lng: -75.4665,
    label: "Outer Banks, NC",
    color: "gold",
    // url: "galleries/tako/outer_banks/index.html"
    url: "images/tako/DB9A4765.webp"
  },
  {
    lat: 35.7647,
    lng: -82.2653,
    label: "Blue Ridge Mountains",
    color: "gold",
    // url: "galleries/tako/outer_banks/index.html"
  },
  {
    lat: 36.8516,
    lng: -75.9792,
    label: "Virginia Beach",
    color: "gold",
  },
  {
    lat: 36.1716,
    lng: -115.1391,
    label: "Las Vegas",
    color: "gold",
  },
  {
    lat: 36.3008,
    lng: -119.7829,
    label: "Lemoore",
    color: "gold",
  },
  {
    lat: 40.7787,
    lng: -113.8352,
    label: "Salt Flats",
    color: "gold",
  },
  {
    lat: 30.2747,
    lng: -97.7404,
    label: "Texas",
    color: "gold",
  },
  {
    lat: 47.7511,
    lng: -120.7401,
    label: "Washington",
    color: "gold",
  },
  {
    lat: 43.0760,
    lng: -107.2903,
    label: "Wyoming",
    color: "gold",
  },
  {
    lat: 33.4230,
    lng: -111.9278,
    label: "Arizona",
    color: "gold",
  },
  {
    lat: 41.7180,
    lng: -87.6094,
    label: "Chicago",
    color: "gold",
  },
  {
    lat: 32.3547,
    lng: -89.3985,
    label: "Mississippi",
    color: "gold",
  },
  {
    lat: 32.3182,
    lng: -86.9023,
    label: "Alabama",
    color: "gold",
  },
  {
    lat: 38.9848,
    lng: -77.0943,
    label: "Bethesda",
    color: "gold",
  },
  {
    lat: 33.7501,
    lng: -84.3885,
    label: "Atlanta",
    color: "gold",
  },
  {
    lat: 38.9108,
    lng: -75.5277,
    label: "Delaware",
    color: "gold",
  },
  {
    lat: 38.9072,
    lng: -77.0369,
    label: "DC",
    color: "gold",
  },
  {
    lat: 34.9727,
    lng: -105.0324,
    label: "New Mexico",
    color: "gold",
  },
  {
    lat: 34.6568,
    lng: -83.7199,
    label: "Helen, Georgia",
    color: "gold",
    // url: "galleries/tako/helen/index.html"
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    label: "Denver, Colorado",
    color: "gold",
    // url: "galleries/tako/denver/index.html"
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: "Rome, Italy",
    color: "red",
    // url: "galleries/og-mutniks/rome/index.html"
    url: "images/dukes/26a0c921-74b3-4433-8c76-12d677742031.JPG"
  },
  {
    lat: 43.7396,
    lng: 7.427,
    label: "Monaco",
    color: "gold",
    // url: "galleries/og-mutniks/monaco/index.html"
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    label: "Boston, Massachusetts",
    color: "gold",
    // url: "galleries/tako/boston/index.html"
  },
  {
    lat: 19.3222,
    lng: -81.2409,
    label: "Grand Cayman",
    color: "gold",
    url: "images/tako/cayman-shell.jpeg"
  },
  {
    lat: 49.2827,
    lng: -123.1207,
    label: "Vancouver",
    color: "gold",
    url: "images/tako/boat-vancouver.jpeg"
  },
  {
    lat: 40.7607,
    lng: -111.8939,
    label: "Utah",
    color: "gold",
    url: "images/tako/utah-tree.jpeg"
  },
  {
    lat: 36.9066,
    lng: -76.0217,
    label: "First Landing, VA",
    color: "gold",
    url: "images/tako/first-landing-snake.jpeg"
  },
  {
    lat: 44.6995,
    lng: -73.4529,
    label: "Plattsburgh, New York",
    color: "gold",
    url: "galleries/tako/plattsburgh/index.html"
  },
  { lat: 31.5590, lng: 35.4732, label: "Israel", color: "gold", url: "images/tako/DB9A7362.webp" },
  { lat: 29.0384, lng: -81.3789, label: "Orlando", color: "gold", url: "images/tako/DB9A8933.webp" },
  { lat: 43.2136, lng: -123.3413, label: "Oregon", color: "gold", url: "images/tako/oregon.jpeg" },
  // ------------------------- Jeff and Beth -------------------------
  // { lat: 40.015, lng: -105.2705, label: "Boulder", color: "red", url: "images/dukes/IMG_2956.JPG" },
  // { lat: 21.3996, lng: -157.7974, label: "Kaneohe", color: "red", url: "images/dukes/DB9A6455.JPG" },
  // { lat: 21.4, lng: -157.8, label: "Haleiwa Joes", color: "red", url: "images/dukes/DB9A6467.JPG" },
  { lat: 21.6396, lng: -158.6246, label: "Jeff & Beth - Hawaii", color: "red", url: "galleries/jeff-and-beth/oahu/index.html" },
  {
    lat: 40.01499,
    lng: -105.27055,
    label: "Jeff & Beth - Boulder",
    color: "red",
    url: "galleries/jeff-and-beth/boulder/index.html"
  },
  {
    lat: 58.3019,
    lng: -134.4197,
    label: "Jeff & Beth - Juneau",
    color: "red",
    url: "galleries/jeff-and-beth/juneau/index.html"
  },
  {
    lat: 13.4125,
    lng: 103.866,
    label: "Jeff & Beth - Ankor Wat",
    color: "red",
    url: "images/dukes/Ankor_Wat.jpg"
  },
  {
    lat: 18.1096,
    lng: -77.2975,
    label: "Jeff & Beth - Jamaica",
    color: "red",
    url: "images/dukes/Jamaica.jpg"
  },
  {
    lat: 59.5775,
    lng: -136.1317,
    label: "Jeff & Beth - Mosquito Lake",
    color: "red",
    url: "galleries/jeff-and-beth/mosquito-lake/index.html"
  },
  {
    lat: -16.9203,
    lng: 145.7710,
    label: "Jeff & Beth - Cairn Australia",
    color: "red",
    url: "images/dukes/Cairn Australia.webp"
  },
  {
    lat: 19.4326,
    lng: -99.1332,
    label: "Jeff & Beth - Mexico City",
    color: "red",
    url: "galleries/jeff-and-beth/mexico_city/index.html"
  },
  { lat: 29.9511, lng: -90.0715, label: "Jeff & Beth - New Orleans", color: "red", url: "galleries/jeff-and-beth/new_orleans/index.html" },
  { lat: 43.7230, lng: 10.3966, label: "Pisa", color: "red", url: "images/dukes/IMG_7189.JPG" },
  { lat: 42.373, lng: -73.3677, label: "Jeff & Beth", color: "red", url: "images/dukes/IMG_0195.webp" },
  { lat: 32.7157, lng: -117.1611, label: "San Diego", color: "red", url: "images/dukes/San Diego/IMG_8043.webp" },
  { lat: 32.7157, lng: -118.0611, label: "San Diego", color: "red", url: "images/dukes/San Diego/san_diego.webp" },
  { lat: 41.8719, lng: 12.5674, label: "Italy", color: "red", url: "images/dukes/IMG_4349.jpg" },
  { lat: 48.8584, lng: 2.2945, label: "Paris", color: "red", url: "galleries/jeff-and-beth/Paris_FR/index.html" },
  { lat: 55.9533, lng: -3.1883, label: "Edinburgh", color: "red", url: "galleries/jeff-and-beth/Edinburgh/index.html" },
  { lat: 56.3000, lng: -2.7000, label: "World of Scotch", color: "red", url: "images/dukes/Edinburgh_World_of_Scotch5.webp" },
  { lat: 10.8231, lng: 106.6297, label: "Ho Chi Minh", color: "red", url: "images/dukes/Hi_chi_minh.webp" },
  { lat: 14.0583, lng: 108.2772, label: "Vietnam", color: "red", url: "galleries/jeff-and-beth/Vietnam/index.html" },
  { lat: 12.5657, lng: 104.991, label: "Cambodia", color: "red", url: "galleries/jeff-and-beth/Cambodia/index.html" },
  { lat: 45.5017, lng: -73.5673, label: "Montreal", color: "red", url: "galleries/jeff-and-beth/Montreal/index.html" },
  { lat: 36.8508, lng: -76.2859, label: "Norfolk", color: "red", url: "images/dukes/IMG_5802.png" },
  { lat: 32.6082, lng: -80.0848, label: "Kiswahili island", color: "red", url: "images/dukes/d81e01f7-16c4-4634-a1d1-dffe99f5c36d.webp" },
  { lat: 39.0968, lng: -120.0324, label: "Lake Tahoe", color: "red", url: "images/dukes/Lake Tahoe.webp" },
  { lat: 47.6062, lng: -122.3321, label: "Seattle", color: "red", url: "galleries/jeff-and-beth/Seattle/index.html" },
  { lat: 53.5511, lng: 9.9937, label: "Hamburg", color: "red", url: "galleries/jeff-and-beth/Hamburg/index.html" },
  { lat: 48.6360, lng: -1.5115, label: "Mont Saint-Michel", color: "red", url: "galleries/jeff-and-beth/Mont_Saint-Michel/index.html" },
  { lat: 38.8409, lng: -105.0423, label: "Pikes Peak", color: "red", url: "galleries/jeff-and-beth/Pikes_Peak/index.html" },
  { lat: 56.4907, lng: -4.2026, label: "Scotland", color: "red", url: "galleries/jeff-and-beth/Scotland/index.html" },
  { lat: 25.7907, lng: -80.13, label: "Miami Beach", color: "red", url: "images/dukes/IMG_2737.webp" },
  { lat: 53.1424, lng: -7.6921, label: "Ireland", color: "red", url: "images/dukes/IMG_1471.webp" },
  { lat: 13.7563, lng: 100.5018, label: "Bangkok", color: "red", url: "images/dukes/Bangkok.webp" },
  { lat: 49.2764, lng: -0.7031, label: "Bayeux France", color: "red", url: "images/dukes/Bayeux France.webp" },
  { lat: 21.4691, lng: -78.6569, label: "Caribbean Cruise", color: "red", url: "images/dukes/Caribbean cruise.webp" },
  { lat: -17.7134, lng: 178.0650, label: "Fiji", color: "red", url: "images/dukes/fiji.webp" },
  { lat: 44.0682, lng: -114.7420, label: "Idaho", color: "red", url: "images/dukes/Idaho.webp" },
  { lat: 60.4720, lng: 8.4689, label: "Norway", color: "red", url: "images/dukes/IMG_0361.png" },
  { lat: 40.7038, lng: -74.0070, label: "NYC", color: "red", url: "galleries/jeff-and-beth/NYC/index.html" },
  { lat: 32.6107, lng: -80.0511, label: "Kiawah Island, SC", color: "red", url: "images/dukes/Kiawah Island SC.webp" },
  { lat: 45.4685, lng: 9.1824, label: "Milan", color: "red", url: "images/dukes/Milan.webp" },
  { lat: 46.8797, lng: -110.3626, label: "Montana", color: "red", url: "images/dukes/Montana.webp" },
  { lat: 34.2856, lng: -118.8820, label: "Moorpark, CA", color: "red", url: "images/dukes/Moorpark CA.webp" },
  { lat: 40.4387, lng: -79.9972, label: "Pittsburgh", color: "red", url: "images/dukes/Pittsburgh.webp" },
  { lat: 49.2764, lng: -0.7031, label: "Normandy", color: "red", url: "galleries/jeff-and-beth/Normandy/index.html" },
  { lat: 55.3422, lng: -131.6461, label: "Ketchikan", color: "red", url: "galleries/jeff-and-beth/Ketchikan/index.html" },
  { lat: 53.3498, lng: -6.2603, label: "Dublin", color: "red", url: "images/dukes/Dublin_Ireland.webp" },
  { lat: 28.8, lng: -81.0, label: "Universal Studios", color: "red", url: "images/dukes/universal_studios.webp" },
  { lat: 28.4097, lng: -81.4597, label: "Dukes Bday (Sea World Orlando)", color: "red", url: "images/dukes/da2e2103-ce6b-4273-8fd6-ac9d0d33d068.webp" },
  { lat: 38.1944, lng: -119.4383, label: "Red Rocks Nevada", color: "red", url: "images/dukes/red_rocks_nevada.webp" },
  { lat: 22.8905, lng: -109.9167, label: "Cabo Mexico", color: "red", url: "images/dukes/IMG_4104.webp" },
  { lat: 47.9129, lng: -122.0982, label: "Snohomish", color: "red", url: "images/dukes/Snohomish.webp" },
  { lat: 43.5444, lng: 11.7146, label: "Borro Vineyard, Tuscany", color: "red", url: "images/dukes/Borro_Vineyard_in_Tuscany_Italy.webp" },
  { lat: 47.7237, lng: -122.4713, label: "Puget Sound", color: "red", url: "images/dukes/Puget_Sound.webp" },
  { lat: 38.7328, lng: -109.5746, label: "Arches", color: "red", url: "galleries/jeff-and-beth/Arches/index.html" },
  { lat: 52.4862, lng: -1.8904, label: "Birmingham, England", color: "red", url: "galleries/jeff-and-beth/Birmingham_England/index.html" },
  { lat: 10.3910, lng: -75.4794, label: "Cartagena, Colombia", color: "red", url: "galleries/jeff-and-beth/Cartagena_Colombia/index.html" },
  { lat: 36.1540, lng: -109.5525, label: "Chinle, AZ", color: "red", url: "galleries/jeff-and-beth/Chinle_AZ/index.html" },
  { lat: 35.0659, lng: -109.78, label: "Petrified Forest, AZ", color: "red", url: "galleries/jeff-and-beth/Petrified_Forrest_Arizona/index.html" },
  { lat: 36.9990, lng: -109.0452, label: "4 Corners", color: "red", url: "galleries/jeff-and-beth/4_Corners/index.html" },
  { lat: 12.2019, lng: -68.2624, label: "Bonaire", color: "red", url: "images/dukes/Bonaire.webp" },
  { lat: 26.9298, lng: -82.0454, label: "Punta Gorda", color: "red", url: "images/dukes/Punta_Gorda.webp" },
  { lat: 47.3769, lng: 8.5417, label: "Zurich, Switzerland", color: "red", url: "images/dukes/Zurich_Switzerland.webp" },
  { lat: 42.0987, lng: -75.918, label: "Binghamton", color: "red", url: "images/dukes/Binghamton.webp" },
  { lat: 36.1351, lng: -81.6779, label: "Blowing Rock, NC", color: "red", url: "galleries/jeff-and-beth/Blowing_Rock_NC/index.html" },
  { lat: 12.1696, lng: -68.99, label: "Curaçao", color: "red", url: "galleries/jeff-and-beth/Curacao/index.html" },
  { lat: 14.8482, lng: -68.2146, label: "Curaçao --> FLL", color: "red", url: "images/dukes/Curaçao/IMG_4608.webp" },
  { lat: 37.2309, lng: -108.4618, label: "Mesa Verde National Park", color: "red", url: "galleries/jeff-and-beth/Mesa_Verde_National_Park_Colorado/index.html" },
  { lat: -60.0, lng: -62.3839, label: "Southern Ocean", color: "red", url: "galleries/jeff-and-beth/Southern_Ocean/index.html" },
  { lat: -66.6259, lng: -62.2594, label: "Antarctica", color: "red", url: "galleries/jeff-and-beth/Antarctica/index.html" },
  { lat: -51.3074, lng: -70.4721, label: "Argentina", color: "red", url: "galleries/jeff-and-beth/Argentina/index.html" },
  { lat: 51.2715, lng: -0.3410, label: "Surrey, England", color: "red", url: "galleries/jeff-and-beth/Surrey_England/index.html" },
  { lat: 9.3592, lng: -79.9014, label: "Colón, Panama", color: "red", url: "images/dukes/Colon Panama.webp" },
  { lat: 55.6761, lng: 12.5683, label: "Copenhagen", color: "red", url: "images/dukes/Copenhagen.webp" },
  { lat: 38.9072, lng: -77.0369, label: "Washington, DC", color: "red", url: "images/dukes/DC.webp" },
  { lat: 43.77, lng: 11.2577, label: "Florence", color: "red", url: "images/dukes/Florence.webp" },
  { lat: 48.0677, lng: -116.0223, label: "Heron, Montana", color: "red", url: "images/dukes/Heron Montana.webp" },
  { lat: 44.9778, lng: -93.2650, label: "Minneapolis", color: "red", url: "images/dukes/Minneapolis.webp" },
  { lat: 35.4676, lng: -97.5164, label: "Oklahoma City", color: "red", url: "images/dukes/Oklahoma City.webp" },
  { lat: 37.2707, lng: -76.7075, label: "Williamsburg, VA", color: "red", url: "images/dukes/Williamsburg VA.webp" },
  { lat: 34.1477, lng: -118.1443, label: "Pasadena", color: "red", url: "images/dukes/Pasadena_CA.webp" },
  { lat: 43.6532, lng: -79.3832, label: "Toronto 2012", color: "red", url: "galleries/jeff-and-beth/Toronto/index.html" },
  { lat: 41.1148, lng: -74.1496, label: "Suffern NY", color: "red", url: "images/dukes/Suffern NY.webp" },
  { lat: 48.2766, lng: -116.5535, label: "Sandpoint Idaho", color: "red", url: "images/dukes/Sandpoint Idaho.webp" },
  { lat: 25.0821, lng: -77.3134, label: "Paradise Island Bahamas", color: "red", url: "images/dukes/Paradise Island Bahamas.webp" },
  { lat: 35.0844, lng: -106.6504, label: "Albuquerque, NM", color: "red", url: "images/dukes/Albuquerque NM.webp" },
  { lat: 33.5974, lng: -117.8369, label: "Newport Coast, CA", color: "red", url: "images/dukes/Newport Coast CA.webp" },
  // duplicated in fam
  { lat: 39.0974, lng: -84.5071, label: "Ohio", color: "red", url: "images/dukes/Ohio.webp" },
  // This is duplicated for mel and carl
  { lat: 27.9517, lng: -82.4588, label: "Tampa Bay", color: "red", url: "images/dukes/Tampa Bay.webp" },
  // Captain Kate and Panama Canal were moved to Nenee and Joe pins
  // { lat: 9.11983, lng: -79.738606, label: "Panama Canal", color: "red", url: "images/dukes/IMG_2904_Panama_Canal.png" },
  // { lat: 10.8992, lng: -80.3467, label: "Captain Kate", color: "red", url: "images/dukes/panama_canal/panama_canal_with_captain_kate.jpeg" },
  // These were duplicated for nenee and joe
  { lat: 12.5211, lng: -69.9683, label: "Aruba", color: "red", url: "images/dukes/Aruba.webp" },
  { lat: 42.0, lng: -88.0, label: "Zacks Bootcamp Graduation (Great Lakes IL)", color: "red", url: "images/dukes/zack_bc.jpeg" },
  { lat: 20.2114, lng: -87.4654, label: "Tulum", color: "red", url: "galleries/jeff-and-beth/Tulum/index.html" },
  // -------------------- MISSING IMAGES FOR DUKES --------------------
  { lat: 20.7909697, lng: -156.3269338, label: "Kula Volcano Maui", color: "red", 
    // url: "images/dukes/2013-07-22_00-35-56_198.jpeg" 
  },
  { lat: 49.4099, lng: -1.3182, label: "Sainte-Mere-Ellis", color: "red", 
    // url: "images/dukes/IMG_2426.JPG" 
  },
  { lat: 26.264442, lng: -80.223888, label: "Colon Wedding (Carolina golf club)", color: "red", 
    // url: "images/dukes/IMG_1285.JPG" 
  },
  { lat: 34.1613, lng: -118.1676, label: "Rose bowl", color: "red", 
    // url: "images/dukes/IMG_0323.JPG" 
  },
  { lat: 35.5951, lng: -82.5515, label: "Asheville", color: "red", 
    // url: "images/dukes/IMG_2892.JPG" 
  },
  { lat: 41.9484, lng: -87.6553, label: "Wrigley Field", color: "red", 
    // url: "images/dukes/IMG_5151.JPG" 
  },
  // { lat: 59.91, lng: 10.6802, label: "Bygdoy Norway", color: "red", 
  //   // url: "images/dukes/IMG_0348.JPG" 
  // },
  // { lat: 28.3597, lng: -81.5913, label: "Addison Gender Reveal (Animal Kingdom)", color: "red", 
  //   // url: "images/dukes/IMG_3442.jpg" 
  // },
  { lat: 44.9778, lng: -93.265, label: "Minneapolis", color: "red", 
    // url: "images/dukes/IMG_3225.JPG" 
  },
  { lat: 37.2116, lng: -76.7752, label: "Jamestown VA", color: "red", 
    // url: "images/dukes/IMG_2193.jpg" 
  },
  // ------------------------- Tako and Dani -------------------------
  {
    lat: 21.4389,
    lng: -158.9633,
    label: "Tako & Dani - O'ahu",
    color: "teal",
    url: "galleries/tako-and-dani/hawaii-dani2025/index.html"
  },
  {
    lat: 29.9511,
    lng: -90.3715,
    label: "Tako & Dani - New Orleans",
    color: "teal",
    url: "galleries/tako-and-dani/nola/index.html"
  },
  {
    lat: 27.7731,
    lng: -82.64,
    label: "St. Petersburg, FL",
    color: "teal",
    // url: "galleries/tako-and-dani/st_petersburg_fl/index.html"
    url: "images/tako-and-dani/st-pete.jpeg"
  },
  {
    lat: 24.5551,
    lng: -81.78,
    label: "Key West, FL",
    color: "teal",
    url: "galleries/tako-and-dani/key-west/index.html"
  },
  {
    lat: 26.142,
    lng: -81.7948,
    label: "Naples, FL",
    color: "teal",
    // url: "galleries/tako-and-dani/naples_fl/index.html"
  },
  {
    lat: 32.9595,
    lng: -117.2653,
    label: "Del Mar, CA",
    color: "teal",
    // url: "galleries/tako-and-dani/san-diego/index.html"
    url: "images/tako-and-dani/sandiego1.webp"
  },
  {
    lat: 40.6826,
    lng: -73.9755,
    label: "Barclays Center - Brooklyn",
    color: "teal",
    // url: "galleries/tako-and-dani/new_york/index.html"
    url: "https://cmutnik.github.io/takophotos/gallery/gallery12/"
  },
  // {
  //   lat: 40.7128,
  //   lng: -74.006,
  //   label: "Tako & Dani - New York",
  //   color: "teal",
  //   url: "galleries/tako-and-dani/new_york/index.html"
  // },
];

const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');

popup.addEventListener('click', (event) => {
  event.stopPropagation();
  popup.classList.add('hidden');
  popupImage.src = '';
});

const globe = window.Globe()(document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .pointOfView({ lat: 20, lng: 0, altitude: 2 });

// Detect touch devices to improve pin usability on mobile
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

globe
  .pointsData(markers)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(d => d.color)
  .pointAltitude(isTouch ? 0.08 : 0.05)
  .pointRadius(isTouch ? 0.6 : 0.2)
  .pointLabel('label')
  .onPointClick(d => {
    if (d.url) {
      if (/\.(png|jpe?g|gif|JPE?G|webp)$/i.test(d.url)) {
        popupImage.src = d.url;
        popup.classList.remove('hidden');
      } else {
        window.location.href = d.url;
      }
    }
  });


const activeColors = new Set(markers.map(m => m.color));

function updateMarkers() {
  globe.pointsData(markers.filter(m => activeColors.has(m.color)));
}

updateMarkers();

document.querySelectorAll('.legend-item').forEach(item => {
  const color = item.dataset.color;
  item.addEventListener('click', () => {
    if (activeColors.has(color)) {
      activeColors.delete(color);
      item.classList.add('disabled');
    } else {
      activeColors.add(color);
      item.classList.remove('disabled');
    }
    updateMarkers();
  });
});