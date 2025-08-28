import { MessageUtils, SpecialMessageType } from "./utils/message-utils";

const expiry = MessageUtils.calcExpiryDate(SpecialMessageType.REQUEST_CANCELLATION);
console.log("Expiry timestamp:", expiry);
