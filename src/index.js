import { BAlert as FcsAlert } from 'bootstrap-vue'
import { BBadge as FcsBadge } from 'bootstrap-vue'
import { BBreadcrumb as FcsBreadcrumb } from 'bootstrap-vue'
import { BBreadcrumbItem as FcsBreadcrumbItem } from 'bootstrap-vue'
import { BButton as FcsButton } from 'bootstrap-vue'
import { BButtonClose as FcsButtonClose } from 'bootstrap-vue'
import { BButtonGroup as FcsButtonGroup } from 'bootstrap-vue'
import { BButtonToolbar as FcsButtonToolbar } from 'bootstrap-vue'
import { BCard as FcsCard } from 'bootstrap-vue'
import { BCardBody as FcsCardBody } from 'bootstrap-vue'
import { BCardFooter as FcsCardFooter } from 'bootstrap-vue'
import { BCardGroup as FcsCardGroup } from 'bootstrap-vue'
import { BCardHeader as FcsCardHeader } from 'bootstrap-vue'
import { BCardImg as FcsCardImg } from 'bootstrap-vue'
import { BCardImgLazy as FcsCardImgLazy } from 'bootstrap-vue'
import { BCardSubTitle as FcsCardSubTitle } from 'bootstrap-vue'
import { BCardText as FcsCardText } from 'bootstrap-vue'
import { BCardTitle as FcsCardTitle } from 'bootstrap-vue'
import { BCarousel as FcsCarousel } from 'bootstrap-vue'
import { BCarouselSlide as FcsCarouselSlide } from 'bootstrap-vue'
import { BCollapse as FcsCollapse } from 'bootstrap-vue'
import { BDropdown as FcsDropdown } from 'bootstrap-vue'
import { BDropdownItem as FcsDropdownItem } from 'bootstrap-vue'
import { BDropdownItemButton as FcsDropdownItemButton } from 'bootstrap-vue'
import { BDropdownDivider as FcsDropdownDivider } from 'bootstrap-vue'
import { BDropdownForm as FcsDropdownForm } from 'bootstrap-vue'
import { BDropdownGroup as FcsDropdownGroup } from 'bootstrap-vue'
import { BDropdownHeader as FcsDropdownHeader } from 'bootstrap-vue'
import { BDropdownText as FcsDropdownText } from 'bootstrap-vue'
import { BEmbed as FcsEmbed } from 'bootstrap-vue'
import { BForm as FcsForm } from 'bootstrap-vue'
import { BFormDatalist as FcsFormDatalist } from 'bootstrap-vue'
import { BFormText as FcsFormText } from 'bootstrap-vue'
import { BFormInvalidFeedback as FcsFormInvalidFeedback } from 'bootstrap-vue'
import { BFormValidFeedback as FcsFormValidFeedback } from 'bootstrap-vue'
import { BFormCheckbox as FcsFormCheckbox } from 'bootstrap-vue'
import { BFormCheckboxGroup as FcsFormCheckboxGroup } from 'bootstrap-vue'
import { BFormFile as FcsFormFile } from 'bootstrap-vue'
import { BFormGroup as FcsFormGroup } from 'bootstrap-vue'
import { BFormInput as FcsFormInput } from 'bootstrap-vue'
import { BFormRadio as FcsFormRadio } from 'bootstrap-vue'
import { BFormRadioGroup as FcsFormRadioGroup } from 'bootstrap-vue'
import { BFormSelect as FcsFormSelect } from 'bootstrap-vue'
import { BFormTextarea as FcsFormTextarea } from 'bootstrap-vue'
import { BImg as FcsImg } from 'bootstrap-vue'
import { BImgLazy as FcsImgLazy } from 'bootstrap-vue'
import { BInputGroup as FcsInputGroup } from 'bootstrap-vue'
import { BInputGroupAddon as FcsInputGroupAddon } from 'bootstrap-vue'
import { BInputGroupAppend as FcsInputGroupAppend } from 'bootstrap-vue'
import { BInputGroupPrepend as FcsInputGroupPrepend } from 'bootstrap-vue'
import { BInputGroupText as FcsInputGroupText } from 'bootstrap-vue'
import { BJumbotron as FcsJumbotron } from 'bootstrap-vue'
import { BContainer as FcsContainer } from 'bootstrap-vue'
import { BRow as FcsRow } from 'bootstrap-vue'
import { BCol as FcsCol } from 'bootstrap-vue'
import { BFormRow as FcsFormRow } from 'bootstrap-vue'
import { BLink as FcsLink } from 'bootstrap-vue'
import { BListGroup as FcsListGroup } from 'bootstrap-vue'
import { BListGroupItem as FcsListGroupItem } from 'bootstrap-vue'
import { BMedia as FcsMedia } from 'bootstrap-vue'
import { BMediaAside as FcsMediaAside } from 'bootstrap-vue'
import { BMediaBody as FcsMediaBody } from 'bootstrap-vue'
import { BModal as FcsModal } from 'bootstrap-vue'
import { BNav as FcsNav } from 'bootstrap-vue'
import { BNavForm as FcsNavForm } from 'bootstrap-vue'
import { BNavItem as FcsNavItem } from 'bootstrap-vue'
import { BNavItemDropdown as FcsNavItemDropdown } from 'bootstrap-vue'
import { BNavText as FcsNavText } from 'bootstrap-vue'
import { BNavbar as FcsNavbar } from 'bootstrap-vue'
import { BNavbarBrand as FcsNavbarBrand } from 'bootstrap-vue'
import { BNavbarNav as FcsNavbarNav } from 'bootstrap-vue'
import { BNavbarToggle as FcsNavbarToggle } from 'bootstrap-vue'
import { BPagination as FcsPagination } from 'bootstrap-vue'
import { BPaginationNav as FcsPaginationNav } from 'bootstrap-vue'
import { BPopover as FcsPopover } from 'bootstrap-vue'
import { BProgress as FcsProgress } from 'bootstrap-vue'
import { BProgressBar as FcsProgressBar } from 'bootstrap-vue'
import { BSpinner as FcsSpinner } from 'bootstrap-vue'
import { BTable as FcsTable } from 'bootstrap-vue'
import { BTableLite as FcsTableLite } from 'bootstrap-vue'
import { BTabs as FcsTabs } from 'bootstrap-vue'
import { BTab as FcsTab } from 'bootstrap-vue'
import { BToast as FcsToast } from 'bootstrap-vue'
import { BToaster as FcsToaster } from 'bootstrap-vue'
import { BTooltip as FcsTooltip } from 'bootstrap-vue'


