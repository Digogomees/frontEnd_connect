import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar/nav';
import api from '../../services/api';
import './style.css'

export default function Portfolio() {


    const [project, setNewProject] = useState([]);
   

    useEffect(() => {

        api.get('/projects')
            .then(response => {
                setNewProject(response.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const estilo = {
        color: "#EB3656"
    }


    return (
        <div>
            <Helmet title="Somos Connect - Portfólio" />
            <Navbar color={estilo} />

            <section className="header-main">
                <div className="container head">
                    <div className="header-text">
                        <h2>“A imagem da marca é a <font>percepção </font>do cliente sobre a empresa”</h2>
                        <p>- Amanda Helena</p>
                    </div>
                </div>
            </section>

            <section>
                <main className="show-port">
                    <div className="container">
                        <div className="content">


                            {project.map(list =>{
                        return (
                            <div className="banner_thumb">
                                <a href={`project/${list.slug}`} className="zoom_image">
                                    <img src={list.thumbnail} alt={list.title}/>
                                    <div className="meta_brand">
                                    <h2>{list.title}</h2>
                                    <span>Branding</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}

                        </div>
                    </div>
                </main>
            </section>

            <Footer />

        </div>
    )
}