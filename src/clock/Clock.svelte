<!-- MASTER -->

<script>
    // Imports date-fns
    import { format } from "date-fns";
    import { onMount } from "svelte";

    // Initial time, so that on time is not undefined
    let time = format(new Date(), "HH:mm:ss");
    let timeInSec = format(new Date(), "s");
    let timeInMin = format(new Date(), "m");
    let timeInHour = format(new Date(), "h");

    let hourTick;
    let minuteTick;
    // let secondTick;


    onMount(() => {
        const updateTime = () => {
            time = format(new Date(), "HH:mm:ss");
            timeInSec = Number(format(new Date(), "s"));
            timeInMin = Number(format(new Date(), "m"));
            timeInHour = Number(format(new Date(), "h"));

            console.log(((timeInMin / 60) * 360) + ((timeInSec / 60) * 6) + 90);

            // Minutes to degrees, the first part gets the actual Minute in degrees, the second part, adds some deegrees of the Seconds
            let minToDeg = ((timeInMin / 60) * 360) + ((timeInSec / 60) * 6) + 90;
            // Move Ticker
            minuteTick.style.transform = `rotate(${minToDeg}deg)`;

            // Hours to degrees, the first part gets the actual hour in degrees, the second part, adds some deegrees of the Minutes
            let hourToDeg = ((timeInHour / 12) * 360) + ((timeInMin / 60) * 30) + 90;
            // Move Ticker
            hourTick.style.transform = `rotate(${hourToDeg}deg)`;

        };
        setInterval(updateTime, 1000);

    });
</script>

<svelte:head>
	<title>Poor Phillipe - {time}</title>
</svelte:head>

<style>
    main {
        width: 100%;
        height: 100%;
        		
    }

    .clock-wrapper {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 30%;
        left: 0;
        max-width: 30%;
        max-height: 30%;  
        min-width: 350px;
		min-height: 350px;
    }

    .clock-container {
        display: block;
        position: relative; 
        width: 100%; 
        min-width: 100%;
        padding-top: 100%;
        border-bottom: solid 8px rgb(202, 177, 75);
        border-left: solid 5px rgb(202, 177, 75);
        background-color: rgb(252, 227, 127);
        border-radius: 25%;
    }


    .clock-face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(80deg, rgba(80,97,128,1) 20%, rgba(186,200,224,1) 50%, rgba(80,97,128,1) 80%);
        border-radius: 25%;
        box-shadow: inset 0px 0px 0px 15px rgb(250, 218, 94);
        z-index: 1;
    }

    .clock-under-face {
        box-sizing: border-box;
        position: absolute;
        transform-origin: center center;
        top: 15%;
        left: 15%;
        width: 70%;
        height: 70%;
        border-radius: 25%;
        border: solid 4px rgb(250, 218, 94);
        background: linear-gradient(81deg, rgba(47,70,112,1) 10%, rgba(94,126,181,1) 50%, rgba(47,70,112,1) 90%);
        z-index: 2;
    }

    /* .second-tick {
        position: absolute;
        transform-origin: center right;
        top: 49.5%;
        left: 0;
        width: 50%;
        height: 1%;
        background-color: var(--oc-red-6);
        z-index: 3;
    } */

    .minute-tick {
        position: absolute;
        transform-origin: 80% 50%;
        top: 47.5%;
        left: 10%;
        width: 50%;
        height: 5%;
        background: linear-gradient(
            0deg
            , rgb(250, 218, 94) 0%
            , rgb(250, 218, 94) 50%
            , rgb(226, 198, 86) 50%
            , rgb(226, 198, 86) 100% 
        );
        clip-path: polygon(80% 0, 90% 50%, 80% 100%, 0 50%);
        z-index: 4;
    }

    .hour-tick {
        position: absolute;
        transform-origin: 80% 50%;
        top: 47.5%;
        left: 22%;
        width: 35%;
        height: 5%;
        background: linear-gradient(
            0deg
            , rgb(250, 218, 94) 0%
            , rgb(250, 218, 94) 50%
            , rgb(226, 198, 86) 50%
            , rgb(226, 198, 86) 100% 
        );
        clip-path: polygon(80% 0, 94% 50%, 80% 100%, 0 50%);
        z-index: 5;

        box-shadow: 10px 10px 5px black;
    }

    .center-dot {
        position: absolute;
        top: 49.5%;
        left: 49.5%;
        width: 1%;
        height: 1%;
        background-color: var(--oc-yellow-1);
        border-radius: 50%;
        z-index: 6;
    }

    .brand-title {
        position: absolute;
        font-family: "Karla";
        text-align: center;
        font-size: 1.4rem;
        top: 28%;
        left: 25%;
        width: 50%;
        color: var(--oc-gray-2);
        border-radius: 50%;
        z-index: 2;
    }

    .brand-sub-title {
        position: absolute;
        font-family: "Karla";
        text-align: center;
        font-weight: 500;
        font-size: 1.2rem;
        top: 33%;
        left: 25%;
        width: 50%;
        color: var(--oc-gray-2);
        border-radius: 50%;
        z-index: 2;
    }

    .brand-marking {
        position: absolute;
        font-family: "Karla";
        text-align: center;
        font-size: 0.9rem;
        font-weight: 600;
        top: 93%;
        left: 25%;
        width: 50%;
        color: var(--oc-gray-2);
        border-radius: 50%;
        z-index: 2;
    }
</style>

<main>
    <div class="clock-wrapper">
        <div class="clock-container">
            <div class="clock-face"></div>
            <div class="clock-under-face"></div>
            <!-- <div class="second-tick" bind:this={secondTick}></div> -->
            <div class="minute-tick" bind:this={minuteTick}></div>
            <div class="hour-tick" bind:this={hourTick}></div>
            <div class="center-dot"></div>
            <div class="brand-title">PATEK PHILIPPE</div>
            <div class="brand-sub-title">GENÈVE</div>
            <div class="brand-marking">O • SWISS • O</div>
        </div>
    </div>
</main>
