import { LightningElement, api } from 'lwc';

export default class NzDatatableBetterFilter extends LightningElement {
    opened = false;

    openOrClose(){
        this.opened = !this.opened;
    }

    get closedCssStyle(){
        return `height: 100%;width: ${this.closedWidthSize}px; background-color: grey;`;
    }

    get closedWidthSize(){
        return ( window.innerWidth * 2 ) / 100;
    }

}