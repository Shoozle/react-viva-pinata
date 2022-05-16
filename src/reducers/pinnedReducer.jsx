
export const pinataReducer = (state, action) => {
   switch (action.type) {
      case "MASTER_ROMANCER":
         return state.map((pinata) => {
            if (pinata.name === action.name) {
               localStorage.setItem(`${pinata.name} master romancer`, JSON.stringify(!pinata.masterRomancer))
               return { ...pinata, masterRomancer: !pinata.masterRomancer }
            } else {
               return pinata;
            }
         })
      case "PINNED":
         return state.map((pinata) => {
            if (pinata.name === action.name) {
               localStorage.setItem(`${pinata.name} pinned`, JSON.stringify(!pinata.pinned))
               return { ...pinata, pinned: !pinata.pinned }
            } else {
               return pinata;
            }
         })
      default:
         return state;
   }
}