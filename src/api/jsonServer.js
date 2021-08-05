import axios from "axios";
import getEnvVars from "../../environment";

const { jsonServerBaseUrl } = getEnvVars();

export default axios.create({
  baseURL: jsonServerBaseUrl,
});
