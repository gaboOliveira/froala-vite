import 'froala-editor/js/plugins/align.min';
import 'froala-editor/js/plugins/char_counter.min';
import 'froala-editor/js/plugins/inline_style.min';
import 'froala-editor/css/themes/dark.css';
import 'froala-editor/js/plugins/paragraph_style.min';
import 'froala-editor/js/plugins/colors.min';
import 'froala-editor/js/plugins/table.min';
import 'froala-editor/js/plugins/image.min';
// import './image_min';
import 'froala-editor/js/plugins/video.min';
import 'froala-editor/js/plugins/link.min';
import 'froala-editor/js/plugins/print.min';
import 'froala-editor/js/plugins/draggable.min';
import 'froala-editor/js/plugins/word_paste.min';
import 'froala-editor/js/plugins/lists.min';
import 'froala-editor/js/plugins/code_view.min';
import 'froala-editor/js/languages/nl';
import './customFroalaButtons';
// import $ from 'jquery';


const $window: any = window;
// @ts-ignore
// $window.$ = $;
// @ts-ignore
// $window.jQuery = $;
// @ts-ignore
const froalaEditor = await import('froala-editor');
$window.FroalaEditor = froalaEditor;
await import('@wiris/mathtype-froala3');
// import('froala-editor').then(edt => window.FroalaEditor = edt);
// window.FroalaEditor = require('froala-editor');
// eslint-disable-next-line
// import('@wiris/mathtype-froala3').then((a: any) => console.log(a, 'test'))
// require('@wiris/mathtype-froala3');
// console.log(require);

const switchImageActionsActive = (self: any, activate: boolean) => {
  const imageToolBar = self.$box[0].querySelector('[data-name^="moreMisc"]');
  var toolBarButtons = imageToolBar?.querySelectorAll('.fr-toolbar .fr-command.fr-btn');
  if (toolBarButtons) {
    if (activate) {
      for (let i = 0; i < toolBarButtons.length; i++) {
        toolBarButtons[i].classList.remove('fr-disabled');
        toolBarButtons[i].classList.remove('fr-no-refresh');
        toolBarButtons[i].classList.remove('fr-hidden');
      }
    } else {
      for (let i = 0; i < toolBarButtons.length; i++) {
        toolBarButtons[i].classList.add('fr-disabled');
        toolBarButtons[i].classList.add('fr-no-refresh');
      }
    }
  }
};

export const baseConfig = (readOnly: boolean, inline = false) => ({
  // License
  key: "3AC6eE4C4E4D4H3J3C-22VKOG1FGULVKHXDXNDXc2a1Kd1SNdF3H3A8A5D4F4C3E3C2A10==",

  // Toolbar
  toolbarInline: inline,
  toolbarSticky: true,
  // toolbarStickyOffset: 300,
  // scrollableContainer: '#private_page_wrapper',
  toolbarVisibleWithoutSelection: false,

  // Char counter
  charCounterCount: false,

  // Editor
  // heightMin: '100%',
  htmlAllowedTags: ['.*'],
  htmlAllowedAttrs: ['.*'],

  // Language
  language: 'nl',

  // InitOnClick -> performance optimization when using multiple froala instances on a page
  initOnClick: inline,

  // Remove 'Powered by Froala' message
  attribution: false,

  // Events
  events: {
    initialized: function() {
      const $this: any = this;

      // initialize image actions buttons as disabled
      switchImageActionsActive($this, false);

      // Hide more misc button
      const imageToolBarButton = $this.$box[0].querySelector('[id^="moreMisc"]');
      imageToolBarButton?.classList.add('fr-hidden'); //.setAttribute('hidden', true);

      // remove imageToolbar relative positioning
      const imageToolBar = $this.$box[0].querySelector('[data-name^="moreMisc"]');
      imageToolBar?.classList.remove('position-relative');

      $this.popups.onShow = (popupId: any) => {
        if (popupId === 'image.edit') {
          const currentPopup = $this.popups.get(popupId);
          currentPopup[0].classList.remove('fr-popup');
          // currentPopup[0].classList.add('fr-hidden');
        }
      };

      if (readOnly) {
        const frViews = document.getElementsByClassName('fr-view');
        // console.log('FR-VIEWS', frViews);
        if (frViews) {
          for (let i = 0; i < frViews.length; i++) {
            frViews[i].setAttribute('contenteditable', 'false');
          }
        }
      }
    },

    'codeView.update': function() {
      /* Do something here.
       this is the editor instance.
      const codeViewArea = document.getElementById('eg-previewer');
      if (codeViewArea) {
        codeViewArea.textContent = this.codeview.get();
      }*/
    },

    'popups.hide.image.edit': function() {
      const $this: any = this;
      switchImageActionsActive($this, false);
      const imageToolBar = $this.$box[0].querySelector('[data-name^="moreMisc"]');
      imageToolBar?.classList.remove('fr-expanded');
    },

    'popups.show.image.edit': function() {
      const $this: any = this;
      const imageToolBar = $this.$box[0].querySelector('[data-name^="moreMisc"]');
      switchImageActionsActive($this, true);
      imageToolBar?.classList.add('fr-expanded');
    },
    'paste.beforeCleanup': (pastedValue: string) => {
      const removeMeta = pastedValue.replace("<meta charset='utf-8'>", '');
      // Remove all ocurrences of 'backgroundColor: ..... ;'
      const removeMetaWithoutBackground = removeMeta.replace(/background-color:[^;]*;/g, '');
      return removeMetaWithoutBackground; // aggregate;
    },
  },
});

