import { API } from ".";

export interface IDeviceInputDTO {
  uid: number;
  vendor: string;
  status: "online" | "offline";
  gatewaySerialNumber: string;
}

export interface IDeviceUpdateDTO {
  vendor?: string;
  status?: "online" | "offline";
  gatewaySerialNumber?: string;
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

  updateDeviceByUid(uid: number, device: IDeviceInputDTO) {
    return API.patch(`/device/${uid}`, device);
  }
}

export const deviceAPIInstance = new DeviceAPIs();
