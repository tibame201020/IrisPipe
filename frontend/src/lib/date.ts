import type { LocalDateTimeInput } from '../types/irispipe'

export function parseLocalDateTime(input: LocalDateTimeInput) {
  if (!input) {
    return null
  }

  if (typeof input === 'string') {
    const parsed = new Date(input)
    return Number.isNaN(parsed.getTime()) ? null : parsed
  }

  if (Array.isArray(input) && input.length >= 5) {
    const [year, month, day, hour, minute, second = 0, nano = 0] = input
    return new Date(year, month - 1, day, hour, minute, second, Math.floor(nano / 1_000_000))
  }

  return null
}

export function formatDateTime(input: LocalDateTimeInput) {
  const parsed = parseLocalDateTime(input)
  if (!parsed) {
    return '-'
  }

  return new Intl.DateTimeFormat('zh-TW', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(parsed)
}

export function formatDateTimeLong(input: LocalDateTimeInput) {
  const parsed = parseLocalDateTime(input)
  if (!parsed) {
    return '-'
  }

  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(parsed)
}

export function formatDuration(start: LocalDateTimeInput, end: LocalDateTimeInput) {
  const startDate = parseLocalDateTime(start)
  const endDate = parseLocalDateTime(end)
  if (!startDate) {
    return '-'
  }

  const finalEnd = endDate ?? new Date()
  const diffMs = Math.max(finalEnd.getTime() - startDate.getTime(), 0)
  const totalSeconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  if (minutes === 0) {
    return `${seconds}s`
  }

  const hours = Math.floor(minutes / 60)
  if (hours === 0) {
    return `${minutes}m ${seconds}s`
  }

  return `${hours}h ${minutes % 60}m`
}
