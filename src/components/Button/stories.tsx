import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
export default {
  title: 'form/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
