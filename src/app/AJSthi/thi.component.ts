import {Component, Input} from "@angular/core";
import {ISome} from "../interfaces/thi.interfaces";
import {IPerson} from "../interfaces/gdien.interfaces";

@Component({
    /*ten*/
    selector: 'baithi',
    /*dia chi lay du lieu*/
    templateUrl: './thi.component.html',
    styleUrls: ['./thi.component.css']
})
/*tao ra mot component co class la*/
export class ThiComponent extends Component{
    nav = [
        {
            city:'Rome',
            info:[
                {
                    name:'Marry',
                    title:'Developer',
                    im:'assets/img/ava2.png'
                },
                {
                    name:'John',
                    title:'Developer',
                    im:'assets/img/ava1.png'
                },
                {
                    name:'Miranda',
                    title:'Team Leader',
                    im:'assets/img/ava3.png'
                }
            ]
        },
        {
            city:'Paris',
            info:[
                {
                    name:'Robert King',
                    title:'Team Lead',
                    im:'assets/img/ava1.png'
                },
                {
                    name:'Michael Suyama',
                    title:'Developer',
                    im:'assets/img/ava1.png'
                },
                {
                    name:'Margaret Peacock',
                    title:'Developer',
                    im:'assets/img/ava1.png'
                }
            ]
        },
        {
            city:'London',
            info:[
                {
                    name:'Sam Smith',
                    title:'Developer',
                    im:'assets/img/ava2.png'
                },
                {
                    name:'Mirana',
                    title:'Team Leader',
                    im:'assets/img/ava3.png'
                },
                {
                    name:'Johny',
                    title:'Developer',
                    im:'assets/img/ava1.png'
                }
            ]
        }
    ]

    bt: ISome[] = [
        {title:'Team Lead', name:'Robert King', im:'ava1'},
        {title:'Developer', name:'Michael Suyama', im:'ava2'},
        {title:'Developer', name:'Margaret Peacock', im:'ava3'}
    ]

    handlerClickItem(event:any){
        this.bt=event.info;
    }
}