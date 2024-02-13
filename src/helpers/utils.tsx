import { type ReactNode } from 'react'

// форматирует дату к формату - 20 февр. 2024 г., 00:00
export const formatDate1 = (date?: string) => {
	if (!date) return null

	const formatDate = new Date(date)
	return new Intl.DateTimeFormat('ru-RU', {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(formatDate)
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

// Преобразование данныех с firebase-db в массив, где ключ это id
export const formatFbData = <T,>(data: Record<string, T>) => {
	const arrData = Object.entries(data)
	return arrData.map((dataItem) => {
		const id = dataItem[0]
		return { ...dataItem[1], id }
	})
}
