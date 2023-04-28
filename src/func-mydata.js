import React from 'react'

export function MyAbout(){
        return (
            <div style={{textAlign: 'center',color: 'pink'}}> 
                <h1>ข้อมูลส่วนตัว</h1>
                <br></br><br/>
            </div>
        )
    }
export function MyImage(){
    return (
        <div style={{textAlign: 'center'}}>
        <img src="./images/3.jpg" width="20%"/>
        </div>
    )
}
export function MyData(){
    return (
        <div style={{textAlign: 'center'}}> 
            ชื่อ-สกุล: พรรณภร แสงทองไทย <br/>
            ชื่อเล่น: ฟิล์ม<br/>
            ชั้น: DT26521N  เลขที่ 13<br/>
            แผนก: บริหารธุรกิจและเทคโนโลยีสารสนเทศ<br/>
            สาขา: เทคโนโลยีธุรกิจดิจิทัล<br/>



        </div>
    )
}