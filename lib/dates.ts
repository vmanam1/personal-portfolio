const formatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatYearMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);

  if (!year || !month) {
    throw new Error(`Invalid year-month value: ${value}`);
  }

  return formatter.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
): string {
  return `${formatYearMonth(startDate)} — ${endDate ? formatYearMonth(endDate) : "Present"}`;
}
