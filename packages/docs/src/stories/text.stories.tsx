import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        reprehenderit tempora dicta aspernatur facere expedita numquam ea?
        Cupiditate, laudantium, eius ratione delectus, doloribus repellat
        temporibus tempora repudiandae sit corporis iusto.`,
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    Children: 'Strong Text',
    as: 'strong',
  },
}
