import uniqueId from 'lodash/uniqueId';
// @ts-ignore
import FroalaEditor from 'froala-editor';

// Embed popup
FroalaEditor.POPUP_TEMPLATES['embed.popup'] = '[_BUTTONS_][_CUSTOM_LAYER_]';

FroalaEditor.DefineIcon('embed', { NAME: 'embed', SVG_KEY: 'insertEmbed' });

FroalaEditor.PLUGINS.embed = function(editor: any) {
  // Create custom popup.
  function initPopup() {
    const id = uniqueId();
    const buttonsList = ['closeEmbedPopup'];

    const buttons = `<div class="fr-buttons">${editor.button.buildList(buttonsList)}</div>`;
    const custom_layer = `<div
  class="fr-layer fr-active"
  id="fr-embed-layer-${id}"
  data-mouseenter-event-set="true"
>
  <div class="fr-input-line">
    <textarea
      type="text"
      placeholder=""
      tabindex="1"
      aria-required="true"
      rows="5"
      dir="auto"
    ></textarea
    ><label for="fr-video-embed-layer-${id}">Embedded Code</label>
  </div>
  <div class="fr-action-buttons">
    <button
      type="button"
      data-cmd="insertEmbed"
      class="fr-command fr-submit"
      tabindex="2"
      role="button"
    >
      Insert
    </button>
  </div>
</div>
`;

    const template = { buttons, custom_layer };
    return editor.popups.create('embed.popup', template);
  }

  function showPopup() {
    const toolbar = editor.$tb;

    let popup = editor.popups.get('customPlugin.popup');
    if (!popup) popup = initPopup();
    editor.popups.setContainer('embed.popup', toolbar);

    // Set the popup's position.
    const left = toolbar.offset().left + toolbar.outerWidth() / 2;
    const top =
      toolbar.offset().top + (editor.opts.toolbarBottom ? 10 : toolbar.outerHeight() - 10);

    // Show the custom popup.
    editor.popups.show('embed.popup', left, top, toolbar.outerHeight());
  }

  function hidePopup() {
    editor.popups.hide('embed.popup');
  }

  return { showPopup, hidePopup };
};

FroalaEditor.RegisterCommand('embed', {
  title: 'Embed',
  focus: false,
  undo: true,
  refreshAfterCallback: false,
  callback: function() {
    this.embed.showPopup();
  },
});

FroalaEditor.DefineIcon('closeEmbedPopup', { NAME: 'times', SVG_KEY: 'back' });
FroalaEditor.RegisterCommand('closeEmbedPopup', {
  title: 'Close',
  undo: false,
  focus: false,
  callback: function() {
    this.embed.hidePopup();
  },
});

FroalaEditor.RegisterCommand('insertEmbed', {
  callback: function() {
    const value = this.popups
      .get('embed.popup')
      .find('textarea')
      .val();

    this.html.insert(`<p class="embed-wrapper">${value}</p><p></p>`);
    this.embed.hidePopup();
  },
});

FroalaEditor.DefineIcon('closeEditorIcon', { NAME: 'close', SVG_KEY: 'close' });
FroalaEditor.RegisterCommand('closeEditor', {
  title: 'Sluit notitie',
  icon: 'closeEditorIcon',
  undo: false,
  focus: false,
  refreshAfterCallback: false,
});
