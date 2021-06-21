import { RadioSelectWidget } from "../RadioSelectWidget/RadioSelectWidget.component";
import { RadioSelectGroupProps } from "./RadioSelectGroup.props";

export function RadioSelectGroup(props: RadioSelectGroupProps) {
    const widgets = props.items.map((item,index)=>
        <RadioSelectWidget
            key={index} 
            groupName={props.groupName} 
            content={item.content}
            label={item.label} 
            id={index} />);
    
    return (
        <div>
            {widgets}
        </div>
    );
}
