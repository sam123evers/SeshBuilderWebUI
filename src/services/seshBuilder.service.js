import axs from "../http-common";

class SeshBuilderDataService {
	getAll() {
		const token = axs.defaults.headers.common.Authorization;
		const config = {
			headers: { Authorization: `Token ${token}` }
		};
		return axs.get("/pose", config);
	}
}

export default new SeshBuilderDataService();