import { config } from '@vue/test-utils';

const NSElements = [
    // Layouts
    'AbsoluteLayout',
    'DockLayout',
    'FlexboxLayout',
    'GridLayout',
    'StackLayout',
    'WrapLayout',
    // ActionBar,
    'ActionBar',
    'ActionItem',
    'NavigationButton',
    // Components
    'ActivityIndicator',
    'Button',
    'DatePicker',
    'Frame',
    'HtmlView',
    'Image',
    'Label',
    'ListPicker',
    'ListView',
    'Page',
    'Placeholder',
    'Progress',
    'ScrollView',
    'SearchBar',
    'SegmentedBar',
    'Slider',
    'Switch',
    'TabView',
    'TextField',
    'TextView',
    'TimePicker',
    'WebView',
    // Dialogs
    'ActionDialog',
    'AlertDialog',
    'ConfirmDialog',
    'LoginDialog',
    'PromptDialog'
];

NSElements.forEach(element=> {
    config.stubs[element] = true;
})