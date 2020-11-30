import { api,LightningElement } from 'lwc';

export default class GrandParentCmp extends LightningElement {
    selectedAll=0;
    // reset in parent and child
    handleReset(){
        this.template.querySelector("c-parent-cmp").resetAll();
        this.selectedAll=0;
    }
   // To track the count in grand parent.
    handleChildClick(event){
       if(event.detail.trackAll==='Deselect'){
            this.selectedAll=this.selectedAll+1;
       }
       else{
            this.selectedAll=this.selectedAll-1;
       }
    }
}