/* Directives */
import { VBModal as FcsModalDirective } from 'bootstrap-vue'
import { VBPopover as FcsPopoverDirective } from 'bootstrap-vue'
import { VBScrollspy as FcsScrollspyDirective } from 'bootstrap-vue'
import { VBToggle as FcsToggleDirective } from 'bootstrap-vue'
import { VBTooltip as FcsTooltipDirective } from 'bootstrap-vue'

export default {
  install (Vue, options) {
    Vue.component('fcs-alert', FcsAlert)
    Vue.component('fcs-badge', FcsBadge)
    Vue.component('fcs-breadcrumb', FcsBreadcrumb)
    Vue.component('fcs-breadcrumb-item', FcsBreadcrumbItem)
    Vue.component('fcs-button', FcsButton)
    Vue.component('fcs-button-close', FcsButtonClose)
    Vue.component('fcs-button-group', FcsButtonGroup)
    Vue.component('fcs-button-toolbar', FcsButtonToolbar)
    Vue.component('fcs-card', FcsCard)
    Vue.component('fcs-card-body', FcsCardBody)
    Vue.component('fcs-card-footer', FcsCardFooter)
    Vue.component('fcs-card-group', FcsCardGroup)
    Vue.component('fcs-card-header', FcsCardHeader)
    Vue.component('fcs-card-img', FcsCardImg)
    Vue.component('fcs-card-img-lazy', FcsCardImgLazy)
    Vue.component('fcs-card-sub-title', FcsCardSubTitle)
    Vue.component('fcs-card-text', FcsCardText)
    Vue.component('fcs-card-title', FcsCardTitle)
    Vue.component('fcs-carousel', FcsCarousel)
    Vue.component('fcs-carousel-slide', FcsCarouselSlide)
    Vue.component('fcs-collapse', FcsCollapse)
    Vue.component('fcs-dropdown', FcsDropdown)
    Vue.component('fcs-dropdown-item', FcsDropdownItem)
    Vue.component('fcs-dropdown-item-button', FcsDropdownItemButton)
    Vue.component('fcs-dropdown-divider', FcsDropdownDivider)
    Vue.component('fcs-dropdown-form', FcsDropdownForm)
    Vue.component('fcs-dropdown-group', FcsDropdownGroup)
    Vue.component('fcs-dropdown-header', FcsDropdownHeader)
    Vue.component('fcs-dropdown-text', FcsDropdownText)
    Vue.component('fcs-embed', FcsEmbed)
    Vue.component('fcs-form', FcsForm)
    Vue.component('fcs-form-datalist', FcsFormDatalist)
    Vue.component('fcs-form-text', FcsFormText)
    Vue.component('fcs-form-invalid-feedback', FcsFormInvalidFeedback)
    Vue.component('fcs-form-valid-feedback', FcsFormValidFeedback)
    Vue.component('fcs-form-checkbox', FcsFormCheckbox)
    Vue.component('fcs-form-checkbox-group', FcsFormCheckboxGroup)
    Vue.component('fcs-form-file', FcsFormFile)
    Vue.component('fcs-form-group', FcsFormGroup)
    Vue.component('fcs-form-input', FcsFormInput)
    Vue.component('fcs-form-radio', FcsFormRadio)
    Vue.component('fcs-form-radio-group', FcsFormRadioGroup)
    Vue.component('fcs-form-select', FcsFormSelect)
    Vue.component('fcs-form-textarea', FcsFormTextarea)
    Vue.component('fcs-img', FcsImg)
    Vue.component('fcs-img-lazy', FcsImgLazy)
    Vue.component('fcs-input-group', FcsInputGroup)
    Vue.component('fcs-input-group-addon', FcsInputGroupAddon)
    Vue.component('fcs-input-group-append', FcsInputGroupAppend)
    Vue.component('fcs-input-group-prepend', FcsInputGroupPrepend)
    Vue.component('fcs-input-group-text', FcsInputGroupText)
    Vue.component('fcs-jumbotron', FcsJumbotron)
    Vue.component('fcs-container', FcsContainer)
    Vue.component('fcs-row', FcsRow)
    Vue.component('fcs-col', FcsCol)
    Vue.component('fcs-form-row', FcsFormRow)
    Vue.component('fcs-link', FcsLink)
    Vue.component('fcs-list-group', FcsListGroup)
    Vue.component('fcs-list-group-item', FcsListGroupItem)
    Vue.component('fcs-media', FcsMedia)
    Vue.component('fcs-media-aside', FcsMediaAside)
    Vue.component('fcs-media-body', FcsMediaBody)
    Vue.component('fcs-modal', FcsModal)
    Vue.component('fcs-nav', FcsNav)
    Vue.component('fcs-nav-form', FcsNavForm)
    Vue.component('fcs-nav-item', FcsNavItem)
    Vue.component('fcs-nav-item-dropdown', FcsNavItemDropdown)
    Vue.component('fcs-nav-text', FcsNavText)
    Vue.component('fcs-navbar', FcsNavbar)
    Vue.component('fcs-navbar-brand', FcsNavbarBrand)
    Vue.component('fcs-navbar-nav', FcsNavbarNav)
    Vue.component('fcs-navbar-toggle', FcsNavbarToggle)
    Vue.component('fcs-pagination', FcsPagination)
    Vue.component('fcs-pagination-nav', FcsPaginationNav)
    Vue.component('fcs-popover', FcsPopover)
    Vue.component('fcs-progress', FcsProgress)
    Vue.component('fcs-progress-bar', FcsProgressBar)
    Vue.component('fcs-spinner', FcsSpinner)
    Vue.component('fcs-table', FcsTable)
    Vue.component('fcs-table-lite', FcsTableLite)
    Vue.component('fcs-tabs', FcsTabs)
    Vue.component('fcs-tab', FcsTab)
    Vue.component('fcs-toast', FcsToast)
    Vue.component('fcs-toaster', FcsToaster)
    Vue.component('fcs-tooltip', FcsTooltip)

    Vue.directive('fcs-modal', FcsModalDirective)
    Vue.directive('fcs-popover', FcsPopoverDirective)
    Vue.directive('fcs-scrollspy', FcsScrollspyDirective)
    Vue.directive('fcs-toggle', FcsToggleDirective)
    Vue.directive('fcs-tooltip', FcsTooltipDirective)
  }
}

