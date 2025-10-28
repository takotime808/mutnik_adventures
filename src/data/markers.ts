export interface Marker {
  lat: number;
  lng: number;
  label: string;
  color: string;
  url?: string;
}

export const markers: Marker[] = [
  // ------------------------- Fam -------------------------
  {
    lat: 42.6507,
    lng: 18.0944,
    label: 'Dubrovnik',
    color: 'lightpink'
  },
  {
    lat: 37.9838,
    lng: 23.7275,
    label: 'Greece Coastline',
    color: 'lightpink'
    // url: '/galleries/og-mutniks/greece/index.html'
  },
  {
    lat: 43.7102,
    lng: 7.262,
    label: 'Nice, France',
    color: 'lightpink'
    // url: '/galleries/og-mutniks/nice/index.html'
  },
  {
    lat: 26.1276,
    lng: -80.2331,
    label: 'Fam - OG Mutniks',
    color: 'lightpink',
    url: '/galleries/og-mutniks/index.html'
  },
  {
    lat: -0.9538,
    lng: -90.9656,
    label: 'Galapagos Islands',
    color: 'lightpink',
    url: '/galleries/og-mutniks/galapagos/index.html'
  },
  {
    lat: 21.6415,
    lng: -158.0671,
    label: 'Family Dino Feeding',
    color: 'lightpink',
    url: '/images/fam/44e22af4-5c32-4d96-ba3d-48abf198a002.webp'
  },
  {
    lat: 43.041,
    lng: -87.9097,
    label: 'Milwaukee',
    color: 'lightpink',
    url: '/images/fam/MilwaukeeWI.webp'
  },
  {
    lat: 41.9484,
    lng: -87.6553,
    label: 'Wrigley Field',
    color: 'lightpink',
    url: '/images/fam/WrigleyField_ChicagoIL.webp'
  },
  {
    lat: 41.8299,
    lng: -87.4337,
    label: 'US Cellular Field',
    color: 'lightpink',
    url: '/images/fam/USCellularField_ChicagoIL.webp'
  },
  // ** Chicago is duplicate from mel and carl (same photos) **
  {
    lat: 41.8781,
    lng: -87,
    label: 'Fam - Chicago',
    color: 'lightpink',
    url: '/galleries/og-mutniks/chicago/index.html'
  },
  // ** NC is duplicate from mel and carl **
  {
    lat: 35.7596,
    lng: -79.0193,
    label: 'Fam - North Carolina',
    color: 'lightpink',
    url: '/galleries/og-mutniks/NC/index.html'
  },
  // ** NY (sr.bobs) and gender reveal are duplicate from mel and carl **
  {
    lat: 44.2562,
    lng: -73.7921,
    label: "Tyler & Sr. Bob's Wedding (NY)",
    color: 'lightpink',
    url: '/galleries/og-mutniks/ny-tyler-sr-bobs/index.html'
  },
  {
    lat: 28.3597,
    lng: -81.5913,
    label: 'Addison Gender Reveal (Animal Kingdom)',
    color: 'lightpink',
    url: '/images/fam/IMG_3442.webp'
  },
  // ** AK and Ohio are duplicate from jeff and beth (with different image layout) **
  {
    lat: 58.3019,
    lng: -134.4197,
    label: 'Fam - Juneau',
    color: 'lightpink',
    url: '/galleries/og-mutniks/juneau/index.html'
  },
  {
    lat: 39.0974,
    lng: -84.5071,
    label: 'Fam - Ohio',
    color: 'lightpink',
    url: '/images/dukes/Ohio.webp'
  },
  // ------------------------- Nenee and Joe -------------------------
  {
    lat: 8.997,
    lng: -79.5917,
    label: 'Panama Canal',
    color: '#2ecc71',
    url: '/images/dukes/IMG_2904_Panama_Canal.png'
  },
  {
    lat: 10.8992,
    lng: -80.3467,
    label: 'Captain Kate',
    color: '#2ecc71',
    url: '/images/dukes/panama_canal/panama_canal_with_captain_kate.jpeg'
  },
  {
    lat: 20.2114,
    lng: -87.4654,
    label: 'Tulum',
    color: '#2ecc71',
    url: '/galleries/jeff-and-beth/Tulum/index.html'
  },
  {
    lat: 42,
    lng: -88,
    label: "Zacks Bootcamp Graduation",
    color: '#2ecc71',
    url: '/images/dukes/zack_bc.jpeg'
  },
  {
    lat: 12.5211,
    lng: -69.9683,
    label: 'Aruba',
    color: '#2ecc71',
    url: '/images/dukes/Aruba.webp'
  },
  // ------------------------- Zack and Brit -------------------------
  {
    lat: 36.8508,
    lng: -76.2859,
    label: 'Norfolk, Virginia',
    color: 'silver'
    // url: '/galleries/zack/norfolk/index.html'
  },
  {
    lat: 42.3124,
    lng: -87.8414,
    label: "Zack's Bootcamp Graduation (Great Lakes IL)",
    color: 'silver',
    url: '/images/zack-and-brit/IMG_1099.webp'
  },
  // Duplicated from dukes
  {
    lat: 41.466,
    lng: -73.3878,
    label: "Jason & Jessic's Wedding",
    color: 'silver',
    url: '/images/zack-and-brit/Brookfield_CT.webp'
  },
  {
    lat: 26.9298,
    lng: -82.0454,
    label: 'Punta Gorda',
    color: 'silver',
    url: '/images/dukes/Punta_Gorda.webp'
  },
  // ------------------------- Mel and Carl -------------------------
  {
    lat: 41.466,
    lng: -73.3878,
    label: "Jason & Jessic's Wedding",
    color: 'purple',
    url: '/images/zack-and-brit/Brookfield_CT.webp'
  },
  {
    lat: 28.3597,
    lng: -81.5913,
    label: 'Addison Gender Reveal (Animal Kingdom)',
    color: 'purple',
    url: '/images/fam/IMG_3442.webp'
  },
  {
    lat: 27.9517,
    lng: -82.4588,
    label: 'Tampa Bay',
    color: 'purple',
    url: '/images/dukes/Tampa Bay.webp'
  },
  {
    lat: 30.4463,
    lng: -140.9758,
    label: 'HI <-- CA',
    color: 'purple',
    url: '/images/mel-and-carl/20180527_152936.webp'
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    label: 'Mel & Carl - London',
    color: 'purple',
    url: '/galleries/mel-and-carl/london/index.html'
  },
  {
    lat: 33.749,
    lng: -84.388,
    label: 'Mel & Carl - Georgia',
    color: 'purple',
    url: '/galleries/mel-and-carl/GA/index.html'
  },
  {
    lat: 35.7596,
    lng: -79.0193,
    label: 'Mel & Carl - North Carolina',
    color: 'purple',
    url: '/galleries/mel-and-carl/NC/index.html'
  },
  {
    lat: 40.7128,
    lng: -74.006,
    label: 'Mel & Carl - New York',
    color: 'purple',
    url: '/galleries/mel-and-carl/NY/index.html'
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    label: 'Mel & Carl - Paris',
    color: 'purple',
    url: '/galleries/mel-and-carl/Paris/index.html'
  },
  {
    lat: 37.4316,
    lng: -78.6569,
    label: 'Mel & Carl - Virginia',
    color: 'purple',
    url: '/galleries/mel-and-carl/VA/index.html'
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    label: 'Mel & Carl - Amsterdam',
    color: 'purple',
    url: '/galleries/mel-and-carl/amsterdam/index.html'
  },
  {
    lat: 51.2093,
    lng: 3.2247,
    label: 'Mel & Carl - Bruges, Belgium',
    color: 'purple',
    url: '/galleries/mel-and-carl/bruges_belgium/index.html'
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    label: 'Mel & Carl - Chicago',
    color: 'purple',
    url: '/galleries/mel-and-carl/chicago/index.html'
  },
  {
    lat: 36.1699,
    lng: -115.1398,
    label: 'Mel & Carl - Las Vegas',
    color: 'purple',
    url: '/galleries/mel-and-carl/vegas/index.html'
  },
  {
    lat: 53.5511,
    lng: 9.9937,
    label: 'Mel & Carl - Hamburg, Germany',
    color: 'purple',
    url: '/galleries/mel-and-carl/hamburg_germany/index.html'
  },
  {
    lat: 21.4389,
    lng: -157.9633,
    label: "Mel & Carl - O'ahu",
    color: 'purple',
    url: '/galleries/mel-and-carl/oahu/index.html'
  },
  {
    lat: 44.2562,
    lng: -73.7921,
    label: "Tyler & Sr. Bob's Wedding (NY)",
    color: 'purple',
    url: '/galleries/mel-and-carl/ny-tyler-sr-bobs/index.html'
  },
  // ------------------------- Tako -------------------------
  {
    lat: 24.8629,
    lng: -81.1476,
    label: 'Mahi Abstract',
    color: 'gold',
    url: '/images/tako/IMG_8432.webp'
  },
  {
    lat: 21.4389,
    lng: -157.9633,
    label: "O'ahu - Tako Gallery",
    color: 'gold',
    url: '/galleries/tako/hawaii/index.html'
  },
  // { lat: 14.87, lng: 100.9925, label: 'Mathilde', color: 'gold', url:  '/images/tako/thai-steps.jpeg' },
  {
    lat: 15.87,
    lng: 100.9925,
    label: 'Thailand',
    color: 'gold',
    url: '/galleries/tako/thailand/index.html'
  },
  {
    lat: 18.9361,
    lng: -155.6465,
    label: 'BI',
    color: 'gold',
    url: '/images/tako/IMG-20211209-WA0018.webp'
  },
  {
    lat: 57.6733,
    lng: -136.8209,
    label: 'silver Baby Orca',
    color: 'gold',
    url: '/images/tako/ak-orca.jpeg'
  },
  {
    lat: 45.1,
    lng: 15.2,
    label: 'Croatia',
    color: 'gold'
    // url: '/galleries/tako/croatia/index.html'
  },
  {
    lat: 53.5511,
    lng: 9.9937,
    label: 'Hamburg, Germany',
    color: 'gold'
    // url: '/galleries/tako/hamburg/index.html'
  },
  {
    lat: 41.2753,
    lng: 28.7519,
    label: 'Istanbul Airport, Turkey',
    color: 'gold',
    url: '/galleries/tako/turkey_airport/index.html'
  },
  {
    lat: -0.9538,
    lng: -90.9656,
    label: 'Galapagos Islands',
    color: 'gold',
    url: '/galleries/og-mutniks/galapagos/index.html'
  },
  {
    lat: 19.1326,
    lng: -99.5332,
    label: 'Mexico City',
    color: 'gold'
    // url: '/galleries/tako/mexico_city/index.html'
  },
  {
    lat: 10.4632,
    lng: -84.7033,
    label: 'Arenal Volcano, Costa Rica',
    color: 'gold'
    // url: '/galleries/tako/arenal_volcano/index.html'
  },
  {
    lat: 45.677,
    lng: -111.0429,
    label: 'Bozeman, Montana',
    color: 'gold'
    // url: '/galleries/tako/bozeman/index.html'
  },
  {
    lat: 36.2168,
    lng: -81.6746,
    label: 'Boone, North Carolina',
    color: 'gold',
    url: '/galleries/tako/boone/index.html'
  },
  {
    lat: 35.5586,
    lng: -75.4665,
    label: 'Outer Banks, NC',
    color: 'gold',
    url: '/images/tako/DB9A4765.webp'
  },
  {
    lat: 35.7647,
    lng: -82.2653,
    label: 'Blue Ridge Mountains',
    color: 'gold'
    // url: '/galleries/tako/outer_banks/index.html'
  },
  {
    lat: 36.8516,
    lng: -75.9792,
    label: 'Virginia Beach',
    color: 'gold'
  },
  {
    lat: 36.1716,
    lng: -115.1391,
    label: 'Las Vegas',
    color: 'gold'
  },
  {
    lat: 36.3008,
    lng: -119.7829,
    label: 'Lemoore',
    color: 'gold'
  },
  {
    lat: 40.7787,
    lng: -113.8352,
    label: 'Salt Flats',
    color: 'gold'
  },
  {
    lat: 30.2747,
    lng: -97.7404,
    label: 'Texas',
    color: 'gold'
  },
  {
    lat: 47.7511,
    lng: -120.7401,
    label: 'Washington',
    color: 'gold'
  },
  {
    lat: 43.076,
    lng: -107.2903,
    label: 'Wyoming',
    color: 'gold'
  },
  {
    lat: 33.423,
    lng: -111.9278,
    label: 'Arizona',
    color: 'gold'
  },
  {
    lat: 41.718,
    lng: -87.6094,
    label: 'Chicago',
    color: 'gold'
  },
  {
    lat: 32.3547,
    lng: -89.3985,
    label: 'Mississippi',
    color: 'gold'
  },
  {
    lat: 32.3182,
    lng: -86.9023,
    label: 'Alabama',
    color: 'gold'
  },
  {
    lat: 38.9848,
    lng: -77.0943,
    label: 'Bethesda',
    color: 'gold'
  },
  {
    lat: 33.7501,
    lng: -84.3885,
    label: 'Atlanta',
    color: 'gold'
  },
  {
    lat: 38.9108,
    lng: -75.5277,
    label: 'Delaware',
    color: 'gold'
  },
  {
    lat: 38.9072,
    lng: -77.0369,
    label: 'DC',
    color: 'gold'
  },
  {
    lat: 34.9727,
    lng: -105.0324,
    label: 'New Mexico',
    color: 'gold'
  },
  {
    lat: 34.6568,
    lng: -83.7199,
    label: 'Helen, Georgia',
    color: 'gold'
    // url: '/galleries/tako/helen/index.html'
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    label: 'Denver, Colorado',
    color: 'gold'
    // url: '/galleries/tako/denver/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Rome, Italy',
    color: 'red',
    url: '/images/dukes/26a0c921-74b3-4433-8c76-12d677742031.JPG'
  },
  {
    lat: 43.7396,
    lng: 7.427,
    label: 'Monaco',
    color: 'gold'
    // url: '/galleries/og-mutniks/monaco/index.html'
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    label: 'Boston, Massachusetts',
    color: 'gold'
    // url: '/galleries/tako/boston/index.html'
  },
  // duplicated grand cayman in jeff and beth
  {
    lat: 19.3222,
    lng: -81.2409,
    label: 'Grand Cayman',
    color: 'gold',
    url: '/images/tako/cayman-shell.jpeg'
  },
  {
    lat: 49.2827,
    lng: -123.1207,
    label: 'Vancouver',
    color: 'gold',
    url: '/images/tako/boat-vancouver.jpeg'
  },
  {
    lat: 40.7607,
    lng: -111.8939,
    label: 'Utah',
    color: 'gold',
    url: '/images/tako/utah-tree.jpeg'
  },
  {
    lat: 36.9066,
    lng: -76.0217,
    label: 'First Landing, VA',
    color: 'gold',
    url: '/images/tako/first-landing-snake.jpeg'
  },
  {
    lat: 44.6995,
    lng: -73.4529,
    label: 'Plattsburgh, New York',
    color: 'gold',
    url: '/galleries/tako/plattsburgh/index.html'
  },
  {
    lat: 31.559,
    lng: 35.4732,
    label: 'Israel',
    color: 'gold',
    url: '/images/tako/DB9A7362.webp'
  },
  {
    lat: 29.0384,
    lng: -81.3789,
    label: 'Orlando',
    color: 'gold',
    url: '/images/tako/DB9A8933.webp'
  },
  {
    lat: 43.2136,
    lng: -123.3413,
    label: 'Oregon',
    color: 'gold',
    url: '/images/tako/oregon.jpeg'
  },
  // ------------------------- Jeff and Beth -------------------------
  // { lat: 40.015, lng: -105.2705, label: 'Boulder', color: 'red', url: '/images/dukes/IMG_2956.JPG' },
  // { lat: 21.3996, lng: -157.7974, label: 'Kaneohe', color: 'red', url: '/images/dukes/DB9A6455.JPG' },
  // { lat: 21.4, lng: -157.8, label: 'Haleiwa Joes', color: 'red', url: '/images/dukes/DB9A6467.JPG' },
  {
    lat: 21.6396,
    lng: -158.6246,
    label: 'Jeff & Beth - Hawaii',
    color: 'red',
    url: '/galleries/jeff-and-beth/oahu/index.html'
  },
  {
    lat: 40.01499,
    lng: -105.27055,
    label: 'Jeff & Beth - Boulder',
    color: 'red',
    url: '/galleries/jeff-and-beth/boulder/index.html'
  },
  {
    lat: 58.3019,
    lng: -134.4197,
    label: 'Jeff & Beth - Juneau',
    color: 'red',
    url: '/galleries/jeff-and-beth/juneau/index.html'
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    label: 'Jeff & Beth - Chicago',
    color: 'red',
    url: '/galleries/jeff-and-beth/chicago/index.html'
  },
  {
    lat: 36.1699,
    lng: -115.1398,
    label: 'Jeff & Beth - Las Vegas',
    color: 'red',
    url: '/galleries/jeff-and-beth/vegas/index.html'
  },
  {
    lat: 36.1746,
    lng: -115.136,
    label: 'Jeff & Beth - Old Vegas',
    color: 'red',
    url: '/galleries/jeff-and-beth/old-vegas/index.html'
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    label: 'Jeff & Beth - Los Angeles',
    color: 'red',
    url: '/galleries/jeff-and-beth/los-angeles/index.html'
  },
  {
    lat: 34.4208,
    lng: -119.6982,
    label: 'Jeff & Beth - Santa Barbara',
    color: 'red',
    url: '/galleries/jeff-and-beth/santa-barbara/index.html'
  },
  {
    lat: 28.5383,
    lng: -81.3792,
    label: 'Jeff & Beth - Orlando',
    color: 'red',
    url: '/galleries/jeff-and-beth/orlando/index.html'
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    label: 'Jeff & Beth - Miami',
    color: 'red',
    url: '/galleries/jeff-and-beth/miami/index.html'
  },
  {
    lat: 25.7743,
    lng: -80.1937,
    label: 'Jeff & Beth - Miami Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/miami-cruise/index.html'
  },
  {
    lat: 17.9687,
    lng: -76.7936,
    label: 'Jeff & Beth - Kingston',
    color: 'red',
    url: '/galleries/jeff-and-beth/kingston/index.html'
  },
  {
    lat: 18.3358,
    lng: -64.8963,
    label: 'Jeff & Beth - St. John',
    color: 'red',
    url: '/galleries/jeff-and-beth/st-john/index.html'
  },
  {
    lat: 9.7489,
    lng: -83.7534,
    label: 'Jeff & Beth - Costa Rica',
    color: 'red',
    url: '/galleries/jeff-and-beth/costa-rica/index.html'
  },
  {
    lat: 12.1696,
    lng: -68.99,
    label: 'Jeff & Beth - Bonaire',
    color: 'red',
    url: '/galleries/jeff-and-beth/bonaire/index.html'
  },
  {
    lat: 13.1939,
    lng: -59.5432,
    label: 'Jeff & Beth - Barbados',
    color: 'red',
    url: '/galleries/jeff-and-beth/barbados/index.html'
  },
  {
    lat: 8.5379,
    lng: -80.7821,
    label: 'Jeff & Beth - Panama',
    color: 'red',
    url: '/galleries/jeff-and-beth/panama/index.html'
  },
  {
    lat: 32.7765,
    lng: -79.9311,
    label: 'Jeff & Beth - Charleston',
    color: 'red',
    url: '/galleries/jeff-and-beth/charleston/index.html'
  },
  {
    lat: 35.2271,
    lng: -80.8431,
    label: 'Jeff & Beth - Charlotte',
    color: 'red',
    url: '/galleries/jeff-and-beth/charlotte/index.html'
  },
  {
    lat: 33.749,
    lng: -84.388,
    label: 'Jeff & Beth - Atlanta',
    color: 'red',
    url: '/galleries/jeff-and-beth/atlanta/index.html'
  },
  {
    lat: 33.4468,
    lng: -112.07,
    label: 'Jeff & Beth - Phoenix',
    color: 'red',
    url: '/galleries/jeff-and-beth/phoenix/index.html'
  },
  {
    lat: 39.0997,
    lng: -94.5786,
    label: 'Jeff & Beth - Kansas City',
    color: 'red',
    url: '/galleries/jeff-and-beth/kansas-city/index.html'
  },
  {
    lat: 27.9506,
    lng: -82.4572,
    label: 'Jeff & Beth - Tampa',
    color: 'red',
    url: '/galleries/jeff-and-beth/tampa/index.html'
  },
  {
    lat: 33.4484,
    lng: -112.074,
    label: 'Jeff & Beth - Scottsdale',
    color: 'red',
    url: '/galleries/jeff-and-beth/scottsdale/index.html'
  },
  {
    lat: 29.7604,
    lng: -95.3698,
    label: 'Jeff & Beth - Houston',
    color: 'red',
    url: '/galleries/jeff-and-beth/houston/index.html'
  },
  {
    lat: 30.2672,
    lng: -97.7431,
    label: 'Jeff & Beth - Austin',
    color: 'red',
    url: '/galleries/jeff-and-beth/austin/index.html'
  },
  {
    lat: 36.7378,
    lng: -119.7871,
    label: 'Jeff & Beth - Fresno',
    color: 'red',
    url: '/galleries/jeff-and-beth/fresno/index.html'
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    label: 'Jeff & Beth - Denver',
    color: 'red',
    url: '/galleries/jeff-and-beth/denver/index.html'
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    label: 'Jeff & Beth - Key Biscayne',
    color: 'red',
    url: '/galleries/jeff-and-beth/key-biscayne/index.html'
  },
  {
    lat: 22.3205,
    lng: 114.1696,
    label: 'Jeff & Beth - Hong Kong',
    color: 'red',
    url: '/galleries/jeff-and-beth/hong-kong/index.html'
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    label: 'Jeff & Beth - Singapore',
    color: 'red',
    url: '/galleries/jeff-and-beth/singapore/index.html'
  },
  {
    lat: 3.139,
    lng: 101.6869,
    label: 'Jeff & Beth - Kuala Lumpur',
    color: 'red',
    url: '/galleries/jeff-and-beth/kuala-lumpur/index.html'
  },
  {
    lat: 13.7563,
    lng: 100.5018,
    label: 'Jeff & Beth - Bangkok',
    color: 'red',
    url: '/galleries/jeff-and-beth/bangkok/index.html'
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    label: 'Jeff & Beth - Tokyo',
    color: 'red',
    url: '/galleries/jeff-and-beth/tokyo/index.html'
  },
  {
    lat: 51.5072,
    lng: -0.1276,
    label: 'Jeff & Beth - London',
    color: 'red',
    url: '/galleries/jeff-and-beth/london/index.html'
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    label: 'Jeff & Beth - Paris',
    color: 'red',
    url: '/galleries/jeff-and-beth/paris/index.html'
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    label: 'Jeff & Beth - Moscow',
    color: 'red',
    url: '/galleries/jeff-and-beth/moscow/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Jeff & Beth - Rome',
    color: 'red',
    url: '/galleries/jeff-and-beth/rome/index.html'
  },
  {
    lat: 41.3851,
    lng: 2.1734,
    label: 'Jeff & Beth - Barcelona',
    color: 'red',
    url: '/galleries/jeff-and-beth/barcelona/index.html'
  },
  {
    lat: 45.4642,
    lng: 9.19,
    label: 'Jeff & Beth - Milan',
    color: 'red',
    url: '/galleries/jeff-and-beth/milan/index.html'
  },
  {
    lat: 51.2194,
    lng: 4.4025,
    label: 'Jeff & Beth - Antwerp',
    color: 'red',
    url: '/galleries/jeff-and-beth/antwerp/index.html'
  },
  {
    lat: 50.1109,
    lng: 8.6821,
    label: 'Jeff & Beth - Frankfurt',
    color: 'red',
    url: '/galleries/jeff-and-beth/frankfurt/index.html'
  },
  {
    lat: 40.4168,
    lng: -3.7038,
    label: 'Jeff & Beth - Madrid',
    color: 'red',
    url: '/galleries/jeff-and-beth/madrid/index.html'
  },
  {
    lat: 52.52,
    lng: 13.405,
    label: 'Jeff & Beth - Berlin',
    color: 'red',
    url: '/galleries/jeff-and-beth/berlin/index.html'
  },
  {
    lat: 59.3293,
    lng: 18.0686,
    label: 'Jeff & Beth - Stockholm',
    color: 'red',
    url: '/galleries/jeff-and-beth/stockholm/index.html'
  },
  {
    lat: 64.1265,
    lng: -21.8174,
    label: 'Jeff & Beth - Reykjavik',
    color: 'red',
    url: '/galleries/jeff-and-beth/reykjavik/index.html'
  },
  {
    lat: 60.1699,
    lng: 24.9384,
    label: 'Jeff & Beth - Helsinki',
    color: 'red',
    url: '/galleries/jeff-and-beth/helsinki/index.html'
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    label: 'Jeff & Beth - Oslo',
    color: 'red',
    url: '/galleries/jeff-and-beth/oslo/index.html'
  },
  {
    lat: 55.6761,
    lng: 12.5683,
    label: 'Jeff & Beth - Copenhagen',
    color: 'red',
    url: '/galleries/jeff-and-beth/copenhagen/index.html'
  },
  {
    lat: 41.1579,
    lng: -8.6291,
    label: 'Jeff & Beth - Porto',
    color: 'red',
    url: '/galleries/jeff-and-beth/porto/index.html'
  },
  {
    lat: 38.7223,
    lng: -9.1393,
    label: 'Jeff & Beth - Lisbon',
    color: 'red',
    url: '/galleries/jeff-and-beth/lisbon/index.html'
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    label: 'Jeff & Beth - Vienna',
    color: 'red',
    url: '/galleries/jeff-and-beth/vienna/index.html'
  },
  {
    lat: 52.2297,
    lng: 21.0122,
    label: 'Jeff & Beth - Warsaw',
    color: 'red',
    url: '/galleries/jeff-and-beth/warsaw/index.html'
  },
  {
    lat: 45.815,
    lng: 15.9819,
    label: 'Jeff & Beth - Zagreb',
    color: 'red',
    url: '/galleries/jeff-and-beth/zagreb/index.html'
  },
  {
    lat: 48.1486,
    lng: 17.1077,
    label: 'Jeff & Beth - Bratislava',
    color: 'red',
    url: '/galleries/jeff-and-beth/bratislava/index.html'
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    label: 'Jeff & Beth - Prague',
    color: 'red',
    url: '/galleries/jeff-and-beth/prague/index.html'
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    label: 'Jeff & Beth - Amsterdam',
    color: 'red',
    url: '/galleries/jeff-and-beth/amsterdam/index.html'
  },
  {
    lat: 41.3851,
    lng: 2.1734,
    label: 'Jeff & Beth - Sitges',
    color: 'red',
    url: '/galleries/jeff-and-beth/sitges/index.html'
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    label: 'Jeff & Beth - Dubai',
    color: 'red',
    url: '/galleries/jeff-and-beth/dubai/index.html'
  },
  {
    lat: 51.5072,
    lng: -0.1276,
    label: 'Jeff & Beth - London 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/london-2023/index.html'
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    label: 'Jeff & Beth - San Francisco',
    color: 'red',
    url: '/galleries/jeff-and-beth/san-francisco/index.html'
  },
  {
    lat: 32.7157,
    lng: -117.1611,
    label: 'Jeff & Beth - San Diego',
    color: 'red',
    url: '/galleries/jeff-and-beth/san-diego/index.html'
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    label: 'Jeff & Beth - Seattle',
    color: 'red',
    url: '/galleries/jeff-and-beth/seattle/index.html'
  },
  {
    lat: 25.0343,
    lng: -77.3963,
    label: 'Jeff & Beth - Nassau',
    color: 'red',
    url: '/galleries/jeff-and-beth/nassau/index.html'
  },
  {
    lat: 18.2208,
    lng: -66.5901,
    label: 'Jeff & Beth - Puerto Rico',
    color: 'red',
    url: '/galleries/jeff-and-beth/puerto-rico/index.html'
  },
  {
    lat: 18.42,
    lng: -64.64,
    label: 'Jeff & Beth - Tortola',
    color: 'red',
    url: '/galleries/jeff-and-beth/tortola/index.html'
  },
  {
    lat: 17.3026,
    lng: -62.7177,
    label: 'Jeff & Beth - St. Kitts',
    color: 'red',
    url: '/galleries/jeff-and-beth/st-kitts/index.html'
  },
  {
    lat: 17.8965,
    lng: -62.8505,
    label: 'Jeff & Beth - Nevis',
    color: 'red',
    url: '/galleries/jeff-and-beth/nevis/index.html'
  },
  {
    lat: 18.2206,
    lng: -63.0686,
    label: 'Jeff & Beth - Anguilla',
    color: 'red',
    url: '/galleries/jeff-and-beth/anguilla/index.html'
  },
  {
    lat: 17.3578,
    lng: -62.783,
    label: 'Jeff & Beth - Frigate Bay',
    color: 'red',
    url: '/galleries/jeff-and-beth/frigate-bay/index.html'
  },
  {
    lat: 18.3297,
    lng: -64.938,
    label: 'Jeff & Beth - Cruz Bay',
    color: 'red',
    url: '/galleries/jeff-and-beth/cruz-bay/index.html'
  },
  {
    lat: 19.8968,
    lng: -155.5828,
    label: 'Jeff & Beth - Big Island',
    color: 'red',
    url: '/galleries/jeff-and-beth/big-island/index.html'
  },
  {
    lat: 21.3069,
    lng: -157.8583,
    label: 'Jeff & Beth - Honolulu',
    color: 'red',
    url: '/galleries/jeff-and-beth/honolulu/index.html'
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    label: 'Jeff & Beth - Oslo 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/oslo-2023/index.html'
  },
  {
    lat: 60.472,
    lng: 8.4689,
    label: 'Jeff & Beth - Norway Road Trip',
    color: 'red',
    url: '/galleries/jeff-and-beth/norway/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Road Trip',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland/index.html'
  },
  {
    lat: 52.52,
    lng: 13.405,
    label: 'Jeff & Beth - Berlin 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/berlin-2023/index.html'
  },
  {
    lat: 48.1351,
    lng: 11.582,
    label: 'Jeff & Beth - Munich',
    color: 'red',
    url: '/galleries/jeff-and-beth/munich/index.html'
  },
  {
    lat: 47.4979,
    lng: 19.0402,
    label: 'Jeff & Beth - Budapest',
    color: 'red',
    url: '/galleries/jeff-and-beth/budapest/index.html'
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    label: 'Jeff & Beth - Prague 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/prague-2023/index.html'
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    label: 'Jeff & Beth - Vienna 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/vienna-2023/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Jeff & Beth - Rome 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/rome-2023/index.html'
  },
  {
    lat: 37.9838,
    lng: 23.7275,
    label: 'Jeff & Beth - Athens',
    color: 'red',
    url: '/galleries/jeff-and-beth/athens/index.html'
  },
  {
    lat: 43.7696,
    lng: 11.2558,
    label: 'Jeff & Beth - Florence',
    color: 'red',
    url: '/galleries/jeff-and-beth/florence/index.html'
  },
  {
    lat: 45.4408,
    lng: 12.3155,
    label: 'Jeff & Beth - Venice',
    color: 'red',
    url: '/galleries/jeff-and-beth/venice/index.html'
  },
  {
    lat: 41.3851,
    lng: 2.1734,
    label: 'Jeff & Beth - Barcelona 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/barcelona-2023/index.html'
  },
  {
    lat: 45.4642,
    lng: 9.19,
    label: 'Jeff & Beth - Milan 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/milan-2023/index.html'
  },
  {
    lat: 40.4168,
    lng: -3.7038,
    label: 'Jeff & Beth - Madrid 2023',
    color: 'red',
    url: '/galleries/jeff-and-beth/madrid-2023/index.html'
  },
  {
    lat: 52.52,
    lng: 13.405,
    label: 'Jeff & Beth - Berlin Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/berlin-christmas/index.html'
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    label: 'Jeff & Beth - Vienna Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/vienna-christmas/index.html'
  },
  {
    lat: 47.4979,
    lng: 19.0402,
    label: 'Jeff & Beth - Budapest Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/budapest-christmas/index.html'
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    label: 'Jeff & Beth - Prague Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/prague-christmas/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Jeff & Beth - Rome Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/rome-christmas/index.html'
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    label: 'Jeff & Beth - Oslo Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/oslo-christmas/index.html'
  },
  {
    lat: 64.1265,
    lng: -21.8174,
    label: 'Jeff & Beth - Reykjavik Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/reykjavik-christmas/index.html'
  },
  {
    lat: 60.1699,
    lng: 24.9384,
    label: 'Jeff & Beth - Helsinki Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/helsinki-christmas/index.html'
  },
  {
    lat: 55.6761,
    lng: 12.5683,
    label: 'Jeff & Beth - Copenhagen Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/copenhagen-christmas/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Jeff & Beth - Rome 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/rome-2024/index.html'
  },
  {
    lat: 52.52,
    lng: 13.405,
    label: 'Jeff & Beth - Berlin 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/berlin-2024/index.html'
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    label: 'Jeff & Beth - Oslo 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/oslo-2024/index.html'
  },
  {
    lat: 60.1699,
    lng: 24.9384,
    label: 'Jeff & Beth - Helsinki 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/helsinki-2024/index.html'
  },
  {
    lat: 55.6761,
    lng: 12.5683,
    label: 'Jeff & Beth - Copenhagen 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/copenhagen-2024/index.html'
  },
  {
    lat: 64.1265,
    lng: -21.8174,
    label: 'Jeff & Beth - Reykjavik 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/reykjavik-2024/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland 2024',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-2024/index.html'
  },
  {
    lat: 52.52,
    lng: 13.405,
    label: 'Jeff & Beth - Berlin Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/berlin-easter/index.html'
  },
  {
    lat: 48.2082,
    lng: 16.3738,
    label: 'Jeff & Beth - Vienna Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/vienna-easter/index.html'
  },
  {
    lat: 47.4979,
    lng: 19.0402,
    label: 'Jeff & Beth - Budapest Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/budapest-easter/index.html'
  },
  {
    lat: 45.4642,
    lng: 9.19,
    label: 'Jeff & Beth - Milan Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/milan-easter/index.html'
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: 'Jeff & Beth - Rome Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/rome-easter/index.html'
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    label: 'Jeff & Beth - Amsterdam Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/amsterdam-easter/index.html'
  },
  {
    lat: 59.9139,
    lng: 10.7522,
    label: 'Jeff & Beth - Oslo Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/oslo-easter/index.html'
  },
  {
    lat: 60.1699,
    lng: 24.9384,
    label: 'Jeff & Beth - Helsinki Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/helsinki-easter/index.html'
  },
  {
    lat: 64.1265,
    lng: -21.8174,
    label: 'Jeff & Beth - Reykjavik Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/reykjavik-easter/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-easter/index.html'
  },
  {
    lat: 52.2297,
    lng: 21.0122,
    label: 'Jeff & Beth - Warsaw Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/warsaw-easter/index.html'
  },
  {
    lat: 45.815,
    lng: 15.9819,
    label: 'Jeff & Beth - Zagreb Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/zagreb-easter/index.html'
  },
  {
    lat: 48.1486,
    lng: 17.1077,
    label: 'Jeff & Beth - Bratislava Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/bratislava-easter/index.html'
  },
  {
    lat: 50.0755,
    lng: 14.4378,
    label: 'Jeff & Beth - Prague Easter',
    color: 'red',
    url: '/galleries/jeff-and-beth/prague-easter/index.html'
  },
  {
    lat: 52.3676,
    lng: 4.9041,
    label: 'Jeff & Beth - Amsterdam Christmas',
    color: 'red',
    url: '/galleries/jeff-and-beth/amsterdam-christmas/index.html'
  },
  {
    lat: 25.0343,
    lng: -77.3963,
    label: 'Jeff & Beth - Nassau Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/nassau-cruise/index.html'
  },
  {
    lat: 18.2208,
    lng: -66.5901,
    label: 'Jeff & Beth - Puerto Rico Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/puerto-rico-cruise/index.html'
  },
  {
    lat: 17.3026,
    lng: -62.7177,
    label: 'Jeff & Beth - St. Kitts Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/st-kitts-cruise/index.html'
  },
  {
    lat: 18.2206,
    lng: -63.0686,
    label: 'Jeff & Beth - Anguilla Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/anguilla-cruise/index.html'
  },
  {
    lat: 17.8965,
    lng: -62.8505,
    label: 'Jeff & Beth - Nevis Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/nevis-cruise/index.html'
  },
  {
    lat: 17.3578,
    lng: -62.783,
    label: 'Jeff & Beth - Frigate Bay Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/frigate-bay-cruise/index.html'
  },
  {
    lat: 18.3358,
    lng: -64.8963,
    label: 'Jeff & Beth - St. John Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/st-john-cruise/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-cruise/index.html'
  },
  {
    lat: 64.1265,
    lng: -21.8174,
    label: 'Jeff & Beth - Reykjavik Cruise',
    color: 'red',
    url: '/galleries/jeff-and-beth/reykjavik-cruise/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Northern Lights',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-northern-lights/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Waterfalls',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-waterfalls/index.html'
  },
  {
    lat: 64.9631,
    lng: -19.0208,
    label: 'Jeff & Beth - Iceland Volcanoes',
    color: 'red',
    url: '/galleries/jeff-and-beth/iceland-volcanoes/index.html'
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    label: 'Jeff & Beth - Los Angeles Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/los-angeles-marathon/index.html'
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    label: 'Jeff & Beth - Chicago Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/chicago-marathon/index.html'
  },
  {
    lat: 40.7128,
    lng: -74.006,
    label: 'Jeff & Beth - New York Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/new-york-marathon/index.html'
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    label: 'Jeff & Beth - Boston Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/boston-marathon/index.html'
  },
  {
    lat: 34.0522,
    lng: -118.2437,
    label: 'Jeff & Beth - Los Angeles Half Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/los-angeles-half-marathon/index.html'
  },
  {
    lat: 36.1699,
    lng: -115.1398,
    label: 'Jeff & Beth - Las Vegas Half Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/las-vegas-half-marathon/index.html'
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    label: 'Jeff & Beth - San Francisco Half Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/san-francisco-half-marathon/index.html'
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    label: 'Jeff & Beth - Seattle Half Marathon',
    color: 'red',
    url: '/galleries/jeff-and-beth/seattle-half-marathon/index.html'
  },
  {
    lat: 32.7767,
    lng: -96.797,
    label: 'Jeff & Beth - Dallas',
    color: 'red'
    // url: '/images/dukes/IMG_5154.JPG'
  },
  {
    lat: 34.1613,
    lng: -118.1676,
    label: 'Rose bowl',
    color: 'red'
    // url: '/images/dukes/IMG_0323.JPG'
  },
  {
    lat: 35.5951,
    lng: -82.5515,
    label: 'Asheville',
    color: 'red'
    // url: '/images/dukes/IMG_2892.JPG'
  },
  {
    lat: 41.9484,
    lng: -87.6553,
    label: 'Wrigley Field',
    color: 'red'
    // url: '/images/dukes/IMG_5151.JPG'
  },
  // { lat: 59.91, lng: 10.6802, label: 'Bygdoy Norway', color: 'red',
  //   // url: '/images/dukes/IMG_0348.JPG'
  // },
  {
    lat: 44.9778,
    lng: -93.265,
    label: 'Minneapolis',
    color: 'red'
    // url: '/images/dukes/IMG_3225.JPG'
  },
  {
    lat: 37.2116,
    lng: -76.7752,
    label: 'Jamestown VA',
    color: 'red'
    // url: '/images/dukes/IMG_2193.jpg'
  },
  // ------------------------- Tako and Dani -------------------------
  // Detoit is a duplicate pin from dukes and a joke...
  {
    lat: 42.3297,
    lng: -83.0425,
    label: 'Detroiters',
    color: 'teal',
    url: '/images/tako-and-dani/detroiters.webp'
  },
  {
    lat: 21.4389,
    lng: -158.9633,
    label: "Tako & Dani - O'ahu",
    color: 'teal',
    url: '/galleries/tako-and-dani/hawaii-dani2025/index.html'
  },
  {
    lat: 29.9511,
    lng: -90.3715,
    label: 'Tako & Dani - New Orleans',
    color: 'teal',
    url: '/galleries/tako-and-dani/nola/index.html'
  },
  {
    lat: 27.7731,
    lng: -82.64,
    label: 'St. Petersburg, FL',
    color: 'teal',
    url: '/images/tako-and-dani/st-pete.jpeg'
  },
  {
    lat: 24.5551,
    lng: -81.78,
    label: 'Key West, FL',
    color: 'teal',
    url: '/galleries/tako-and-dani/key-west/index.html'
  },
  {
    lat: 26.142,
    lng: -81.7948,
    label: 'Naples, FL',
    color: 'teal'
    // url: '/galleries/tako-and-dani/naples_fl/index.html'
  },
  {
    lat: 32.9595,
    lng: -117.2653,
    label: 'Del Mar, CA',
    color: 'teal',
    url: '/images/tako-and-dani/sandiego1.webp'
  },
  {
    lat: 40.6826,
    lng: -73.9755,
    label: 'Barclays Center - Brooklyn',
    color: 'teal',
    url: 'https://cmutnik.github.io/takophotos/gallery/gallery12/'
  }
];

export default markers;
