import React, {Component} from 'react'

export default class Calenda extends Component{
    getDate(){
        const dayNames = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthNames = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน',
        'พฤษภาคม','มิถุนายน','กรกกาคม','สิงหาคม','กันยายน','ตุลาคม',
        'พฤศจิกายน','ธันวาคม',]

        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        const dayThai = `วัน${weekDay} ที่ ${day} ${month}  ${year}`
        return dayThai
        /*return 'วัน${weekDate} ที่ ${day} ${month}  ${year}'*/
       }
    render(){
            return <div style={{textAlign:'center'}}>{this.getDate()}</div>
    }
}