export {
  FcsAlert,
  FcsBadge,
  FcsBreadcrumb,
  FcsBreadcrumbItem,
  FcsButton,
  FcsButtonClose,
  FcsButtonGroup,
  FcsButtonToolbar,
  FcsCard,
  FcsCardBody,
  FcsCardFooter,
  FcsCardGroup,
  FcsCardHeader,
  FcsCardImg,
  FcsCardImgLazy,
  FcsCardSubTitle,
  FcsCardText,
  FcsCardTitle,
  FcsCarousel,
  FcsCarouselSlide,
  FcsCollapse,
  FcsDropdown,
  FcsDropdownItem,
  FcsDropdownItemButton,
  FcsDropdownDivider,
  FcsDropdownForm,
  FcsDropdownGroup,
  FcsDropdownHeader,
  FcsDropdownText,
  FcsEmbed,
  FcsForm,
  FcsFormDatalist,
  FcsFormText,
  FcsFormInvalidFeedback,
  FcsFormValidFeedback,
  FcsFormCheckbox,
  FcsFormCheckboxGroup,
  FcsFormFile,
  FcsFormGroup,
  FcsFormInput,
  FcsFormRadio,
  FcsFormRadioGroup,
  FcsFormSelect,
  FcsFormTextarea,
  FcsImg,
  FcsImgLazy,
  FcsInputGroup,
  FcsInputGroupAddon,
  FcsInputGroupAppend,
  FcsInputGroupPrepend,
  FcsInputGroupText,
  FcsJumbotron,
  FcsContainer,
  FcsRow,
  FcsCol,
  FcsFormRow,
  FcsLink,
  FcsListGroup,
  FcsListGroupItem,
  FcsMedia,
  FcsMediaAside,
  FcsMediaBody,
  FcsModal,
  FcsNav,
  FcsNavForm,
  FcsNavItem,
  FcsNavItemDropdown,
  FcsNavText,
  FcsNavbar,
  FcsNavbarBrand,
  FcsNavbarNav,
  FcsNavbarToggle,
  FcsPagination,
  FcsPaginationNav,
  FcsPopover,
  FcsProgress,
  FcsProgressBar,
  FcsSpinner,
  FcsTable,
  FcsTableLite,
  FcsTabs,
  FcsTab,
  FcsToast,
  FcsToaster,
  FcsTooltip,
  FcsModalDirective,
  FcsPopoverDirective,
  FcsScrollspyDirective,
  FcsToggleDirective,
  FcsTooltipDirective
}