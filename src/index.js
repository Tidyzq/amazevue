import AmButton from './Button'
import AmCheckbox from './Checkbox'
import AmCheckboxGroup from './CheckboxGroup'
import AmCol from './Col'
import AmCollapse from './Collapse'
import AmCollapseSet from './CollapseSet'
import AmDatePicker from './DatePicker'
import AmFileSelect from './FileSelect'
import AmForm from './Form'
import AmFormItem from './FormItem'
import AmInput from './Input'
import AmInputMultiple from './InputMultiple'
import AmModal from './Modal'
import AmOption from './Option'
import AmOptionGroup from './OptionGroup'
import AmPagination from './Pagination'
import AmRadio from './Radio'
import AmRadioGroup from './RadioGroup'
import AmRow from './Row'
import AmSelect from './Select'
import AmTab from './Tab'
import AmTable from './Table'
import AmTableColumn from './TableColumn'
import AmTabSet from './TabSet'

const Components = [
  AmButton,
  AmCheckbox,
  AmCheckboxGroup,
  AmCol,
  AmCollapse,
  AmCollapseSet,
  AmDatePicker,
  AmFileSelect,
  AmForm,
  AmFormItem,
  AmInput,
  AmInputMultiple,
  AmModal,
  AmOption,
  AmOptionGroup,
  AmPagination,
  AmRadio,
  AmRadioGroup,
  AmRow,
  AmSelect,
  AmTab,
  AmTable,
  AmTableColumn,
  AmTabSet
]

const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }
  for (let component of Components) {
    Vue.component(component.name, component)
  }
}

const Amazevue = {
  install,
  AmButton,
  AmCheckbox,
  AmCheckboxGroup,
  AmCol,
  AmCollapse,
  AmCollapseSet,
  AmDatePicker,
  AmFileSelect,
  AmForm,
  AmFormItem,
  AmInput,
  AmInputMultiple,
  AmModal,
  AmOption,
  AmOptionGroup,
  AmPagination,
  AmRadio,
  AmRadioGroup,
  AmRow,
  AmSelect,
  AmTab,
  AmTable,
  AmTableColumn,
  AmTabSet
}

export default Amazevue
