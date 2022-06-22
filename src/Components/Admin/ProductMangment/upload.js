import {api} from "../../../services/Config";

export const uploadApi = {
    async upload(data) {
        try {
            const response = await api.post("/upload", data);
            return {
                data: response.data.filename,
                size: response.data.size
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }
}