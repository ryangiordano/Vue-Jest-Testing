import Vue from 'vue'
import { mount } from 'vue-test-utils'
import TestComponent from '@/components/TestComponent/TestComponent.vue'

describe('TestComponent.vue', () => {
  const Constructor = Vue.extend(TestComponent)
  const vm = new Constructor().$mount()
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('These are test cards')
  });
  it('should have x number of cards rendered',()=>{
    expect(vm.$el.querySelectorAll('.index-card').length).toEqual(vm.cards.length);
  });
  it('should set selected card active when its clicked',()=>{
  const wrapper = mount(TestComponent);
    
    wrapper.find('.index-card').trigger('click');
    //Todo----Finish test...
  });
})
