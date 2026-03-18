function toDate(value: string | number[]): Date | null {
  if (Array.isArray(value)) {
    const [year, month, day, hour = 0, minute = 0, second = 0, nano = 0] = value;
    const milliseconds = Math.floor(nano / 1_000_000);
    return new Date(year, month - 1, day, hour, minute, second, milliseconds);
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatDateTime(value: string | number[] | null): string {
  if (!value) {
    return '-';
  }

  const date = toDate(value);
  if (!date) {
    return Array.isArray(value) ? value.join(',') : value;
  }

  return new Intl.DateTimeFormat(undefined, {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

export function formatTimeRange(startTime: string | number[] | null, endTime: string | number[] | null, isActive = false): string {
  const start = formatDateTime(startTime);
  const end = endTime ? formatDateTime(endTime) : (isActive ? 'now' : '-');
  return `${start} -> ${end}`;
}
