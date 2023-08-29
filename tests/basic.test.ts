import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'

// imports
import App from './app.vue'

// describe('example', async () => {
//   await setup({
//     rootDir: fileURLToPath(new URL('..', import.meta.url)),
//     server: true
//   })

//   it('Renders Hello Nuxt', async () => {
//     expect(await $fetch('/')).toMatch('Hello Nuxt!')
//   })

//   if (isDev()) {
//     it('[dev] ensure vite client script is added', async () => {
//       expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
//     })
//   }
// })

describe('Bloco de testes', async () => {
  // await setup({
  //   rootDir: fileURLToPath(new URL('..', import.meta.url)),
  //   server: true
  // })

  it('Testa texto do título', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.container__title').html().includes('</h1>')).toBe(
      true,
    )
    expect(wrapper.find('.container__title').text()).toEqual(
      'Project to train tests with Vitest',
    )
  })

  it('Testa botão de adição', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.addition').text()).toEqual('+')
  })

  it('Testa botão de subtratação', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.subtraction').text()).toEqual('-')
  })

  it('Testa visualização do input ao clicar botão de adição', async () => {
    const wrapper = mount(App)
    const result = wrapper.find('.container__result')
    expect(result.text()).toBe('0')
    const buttonAdd = wrapper.find('.addition')
    await buttonAdd.trigger('click')
    expect(result.text()).toBe('1')
  })

  it('Testa visualização do input ao clicar botão de subtração', async () => {
    const wrapper = mount(App)
    const result = wrapper.find('.container__result')
    expect(result.text()).toBe('0')
    const buttonSub = wrapper.find('.subtraction')
    await buttonSub.trigger('click')
    expect(result.text()).toBe('-1')
  })

  it('Testa input de valor a ser adicionado ou subtraido', () => {
    const wrapper = mount(App)
    const input = wrapper.find('.container__input')
    expect(input.exists()).toBe(true)
  })

  it('Testa inserir novo valor no input', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.container__input')
    const inputHtml = input.element as HTMLInputElement
    expect(inputHtml.value).toBe('1')
    await input.setValue(10)
    expect(inputHtml.value).toBe('10')
  })

  it('Testa se a adicão está funcionando com o input com valor atualizado', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.container__input')
    const buttonAdd = wrapper.find('.addition')
    const result = wrapper.find('.container__result')

    expect(result.text()).toBe('0')
    await input.setValue('7')
    await buttonAdd.trigger('click')
    expect(result.text()).toBe('7')

    await input.setValue('1')
    await buttonAdd.trigger('click')
    await buttonAdd.trigger('click')
    await buttonAdd.trigger('click')
    expect(result.text()).toBe('10')
  })

  it('Testa se a subtração está funcionando com o input com valor atualizado', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('.container__input')
    const buttonAdd = wrapper.find('.subtraction')
    const result = wrapper.find('.container__result')

    expect(result.text()).toBe('0')
    await input.setValue('7')
    await buttonAdd.trigger('click')
    expect(result.text()).toBe('-7')

    await input.setValue('1')
    await buttonAdd.trigger('click')
    await buttonAdd.trigger('click')
    await buttonAdd.trigger('click')
    expect(result.text()).toBe('-10')
  })
})
