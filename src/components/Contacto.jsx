import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiGmail } from "react-icons/si";
import { FaSquarePhone, FaTelegram, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Hr } from './hr';
import './Contacto.css';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

const contacts = [
    { title: 'Gmail', text: 'adanlqe@gmail.com', Icon: SiGmail, action: copy_text, type: 'Correo', class: 'btn-outline-email' },
    { title: 'Número de teléfono', text: '+53 54526830', Icon: FaSquarePhone, action: copy_text, type: 'Número de Teléfono', class: 'btn-outline-phone' },
    { title: 'Telegram', link: 'https://t.me/mojitodeazucar', Icon: FaTelegram, class: 'btn-outline-telegram' },
    { title: 'Facebook', link: 'https://www.facebook.com/adanluis.quincocesescalonas', Icon: FaFacebook, class: 'btn-outline-facebook' },
    { title: 'Whatsapp', link: 'https://wa.me/5354526830', Icon: FaWhatsapp, class: 'btn-outline-whatsapp' },
    { title: 'Instagram', link: 'https://www.instagram.com/mojitodeazucar', Icon: FaInstagram, class: 'btn-outline-instagram' },
];

export function Contacto() {
    return (
        <>
            <h3 className="mt-3 w-100 text-center">Contacto</h3>
            <Hr />
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
                {contacts.map((contact, index) =>
                    contact.link ? renderLinkButton(contact, index) : renderButton(contact, index)
                )}
            </div>
        </>
    );
}

function renderButton(contact, index) {
    return (
        <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{contact.title}</Tooltip>}
        >
            <Button variant="outline-email" className={`card-ctc btn ${contact.class} shadow rounded-2 px-5 py-3 fs-2 d-flex`} onClick={() => contact.action(contact.text, contact.type)}>
                <contact.Icon className="m-auto" />
            </Button>
        </OverlayTrigger>
    );
}

function renderLinkButton(contact, index) {
    return (
        <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{contact.title}</Tooltip>}
        >
            <Button variant="outline-email" className={`card-ctc btn ${contact.class} shadow rounded-2 px-5 py-3 fs-2 d-flex`} onClick={() => window.open(contact.link)}>
                <contact.Icon className="m-auto" />
            </Button>
        </OverlayTrigger>
    );
}

function copy_text(texto, tipo) {
    const $elementoTemporal = document.createElement('textarea');
    $elementoTemporal.value = texto;
    document.body.appendChild($elementoTemporal);
    $elementoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild($elementoTemporal);
    document.getElementById("elmnt").innerHTML = `${tipo}`;
    document.getElementById("modalbtn").click();
}
