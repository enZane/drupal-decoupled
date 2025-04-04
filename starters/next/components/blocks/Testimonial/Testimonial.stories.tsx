import type { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from '@/components/blocks'

const meta: Meta<typeof Testimonial> = {
  title: 'Blocks/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  argTypes: {
    quote: { control: 'text' },
    author: { control: 'object' },
  },
  args: {
    quote:
      "This product has completely transformed our workflow. It's intuitive, powerful, and addresses all the pain points we were experiencing with our previous solution.",
    author: {
      avatar: {
        src: 'placeholders/doc-tahedroid/avatar.png',
        name: 'Doc Tahedroid',
      },
      name: 'Doc Tahedroid',
      position: 'CEO',
      company: 'Tech Innovators Inc.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Testimonial>

export const Default: Story = {}

export const WithoutAvatarImage: Story = {
  args: {
    quote:
      "This solution has revolutionized how we manage our projects. It's a game-changer for our team's productivity.",
    author: {
      avatar: {
        src: undefined,
        name: 'Doc Tahedroid',
      },
      name: 'Doc Tahedroid',
      position: 'CEO',
      company: 'Tech Innovators Inc.',
    },
  },
}
export const CustomTestimonial: Story = {
  args: {
    quote:
      "This solution has revolutionized how we manage our projects. It's a game-changer for our team's productivity.",
  },
}
