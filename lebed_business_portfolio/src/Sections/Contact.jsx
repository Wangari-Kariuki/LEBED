import React from 'react'
import phone_icon from '../images/phone_icon.png'
import email_icon from '../images/email_icon.png'
import location_icon from '../images/location_icon.png'
import message_icon from '../images/msg_icon.png'
export default function ContactSection() {
  return (
    <div className="contact">
   
    <div className="contact-col">
<ul>
          <li>www.lebedhealthways.com</li>
        <li><img src = {email_icon} alt = ""/> contacts@datashield.</li>
        <li><img src = {phone_icon} alt = ""/> +254 113188250</li>
        <li><img src = {location_icon} alt = ""/>009300 Ongata Rongai, Kajiado, Kenya</li>
        </ul>
    </div>
    </div>
  )
}
