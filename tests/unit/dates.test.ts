import { describe, expect, it } from "vitest";

import { formatDateRange, formatYearMonth } from "@/lib/dates";

describe("date formatting", () => {
  it("formats a year-month value without timezone drift", () => {
    expect(formatYearMonth("2024-08")).toBe("Aug 2024");
  });

  it("formats current and completed date ranges", () => {
    expect(formatDateRange("2026-06", null)).toBe("Jun 2026 — Present");
    expect(formatDateRange("2023-12", "2024-06")).toBe("Dec 2023 — Jun 2024");
  });
});
