* {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
}

html, body {
    height: 100%;
    background-color: #1c1e2a; /* Ensure the background color is consistent */
}

a {
    font-size: 30px;
    background-color: #ff9900;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 33%;
    text-decoration: none;
}

a:hover {
    background-color: #ddd;
    color: #FFB800;
    transform: scale(1.1);
}

.root {
    min-height: 100vh; /* Ensure it takes at least the full viewport height */
    display: flex;
    background-color: #1c1e2a;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

button {
    border-width: 1px;
    border-style: solid;
    border-color: white;
    font-weight: 600;
    font-size: 20px;
    height: 50px;
    width: 70px;
    margin: 2px;
    border-radius: 50px;
    background-color: #ff9900;
    color: white;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

button:hover {
    background-color: #ddd;
    color: #FFB800;
    transform: scale(1.1);
}

.navBar {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #fcba06;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    animation: slideIn 0.5s ease-in-out;
    z-index: 10;
}

@keyframes slideIn {
    from {
        transform: translateY(-50px);
    }
    to {
        transform: translateY(0);
    }
}

.navbar a {
    text-decoration: none;
}

.counter-container {
    box-shadow: 5px 5px rgba(132, 132, 132, 0.4);
    color: rgba(202, 202, 206, 255);
    background-color: rgba(255, 208, 39, 255);
    border-radius: 25px;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #fcba06;
    border-radius: 15px;
    width: 300px;
    animation: fadeInUp 0.5s ease-in-out;
    position: relative;
    transition: transform 0.3s;
}

.counter-container:hover {
    transform: scale(1.05);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOutDown {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
}

.counter-container.deleted {
    animation: fadeOutDown 0.5s ease-in-out;
}

.counter-container:last-child {
    margin-bottom: 50px; /* Add bottom margin to the last counter */
}

.CounterClass {
    margin-top: 65px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#counterContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

#counterContainer h2 {
    text-align: center;
}

#create {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border: 0px;
    border-radius: 50px;
    position: fixed;
    height: 75px;
    width: 75px;
    right: 20px;
    bottom: 20px;
    vertical-align: top;
    background-color: #fcba06;
    transition: transform 0.3s;
}

#create:hover {
    transform: scale(1.1);
}

#Counter {
    font-size: 55px;
}

#nameModal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 60px;
    animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
    background-color: #FFB800;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
    from {
        transform: translateY(-100px);
    }
    to {
        transform: translateY(0);
    }
}

.close {
    color: #fff;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-content p {
    color: #FFF;
    font-size: 20px;
    margin-bottom: 20px;
}

#counterNameInput {
    color: black;
    width: 95%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

#submitCounterName {
    background-color: #FFF;
    color: #FFB800;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

#submitCounterName:hover {
    background-color: #ddd;
    color: #FFB800;
    transform: scale(1.05);
}

@media (max-width: 600px) {
    .root {
        background-color: #1c1e2a; /* Ensure background color stays the same */
    }
    
    #counterContainer {
        display: block;
        gap: 10px;
    }

    .CounterClass {
        margin-top: 0;
        height: 100%;
        width: 100vh;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    #counterNameInput {
        color: black;
        margin-right: 15px;
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .navBar {
        z-index: 10;
        position: fixed;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #fcba06;
        animation: slideInFromBottom 0.5s ease-in-out;
    }

    @keyframes slideInFromBottom {
        from {
            transform: translateY(50px);
        }
        to {
            transform: translateY(0);
        }
    }

    #create {
        position: fixed;
        bottom: 70px;
        right: 10px;
        height: 60px;
        width: 60px;
        font-size: 24px;
    }
}
