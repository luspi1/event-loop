import { Button } from 'src/UI/Button/Button'
import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
	title: 'Компоненты/Button',
	component: Button,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>
export const Primary: Story = {
	args: {
		children: 'Кнопка',
		appearance: 'primary',
	},
}