const config = (translations: any, isAuthor: boolean, readOnly: boolean = false) => {
  const paragraphStyles: Record<string, string> = {
    title: 'Title',
    subtitle: 'Subtitle',
    content: 'Normal',
    emphasis: 'Emphasis',
    highlight: `${translations.highlight}`,

    // Compound
    'aside left title emphasis': 'Title numbering',
    'aside left subtitle emphasis': 'Subtitle numbering',
  };

  const translationKeys: string[] = Object.keys(translations.blocks);
  for (let key in translationKeys) {
    const titleKey: string = `${translationKeys[key]} ${
      translations.blocks[translationKeys[key]].color
    } box-title`;
    const contentKey: string = `${translationKeys[key]} ${
      translations.blocks[translationKeys[key]].color
    } box-content`;

    paragraphStyles[titleKey] = `${translations.blocks[translationKeys[key]].title} ${
      translations['title']
    }`;
    paragraphStyles[contentKey] = `${translations.blocks[translationKeys[key]].title} ${
      translations['content']
    }`;
  }

  return {
    ...baseConfig(readOnly),

    toolbarButtons: {
      moreText: { buttons: ['bold', 'italic', 'underline'] },

      moreParagraph: {
        buttons: [
          'paragraphStyle',
          'backgroundColor',
          ...(isAuthor ? ['textColor'] : []),
          'alignLeft',
          'alignCenter',
          'formatOLSimple',
          'alignRight',
          'alignJustify',
          'formatOL',
          'formatUL',
          'wirisEditor',
          'wirisChemistry',
        ],
        buttonsVisible: isAuthor ? 3 : 2,
      },
      moreRich: {
        buttons: [
          'insertTable',
          'insertHR',
          'insertImage',
          // 'insertVideo',
          'insertLink',
          'wirisEditor',
          'wirisChemistry',
          'embed',
          'html', // codeView
        ],
        buttonsVisible: 0,
      },
      moreMisc: {
        buttons: [
          'imageAlign',
          'imageDisplay',
          'imageSize',
          '|',
          'imageReplace',
          'imageRemove',
          '|',
          'imageCaption',
          'imageAlt',
          '|',
          'imageLink',
          'linkOpen',
          'linkEdit',
          'linkRemove',
          'closeEditor',
          'wirisEditor',
          'wirisChemistry',
        ],
        buttonsVisible: 0,
      },
    },

    // Paragraphs
    paragraphStyles: paragraphStyles,
    paragraphMultipleStyles: false,

    // Colors
    colorsBackground: ['#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE'],
    colorsStep: 6,

    // Images
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp', 'svg+xml'],
    imageEditButtons: [
      'imageAlign',
      'imageDisplay',
      'imageSize',
      '|',
      'imageReplace',
      'imageRemove',
      '|',
      'imageCaption',
      'imageAlt',
      '|',
      'imageLink',
      'linkOpen',
      'linkEdit',
      'linkRemove', 'wirisEditor', 'wirisChemistry'
    ],

    // Tables
    tableEditButtons: [
      'tableHeader',
      'tableRemove',
      '|',
      'tableRows',
      'tableColumns',
      'tableStyle',
      '-',
      'tableCells',
      'tableCellBackground',
      'tableCellVerticalAlign',
      'tableCellHorizontalAlign',
      'tableCellStyle',
    ],

    // Links
    linkText: true,

    // Plugin Services
    mathTypeParameters: {
      serviceProviderProperties: {
        URI: "http://localhost:83/integration",
        server: 'php',
      },
    },
  };
};

export type BoxColors = {
  title: {
    foreground: string;
    background: string;
  };
  content: string;
};

export type FroalaThemePaletteIndex =
  | 'yellow'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'lightyellow'
  | 'lightblue';

export type FroalaThemePalette = { [key in FroalaThemePaletteIndex]?: BoxColors };

export type FroalaTheme = {
  palette: FroalaThemePalette;
};
const froalaTheme: FroalaTheme = {
  palette: {
    yellow: {
      title: {
        foreground: '#2e2a28',
        background: '#CEDC2C',
      },
      content: 'rgba(206,220,44,0.2)',
    },
    blue: {
      title: {
        foreground: '#2e2a28',
        background: '#A1C0DE',
      },
      content: 'rgba(51,71,233,0.2)',
    },
    green: {
      title: {
        foreground: '#2e2a28',
        background: '#b0de9f',
      },
      content: 'rgba(176,222,159,0.2)',
    },
    orange: {
      title: {
        foreground: '#FFF',
        background: '#ec6624',
      },
      content: 'rgba(236,102,36,0.2)',
    },
    red: {
      title: {
        foreground: '#FFF',
        background: '#DB8175',
      },
      content: `rgba(219,129,117,0.2)`,
    },
    lightyellow: {
      title: {
        foreground: '#2e2a28',
        background: '#EFED6C',
      },
      content: `rgba(239,237,108,0.2)`,
    },
    lightblue: {
      title: {
        foreground: '#FFF',
        background: '#38d8cf',
      },
      content: `rgba(56,216,207,0.2)`,
    },
  },
};

const htmlAllowedTags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'hr',
  'i',
  'iframe',
  'img',

  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'pre',
  'progress',
  'queue',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'style',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strike',
  'strong',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
];

export { froalaTheme, htmlAllowedTags };
export default config;
