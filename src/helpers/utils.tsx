import { type ReactNode } from 'react'

// форматирует дату к формату - 24.03.1999

export const formatDate1 = (date?: Date) => {
	if (!date) return

	return new Intl.DateTimeFormat('ru-RU', {
		dateStyle: 'short',
	}).format(date)
}

// форматирует дату к формату - 24 марта 1999 г.
export const formatDate2 = (date?: Date) => {
	if (!date) return

	return new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date)
}

export const isNullOrEmpty = (value: ReactNode | ReactNode[]): boolean => {
	if (value == null) {
		return true
	}

	if (typeof value === 'string' && value.trim() === '') {
		return true
	}

	return Array.isArray(value) && value.length === 0
}
