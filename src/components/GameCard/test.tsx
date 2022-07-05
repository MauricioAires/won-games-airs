import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard, { GameCardProps } from '.'

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'RockStart Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235.00',
  slug: 'population-zero'
}
describe('<GameCard />', () => {
  it('should render correctly', () => {
    // Reenderizar o GameCArd
    renderWithTheme(<GameCard {...props} />)

    //Verificar se o title foi reenderizado
    expect(
      screen.getByRole('heading', {
        name: props.title
      })
    ).toBeInTheDocument()
    //Verificar se o developer foi reenderizado
    expect(
      screen.getByRole('heading', {
        name: props.developer
      })
    ).toBeInTheDocument()
    //Verificar se o image foi reenderizado
    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toHaveAttribute('src', props.img)

    expect(
      screen.getByRole('link', {
        name: props.title
      })
    ).toHaveAttribute('href', `/game/${props.slug}`)

    //Verificar se o price foi reenderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // Render componente
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)
    // Preço não tenha o line-through
    expect(price).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(price).toHaveStyle({
      background: '#3CD3C1'
    })

    // Background verde
  })

  it('should render a line-through in price when promocional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15" />)

    const price = screen.getByText(props.price)
    const promotionalPrice = screen.getByText('R$ 15')

    expect(promotionalPrice).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(price).toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render  a filled Favorite icon when  favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toHaveStyle({
      background: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
    expect(ribbon).toBeInTheDocument()
  })
})
