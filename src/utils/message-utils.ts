export enum SpecialMessageType {
  REQUEST_CANCELLATION = "request_cancellation",
  REQUEST_APPROVAL = "request_approval",
  INQUIRY_BOOKING = "inquiry_booking",
  SPECIAL_OFFER = "special_offer",
  ALLOW_BOOKING = "allow_booking",
  CHECK_IN_INFO = "check_in_info",
  NEW_BOOKING = "new_booking",
}

const expiryHours: Record<string, number> = {
  request_cancellation: 12,
  request_approval: 12,
  inquiry_booking: 12,
  special_offer: 5,
  allow_booking: 5,
};

export class MessageUtils {
  static calcExpiryDate(type: SpecialMessageType, date?: Date | number): number {
    // ✍️ TODO: implement the function
    return 0;
  }
}
