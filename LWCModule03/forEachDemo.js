import { LightningElement,track,wire } from 'lwc';

const columns = [
    { label: 'Index', fieldName: 'index' },
    { label: 'Id', fieldName: 'Id', type: 'text' },
    { label: 'Name', fieldName: 'name', type: 'text' },
    { label: 'Email', fieldName: 'email', type: 'email' },
];

export default class ForEachDemo extends LightningElement {

    
    @track columns = columns;
    
    @track contacts = [
        {
            Id: 'C1',
            Name: 'John Abraham',
            Email: 'ja@gmail.com',
        },
        {
            Id: 'C2',
            Name: 'Brad Pitt',
            Email: 'bpitt@gmail.com',
        },
        {
            Id: 'C3',
            Name: 'Angelina Jolie',
            Email: 'angelj@gmail.com',
        },
        {
            Id: 'C4',
            Name: 'Peter Parker',
            Email: 'spiderman@marvelcomics.com',
        },    ];
}
