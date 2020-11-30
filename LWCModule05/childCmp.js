import { LightningElement, api } from 'lwc';

export default class ChildCmp extends LightningElement {

    // Annoated with @api to make the variables as public to expose it to the parents in the hierarchy.
    @api childnumber = 'Child One';
    @api label = 'Select';
    @api variant = 'success';
    
    /* On click:toggle the label and button variant.
    *custom event 'customclick' is used with the parent click, to get the values from the child.
    *Based on the value of the label from the child component, Selected or Deselected displayed on parent.
    *Composed and bubble used to pass the value to the grand parent throgh parent component.
    */
    handleOnClick(){
        if(this.label==='Select'){
            this.label='Deselect';
            this.variant='destructive';
        }else{
            this.label='Select';
            this.variant='success';
        }
        // Custom event created to pass values from child to parent.
        const childevent = new CustomEvent('customclick',
            {
                bubbles : true,
                composed : true,
                detail:{
                    trackAll:this.label
                }
                
            });
            this.dispatchEvent(childevent);
    }
   
}
