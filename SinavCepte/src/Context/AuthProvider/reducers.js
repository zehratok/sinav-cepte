import AsyncStorage from "@react-native-async-storage/async-storage";
export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_USER':
            const { data } = action.payload;
            data ?
                AsyncStorage.setItem("@USER", JSON.stringify(data)) :
                AsyncStorage.removeItem("@USER");

            return { ...state, data }

        default:
            return state;
    }
}