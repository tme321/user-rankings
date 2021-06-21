import './ConfigLayout.css'
import { ColorPickerWidget } from '../ColorPickerWidget/ColorPickerWidget.component';
import { DefaultColorsConfig } from '../../../../config/config.state';

export function ConfigLayout() {
    return (
        <div className="layout">
            <h1><span>Configuration</span></h1>
            <div className="colors-container">
                <ColorPickerWidget label="Background Color:" color={DefaultColorsConfig.dark.background}/>
                <ColorPickerWidget label="Accent Color:" color={DefaultColorsConfig.dark.acccent}/>
                <ColorPickerWidget label="Text Color:" color={DefaultColorsConfig.dark.text}/>
                <ColorPickerWidget label="Secondary Text Color:" color={DefaultColorsConfig.dark.altText}/>
            </div>
            <div className="data-container">
                <div className="data-widget">
                    <label>Data Url:</label><input/>
                </div>

            <div className="data-widget">
                <div>
                    <input type="radio" id="title-text" name="contact"/>
                    <label htmlFor="title-text">Title Text:</label>
                </div>
                <input disabled={false}/>
            </div>
            <div className="data-widget">
                <div>
                    <input type="radio" id="title-url" name="contact"/>
                    <label htmlFor="title-url">Title Url:</label>
                </div>
                <input disabled/>
            </div>
            <div className="data-widget">
                <div>
                    <input type="radio" id="header-url" name="contact"/>
                    <label htmlFor="header-url">Header Url:</label>
                </div>
                <input disabled/>
            </div>                                
                
                
            </div>
        </div>
    );
}