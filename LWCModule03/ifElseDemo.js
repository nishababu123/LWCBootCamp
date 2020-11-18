import { LightningElement , track } from 'lwc';
import IMAGE_JERRY from '@salesforce/resourceUrl/JERRY';//To include static resource
import IMAGE_TOM from '@salesforce/resourceUrl/TOM';

export default class IfElseDemo extends LightningElement {

    imgJerryUrl = IMAGE_JERRY;
    imgTOMUrl = IMAGE_TOM;

    @track clickedButtonLabel = 'Show Tom';  
    @track showTom = false; 
    @track  image = IMAGE_JERRY;

    
    handleClick(event) {  
        const label = event.target.label;  
  
        if ( label === 'Show Tom' ) {  
  
            this.clickedButtonLabel = 'Show Jerry';  
            this.showTom = true;
            this.image =  IMAGE_TOM;
  
        } else if  ( label === 'Show Jerry' ) {  
              
            this.clickedButtonLabel = 'Show Tom';  
            this.showTom = false; 
            this.image = IMAGE_JERRY; 
  
        }  

    }

}