import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Library/Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)
export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
