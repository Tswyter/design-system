/**
 * label
 * helpText
 * disclaimerText
 * errorText
 */

interface IStorybookControl {
  name: string;
  defaultValue?: string | number;
  control: ITextControl | ISelectControl;
  options?: string[];
}

interface ITextControl {
  type: string;
}

interface ISelectControl {
  type: 'inline-radio', 'select';
  labels: {
    [key: string]: any
  };
}

interface IInputWrapperArgs {
  label: IStorybookControl;
  helpText: IStorybookControl;
  disclaimerText: IStorybookControl;
  errorText: IStorybookControl;
}

const inputWrapperArgs: IInputWrapperArgs = {
  label: {
    name: 'Label',
    control: {
      type: 'text',
    },
  },
  helpText: {
    name: 'Help Text',
    control: {
      type: 'text'
    }
  },
  disclaimerText: {
    name: 'Disclaimer Text',
    control: {
      type: 'text'
    }
  },
  errorText: {
    name: 'Error Text',
    control: {
      type: 'text'
    }
  }
};

export default inputWrapperArgs;