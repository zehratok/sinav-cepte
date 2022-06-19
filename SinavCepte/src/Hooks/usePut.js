import { useState } from "react";
import axios from "axios";

function usePut() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const put = async (url, apiData) => {
        try {
            setLoading(true);
            const { data: responseData } = await axios.put(url, apiData);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    return { data, loading, error, put };
} export default usePut;