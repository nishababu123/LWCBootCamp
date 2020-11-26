import { LightningElement,api,track } from 'lwc';

export default class QuickCreate extends LightningElement {

    @api recordId;
    @api objectApiName; 
     showFields = false;
     showContactFields = false;
     showOpptyFields = false;
   
     //toggle - all  account fields or few fields.
    ViewAllAccountFields() {
        this.showFields = !this.showFields;
    }
    ViewAllContactFields() {
        this.showContactFields = !this.showContactFields;
    }
      ViewAllOpportunityFields() {
        this.showOpptyFields = !this.showOpptyFields;
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