import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from 'vue-tailwind/dist/components';

const VueTailwindSettings = {
  "t-select": {
    component: TSelect,
    props: {
      fixedClasses: 'block pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes: 'text-gray-300 placeholder-gray-400 bg-gray-800 border-gray-300 focus:border-blue-500',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
      }
    }
  },
  "t-input": {
    component: TInput,
  },
  "t-button": {
    component: TButton,
  },
  "t-rich-select": {
    component: TRichSelect,
  },
  "t-pagination": {
    component: TPagination,
  },
  "t-tag": {
    component: TTag,
  },
  "t-table": {
    component: TTable,
    props: {
        table: "table-auto w-full",
        thead: "text-xs font-semibold uppercase text-gray-400 bg-gray-800",
        tbody: "text-sm divide-y divide-gray-100"
    },
  },
};

Vue.use(VueTailwind, VueTailwindSettings);
