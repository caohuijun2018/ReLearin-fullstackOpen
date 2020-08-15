import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Togglable'
describe('<Togglable/>' , () => {
  let component
  beforeEach(() => {
    component = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv" />
      </Togglable>
    )
  })

  test('renders its children', () => {
    expect(
      component.container.querySelector('.testDiv')
    ).toBeDefined()
  })

  test('at start the children are not displayed' , () => {
    const div = component.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')//测试div 的样式元素是否包含
  })

  test('after clicking the button, children are displayed', () => {
    const button = component.getByText('show...')
    fireEvent.click(button)

    const div = component.container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

  test('toggleable content can be closed' , () => {
    //const button = component.container.querySelector('button')
    const button = component.getByText('show...')
    fireEvent.click(button)

    //const closeButton = component.container.querySelector('button:nth-child(2)')
    const closeButton = component.getByText('cancel')
    fireEvent.click(closeButton)

    const div = component.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })
})