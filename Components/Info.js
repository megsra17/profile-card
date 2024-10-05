import React from 'react'

export default function Info(){
    return(
        <div className="info">
            <img src="/imgs/IMG_4077.jpeg"/>
            <h3 className="name mt-10">Megan Rakow</h3>
            <p className="role">Full Stack Developer</p>
            <a className="btn btn-primary" target="_blank" href="https://github.com/megsra17?tab=overview&from=2024-10-01&to=2024-10-03"><i class="fa-brands fa-github me-10"></i>GitHub</a>
            <a className="btn btn-secondary ms-50" target="_blank" href="https://www.linkedin.com/in/megan-rakow-84a236191/"><i class="fa-brands fa-linkedin me-10"></i>LinkedIn</a>
        </div> 
    )
}