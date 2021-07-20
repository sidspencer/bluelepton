import { LitElement, html, css } from '../node_modules/lit/index.js';
import { property, customElement } from '../node_modules/lit/decorators.js';


/**
 * Wrapper for the audio-track file-chooser.
 */
@customElement('audio-file-chooser')
export class AudioFileChooser extends LitElement {
  static styles = css`
    input[type="file"] {
      display: inline-block;
      width: 27em;
      height: 1.5em;
      padding: 0.5em;
      margin-left: 2em;

      color: magenta;
      background-color: lime;
    }

    label {
      background-color: black;
      color: lime;
      padding: 0.5em;
    }

    div {
      margin: 1em;
      padding: 1.5em;
      border: 1px dashed lime;
      width: 80vw;
    }
  `;

  @property()
  domId: string = '';

  @property()
  name: string = 'afc';

  @property()
  label: string = 'audio track:';

  @property()
  altText: string = 'audio file chooser';

  @property()
  filePath: string = '';


  /**
   * Constructor for <audio-file-chooser>
   */
  constructor() {
    super();
  }


  /**
   * Make a unique domId. Used if we weren't passed one.
   */
  getUqDomId(): string {
    return `${this.name}_${(new Date()).getTime()}`;
  }


  /**
   * Handler for when the filePath is changed by the user.
   *
   * TODO: read bytes of audio file so we can mess with it.
   */
  onChangeFilePath(e: Event): void {
    let newPath = (e.target as HTMLInputElement).value;
    console.log(`File path to: ${newPath}`);

    /*
      TODO: All the reading of bytes. just a port from music-shifter....
    */
  }


  /**
   * Draw the html5 for the audio-file-chooser.
   */
  render() {
    this.domId = (!!this.domId ? this.domId : this.getUqDomId());

    return html`
      <div id="${this.domId}">
        <label for="${this.name}">${this.label}</label>
        <input type="file" name="${this.name}" alt="${this.altText}" value="${this.filePath}" @change="${this.onChangeFilePath}" />
      </div>
    `;
  }
}
