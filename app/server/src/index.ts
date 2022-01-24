const CryptoJS = require("crypto-js");
import md5 from "md5";
import { v4 as uuid } from 'uuid';

export const ext = {
    md5: md5, uuid:uuid
}