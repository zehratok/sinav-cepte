import AsyncStorage from "@react-native-async-storage/async-storage";

export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_USER':
            const { data } = action.payload;
            AsyncStorage.setItem("@USER", JSON.stringify(data));
            return { ...state, data };

        case 'REMOVE_USER':
            AsyncStorage.removeItem("@USER");
            return { ...state, data: null };

        default:
            return state;
    }
}