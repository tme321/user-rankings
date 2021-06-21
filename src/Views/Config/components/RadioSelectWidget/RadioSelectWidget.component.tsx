import './RadioSelectWidget.css';
import { RadioSelectWidgetProps } from './RadioSelectWidget.props';

export function RadioSelectWidget({id, groupName, label, content:myContent}: RadioSelectWidgetProps) {
    return (
        <div className="radio-select-widget">
            <div>
                <input type="radio" id={`rsw-${id}`} name={groupName}/>
                <label htmlFor={`rsw-${id}`}>{label}</label>
            </div>
            {myContent}
        </div>
    );
}

/*
*/