import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Hr } from "./hr";

export function Proyectos(){
    return(
    <React.Fragment>
            <h3 className="mt-3 w-100">Proyectos</h3>
            <Hr/>
            <p className="">
                Actualmente me encuentro trabajando en un proyecto para mi empresa, llamado Sistema Automatizado de Gestión y Control (SAGC) en el cual
                gestiono lo relacionado con la Ciberseguridad, Modularidad, Diseño de interfaces y Mapas Catastrales.
            </p>
            <img className="img-fluid rounded-2 shadow border border-1 border-secondary" src="/portfolio/website.png" alt="Web SAGC"/>
            <p className=" fw-light fst-italic fs-6 lh-1 mt-1">Web en desarrollo.</p>
            <p className="">
                Dicha web gestiona y controla los tramites y las ilegalidades que ocurren a nivel nacional, asi como todo el proceso y toma de decisiones de estos.
            </p>
    </React.Fragment>
    );
}