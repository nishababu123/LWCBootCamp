import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/LookUpRecords.getAccountList';
import getContactList from '@salesforce/apex/LookUpRecords.getContactList';

export default class LookUpRecords extends LightningElement {
    @track searchKey = '';
    @track searchContactKey = '';
    @track accounts;
    @track error;
    @track contacts;
    @track toggle = true;
    @track showSearch = true;


    //@wire(getAccountList, { searchKey: '$searchKey' })
    //accounts;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
        
        getAccountList({searchKey:this.searchKey})
        .then(result => {
            this.accounts = result;
        })
        .catch(error => {
            this.error = error;
        });
    }

    doSearchContacts(event){
        this.showSearch = false;
        this.searchContactKey = event.target.label;
        getContactList({searchKey:this.searchContactKey})
        .then(result => {
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
        });

    }

    resetSearch(event){

        this.searchKey ='';
        this.searchContactKey = '';
        this.showSearch = true;

    }
}