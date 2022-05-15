

const pinnedReducer = (state = [], action) => {
   switch (action.type) {
      case 'add':
         return {state}
      case 'remove':
         return {state}
      default:
         throw new Error();
   }
}

export default pinnedReducer