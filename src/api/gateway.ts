import { API } from ".";
import { LIMIT } from "../utils";

export interface IGatewayInputDTO {
  serialnumber: string;
  name: string;
  ip4: string;
}

export class GatewayAPIs {
  getGatewayBySerialNumber(serialnumber: string) {
    return API.get(`/gateway/${serialnumber}`);
  }

  createNewGateway(gateway: IGatewayInputDTO) {
    return API.post("/gateway", gateway);
  }

  getGateways(page: number, limit?: number) {
    page = page || 1;
    limit = limit || LIMIT;
    const url: string = `/gateways?page=${page}&limit=${limit}`;
    return API.get(url);
  }
}

export const gatewayAPIInstance = new GatewayAPIs();
