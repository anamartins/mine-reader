import { describe, expect, it, vi } from 'vitest'
import { formatDate } from '../../src/utils/date'

vi.useFakeTimers()
vi.setSystemTime(new Date('Thu, 12 Jan 2023 16:11:10 GMT'))

describe('formatDate', () => {
  it('should return date in correct format dd-mm-yyyy hh:mm with the right time ago - hour', () => {
    const date = formatDate('Thu, 12 Jan 2023 14:11:10 GMT')

    expect(date).toBe('12-01-2023 15:11 - published 2 hours ago')
  })
})

describe('formatDate', () => {
  it('should return date in correct format dd-mm-yyyy hh:mm with the right time ago - month', () => {
    const date = formatDate('Thu, 12 Dec 2022 14:11:10 GMT')
    expect(date).toBe('12-12-2022 15:11 - published about 1 month ago')
  })
})

describe('formatDate', () => {
  it('should return date in correct format dd-mm-yyyy hh:mm with the right time ago', () => {
    const date = formatDate('Wed, 12 Jan 2022 14:11:10 GMT')
    expect(date).toBe('12-01-2022 15:11 - published 1 year ago')
  })
})
