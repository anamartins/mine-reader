import SimpleButton from '../simple-button/SimpleButton.vue'
import '../../assets/style.css'

export default {
  title: 'Components/Simple Button',
  component: SimpleButton,
  argTypes: {
    label: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

const Template = (args) => ({
  components: { SimpleButton },
  setup() {
    return { args }
  },
  template: '<SimpleButton v-bind="args" />'
})

export const Button = Template.bind({})
Button.args = {
  label: 'Label'
}
