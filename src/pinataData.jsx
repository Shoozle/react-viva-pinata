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
         'Feeding a dandelion to a Sparrowmint turns it into a Candary.',
      ],
      visit: [
         `Feeding a dandelion to a Sparrowmint turns it into a Candary.`,
      ],
      resident: [
         'Feeding a dandelion to a Sparrowmint turns it into a Candary.',
      ],
      romance: [
         'Has eaten 1 Yellow Flutterscotch',
         'Have a Candary house in the garden',
         '',
         '',
      ],
      trick: [
         'Feed it a dandelion seed to have it perform Trick 1',
         'Feed it a dandelion seed to have it perform Trick 1'
      ],
      species: [
         'Feeding it a bluebell changes its color to blue.',
         'Feeding it a water lily seed changes its color to pink.',
         'Feeding it gooseberry fool changes its color to light green.',
      ],
      uses: [
         '1 Candary in the garden helps meet the Buzzenge Appear requirements.',
         '1 Candary in the garden helps meet the Chippopotamus Romance requirements.',
         '4 Candaries in the garden helps meet the Buzzenge Visit requirements.',
         'Eating 1 Candary helps meet the Kittyfloss Romance requirements.',
         'Eating 1 Candary helps meet the Parrybo Trick requirements.',
         'Eating 2 Candaries helps meet the Buzzenge Resident requirements.',
         'A Candary Master Romancer award helps meet the Chippopotamus Romance requirements.',
         '3 Candaries in the garden help meet the Goobaa Unblock requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Candary master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cherrapin',
      appear: [
         'Have 5 square pinometers of sand (5%)',
         'Have 5 square pinometers of water (5%)',
         'Have a water lily in the garden',
      ],
      visit: [
         `Have 7 square pinometers of sand (7%)`,
         `Have 7 square pinometers of water (7%)`,
         `Have 2 water lilies in the garden`,
      ],
      resident: [
         'Have 10 square pinometers of sand (10%)',
         'Have 10 square pinometers of water (10%)',
         'Have eaten 3 water lilies',
      ],
      romance: [
         'Is wearing Belly-Splash Specials',
         'Has eaten a Lickatoad egg',
         'Have a Cherrapin house in the garden',
         '',
      ],
      trick: [
         'Feed it a watercress seed to have it perform Trick 1',
         'Feed it a watercress to have it perform Trick 2',
         'Note: Tricks performed differ whether in or out of water',
      ],
      species: [
         'Feeding it a blueberry muffin changes its color to blue.',
         'Feeding it a jar of honey changes its color to yellow.',
         'Feeding it a gooseberry changes its color to green.',
      ],
      uses: [
         'Eating 1 Cherrapin helps tame the sour Cocoadile.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cherrapin master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Chewnicorn',
      appear: [
         'You have the Horstachio Master Romancer award',
      ],
      visit: [
         `Have a gem tree in the garden`,
      ],
      resident: [
         'Has eaten 9 gems',
         'Have a fully grown gem tree in the garden',
      ],
      romance: [
         'Has eaten 3 rainbow gems',
         'Have a Chewnicorn house in the garden',
         '',
         '',
      ],
      trick: [
         'Feed it an orchid to have it perform Trick 1',
         'Feed it a jar of jam to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell changes its color to blue.',
         'Feeding it an ear of corn changes its color to yellow.',
         'Feeding it a water lily seed changes its color to pink.',
      ],
      uses: [
         '1 Chewnicorn in the garden helps meet the Galagoogoo Romance requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chewnicorn master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Chippopotamus',
      appear: [
         'Have 40 square pinometers of water (40%)',
      ],
      visit: [
         `Have 50 square pinometers of water (50%)`,
         `Have 9 bullrushes or 9 watercresses or 9 water lilies in the garden`,
      ],
      resident: [
         'You have 60 square pinometers of water (60%)',
         'Has eaten 9 water lilies',
         'Has eaten 9 watercresses',
         'Has eaten 9 bullrushes',
      ],
      romance: [
         'Have 70 square pinometers of water (70%)',
         'You have the Candary Master Romancer award',
         'Have 1 Candary in the garden',
         'Has eaten 4 birds of paradise',
      ],
      trick: [
         'Feed it a watercress seed to have it perform Trick 1',
         'Feed it a bullrush seed to have it perform Trick 2'
      ],
      species: [
         'Feeding it a mushroom changes its color to green.',
         'Feeding it a water lily seed changes its color to blue and purple.',
         'Feeding it a jar of blackberry jam changes its color to pink.',
      ],
      uses: [
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chippopotamus master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Choclodocus',
      appear: [
         'Obtain a blue and green bone from the mine',
         'Buy the red bone from the store after level 45',
         'Obtain the amber gem by throwing 9,999 coins down the well',
         'Tinker the bones to get a skull, ribs and spine',
         'Put them in a store house and eventually they will fuse into an egg',
         'Have a cluckles wearing the Jurassic Hair accessory hatch the egg',
         'Feed the youngling a bottle of milk, a bone, a geckie, a cocoadile and a jameleon'
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
         'Feed it a ruby to have it perform Trick 1',
         'Feed it a diamond to have it perform Trick 2'
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         'Direct the Choclodocus to any others to instantly fill their candiosity meter.',
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
         'Feeding 2 Cactus seeds to a Cluckles turns it into a Chocstrich',
      ],
      visit: [
         `Trap it with a yam in the Dessert Desert`,
      ],
      resident: [
         'Have 2 square pinometers of sand.',
         'Has eaten 3 cactus seeds.',
      ],
      romance: [
         `Has eaten 2 S'morepions.`,
         'Has eaten 3 Raisants.',
         'Have 15 square pinometers of sand.',
         'Have a Chocstrich house in the garden.',
      ],
      trick: [
         'Feed it a cactus seed to have it perform Trick 1',
         'Feed it a cactus flower to have it perform Trick 2'
      ],
      species: [
         'Feeding it a tiger lily flower changes its color to orange.',
         'Feeding it a bottle of medicine changes its color to pink.',
         'Feeding it a blueberry muffin changes its color to blue.',
      ],
      uses: [
         'Eating 1 Chocstrich egg helps meet the Pieena Romance requirement.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Chocstrich master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cinnamonkey',
      appear: [
         'Have 1 monkeynut tree in the garden',
      ],
      visit: [
         `Have 5 monkeynuts in the garden`,
         `Have 1 fully grown banana tree in the garden`,
         `Have a barrel in the garden`,
      ],
      resident: [
         'Has eaten 3 bananas',
         'Has eaten 4 monkeynuts',
      ],
      romance: [
         'Is wearing a fez',
         'Has eaten 4 oranges',
         'Have a Cinnamonkey house in the garden',
         '',
      ],
      trick: [
         'Feed it a Banana Split to have it perform Trick 1',
         'Feed it a Peanut Butter to have it perform Trick 2'
      ],
      species: [
         'Feeding it a blackberry seed changes its color to purple.',
         'Feeding it a chili changes its color to red.',
         'Feeding it a water lily changes its color to pink.',
      ],
      uses: [
         'Eating 2 Cinnamonkies helps meet the Eaglair Resident requirements.',
         'Eating 1 Cinnamonky meets the Fizzlybear Trick requirement.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cinnamonkey master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cluckles',
      appear: [
         'Have 1 ear of corn in the garden',
      ],
      visit: [
         `Have 3 ears of corn in the garden`,
      ],
      resident: [
         'Has eaten 3 ears of corn',
      ],
      romance: [
         'Has eaten 2 Whirlms',
         'Has eaten 1 pumpkin seed',
         'Have a Cluckles house in the garden',
         '',
      ],
      trick: [
         'Feed it a corn seed to have it perform Trick 1',
         'Feed it a pumpkin to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell seed changes its color to blue.',
         'Feeding it an oak tree seed changes its color to green.',
         'Feeding it a bottle of medicine changes its color to pink.',
         'Feeding 2 cactus seeds to a Cluckles turns it into a Chocstrich',
      ],
      uses: [
         'Eating 1 Cluckles helps meet the Pretztail Romance requirements.',
         'Eating 1 Cluckles helps meet the Sour Macaraccoon Resident requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cluckles master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Cocoadile',
      appear: [
         'You are a level 27 gardener or better (sour)',
         'Have had a tame Cocoadile resident at some point',
      ],
      visit: [
         `You are a level 29 gardener or better (sour)`,
         `You have 16 square pinometers of water (16%)`,
         `Have 5 Quackberry residents in the garden`,
      ],
      resident: [
         'Have 16 square pinometers of water in the garden (sour)',
         'Has eaten 1 Pengum (sour)',
         'Has eaten 1 Cherrapin (sour)',
         'You have 19 square pinometers of water (19%)',
         'Has eaten 1 Cherrapin',
         'Has eaten 1 Cherrapin',
      ],
      romance: [
         'You have 22 square pinometers of water (22%)',
         'Has eaten 1 Swanana',
         'Is wearing gold teeth',
         '',
      ],
      trick: [
         'Feed it a prickly pear seed to have it perform Trick 1',
         'Feed it a thistle to have it perform Trick 2'
      ],
      species: [
         'Feeding it a buttercup seed changes its color to yellow.',
         'Feeding it a bluebell changes its color to blue.',
         'Feeding it a water lily seed changes its color to pink.',
      ],
      uses: [
         'Eating 1 Cocoadile helps the Choclodocus mature.',
         'Direct the Cocoadile to a plant and it will fertilize the plant.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Cocoadile master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Crowla',
      appear: [
         'You are a level 17 gardener or better (sour)',
         'Have a resident Crowla in the garden',
      ],
      visit: [
         `You are a level 19 gardener or better (sour)`,
         `Have 2 resident Lickatoads in the garden`,
         `Have 1 birdbath in the garden.`,
      ],
      resident: [
         'Have 1 Tombstone in the garden. (sour)',
         'Has drunk 1 bottle of medicine. (sour)',
         'Has eaten 2 Lickatoads',
      ],
      romance: [
         'Has eaten 2 Shellybeans',
         'Have a Crowla house in the garden',
      ],
      trick: [
         'Feed it a fireweed seed to have it perform Trick 1',
         'Feed it a fireweed to have it perform Trick 2'
      ],
      species: [
         'Feeding it a Water lily changes its color to pink.',
         'Feeding it a Bird of Paradise changes its color to orange.',
         'Feeding it a bluebell seed changes its color to blue.',
      ],
      uses: [
         'Eating 1 Crowla helps meet the Vulchurro Resident requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Crowla master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Custacean',
      appear: [
         'You have 2 square pinometers of sand',
      ],
      visit: [
         `You have 10 square pinometers of sand`,
         `You have 10 square pinometers of water`,
      ],
      resident: [
         `You have 12 square pinometers of sand`,
         `You have 12 square pinometers of water`,
         'Have a surf board in the garden',
      ],
      romance: [
         'Has eaten 2 apples',
         'Has eaten 1 watercress',
         'Have a Custacean house in the garden',
         '',
      ],
      trick: [
         'Feed it a Water Lily seed to have it perform Trick 1',
         'Feed it a Water Lily Flower to have it perform Trick 2'
      ],
      species: [
         'Feeding it a Orchid Flower changes its color to White and Light Pink.',
         'Feeding it a Mushroom changes its color to Orange.',
         'Feeding it a blackberry jam changes its color to purple',
      ],
      uses: [
         'Eating 1 Custacean helps meet the Walrusk resident requirements.',
         'Eating 1 Custacean helps meet the Quackberry romance requirements.',
         'Eating 2 Custaceans helps meet the Fizzlybear romance requirements.',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Custacean master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Doenut',
      appear: [
         'You have 6 square pinometers of long grass',
      ],
      visit: [
         `You have 8 square pinometers of long grass`,
         `Have 10 blueberries or 5 bluebells in the garden`,
      ],
      resident: [
         'You have 10 square pinometers of long grass',
         'Has eaten 5 blueberries or 2 bluebells',
      ],
      romance: [
         'Has eaten 1 sunflower',
         'Has eaten 1 rose',
         'Have a Doenut house in the garden',
         '',
      ],
      trick: [
         'Feed it a blackberry to have it perform Trick 1',
         'Feed it a gooseberry to have it perform Trick 2'
      ],
      species: [
         'Feeding it a oak tree seed changes its color to green.',
         'Feeding it a gooseberry fool changes its color to blue.',
         'Feeding it an ear of corn changes its color to yellow and orange.',
      ],
      uses: [
         '5 Doenuts in the garden helps meet the Roario Visit requirements.',
         'Eating 2 Doenuts helps meet the Roario Resident requirements.',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Doenut master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Dragonache',
      appear: [
         'Have a mine and one or more diggerlings',
         '',
         '',
         '',
      ],
      visit: [
         ``,
      ],
      resident: [
         'Direct a cluckles to the egg',
         'Feed the young Dragonache a bottle of milk, a snapdragon flower, a Dragumfly, a Reddhott, and a Salamango'
      ],
      romance: [
         '',
         '',
         '',
         '',
      ],
      trick: [
         'Feed it an acorn to have it perform Trick 1',
         'Feed it a Pigxie to have it perform Trick 2'
      ],
      species: [
         '',
         '',
         '',
      ],
      uses: [
         'A Dragonache will keep Professor Pester out of your garden.',
         'Sour pinatas are scared of the Dragonache, however it will not actively chase them away.',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Dragonache master romancer`)) || false,
      pinned: false
   },   
   {
      name: 'Dragumfly',
      appear: [
         'You are a level 26 gardener or better',
      ],
      visit: [
         `You have collected 5 Reddhotts to melt the block of ice`,
         'You have 15 square pinometers of water'
      ],
      resident: [
         'You have 20 square pinometers of water',
         'Have 12 bullrushes in the garden',
         'Has won a fight against a Redhott.',
      ],
      romance: [
         'You have 25 square pinometers of water',
         'Has eaten 1 Raisant',
         'Has eaten 1 Buzzlegum',
         'Has eaten 1 snapdragon',
         'Have a Dragumfly house in the garden',
      ],
      trick: [
         'Feed it a Taffly to have it perform Trick 1',
         'Feed it a Flutterscotch to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell seed changes its color to blue',
         'Feeding it a pumpkin changes its color to orange.',
         'Feeding it poison ivy changes its color to green',
      ],
      uses: [
         'Feeding a Dragumfly to a Dragonache helps in maturing it.',
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
         'Have an oak tree in the garden',
      ],
      visit: [
         `Have 5 Elephanillas to scare away the Ruffian`,
         'Have 5 different species resident in the garden.'
      ],
      resident: [
         'Has eaten 2 Parrybos',
         'Has eaten 2 Cinnamonkeys',
         'Have 10 different species resident in the garden.',
      ],
      romance: [
         'Has eaten 2 Galagoogoos',
         'Have 2 fully grown oak trees in the garden',
         'Have an Eaglair House in the garden',
         '',
      ],
      trick: [
         'Feed it a Bird of Paradise to have it perform Trick 1',
         'Feed it a Sunflower to have it perform Trick 2'
      ],
      species: [
         'Feeding it a buttercup seed changes its color to yellow',
         'Feeding it a bluebell seed changes its color to blue.',
         'Feeding it a bottle of milk changes its color to white.',
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
         'You have a banana tree in the garden',
         'You have a chili growing in the garden',
         'You have a palm tree in the garden',
      ],
      visit: [
         `You have 5 Salamangos to destroy the rocks`,
         'Have 2 bananas in the garden',
         'Have 2 chilies in the garden',
         'Have 2 coconuts in the garden',
      ],
      resident: [
         'Has eaten 4 bananas',
         'Has eaten 4 chilies',
         'Has eaten 4 coconuts',
      ],
      romance: [
         'Has eaten 3 gems',
         'Has eaten 3 acorns',
         'Has eaten 3 peas',
         'Is wearing ballet shoes',
         'Have an Elephanilla house in the garden',
      ],
      trick: [
         'Feed it an apple seed to have it perform Trick 1',
         'Feed it an apple to have it perform Trick 2'
      ],
      species: [
         'Feeding it a poppy seed changes its color to red',
         'Feeding it a buttercup changes its color to yellow.',
         'Feeding it a bluebell changes its color to blue.',
      ],
      uses: [
         '5 Elephanillas in the garden helps meet the Eaglair Unblock requirements.',
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
         'Have a honey hive in the garden',
         'Have a Buzzlegum house',
         'Have 3 Buzzlegums in the garden',
      ],
      visit: [
         `Have 5 Sweetooths to gnaw through the fallen tree`,
         `Have 4 prickly pears in the garden`,
         `Have 3 jars of honey in the garden`,
      ],
      resident: [
         'Has eaten 2 Raisants',
         'Has eaten 2 jars of honey',
         'Has eaten 2 prickly pears',
      ],
      romance: [
         'Has eaten 2 Custaceans',
         'Is wearing Jiggy earings',
         'Is wearing a shark-tooth necklace',
         'Is wearing a Breegull carrier',
         'Have a Fizzlybear house in the garden',
      ],
      trick: [
         'Feed it a Peanut Butter to have it perform Trick 1',
         'Feed it a Cinnamonkey to have it perform Trick 2'
      ],
      species: [
         'Feeding it a sunflower seed changes its color to bright gold',
         'Feeding it a carrot changes its color to orange.',
         'Feeding it a watercress seed changes its color to green.',
         'Feeding a Blue Gem to a Fizzlybear turns it into a Polollybear',
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
         'You are a level 15 gardener or better',
         'Can only be found in the Piñarctic'
      ],
      visit: [
         `A juicy orange will attract a Flapyak across the ice`,
      ],
      resident: [
         'You have 10 square pinometers of snow (1%)',
         'Has eaten 4 fir cones',
         'Has eaten 1 figgy puddings',
      ],
      romance: [
         'Has drunk 1 pot of coffee',
         'Has eaten 3 gooseberries',
         'Is wearing a daisy hair flower',
         'Have a Flapyak house in the garden',
      ],
      trick: [
         'Feed it an orange tree seed to have it perform Trick 1',
         'Feed it an orange to have it perform Trick 2'
      ],
      species: [
         'Feeding it a blueberry changes its color to blue',
         'Feeding it a chili changes its color to red',
         'Feeding it a watercress changes its color to green',
      ],
      uses: [
         'Feed a Flapyak to a Tigermisu to teach it trick 2',
         'Sent into a milking shed at full candiosity to produce milk, bell accessory will make it do it automatically',
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
         'To create a Fourheads, romance any two Twingersnaps and then watch the resulting egg carefully, with your shovel ready. It will bounce repeatedly for while, with small hops. As soon as it makes a set of 3 bigger, more animated bounces, hit it with your shovel (Button a.png) to reveal a baby Fourheads.',
      ],
      romance: [
         'Feed it a Lackatoad',
         `Feed it a S'morepion`,
         'Feed it a Hemlock flower',
         'Build a Fourheads house',
      ],
      trick: [
         'Feed it a Stew to have it perform Trick 1',
         'Feed it a Mousemallow to have it perform Trick 2'
      ],
      species: [
         'Feeding it a bluebell changes its color to blue',
         'Feeding it honey changes its color to yellow',
         'Feeding it a bottle of medicine changes its color to pink',
      ],
      uses: [
         'Winning a fight against a Sour Bonboon will tame it.',
         '5 Fourheads in the garden helps meet the Macaraccoon Visit requirements.',
         '',
         '',
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Fourheads master romancer`)) || false,
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
      name: 'Galagoogoo',
      appear: [
         `Have a Tower of Sour with 12 parts`,
         ``,
         ``,
      ],
      visit: [
         `Have a Moon-on-a-Stick light in the garden`,
         `Have 8 Mothdrops or 16 tulips in the garden`,
         ``,
      ],
      resident: [
         `Has eaten 4 tulips`,
         `Has eaten 2 Mothdrops`,
         `You have a Watchling in the garden
         `,
      ],
      romance: [
         `Has eaten 4 orchids`,
         `Have a Chewnicorn resident in the garden`,
         ``,
         `There is a Galagoogoo house in the garden`,
      ],
      trick: [
         `Feed it a tulip seed to have it perform Trick 1`,
         `Feed it an orchid seed to have it perform Trick 2`
      ],
      species: [
         `Feeding it a sunflower changes its color to light yellow.`,
         `Feeding it a piece of bread changes its color to light purple.`,
         `Feeding it poison ivy changes its color to green.`,
      ],
      uses: [
         `Eating 2 Galagoogoos helps meet the Eaglair Romance requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Galagoogoo master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Geckie',
      appear: [
         `Can only be found in the Dessert Desert`,
         ``,
         ``,
      ],
      visit: [
         `A Geckie finds hard to resist a delicate snowdrop`,
         ``,
         ``,
      ],
      resident: [
         `You have 2 square pinometers of sand (2%)`,
         `Has eaten 1 Flutterscotch`,
         ``,
      ],
      romance: [
         `Has eaten 1 Mothdrop`,
         `Have 3 square pinometers of sand (3%)`,
         ``,
         `There is a Geckie house in the garden`,
      ],
      trick: [
         `Feed it a Raisant to have it perform Trick 1`,
         `Feed it a watercress to have it perform Trick 2`
      ],
      species: [
         `Feeding it a pumpkin changes its color to orange`,
         `Feeding it a cactus changes its color to pink.`,
         `Feeding it a fireweed changes its color to blue.`,
      ],
      uses: [
         `3 Geckies in the garden helps meet the Badgesicle Visit requirements.`,
         `Eating 1 Geckie helps meet the Badgesicle Residence requirements.`,
         `Eating 1 Geckie helps meet the Macaraccoon Romance requirements.`,
         `Eating 1 Geckie helps mature the Choclodocus.`,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Geckie master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Goobaa',
      appear: [
         `Have 4 square pinometers of long grass (4%)`,
         `Have 5 snowdrops in the garden`,
         ``,
      ],
      visit: [
         `You've used 3 Candaries to wake up a sleepy Chippopotamus`,
         `Have 6 square pinometers of long grass (6%)`,
         `Have 8 snowdrops in the garden`,
      ],
      resident: [
         `Have 8 square pinometers of long grass (8%)`,
         `Have 12 wall or fences in the garden`,
         `Has eaten 3 snowdrops`,
      ],
      romance: [
         `Has eaten 1 thistle`,
         `Has eaten 2 poison ivy`,
         `Have 12 square pinometers of long grass (12%)`,
         `There is a Goobaa house in the garden`,
      ],
      trick: [
         `Feed it a buttercup to have it perform Trick 1`,
         `Feed it a daisy to have it perform Trick 2`
      ],
      species: [
         `Feeding it a bluebell changes its color to blue`,
         `Feeding it a tulip seed changes its color to black.`,
         `Feeding it a water lily seed changes its color to pink`,
      ],
      uses: [
         `Eating 1 Goobaa helps meet the Mallowolf Romance requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Goobaa master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Hoghurt',
      appear: [
         `Feeding a Cheesecake to a Rashberry turns it into a Hoghurt`,
         ``,
         ``,
      ],
      visit: [
         `Feeding a Cheesecake to a Rashberry turns it into a Hoghurt`,
         ``,
         ``,
      ],
      resident: [
         `Feeding a Cheesecake to a Rashberry turns it into a Hoghurt`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 1 Muffin`,
         `Is wearing Big Jolly Lips`,
         `Is wearing a Weather girl wig`,
         `Is wearing Pendant earrings`,
         `There is a Hoghurt house in the garden`,
      ],
      trick: [
         `Feed it a Prickly Pear seed to have it perform Trick 1`,
         `Feed it a Fireweed to have it perform Trick 2`
      ],
      species: [
         `Feeding it a Buttercup changes its color to Yellow.`,
         `Feeding it a Tulip changes its color to Black.`,
         `Feeding it a Carrot changes its color to Pink.`,
      ],
      uses: [
         `Eating 3 Hoghurts fulfills the Sour Mallowolf Resident Requirements.`,
         `Feed a Hoghurt to a Tigermisu to teach it trick 1.`,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Hoghurt master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Hootyfruity',
      appear: [
         `There is a Mousemallow house in the garden`,
         `There is a Sherbat house in the garden`,
         ``,
      ],
      visit: [
         `Have 5 Mousemallows in the garden`,
         `Have 5 Sherbats in the garden`,
         ``,
      ],
      resident: [
         `Has eaten 3 Mousemallows`,
         `Has eaten 2 Sherbats`,
         ``,
      ],
      romance: [
         `Has eaten 1 Squazzil`,
         `Has eaten 2 Lemmonings`,
         `Wearing geek glasses`,
         `There is a Hootyfruity house in the garden`,
      ],
      trick: [
         `Feed it a Nightshade seed to have it perform Trick 1`,
         `Feed it a Nightshade berry to have it perform Trick 2`
      ],
      species: [
         `Feeding it a gooseberry changes its color to green.`,
         `Feeding it a carrot seed changes its color to orange`,
         `Feeding it a waterlilly seed changes its color to pink.`,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Hootyfruity master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Horstachio',
      appear: [
         `Have a hay bale in the garden.`,
         ``,
         ``,
      ],
      visit: [
         `Have 50 square pinometers of Grass in the garden.`,
         ``,
         ``,
      ],
      resident: [
         `Have 50 square pinometers of Grass in the garden.`,
         `Has eaten four Apples.`,
         `Has eaten four Carrots.`,
      ],
      romance: [
         `Have a Horstachio house in the garden.`,
         `Have 50 square pinometers of Grass in the garden.`,
         `Has eaten a Toffee Apple.`,
         `Has eaten a Horseradish.`,
         `There is a Horstachio house in the garden`,
      ],
      trick: [
         `Feed it a Daisy seed to have it perform Trick 1`,
         `Feed it a Carrot cake to have it perform Trick 2`
      ],
      species: [
         `Feeding it watercress changes its color to green`,
         `Feeding it a bluebell changes its color to blue`,
         `Feeding it a chili seed changes its color to red`,
         `Feeding a blackberry and a daisy to a Horstachio turns it into a Zumbug.`
      ],
      uses: [
         `A Horstachio Master Romancer award helps meet the Chewnicorn Appear requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Horstachio master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Jameleon',
      appear: [
         `Have 3 differently colored Flutterscotches.`,
         ``,
         ``,
      ],
      visit: [
         `Have 4 differently colored Flutterscotches.`,
         ``,
         ``,
      ],
      resident: [
         `Have 5 differently colored Flutterscotches.`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten a Taffly.`,
         `Have a Red Eye Rainbow in the garden.`,
         ``,
         `There is a Jameleon house in the garden`,
      ],
      trick: [
         `Feed it a Taffly to have it perform Trick 1.`,
         `Feed it a Buzzlegum to have it perform Trick 2.`
      ],
      species: [
         `Feeding it a bluebell seed changes its color to blue.`,
         `Feeding it an orchid changes its color to white and pink.`,
         `Feeding it a piece of carrot cake changes its color to orange.`,
      ],
      uses: [
         `Eating 3 Jameleons helps meet the Bonboon romance requirement.`,
         `Eating 1 Jameleon helps the Choclodocus mature.`,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Jameleon master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Jeli',
      appear: [
         `You are a level 31 gardener or better.`,
         `Can only be found in the Piñarctic.`,
         ``,
      ],
      visit: [
         `Bait the trap with a holly berry.`,
         ``,
         ``,
      ],
      resident: [
         `You have 40 square pinometers of snow (40%).`,
         `Has eaten 3 banana splits.`,
         `Has eaten 2 orchid seeds.`,
      ],
      romance: [
         `You have 50 square pinometers of snow (50%).`,
         `Have 5 Piñarctic residents in the garden.`,
         `Has eaten 2 figgy pudding.`,
         `Is wearing snowshoes.`,
         `There is a Jeli house in the garden`,
      ],
      trick: [
         `Feed it a banana to have it perform Trick 1`,
         `Feed it an orchid to have it perform Trick 2`
      ],
      species: [
         `Feeding it a sunflower changes its color to yellow`,
         `Feeding it a bottle of medicine changes its color to pink`,
         `Feeding it a muffin changes its color to blue.`,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Jeli master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Juicygoose',
      appear: [
         `Feeding a gooseberry to a Quackberry turns it into a Juicygoose.`,
         ``,
         ``,
      ],
      visit: [
         `Bait the trap with any bait.`,
         ``,
         ``,
      ],
      resident: [
         `8 square pinometers of snow`,
         `Has eaten two gooseberry`,
         ``,
      ],
      romance: [
         `10 square pinometers of water`,
         `Has eaten two Newtgats`,
         `Have a fish fountain in garden`,
         `There is a Juicygoose house in the garden`,
      ],
      trick: [
         `Feed it a gooseberry to have it perform Trick 1`,
         `Feed it a gooseberry seed to have it perform Trick 2`
      ],
      species: [
         `Feeding it an oak tree seed changes its color to green.`,
         `Feeding it a water lily seed changes its color to pink and orange`,
         `Feeding it a banana changes its color to yellow`,
      ],
      uses: [
         `Eating a Juicygoose helps meet the Mallowolf Romance requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Juicygoose master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Kittyfloss',
      appear: [
         `Have 2 Mousemallows in the garden.`,
         `It is nighttime in the garden.`,
         ``,
      ],
      visit: [
         `Have 3 Mousemallows in the garden.`,
         `Have a bottle of milk in the garden.`,
         ``,
      ],
      resident: [
         `Has eaten a Mousemallow.`,
         `Has eaten a Sparrowmint.`,
         `Has drunk a bottle of milk.`,
      ],
      romance: [
         `Has eaten a Lemmoning.`,
         `Has eaten a Candary.`,
         ``,
         `There is a Kittyfloss house in the garden`,
      ],
      trick: [
         `Feed it a bone to have it perform Trick 1`,
         `Feed it jelly to have it perform Trick 2`
      ],
      species: [
         `Feeding it medicine changes its color to pink.`,
         `Feeding it a bluebell changes its color to blue and pink`,
         `Feeding it a water lily changes its color to pink and blue.`,
      ],
      uses: [
         `Having a Kittyfloss in the garden meets the Barkbark appear and visit requirements`,
         `Winning a fight against Kittyfloss help meets Barkbark Romance requirements`,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Kittyfloss master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Lackatoad',
      appear: [
         `Feeding a nightshade berry to a Lickatoad, then tapping or whacking it with the shovel before it falls ill, turns it into a Lackatoad.`,
         ``,
         ``,
      ],
      visit: [
         `Feeding a nightshade berry to a Lickatoad, then tapping or whacking it with the shovel before it falls ill, turns it into a Lackatoad.`,
         ``,
         ``,
      ],
      resident: [
         `Feeding a nightshade berry to a Lickatoad, then tapping or whacking it with the shovel before it falls ill, turns it into a Lackatoad.`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 2 hemlock flowers`,
         `You have 6 square pinometers of water`,
         `Has eaten 2 toadstools`,
         `There is a Lackatoad house in the garden`,
      ],
      trick: [
         `Feed it a nightshade seed to have it perform Trick 1`,
         `Feed it a nightshade berry to have it perform Trick 2`
      ],
      species: [
         `Feeding it a bluebell changes its color to blue.`,
         `Feeding it a water lily seed changes its color to pink.`,
         `Feeding it a banana tree seed changes its color to yellow.`,
      ],
      uses: [
         `Feeding a Lackatoad to a Fourheads helps meet its romance requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Lackatoad master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Lemmoning',
      appear: [
         `You are a level 6 gardener or better (sour)`,
         `Have a resident Lemmoning in the garden`,
         ``,
      ],
      visit: [
         `Bait a trap with any bait (arctic)`,
         `Bait a trap with a sunflower seed`,
         ``,
      ],
      resident: [
         `You have 3 square pinometers of snow (3%) (sour)`,
         `Has eaten 1 bowl of stew (sour)`,
         `Has eaten 1 horseradish (sour)`,
         `Have 4 square pinometers of snow (4%)`,
         `Has eaten 2 radishes`,
      ],
      romance: [
         `Has eaten 3 fir cones`,
         `Have 4 square pinometers of snow (4%)`,
         ``,
         `There is a Lemmoning house in the garden`,
      ],
      trick: [
         `Feed it a thistle seed to have it perform Trick 1`,
         `Feed it a thistle to have it perform Trick 2`
      ],
      species: [
         `Feeding it a bluebell changes its color to blue`,
         `Feeding it a pea pod changes its color to green.`,
         `Feeding it a tiger lily changes its color to yellow`,
      ],
      uses: [
         `Eating 1 Lemmoning helps meet the Kittyfloss Romance requirements.`,
         `Eating 2 Lemmonings helps meet the Badgesicle Romance requirements.`,
         `Eating 2 Lemmonings helps meet the Hootyfruity Romance requirements.`,
         `The Lemmoning can eat a sour candy, then cough up a happy candy, without becoming ill.`,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Lemmoning master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Lickatoad',
      appear: [
         `You have the pond head for your shovel`,
         ``,
         ``,
      ],
      visit: [
         `You have 1 square pinometer of water (1%)`,
         ``,
         ``,
      ],
      resident: [
         `You have 2 square pinometers of water (2%)`,
         `Has eaten 1 Taffly`,
         ``,
      ],
      romance: [
         `Has eaten 1 Green Flutterscotch`,
         `You have 2 square pinometers of water (2%)`,
         ``,
         `There is a Lickatoad house in the garden`,
      ],
      trick: [
         `Feed it a Poppy flower to have it perform Trick 1`,
         `Feed it a Mousemallow to have it perform Trick 2`
      ],
      species: [
         `Feeding it a gooseberry changes its color to green`,
         `Feeding it an apple changes its color to red.`,
         `Feeding it a bluebell seed changes its color to purple.`,
         `Feeding it a nightshade berry then tapping it with the shovel before it falls ill will evolve it into a Lackatoad.`,
      ],
      uses: [
         `2 Lickatoads in the garden helps meet the Crowla Visit requirements.`,
         `Eating 1 Lickatoad egg helps meet the Cherrapin Romance requirements.`,
         `Eating 2 Lickatoads helps meet the Crowla Resident requirements.`,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Lickatoad master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Limeocerous',
      appear: [
         `You are a level 36 gardener or better (sour)`,
         `Have had a tame Limeocerous resident at some point`,
      ],
      visit: [
         `You are a level 38 gardener or better (sour)`,
         `Have 5 thistles in the garden`,
         ``,
      ],
      resident: [
         `Has eaten 3 Parmadillos (sour)`,
         `Has eaten 1 fireweed seed`,
         `Has eaten 1 thistle seed`,
         `Has eaten 1 prickly pear seed`,
      ],
      romance: [
         `Is wearing a fruity hat`,
         `Is wearing bling earrings`,
         `Has eaten 2 coconuts`,
         `Have 40 square pinometers of sand in the garden (40%)`,
         `There is a Limeocerous house in the garden`,
      ],
      trick: [
         `Feed it a venus pinata trap seed to have it perform Trick 1`,
         `Feed it a venus pinata trap to have it perform Trick 2`
      ],
      species: [
         `Feeding it a cactus changes its color to pink.`,
         `Feeding it a wedge of cheese changes its color to gold.`,
         `Feeding it a bluebell changes its color to blue.`,
      ],
      uses: [
         `Head butts Professor Pester out of your garden`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Limeocerous master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Macaraccoon',
      appear: [
         `You are a level 26 gardener or better (sour)`,
         `Have a Macaraccoon resident in the garden`,
         ``,
      ],
      visit: [
         `You are a level 28 gardener or better (sour)`,
         `There are 5 Syrupent-family residents in the garden`,
         ``,
      ],
      resident: [
         `You have 5 Master Romancer awards (sour)`,
         `Has eaten a Cluckles (sour)`,
         `Has eaten 3 Syrupents`,
      ],
      romance: [
         `Has eaten 1 Arocknid`,
         `Has eaten 1 Geckie`,
         ``,
         `There is a Macaraccoon house in the garden`,
      ],
      trick: [
         `Feed it a venus pinata trap seed to have it perform Trick 1`,
         `Feed it a venus pinata trap to have it perform Trick 2`
      ],
      species: [
         `Feeding it a water lily seed changes its color to pink.`,
         `Feeding it a mushroom changes its color to yellow.`,
         `Feeding it a bluebell seed changes its color to blue.`,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Macaraccoon master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Mallowolf',
      appear: [
         `You are a level 30 gardener or better (sour)`,
         `Have had a tame Mallowolf resident at some point`,
         ``,
      ],
      visit: [
         `You are a level 32 gardener or better (sour)`,
         `Have 6 Rashberry residents in the garden.`,
         ``,
      ],
      resident: [
         `Has eaten 3 Hoghurts (sour)`,
         `Has eaten 3 Rashberry`,
         ``,
      ],
      romance: [
         `Has eaten 1 Goobaa`,
         `Has eaten 1 Juicygoose`,
         ``,
         `There is a Mallowolf house in the garden`,
      ],
      trick: [
         `Feed it a dandelion seed to have it perform Trick 1`,
         `Feed it a dandelion to have it perform Trick 2`
      ],
      species: [
         `Feeding it a blackberry changes its color to purple.`,
         `Feeding it a water lily seed changes its color to pink.`,
         `Feeding it a bluebell seed changes its color to light blue.`,
      ],
      uses: [
         `Having two Mallowolves will scare away the Ruffians that are blocking the Parrybo.
         `,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Mallowolf master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Moojoo',
      appear: [
         `A Moojoo loves some tasty holly berries`,
         `Feeding a fir tree seed to a Doenut turns it into a Moojoo`,
         ``,
      ],
      visit: [
         `Feeding a fir tree seed to a Doenut turns it into a Moojoo`,
         ``,
         ``,
      ],
      resident: [
         `Feeding a fir tree seed to a Doenut turns it into a Moojoo`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 1 jar of jam`,
         `You have 25 square pinometers of snow`,
         `Is wearing a Doenut Stalker`,
         `Is wearing Caterpillars`,
         `There is a Moojoo house in the garden`,
      ],
      trick: [
         `Feed it a snowdrop seed to have it perform Trick 1`,
         `Feed it a snowdrop to have it perform Trick 2`
      ],
      species: [
         `Feeding it a buttercup changes its color to yellow`,
         `Feeding it a watercress changes its color to green`,
         `Feeding it a bluebell changes its color to blue.`,
      ],
      uses: [
         `Eating 2 Moojoos helps meet the Tigermisu Resident requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Moojoo master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Moozipan',
      appear: [
         `Have 5 square pinometers of long grass in the garden`,
         `Have a milk churn in the garden`,
         ``,
      ],
      visit: [
         `Have 10 square pinometers of long grass in the garden`,
         `Have a milk churn in the garden`,
         `Have 10 buttercups in the garden`,
      ],
      resident: [
         `Have 15 square pinometers of long grass in the garden`,
         `Has eaten 5 buttercups`,
         `Has eaten 2 gooseberry fools`,
      ],
      romance: [
         `Has eaten 1 banana split`,
         `Has eaten 4 dandelions`,
         `Have 18 square pinometers of long grass in the garden`,
         `There is a Moozipan house in the garden`,
      ],
      trick: [
         `Feed it a milk to have it perform Trick 1`,
         `Feed it a cheese to have it perform Trick 2`
      ],
      species: [
         `Feeding it a sandwich changes its color to white.`,
         `Feeding it a banana tree seed changes its color to light yellow.`,
         `Feeding it a snapdragon seed changes its color to pink.`,
      ],
      uses: [
         `Can produce milk at a milking shed.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Moozipan master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Mothdrop',
      appear: [
         `Night-time in the garden`,
         ``,
         ``,
      ],
      visit: [
         `Has a light in the garden`,
         ``,
         ``,
      ],
      resident: [
         `Has a light in the garden`,
         `Has eaten 1 bluebell`,
         ``,
      ],
      romance: [
         `Has eaten 1 hazelnut seed`,
         ``,
         ``,
         `There is a Mothdrop house in the garden`,
      ],
      trick: [
         `Feed it a pumpkin seed to have it perform Trick 1`,
         `Feed it a pumpkin to have it perform Trick 2`
      ],
      species: [
         `Feeding it a turnip changes its color to blue`,
         `Feeding it a daisy changes its color to yellow.`,
         `Feeding it a watercress changes its color to green`,
      ],
      uses: [
         `3 Mothdrops in the garden helps meet the Sherbat Visit requirements.`,
         `8 Mothdrops in the garden helps meet the Galagoogoo Visit requirements.`,
         `Eating 1 Mothdrop helps meet the Geckie Romance requirements.`,
         `Eating 2 Mothdrops helps meet the Galagoogoo Resident requirements.`,
         `Eating 2 Mothdrops helps meet the Sherbat Resident requirements.`,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Mothdrop master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Mousemallow',
      appear: [
         `Have a turnip in the garden`,
         ``,
         ``,
      ],
      visit: [
         `Have a turnip in the garden`,
         ``,
         ``,
      ],
      resident: [
         `Has eaten 1 turnip`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 1 yam`,
         ``,
         ``,
         `There is a Mousemallow house in the garden`,
      ],
      trick: [
         `Feed it a poppy seed to have it perform Trick 1`,
         `Feed it a poppy to have it perform Trick 2`
      ],
      species: [
         `Feeding it a piece of cheese changes its color to yellow`,
         `Feeding it a daisy changes its color to green.`,
         `Feeding it a bluebell changes its color to light blue.`,
      ],
      uses: [
         `2 Mousemallows in the garden helps meet the Kittyfloss Appear requirements.`,
         `2 Mousemallows in the garden helps meet the Syrupent Visit requirements.`,
         `3 Mousemallows in the garden helps meet the Kittyfloss Visit requirements.`,
         `5 Mousemallows in the garden helps meet the Hootyfruity Visit requirements.`,
         `Eating 1 Mousemallow helps meet the Kittyfloss Resident requirements.`,
         `Eating 1 Mousemallow helps meet the Syrupent Resident requirements.`,
         `Eating 1 Mousemallow helps meet the Fourheads Trick requirements.`,
         `Eating 1 Mousemallow helps meet the Lickatoad Trick requirements.`,
         `Eating 3 Mousemallows helps meet the Hootyfruity Resident requirements.`,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Mousemallow master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Newtgat',
      appear: [
         `You have 2 square pinometers of water`,
         ``,
         ``,
      ],
      visit: [
         `Have watercress growing in the garden`,
         `You have 3 square pinometers of water`,
         ``,
      ],
      resident: [
         `You have 3 square pinometers of water`,
         `Has eaten 3 watercress flowers`,
         ``,
      ],
      romance: [
         `Has eaten 1 Raisant`,
         `You have 3 square pinometers of water`,
         ``,
         `There is a Newtgat house in the garden`,
      ],
      trick: [
         `Feed it a Taffly to have it perform Trick 1`,
         `Feed it a Flutterscotch to have it perform Trick 2`
      ],
      species: [
         `Feeding it a bird of paradise changes its color to orange`,
         `Feeding it a water lily seed changes its color to pink.`,
         `Feeding it a bluebell changes its color to blue.`,
         'Feeding a chili to a Newtgat turns it into a Salamango.'
      ],
      uses: [
         `Eating 1 Newtgat helps meet the Pengum Resident requirements.`,
         `Eating 1 Newtgat helps meet the Swanana Trick 2 requirement.`,
         `Eating 2 Newtgats helps meet the Juicygoose Romance requirements.`,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Newtgat master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Parmadillo',
      appear: [
         `Feeding a coconut to a Fudgehog turns it into a Parmadillo`,
         ``,
         ``,
      ],
      visit: [
         `Feeding a coconut to a Fudgehog turns it into a Parmadillo`,
         ``,
         ``,
      ],
      resident: [
         `Feeding a coconut to a Fudgehog turns it into a Parmadillo`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 1 orange tree seed.`,
         `You have 5 square pinometers of sand in the garden (0.5%).`,
         ``,
         `There is a Parmadillo house in the garden`,
      ],
      trick: [
         `Feed it a palm seed to have it perform Trick 1`,
         `Feed it a coconut to have it perform Trick 2`
      ],
      species: [
         `Feeding it a hemlock changes its color to white.`,
         `Feeding it medicine changes its color to pink.`,
         `Feeding it a banana changes its color to yellow`,
      ],
      uses: [
         `Eating 3 Parmadillos helps tame a Sour Limeoceros.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Parmadillo master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Parrybo',
      appear: [
         `Have a bird of paradise plant in the garden`,
         ``,
         ``,
      ],
      visit: [
         `Have 2 Mallowolves to scare away the Ruffian`,
         `Have 2 bird of paradise plants in the garden`,
         ``,
      ],
      resident: [
         `Has eaten 3 bird of paradise seeds`,
         `Has eaten 2 oranges`,
         `Has eaten 2 monkeynuts`,
      ],
      romance: [
         `Has eaten 2 banana tree seeds`,
         `Has eaten 1 orchid seed`,
         `Is wearing an eyepatch`,
         `Have a pirate statue in the garden`,
         `There is a Parrybo house in the garden`,
      ],
      trick: [
         `Feed it a poppy seed to have it perform Trick 1`,
         `Feed it a Candary to have it perform Trick 2`
      ],
      species: [
         `Feeding it a venus piñata trap changes its color to green and orange`,
         `Feeding it a piece of cheese changes its color to yellow.`,
         `Feeding it a bluebell changes its color to blue.`,
      ],
      uses: [
         `Eating 2 Parrybos helps meet the Eaglair Resident requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Parrybo master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Pengum',
      appear: [
         `You must be a level 2 gardener or better`,
         `Can only be found in the piñarctic`,
         ``,
      ],
      visit: [
         `Bait the trap with a chilli in the piñarctic`,
         ``,
         ``,
      ],
      resident: [
         `You have 5 square pinometers of snow`,
         `You have 5 square pinometers of water`,
         `Has eaten 1 Newtgat`,
      ],
      romance: [
         `Is wearing conga's top hat`,
         `Is wearing a toff monocle`,
         `Is wearing a secret agent bowtie`,
         `You have 5 square pinometers of snow`,
         `There is a Pengum house in the garden`,
      ],
      trick: [
         `Feed it a snowdrop flower to have it perform Trick 1`,
         `Feed it a tulip to have it perform Trick 2`
      ],
      species: [
         `Feeding it a poppy changes its color to red.`,
         `Feeding it a turnip changes its color to purple.`,
         `Feeding it corn changes its color to yellow.`,
      ],
      uses: [
         `Eating 1 Pengum helps meet the sour Cocoadile Resident requirements.`,
         `Eating 3 Pengums helps meet the Polollybear Romance requirement.`,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Pengum master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Pieena',
      appear: [
         `Feeding a bone to a Pretztail turns it into a Pieena`,
         `Bait with a orange in the desert`,
         ``,
      ],
      visit: [
         `Feeding a bone to a Pretztail turns it into a Pieena`,
         `Bait with a orange in the desert`,
         ``,
      ],
      resident: [
         `Feeding a bone to a Pretztail turns it into a Pieena`,
         `Has eaten a bone`,
         ``,
      ],
      romance: [
         `Has eaten a Chocstrich egg`,
         `Have 4 pinometers of sand`,
         ``,
         `There is a Pieena house in the garden`,
      ],
      trick: [
         `Feed it a jelly to have it perform trick 1`,
         `Feed it a bone to have it perform trick 2`
      ],
      species: [
         `Feeding it a blueberry changes its color to blue.`,
         `Feeding it a blackberry changes its color to purple.`,
         `Feeding it a orange changes its color to orange.`,
      ],
      uses: [
         `Eating 1 Pieena helps meet the Roario trick requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Pieena master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Pigxie',
      appear: [
         `The Pigxie is created by cross-romancing a Swanana and a Rashberry after buying a mystery house from Willy Builder.`,
         ``,
         ``,
      ],
      visit: [
         `The Pigxie is created by cross-romancing a Swanana and a Rashberry after buying a mystery house from Willy Builder.`,
         ``,
         ``,
      ],
      resident: [
         `The Pigxie is created by cross-romancing a Swanana and a Rashberry after buying a mystery house from Willy Builder.`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 2 bullrushes`,
         `Has eaten 2 acorns`,
         `The garden is worth 10,000 chocolate coins`,
         `Is wearing tap shoes`,
         `There is a Pigxie house in the garden`,
      ],
      trick: [
         `Feed it a rotten chili to have it perform trick 1`,
         `Feed it a rotten gooseberry to have it perform trick 2`
      ],
      species: [
         `Feeding it a bluebell seed changes its color to blue.`,
         `Feeding it a poppy changes its color to fuchsia.`,
         `Feeding it a gooseberry fool changes its color to green.`,
      ],
      uses: [
         `Eating 1 Pigxie helps meet the Dragonache trick requirements.`,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Pigxie master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Polollybear',
      appear: [
         `Feeding a blue gem to a Fizzlybear turns it into a Polollybear`,
         ``,
         ``,
      ],
      visit: [
         `Feeding a blue gem to a Fizzlybear turns it into a Polollybear`,
         `Bait with a snowdrop flower in the arctic`,
         ``,
      ],
      resident: [
         `Feeding a blue gem to a Fizzlybear turns it into a Polollybear`,
         `You have 20 square pinometers of snow 20%`,
         `Has eaten 3 blue gems`,
      ],
      romance: [
         `Has eaten 3 Pengums`,
         `Has eaten 2 jars of honey`,
         `You have 25 square pinometers of snow 25%`,
         `There is a Polollybear house in the garden`,
      ],
      trick: [
         `Feed it a ball of wool to have it perform trick 1`,
         `Feed it a fir cone to have it perform trick 2`
      ],
      species: [
         `Feeding it a dandelion changes its color to yellow.`,
         `Feeding it a water lily changes its color to pink.`,
         `Feeding it a gooseberry changes its color to green.`,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Polollybear master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Ponocky',
      appear: [
         `Have 10 square pinometers of grass in the garden`,
         `Have 10 carrots in the garden`,
         `Have 10 flowers of any type in the garden`,
      ],
      visit: [
         `You have hired Bart to turn those railings into candy canes`,
         `You have 15 square pinometers of grass`,
         `Have 10 carrots in the garden`,
         `Have 10 flowers of any kind in the garden`,
      ],
      resident: [
         `You have 20 square pinometers of grass`,
         `Has eaten 5 carrots`,
         ``,
      ],
      romance: [
         `Is wearing a tail bow`,
         `Have 1 hay bale in the garden`,
         `Eat 1 Piece of carrot cake`,
         ``,
         `There is a Ponocky house in the garden`,
      ],
      trick: [
         `Feed it an apple to have it perform trick 1`,
         `Feed it a toffee apple to have it perform trick 2`
      ],
      species: [
         `Feeding it a piece of bread changes its color to white`,
         `Feeding it a water lily changes its color to pink.`,
         `Feeding it a bluebell seed changes its color to blue.`,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Ponocky master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Pretztail',
      appear: [
         `Night-time in the garden`,
         ``,
         ``,
      ],
      visit: [
         `Have 1 Tartridge or 1 Bunnycomb in the garden`,
         ``,
         ``,
      ],
      resident: [
         `Has eaten 1 Tartridge or 1 Bunnycomb`,
         ``,
         ``,
      ],
      romance: [
         `Has eaten 1 Cluckles`,
         ``,
         ``,
         `There is a Pretztail house in the garden`,
      ],
      trick: [
         `Feed it a carrot to have it perform trick 1`,
         `Feed it a carrot seed to have it perform trick 2`
      ],
      species: [
         `Feeding it a bluebell changes its color to blue.`,
         `Feeding it a water lily changes its color to pink.`,
         `Feeding it a gooseberry fool changes its color to green.`,
         `Feeding a bone to a Pretztail turns it into a Pieena`
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Pretztail master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
      pinned: false
   },
   {
      name: 'Zumbug',
      appear: [
         ``,
         ``,
         ``,
      ],
      visit: [
         ``,
         ``,
         ``,
      ],
      resident: [
         ``,
         ``,
         ``,
      ],
      romance: [
         ``,
         ``,
         ``,
         `There is a Zumbug house in the garden`,
      ],
      trick: [
         ``,
         ``
      ],
      species: [
         ``,
         ``,
         ``,
      ],
      uses: [
         ``,
         ``,
         ``,
         ``,
      ],
      masterRomancer: JSON.parse(localStorage.getItem(`Zumbug master romancer`)) || false,
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