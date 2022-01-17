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
