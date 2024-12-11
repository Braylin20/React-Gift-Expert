/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"



describe('Pruebas en <GifItem', () => {

    const title = 'Dragon ball'
    const url = 'https://dragonball'

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('should show the image and url correct', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img');
        screen.debug()
        // expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show the title of component', () => {

    })
})