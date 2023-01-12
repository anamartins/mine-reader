import { assert, describe, expect, it } from 'vitest'
import { formatDate } from '../../src/utils/date'

describe('formatDate', () => {
  it('should return date in correct format dd-mm-yyyy hh:mm with the right time ago', () => {
    const date = formatDate('Thu, 12 Jan 2023 14:11:10 GMT')
    expect(date).toBe('12-01-2023 15:11 - published 2 hours ago')
  })
})

describe('formatDate', () => {
  it('should return date in correct format dd-mm-yyyy hh:mm with the right time ago', () => {
    const date = formatDate('Thu, 12 Jan 2023 14:11:10 GMT')
    expect(date).toBe('12-01-2023 15:11 - published 2 hours ago')
  })
})
