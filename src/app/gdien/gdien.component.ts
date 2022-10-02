import {Component, Input} from "@angular/core";
import {IPerson} from "../interfaces/gdien.interfaces";

@Component({
    /*ten*/
    selector: 'gdien',
    /*dia chi lay du lieu*/
    templateUrl: './gdien.component.html',
    styleUrls: ['./gdien.component.css']
})
/*tao ra mot component co class la*/
export class GdienComponent extends Component{
    person: IPerson = {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'hanoi', phone:1234566, name:"Magaret"};


    gd: IPerson [] = [
        {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'hanoi', phone:1234566, name:"Magaret"},
        {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'HCM', phone:1234566, name:"Laura"},
        {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'HCM', phone:1234566, name:"Robbert"},
        {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'HP', phone:1234566, name:"Albert"},
        {title: 'Sale', date: 10/5/1996, address:'So 8 Ton That Thuyet', city:'Hanoi', phone:1234566, name:"Micharle"},
    ]
    handlerClickItem(event:IPerson){
        this.person=event;
    }
}