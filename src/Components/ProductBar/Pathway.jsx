import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import {AuditOutlined} from '@ant-design/icons';
import {UserSwitchOutlined} from '@ant-design/icons';
import {CheckOutlined} from '@ant-design/icons';
import {GiftOutlined} from '@ant-design/icons';
import './styles.modules.css'
export default function Pathway() {
  return (
    <>
        <div className="WhiteCover"></div>
        <div className="Pathway">
            <div className="container PathwayContainer">
                <div className='PathWayDiv'>
                    <SearchOutlined />
                    <p>Select Your Product Options</p>
                </div>
                <div className='PathWayDiv'>
                    <AuditOutlined />
                    <p>Request a Quote</p>
                </div>
                <div className='PathWayDiv'>
                    <UserSwitchOutlined />
                    <p>Connect Representative</p>
                </div>
                <div className='PathWayDiv'>
                    <CheckOutlined />
                    <p>Approve the final design</p>
                </div>
                <div className='PathWayDiv'>   
                    <GiftOutlined />
                    <p>Get your product delivered</p>
                </div>
            </div>
        </div>    
    </>
  )
}
