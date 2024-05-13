const servicesData = [
    {
        "title": "Consultas médicas",
        "description": "Ofrecemos consultas médicas para tus mascotas con nuestro equipo de veterinarios altamente calificados."
    },
    {
        "title": "Vacunaciones",
        "description": "Proporcionamos servicios de vacunación para garantizar la salud y el bienestar continuo de tus mascotas."
    },
    {
        "title": "Cirugías",
        "description": "Realizamos cirugías veterinarias para tratar una variedad de condiciones médicas y mejorar la calidad de vida de tus mascotas."
    },
    {
        "title": "Guardería",
        "description": "Ofrecemos servicios de guardería para mascotas, proporcionando un entorno seguro y divertido mientras estás fuera."
    },
    {
        "title": "Peluquería",
        "description": "Proporcionamos servicios de peluquería para mascotas, incluyendo baños, cortes de pelo y cuidado de la piel y el pelaje."
    }
];

function displayServices() {
    const servicesContainer = document.querySelector('.services-container');
    servicesContainer.innerHTML = '';

    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('service-card');

        const serviceName = document.createElement('h2');
        serviceName.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        card.appendChild(serviceName);
        card.appendChild(serviceDescription);
        servicesContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayServices();
});
