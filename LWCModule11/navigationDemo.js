import { LightningElement, api,track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName; 
    showAccount = false;
    showContact = false;
    showOpportunity = false;
    //to track the object from the picklist
    @track value = '';
    
   // picklist
    get options() {
        return [
            { label: 'Account', value: 'Account' },
            { label: 'Contact', value: 'Contact' },
            { label: 'Opportunity', value: 'Opportunity' },
        ];
    }

    // track the object selected from the picklst
    handleChange(event) {
        this.value = event.detail.value;
        console.log(this.value);
       if(this.value ==='Account'){
            this.showAccount = false;
            this.showContact = false;
            this.showOpportunity = false;

        }
        else if(this.value ==='Contact'){
            this.showContact = false;
            this.showAccount = false;
            this.showOpportunity = false;

        }
        else if(this.value ==='Opportunity'){
            this.showOpportunity = false;
            this.showContact = false;
            this.showAccount = false;
        }
    }

    // based on the value from the picklist will display the quick create form.
    handleQuickCreate(event){
        if(this.value ==='Account'){
            this.showAccount = true;
            this.showContact = false;
            this.showOpportunity = false;

        }
        else if(this.value ==='Contact'){
            this.showContact = true;
            this.showAccount = false;
            this.showOpportunity = false;

        }
        else if(this.value ==='Opportunity'){
            this.showOpportunity = true;
            this.showContact = false;
            this.showAccount = false;
        }
    }

    //Navigate to the record page based on the object
    handleNewCreate(event){
        //this.valueQuickCreate = event.detail.value;
        if(this.value ==='Account'){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                },
                /*state: {
                    defaultFieldValues: defaultValues
                }*/
            });

        }
        else if(this.value ==='Contact'){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                },
            });

        }
        else if(this.value ==='Opportunity'){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                },
            });
        }
    }
    
    /*
    *Reset the fields on save.
    *Reset the fields on Cancel
    * */
      handleAccSuccess(event){
        const inputFields = this.template.querySelectorAll(
            '.accnt');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
      }

     handleConSuccess(event){
        const inputFields = this.template.querySelectorAll(
            '.cont');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }

     handleOpptSuccess(event){
        const inputFields = this.template.querySelectorAll(
            '.oppty'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }

     }
     
     //decides the object to perform the insert.
     handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        name = event.target.name;

        //select the account fields from the record page.
        if( name == "saveAccount"){
            this.template.querySelector('.accnt').submit(fields);
        }
        //select the contact fields from the record page.
        else if(name == "saveContact"){
            this.template.querySelector('.cont').submit(fields);
        }
        //select the opportunity fields from the record page.
        else if(name == "saveOppty"){
            this.template.querySelector('.oppty').submit(fields); 
        }
     }

}
