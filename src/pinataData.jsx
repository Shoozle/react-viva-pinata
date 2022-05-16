export const initialPinatas = [
   {
      name: 'Arocknid',
      appear: [
         'You are a level 6 gardener or better',
      ],
      unblock: [
         'You have paid Willy 1,000 chocolate coins to knock the wall down',
      ],
      visit: [

         'There are 4 Tafflies or Raisants in the garden'
      ],
      resident: [
         'Has eaten 2 Raisants or Tafflies',
      ],
      romance: [
         'Has eaten 2 Buzzlegums',
         'There is a Arocknid house in the garden',
      ],
      trick: [
         'Feed it a Bispotti to have it perform Trick 1',
         'Feed it a chili to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell changes its color to blue',
         'Feeding it a water lily changes its color to pink',
         `Feeding it a jack o'lantern changes its color to pink/white`,
      ],
      uses: [
         '3 Arocknids in the garden help meet the Profitamole Visit requirements',
         'Eating 1 Arocknid helps meet the Profitamole Resident requirements',
         'Eating 1 Arocknid helps meet the Macaraccoon Romance requirements',
         'Eating 1 Arocknid helps meet the Badgesicle Trick requirements',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Arocknid master romancer`)) || false,
      pinned: false,
   },
   {
      name: 'Badgesicle',
      appear: [
         'Have a blackberry bush in the garden',
      ],
      visit: [
         'Have a blackberry bush in the garden',
         'Have 3 Geckies in the garden'
      ],
      resident: [
         'Has eaten a Geckie',
         'Has eaten 2 blackberries',
      ],
      romance: [
         'Has eaten 2 tulip seeds',
         'Has eaten a Lemmoning',
         'Have a Badgesicle house in the garden',
      ],
      trick: [
         'Feed it a Fudgehog to have it perform Trick 1',
         'Feed it an Arocknid to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell changes its color to blue',
         'Feeding it an apple changes its color to red',
         `Feeding it a water lily changes its color to yellow/pink`,
      ],
      uses: [
         ''
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Badgesicle master romancer`)) || false,
      pinned: false,
   },
   {
      name: 'Barkbark',
      appear: [
         'Have a Kittyfloss resident in the garden'
      ],
      unlock: [
         'You have 5 Buzzlegums to scare the Ruffian away',
      ],
      visit: [
         'Have 3 Kittyfloss residents in the garden',
      ],
      resident: [
         'Has eaten 1 jelly',
         'Has eaten 2 bones',
      ],
      romance: [
         'Is wearing a collar',
         'Has eaten a loaf of bread',
         'There is a Barkbark house in the garden'
      ],
      trick: [
         'Feed it wool to have it perform Trick 1',
         'Feed it a bottle of milk to have it perform Trick 2'
      ],
      species: [
         'Feeding it a banana split changes its color to yellow',
         'Feeding it poison ivy changes its color to green',
         'Feeding it a bottle of medicine changes its color to pink',
      ],
      uses: [
         ''
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Barkbark master romancer`)) || false,
      pinned: false,
   },
   {
      name: 'Bispotti',
      appear: [
         'Have any type of flower in the garden',
      ],
      visit: [
         'Have two flowers in the garden',
      ],
      resident: [
         'Grow three poppies in the garden',
      ],
      romance: [
         'Has eaten a daisy',
         'There is a Bispotti house in the garden',
      ],
      trick: [
         'Feed it a holly bush seed to have it perform Trick 1',
         'Feed it a bluebell to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell seed changes its color to blue',
         'Feeding it a watercress changes its color to green',
         'Feeding it a loaf of bread changes its color to pink/white',
      ],
      uses: [
         'Eating 1 Bispotti helps meet the Robean Romance requirements',
         'Eating 1 Bispotti helps meet the Arocknid Trick requirements',
         'Eating 1 Bispotti helps tame the sour Profitamole',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Bispotti master romancer`)) || false,
      pinned: false,
   },

   {
      name: 'Bonboon',
      appear: [
         'You are a level 35 gardener or better (sour)',
         'Have a resident Bonboon in the garden'
      ],
      visit: [
         'You are a level 37 gardener or better (sour)',
         'Have a monkeynut tree in the garden',
         'Have a banana tree in the garden'
      ],
      resident: [
         'Has lost a fight against a Syrupent, Twingersnap, or Fourheads (sour)',
         'Has eaten 7 monkeynuts',
         'Has eaten 7 bananas',
      ],
      romance: [
         'Has eaten 3 Jameleons',
         'Have a Bonboon house in the garden',
      ],
      trick: [
         'Feed it a fireweed seed to have it perform Trick 1',
         'Feed it a fireweed to have it perform Trick 2'
      ],
      species: [
         'Feeding it an orchid changes its color to white.',
         'Feeding it a bluebell changes its color to blue.',
         'Feeding it a bird of paradise seed changes its color to orange.',
      ],
      uses: [
         '1 baby Bonboon in the garden helps meet the Sarsgorilla Visit requirements',
         'The Bonboon will break up fights in your garden',
         '1 Boboon resident helps meet the Sarsgorilla Appear requirments',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Bonboon master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Bunnycomb',
      appear: [
         'A carrot in the garden',
      ],
      visit: [
         `A carrot in the garden`,
      ],
      resident: [
         'Have 4 square pinometers of grass (4%)',
         'Has eaten two carrots',
      ],
      romance: [
         'Has eaten a radish',
         'Have 6 square pinometers of grass (6%)',
         'Have a Bunnycomb house in the garden',
         '',
      ],
      trick: [
         'Feed it a dandelion seed to have it perform Trick 1',
         'Feed it a dandelion to have it perform Trick 2'
      ],
      species: [
         'Feeding it a gooseberry seed changes its color to green.',
         'Feeding it a pumpkin changes its color to orange.',
         'Feeding it a water lily changes its color to pink.',
      ],
      uses: [
         '1 Bunnycomb or Tartridge in the garden helps meet the Pretztail Visit requirements.',
         'Eating 1 Bunnycomb or Tartridge helps meet the Pretztail Resident requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Bunnycomb master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Buzzenge',
      appear: [
         'Have a Candary in the garden',
      ],
      visit: [
         `Have 4 Candaries in the garden`,
      ],
      resident: [
         'Has eaten 2 Candaries',
         'Has eaten a Sparrowmint',
      ],
      romance: [
         'Has eaten a Pudgeon',
         'Has eaten a Robean',
         'Has eaten a Tartridge',
         'There is a Buzzenge house in the garden',
      ],
      trick: [
         'Feed it a Flutterscotch to have it perform Trick 1',
         'Feed it a Taffly to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bottle of medicine changes its color to pink.',
         'Feeding it a bluebell seed changes its color to blue.',
         'Feeding it a buttercup changes its color to yellow.',
      ],
      uses: [
         'Eating 1 Buzzenge helps meet the Vulchurro Trick requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Buzzenge master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Buzzlegum',
      appear: [
         'Have a sunflower in the garden',
      ],
      visit: [
         `Have 2 sunflowers in the garden`,
      ],
      resident: [
         'Has eaten a sunflower',
      ],
      romance: [
         'Has eaten a buttercup',
         'Has eaten a tulip',
         'There is a Buzzlegum house in the garden',
         '',
      ],
      trick: [
         'Feed it a jar of honey to have it perform Trick 1',
         'Feed it a sandwich to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bottle of medicine changes its color to pink.',
         'Feeding it a gem tree seed changes its color to white.',
         'Feeding it a venus pinata trap changes its color to orange.',
      ],
      uses: [
         '3 Buzzlegums in the garden helps meet the Fizzlybear Appear requirements.',
         '5 Buzzlegums in the garden helps meet the Barkbark Unblock requirements.',
         'Eating 1 Buzzlegum helps meet the Tigermisu Resident requirements.',
         'Eating 1 Buzzlegum helps meet the Dragumfly Romance requirements.',
         'Eating 1 Buzzlegum helps meet the Jameleon Trick requirements.',
         'Eating 2 Buzzlegums helps meet the Arocknid Romance requirements.',
         `Eating 2 Buzzlegums helps tame the sour S'morepion.`,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Buzzlegum master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Camello',
      appear: [
         'You are a level 15 gardener or better (Dessert Desert)',
      ],
      visit: [
         `Bait the trap with a yam`,
      ],
      resident: [
         'Have 20 square pinometers of sand (20%)',
         'Has drunk 2 cups of coffee',
         'Has eaten 3 cacti',
      ],
      romance: [
         'Have 25 square pinometers of sand (25%)',
         'Has eaten 3 coconut macaroons',
         'Is wearing Cool Shades',
         'Is wearing Señor Sombrero',
         'There is a Camello house in the garden',
      ],
      trick: [
         'Feed it a palm seed to have it perform Trick 1',
         'Feed it a cactus seed to have it perform Trick 2'
      ],
      species: [
         'Feeding it a water lily seed changes its color to pink.',
         `Feeding it a jack o' lantern changes its color to orange.`,
         'Feeding it a bluebell seed changes its color to blue',
      ],
      uses: [
         'Eating 1 Camello helps meet the Tigermisu Romance requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Camello master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Candary',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Candary master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cherrapin',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cherrapin master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Chewnicorn',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chewnicorn master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Chippopotamus',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chippopotamus master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Choclodocus',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Choclodocus master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Chocstrich',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chocstrich master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cinnamonkey',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cinnamonkey master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cluckles',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cluckles master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cocoadile',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cocoadile master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Crowla',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Crowla master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Custacean',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Custacean master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Doenut',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Doenut master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Dragonache',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Dragonache master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Dragumfly',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Dragumfly master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Eaglair',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Eaglair master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Elephanilla',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Elephanilla master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Fizzlybear',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Fizzlybear master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Flapyak',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Flapyak master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Fourheads',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Fourheads master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Zumbug',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         '',
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         '',
         ''
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         '',
         '',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Fudgehog',
      appear: [
         'Have 1 Holly bush in the garden',
      ],
      visit: [
         'Have 1 Holly bush in the garden',
         'Have 1 Thistle in the garden',
      ],
      resident: [
         'Has eaten 1 Holly berry',
         'Has eaten 1 Thistle',
         'Have 1 Leaf Pile in the garden'
      ],
      romance: [
         'Has drunk a bottle of milk',
         'Has eaten a loaf of bread',
         'There is a Fudgehog house in the garden'
      ],
      trick: [
         'Feed it a Garlic seed to have it perform Trick 1',
         'Feed it a Bulb of Garlic to have it perform Trick 2'
      ],
      species: [
         'Feeding a coconut to a Fudgehog turns it into a Parmadillo',
         'Feeding it a bluebell seed changes its color to blue',
         'Feeding it poison ivy changes its color to green',
         'Feeding it a chili changes its color to red'
      ],
      uses: [
         'Feed a Fudgehog to a Badgesicle to teach it trick 1'
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Fudgehog master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Robean',
      appear: [
         'Can only be found in the Piñarctic',
      ],
      visit: [
         `Trap it with a Holly Berry in the Piñarctic`,
      ],
      resident: [
         'You have 1 square pinometer of snow (1%)',
      ],
      romance: [
         'Has eaten 1 Bispotti',
         'Have 3 square pinometers of snow (3%)',
         'There is a Robean house in the garden',
      ],
      trick: [
         'Feed it a hazelnut seed to have it perform Trick 1',
         'Feed it a hazelnut to have it perform Trick 2'
      ],
      species: [
         'Feeding it a carrot changes its color to orange',
         'Feeding it a gooseberry fool changes its color to blue',
         'Feeding it a fireweed changes its color to purple',
      ],
      uses: [
         'Eating 1 Robean helps meet the Syrupent Romance requirements.',
         'Eating 1 Robean helps meet the Buzzenge Romance requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Robean master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         'Feeding a blackberry and a daisy to a Horstachio turns it into a Zumbug.',
      ],
      romance: [
         '30 square pinometers of long grass',
         'Has eaten 3 orchid flower',
         'Has eaten a jar of jam',
         'Have a Zumbug house in the garden',
      ],
      trick: [
         'Feed it a daisy to have it perform Trick 1',
         'Feed it a blackberry to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell seed changes its color to blue',
         'Feeding it a water lily seed changes its color to pink',
         'Feeding it a carrot cake changes its color to orange',
      ],
      uses: [
         '1 Zumbug in the garden helps meet the Tigermisu Visit requirements',
         '5 Zumbugs in the garden helps meet the Roario Visit requirements',
         'Eating 1 Zumbug helps meet the Tigermisu Resident requirements',
         'Eating 2 Zumbugs helps meet the Roario Resident requirements',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   }
]