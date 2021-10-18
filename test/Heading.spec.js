import { mount } from '@vue/test-utils'
import Heading from '@/components/atoms/Heading.vue'

describe('Heading', () => {
  test('should have text-5xl md:text-7xl capitalize classes when h1 is given', () => {
    const wrapper = mount(Heading, {
      propsData: {
        tag: 'h1',
        content: 'Heading H1'
      }
    })
    expect(wrapper.classes().join(' ')).toContain('text-5xl md:text-7xl capitalize')
  })
})
