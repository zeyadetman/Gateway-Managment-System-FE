import { API } from ".";

export interface IDeviceInputDTO {
  uid: number;
  vendor: string;
  status: "online" | "offline";
  gatewaySerialNumber: string;
}

export class DeviceAPIs {
  getDeviceByUid(uid: number) {
    return API.get(`/device/${uid}`);
  }

  createNewDevice(device: IDeviceInputDTO) {
    return API.post("/device", device);
  }

  deleteDeviceByUid(uid: number) {
    return API.delete(`/device/${uid}`);
  }
}

export const deviceAPIInstance = new DeviceAPIs();
