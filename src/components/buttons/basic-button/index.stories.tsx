import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Index from './index'

const meta = {
  component: Index,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'lee',
  },
}

export const Np: Story = {
  args: {
    label: 'Np',
  },
}
