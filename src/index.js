import AmAlert from './Alert'
import AmButton from './Button'
import AmCheckbox from './Checkbox'
import AmCheckboxGroup from './CheckboxGroup'
import AmCol from './Col'
import AmCollapse from './Collapse'
import AmCollapseSet from './CollapseSet'
import AmDatePicker from './DatePicker'
import AmDropdown from './Dropdown'
import AmFileSelect from './FileSelect'
import AmForm from './Form'
import AmFormItem from './FormItem'
import AmInput from './Input'
import AmInputMultiple from './InputMultiple'
import AmLoading from './Loading'
import AmMessage from './Message'
import AmModal from './Modal'
import AmNav from './Nav'
import AmNavItem from './NavItem'
import AmOption from './Option'
import AmOptionGroup from './OptionGroup'
import AmPagination from './Pagination'
import AmRadio from './Radio'
import AmRadioGroup from './RadioGroup'
import AmRow from './Row'
import AmSelect from './Select'
import AmSubNav from './SubNav'
import AmTab from './Tab'
import AmTable from './Table'
import AmTableColumn from './TableColumn'
import AmTabSet from './TabSet'
import AmTopbar from './Topbar'

const Components = [
  AmAlert,
  AmButton,
  AmCheckbox,
  AmCheckboxGroup,
  AmCol,
  AmCollapse,
  AmCollapseSet,
  AmDatePicker,
  AmDropdown,
  AmFileSelect,
  AmForm,
  AmFormItem,
  AmInput,
  AmInputMultiple,
  AmLoading,
  AmMessage,
  AmModal,
  AmNav,
  AmNavItem,
  AmOption,
  AmOptionGroup,
  AmPagination,
  AmRadio,
  AmRadioGroup,
  AmRow,
  AmSelect,
  AmSubNav,
  AmTab,
  AmTable,
  AmTableColumn,
  AmTabSet,
  AmTopbar,
]

const install = function (Vue) {
  if (install.installed) {
    return
  }
  for (const component of Components) {
    Vue.component(component.name, component)
  }
}

const Amazevue = {
  install,
  AmAlert,
  AmButton,
  AmCheckbox,
  AmCheckboxGroup,
  AmCol,
  AmCollapse,
  AmCollapseSet,
  AmDatePicker,
  AmDropdown,
  AmFileSelect,
  AmForm,
  AmFormItem,
  AmInput,
  AmInputMultiple,
  AmLoading,
  AmMessage,
  AmModal,
  AmNav,
  AmNavItem,
  AmOption,
  AmOptionGroup,
  AmPagination,
  AmRadio,
  AmRadioGroup,
  AmRow,
  AmSelect,
  AmSubNav,
  AmTab,
  AmTable,
  AmTableColumn,
  AmTabSet,
  AmTopbar,
}

export default Amazevue
