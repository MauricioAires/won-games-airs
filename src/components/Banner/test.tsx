import { screen, render } from 'utils/test-utils'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}
describe('<Banner />', () => {
  it('should render correctly', () => {
    render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Defy death/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Play the new CrashLands season/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /Buy now/i
      })
    ).toHaveAttribute('href', '/games/defy-death')

    expect(
      screen.getByRole('img', {
        name: /Defy death/i
      })
    ).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
