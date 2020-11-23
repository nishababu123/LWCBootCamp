
import { LightningElement, track } from 'lwc';

export default class CalcFull extends LightningElement {
     @track calcResult = 0;
     calcResult1;
     @track calcExpression = '';
     @track  clickedButtonLabel;
    @track previousValue = "";
    @track bolOperatorFlag = 0;

    // @track operatorArray =  ['+','-','*','/'];

    handleClick(event){

        this.clickedButtonLabel = event.target.label;
       
        if(event.target.label === 'CLR' || event.target.label === "="){
        this.calcExpression = '';
        this.calcResult = 0;
        }
        /*else if (operatorArray.contains(this.clickedButtonLabel)) 
        {this.calcExpression = '';
        this.showResult = 'NaN';
        */
            
        if(event.target.label === "+" || event.target.label === "-" || 
            event.target.label === "*" || event.target.label === "/" ){
                this.previousValue = event.target.label;
                this.calcExpression = `${this.calcExpression} ${event.target.label}`;
                this.bolOperatorFlag = 1;
            }
            
           if(event.target.label == 1 || event.target.label == 2 || 
            event.target.label == 3 || event.target.label == 4 || event.target.label == 5 ||
            event.target.label == 6||event.target.label == 7 ||event.target.label == 8 ||
            event.target.label == 0  ||event.target.label == 9){
                this.calcExpression = `${this.calcExpression} ${event.target.label}`;
                this.calcResult = parseInt(event.target.label);
                
            }
        
	else{
            switch(this.previousValue){
                case "+": this.calcResult = parseInt(parseInt(this.calcResult)+parseInt(event.target.label));
                            this.bolOperatorFlag = true;
                            intNumber1 =1;
                            break;
                case "-":  this.calcResult =  parseInt(parseInt( this.calcResult)-parseInt(event.target.label));
                            this.bolOperatorFlag = true
                            intNumber2 =1;
                            break;
                case "*" :  this.calcResult=parseInt(parseInt( this.calcResult)*parseInt(event.target.label));
                            this.bolOperatorFlag = true
                            intNumber3=1;
                            break;
                case "/" : this.calcResult= parseInt(parseInt( this.calcResult)*parseInt(event.target.label));
                            intNumber4 = 1;
                            this.bolOperatorFlag = true
                            break;
                
         
        	}     
        }

    }
     get showResult(){
            return partInt(this.calcResult);
        }
    
    }