import Vue from 'vue';
import Card from '@/components/TestComponent/Cards/Card.vue';

describe('Card.vue',()=>{
    const Constructor = Vue.extend(Card);
    const vm = new Constructor(
        {
            propsData:{
                card:{
                    title:"Wizecks",
                    details:"What's a pzone"
                }
            }
        }
    ).$mount();
    it('should render the properties its passed to it',()=>{
        expect(vm.card.title).toEqual('Wizecks');
        expect(vm.card.details).toEqual("What's a pzone");
    });
    it('should activate itself when clicked',()=>{
        vm.toggle();
        expect(vm.active).toEqual(true);
        vm.setInactive();
        expect(vm.active).toEqual(false);

    });
    it('should show its contents when active',()=>{
        
    })
})