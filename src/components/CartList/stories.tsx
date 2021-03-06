import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import mockCartList from './mock'
export default {
  title: 'payment/CartList',
  component: CartList,
  args: {
    items: mockCartList,
    total: 'R$ 330,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

const Template: Story<CartListProps> = (args) => (
  <div
    style={{
      maxWidth: 800
    }}
  >
    <CartList {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithButton = Template.bind({})

WithButton.args = {
  hasButton: true
}

export const Empty = Template.bind({})

Empty.args = {
  items: []
}
