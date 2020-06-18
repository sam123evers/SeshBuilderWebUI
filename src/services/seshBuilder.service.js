import http from "../http-common";

class SeshBuilderDataService {
	getAll() {
		return http.get("/pose");
	}
}

export default new SeshBuilderDataService();