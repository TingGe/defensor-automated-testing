import { test } from 'ava'
import 'jsdom-global/register'
import * as React from 'react'
import { render } from 'react-dom'

test('renders without crashing', t => {
	const div = document.createElement('div')
	render(<div />, div)
	t.pass('Success')
})
