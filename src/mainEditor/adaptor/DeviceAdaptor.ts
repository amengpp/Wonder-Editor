import {Device} from "amyjs/dist/es2015/core/device/Device";

export const getDevice = () => {
    Device.getInstance();
};