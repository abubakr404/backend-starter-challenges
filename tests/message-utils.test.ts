import { MessageUtils, SpecialMessageType } from "../src/utils/message-utils";

describe("MessageUtils.calcExpiryDate", () => {
  it("should return now + 12h for request_cancellation", () => {
    const result = MessageUtils.calcExpiryDate(SpecialMessageType.REQUEST_CANCELLATION);
    const diff = result - Date.now();
    expect(Math.round(diff / (1000 * 60 * 60))).toBe(12);
  });

  it("should return now + 24h for CHECK_IN_INFO when date provided", () => {
    const result = MessageUtils.calcExpiryDate(
      SpecialMessageType.CHECK_IN_INFO,
      Date.now()
    );
    const diff = result - Date.now();
    expect(Math.round(diff / (1000 * 60 * 60))).toBe(24);
  });

  it("should return same date for NEW_BOOKING", () => {
    const date = new Date("2025-01-01").getTime();
    const result = MessageUtils.calcExpiryDate(SpecialMessageType.NEW_BOOKING, date);
    expect(result).toBe(date);
  });
});
