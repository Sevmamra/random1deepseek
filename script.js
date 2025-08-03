// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Set up all animations and interactions
    initCosmicScene();
    initParticleSystems();
    initInteractiveElements();
    initNavigation();
    initCosmicClock();
    initGravityEffects();
    initQuantumEffects();
    initDimensionPortals();
    initBlackHole();
    initWormholes();
    initCosmicWeather();
    initAlienFlora();
    initCrystalFormations();
    initEnergyVortexes();
    initSpacetimeRipples();
    initBinaryStarSystem();
    initQuasar();
    initCosmicWeb();
    initMultiversePortal();
    initNebulaClouds();
    initDarkEnergyFields();
    initQuantumFluctuations();
    initCMBRadiation();
    initGammaRayBursts();
    initSuperclusters();
    initCosmicVoids();
    initIntergalacticMedium();
    initGalacticCurrents();
    initInflationFields();
    initBAOEffects();
    initReionizationBubbles();
    initPrimordialBlackHoles();
    initCNBEffects();
    initWIMPAnnihilation();
    initAxionOscillations();
    initCosmicDefects();
    initExtraDimensions();
    initBraneWorlds();
    initHolographicPixels();
    initAdSCFTBoundary();
    initFirewallParadox();
    initEREPRBridges();
    initCosmicCensorship();
    initInformationParadox();
    initFooterEffects();

    // Start animation loop
    requestAnimationFrame(animate);
});

// Global Variables
const universe = document.querySelector('.universe');
const mouse = { x: 0, y: 0 };
const particles = [];
const quantumParticles = [];
const energyBalls = [];
const cosmicStrings = [];
const dimensions = [];
const portals = [];
const blackHoles = [];
const wormholes = [];
const lastTime = 0;
const frameCount = 0;
const physicsConstants = {
    G: 6.67430e-11, // Gravitational constant
    c: 299792458,    // Speed of light
    h: 6.62607015e-34 // Planck constant
};

// Initialize Cosmic Scene
function initCosmicScene() {
    // Set up mouse tracking
    document.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Move cosmic portal slightly with mouse
        const portal = document.querySelector('.cosmic-portal');
        portal.style.transform = `translate(calc(-50% + ${mouse.x * 20}px), calc(-50% + ${mouse.y * 20}px))`;
    });

    // Set up resize handler
    window.addEventListener('resize', () => {
        // Adjust any elements that need resizing
        const stars = document.querySelectorAll('.stars');
        stars.forEach(star => {
            star.style.width = window.innerWidth + 'px';
            star.style.height = window.innerHeight + 'px';
        });
    });

    // Create initial particles
    for (let i = 0; i < 500; i++) {
        createParticle();
    }

    // Initialize all planets
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        const speed = parseFloat(planet.getAttribute('data-speed')) || 1;
        planet.style.animationDuration = `${100 / speed}s`;
    });

    // Initialize all pulsars
    const pulsars = document.querySelectorAll('.pulsar');
    pulsars.forEach(pulsar => {
        const speed = pulsar.getAttribute('data-speed');
        let duration;
        if (speed === 'fast') duration = 1;
        else if (speed === 'medium') duration = 2;
        else duration = 3;
        pulsar.style.animationDuration = `${duration}s`;
    });

    // Initialize all dimensional portals
    const dimensionalPortals = document.querySelectorAll('.dimensional-portal');
    dimensionalPortals.forEach((portal, i) => {
        dimensions.push({
            element: portal,
            phase: Math.random() * Math.PI * 2,
            frequency: 0.5 + Math.random()
        });
    });
}

// Particle System
function initParticleSystems() {
    // Create quantum particles
    for (let i = 0; i < 100; i++) {
        createQuantumParticle();
    }

    // Create energy balls
    const balls = document.querySelectorAll('.energy-ball');
    balls.forEach((ball, i) => {
        energyBalls.push({
            element: ball,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: 30 + Math.random() * 20,
            phase: Math.random() * Math.PI * 2
        });
    });

    // Create cosmic strings
    const strings = document.querySelectorAll('.cosmic-string');
    strings.forEach(string => {
        cosmicStrings.push({
            element: string,
            length: parseFloat(string.style.width),
            amplitude: 5 + Math.random() * 10,
            frequency: 0.5 + Math.random(),
            phase: Math.random() * Math.PI * 2
        });
    });
}

// Interactive Elements
function initInteractiveElements() {
    const interactiveElements = document.querySelectorAll('.interactive-element');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.5)';
            el.style.boxShadow = '0 0 30px ' + getRandomColor();
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
            el.style.boxShadow = '0 0 20px ' + getRandomColor();
        });
        
        el.addEventListener('click', () => {
            createExplosion(el.offsetLeft + el.offsetWidth/2, el.offsetTop + el.offsetHeight/2);
        });
    });

    // Info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
    });

    // Control panel
    const controlButtons = document.querySelectorAll('.control-button');
    controlButtons.forEach(button => {
        button.addEventListener('click', () => {
            const controlNum = button.getAttribute('data-control');
            activateControl(controlNum);
        });
    });

    const controlSwitch = document.querySelector('.control-switch');
    controlSwitch.addEventListener('click', () => {
        controlSwitch.classList.toggle('active');
        if (controlSwitch.classList.contains('active')) {
            document.body.style.filter = 'hue-rotate(180deg)';
        } else {
            document.body.style.filter = 'none';
        }
    });
}

// Navigation System
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            activateDimension(section);
        });
    });
}

// Cosmic Clock
function initCosmicClock() {
    const clockHands = {
        hours: document.querySelector('.clock-hand.hours'),
        minutes: document.querySelector('.clock-hand.minutes'),
        seconds: document.querySelector('.clock-hand.seconds')
    };

    function updateClock() {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        clockHands.hours.style.transform = `rotate(${(hours * 30) + (minutes * 0.5)}deg)`;
        clockHands.minutes.style.transform = `rotate(${minutes * 6}deg)`;
        clockHands.seconds.style.transform = `rotate(${seconds * 6}deg)`;
        
        // Pulsate with seconds
        const intensity = seconds / 60;
        document.querySelector('.cosmic-clock').style.boxShadow = `0 0 ${10 + intensity * 20}px rgba(0, 255, 255, ${0.3 + intensity * 0.7})`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
}

// Gravity Effects
function initGravityEffects() {
    // Initialize black holes
    const blackHoleElements = document.querySelectorAll('.black-hole');
    blackHoleElements.forEach(bh => {
        blackHoles.push({
            element: bh,
            x: bh.offsetLeft + bh.offsetWidth / 2,
            y: bh.offsetTop + bh.offsetHeight / 2,
            mass: 10000
        });
    });

    // Initialize wormholes
    const wormholeElements = document.querySelectorAll('.wormhole');
    wormholeElements.forEach(wh => {
        wormholes.push({
            element: wh,
            x: wh.offsetLeft + wh.offsetWidth / 2,
            y: wh.offsetTop + wh.offsetHeight / 2,
            type: wh.classList.contains('entrance') ? 'entrance' : 'exit',
            partner: wh.classList.contains('entrance') ? 
                document.querySelector('.wormhole.exit') : 
                document.querySelector('.wormhole.entrance')
        });
    });
}

// Quantum Effects
function initQuantumEffects() {
    // Entanglement effect
    const entangledParticles = document.querySelectorAll('.quantum-particle');
    entangledParticles.forEach(particle => {
        const pair = particle.getAttribute('data-pair');
        const partner = document.querySelector(`.quantum-particle[data-pair="${pair}"]:not([data-id="${particle.getAttribute('data-id')}"])`);
        
        if (partner) {
            particle.addEventListener('mouseenter', () => {
                partner.style.backgroundColor = getRandomColor();
                partner.style.boxShadow = `0 0 20px ${getRandomColor()}`;
            });
        }
    });

    // Quantum foam fluctuation
    const quantumFoam = document.querySelector('.quantum-foam');
    setInterval(() => {
        const size = 40 + Math.random() * 20;
        quantumFoam.style.backgroundSize = `${size}px ${size}px`;
    }, 3000);
}

// Dimension Portals
function initDimensionPortals() {
    const portalElements = document.querySelectorAll('.dimensional-portal');
    portalElements.forEach(portal => {
        portals.push({
            element: portal,
            dimension: portal.getAttribute('data-dimension'),
            phase: Math.random() * Math.PI * 2,
            frequency: 0.5 + Math.random() * 0.5
        });
    });
}

// Black Hole Effects
function initBlackHole() {
    const blackHole = document.querySelector('.black-hole');
    const accretionDisk = document.querySelector('.accretion-disk');
    
    // Make black hole interactive
    blackHole.addEventListener('mouseenter', () => {
        accretionDisk.style.width = '400%';
        accretionDisk.style.height = '400%';
        accretionDisk.style.filter = 'blur(10px)';
    });
    
    blackHole.addEventListener('mouseleave', () => {
        accretionDisk.style.width = '300%';
        accretionDisk.style.height = '300%';
        accretionDisk.style.filter = 'blur(5px)';
    });
    
    blackHole.addEventListener('click', () => {
        createSingularityExplosion(
            blackHole.offsetLeft + blackHole.offsetWidth / 2,
            blackHole.offsetTop + blackHole.offsetHeight / 2
        );
    });
}

// Wormhole Effects
function initWormholes() {
    const wormholeEntrance = document.querySelector('.wormhole.entrance');
    const wormholeExit = document.querySelector('.wormhole.exit');
    
    if (wormholeEntrance && wormholeExit) {
        wormholeEntrance.addEventListener('click', () => {
            // Teleport effect
            const particles = document.querySelectorAll('.particle, .quantum-particle');
            particles.forEach(p => {
                p.style.transition = 'all 2s ease-in-out';
                p.style.transform = 'translate(' + 
                    (wormholeExit.offsetLeft - wormholeEntrance.offsetLeft) + 'px, ' + 
                    (wormholeExit.offsetTop - wormholeEntrance.offsetTop) + 'px)';
                
                setTimeout(() => {
                    p.style.transition = 'none';
                    p.style.transform = 'translate(0, 0)';
                }, 2000);
            });
        });
    }
}

// Cosmic Weather
function initCosmicWeather() {
    const solarFlares = document.querySelectorAll('.solar-flare');
    solarFlares.forEach(flare => {
        flare.style.setProperty('--flare-size', `${50 + Math.random() * 100}px`);
        flare.style.setProperty('--flare-color', getRandomColor());
        flare.style.animationDelay = `${Math.random() * 10}s`;
    });

    const cosmicRays = document.querySelectorAll('.cosmic-ray');
    cosmicRays.forEach(ray => {
        ray.style.setProperty('--ray-angle', `${Math.random() * 360}deg`);
        ray.style.setProperty('--ray-color', getRandomColor());
        ray.style.animationDelay = `${Math.random() * 10}s`;
    });

    const magneticStorms = document.querySelectorAll('.magnetic-storm');
    magneticStorms.forEach(storm => {
        storm.style.setProperty('--storm-intensity', Math.random());
        storm.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Alien Flora
function initAlienFlora() {
    const plants = document.querySelectorAll('.alien-plant');
    plants.forEach(plant => {
        const type = plant.getAttribute('data-type');
        plant.style.setProperty('--plant-height', `${20 + parseInt(type) * 10}px`);
        plant.style.setProperty('--plant-color', getRandomColor());
        plant.style.animationDelay = `${Math.random() * 5}s`;
        
        // Make plants grow on hover
        plant.addEventListener('mouseenter', () => {
            plant.style.setProperty('--plant-height', `${40 + parseInt(type) * 20}px`);
        });
        
        plant.addEventListener('mouseleave', () => {
            plant.style.setProperty('--plant-height', `${20 + parseInt(type) * 10}px`);
        });
    });
}

// Crystal Formations
function initCrystalFormations() {
    const crystals = document.querySelectorAll('.crystal-formation');
    crystals.forEach(crystal => {
        const colorNum = crystal.getAttribute('data-color');
        const hue = parseInt(colorNum) * 36;
        crystal.style.setProperty('--crystal-color', `hsl(${hue}, 80%, 50%)`);
        crystal.style.animationDelay = `${Math.random() * 5}s`;
        
        // Make crystals refract light on hover
        crystal.addEventListener('mouseenter', () => {
            crystal.style.filter = 'drop-shadow(0 0 10px white)';
        });
        
        crystal.addEventListener('mouseleave', () => {
            crystal.style.filter = 'none';
        });
    });
}

// Energy Vortexes
function initEnergyVortexes() {
    const vortexes = document.querySelectorAll('.energy-vortex');
    vortexes.forEach(vortex => {
        const intensity = vortex.getAttribute('data-intensity');
        vortex.style.setProperty('--vortex-speed', `${1 + parseInt(intensity)}s`);
        vortex.style.setProperty('--vortex-color', getRandomColor());
        
        // Create particles around vortex
        for (let i = 0; i < 10; i++) {
            createOrbitingParticle(vortex);
        }
    });
}

// Space-Time Ripples
function initSpacetimeRipples() {
    const ripples = document.querySelectorAll('.spacetime-ripple');
    ripples.forEach(ripple => {
        const origin = ripple.getAttribute('data-origin');
        ripple.style.setProperty('--ripple-origin', `${10 + parseInt(origin) * 5}%`);
        ripple.style.animationDelay = `${Math.random() * 5}s`;
    });
}

// Binary Star System
function initBinaryStarSystem() {
    const binaryStar = document.querySelector('.binary-star');
    const primary = binaryStar.querySelector('.star.primary');
    const secondary = binaryStar.querySelector('.star.secondary');
    
    // Animate binary orbit
    let angle = 0;
    setInterval(() => {
        angle += 0.01;
        const distance = 100;
        primary.style.transform = `translate(${Math.cos(angle) * distance / 2}px, ${Math.sin(angle) * distance / 2}px)`;
        secondary.style.transform = `translate(${Math.cos(angle + Math.PI) * distance / 2}px, ${Math.sin(angle + Math.PI) * distance / 2}px)`;
    }, 50);
}

// Quasar Effects
function initQuasar() {
    const quasar = document.querySelector('.quasar');
    if (quasar) {
        // Pulsating jet effect
        setInterval(() => {
            const intensity = 0.5 + Math.random() * 0.5;
            quasar.style.boxShadow = `0 0 ${50 * intensity}px ${20 * intensity}px rgba(0, 255, 255, ${intensity})`;
        }, 1000);
    }
}

// Cosmic Web
function initCosmicWeb() {
    const strands = document.querySelectorAll('.web-strand');
    strands.forEach(strand => {
        strand.style.setProperty('--strand-length', `${200 + Math.random() * 300}px`);
        strand.style.setProperty('--strand-angle', `${Math.random() * 360}deg`);
        strand.style.animationDelay = `${Math.random() * 5}s`;
    });
}

// Multiverse Portal
function initMultiversePortal() {
    const portal = document.querySelector('.multiverse-portal');
    if (portal) {
        const bubbles = portal.querySelectorAll('.universe-bubble');
        bubbles.forEach(bubble => {
            const universeNum = bubble.getAttribute('data-universe');
            bubble.style.setProperty('--bubble-size', `${10 + parseInt(universeNum) * 5}px`);
            bubble.style.setProperty('--bubble-color', getRandomColor());
            bubble.style.animationDelay = `${Math.random() * 5}s`;
        });
    }
}

// Nebula Clouds
function initNebulaClouds() {
    const clouds = document.querySelectorAll('.nebula-cloud');
    clouds.forEach(cloud => {
        const type = cloud.getAttribute('data-type');
        const hue = parseInt(type) * 36;
        cloud.style.setProperty('--cloud-color', `hsla(${hue}, 80%, 50%, 0.3)`);
        cloud.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Dark Energy Fields
function initDarkEnergyFields() {
    const fields = document.querySelectorAll('.dark-energy-field');
    fields.forEach(field => {
        const strength = field.getAttribute('data-strength');
        field.style.setProperty('--field-strength', strength);
        field.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Quantum Fluctuations
function initQuantumFluctuations() {
    const fluctuations = document.querySelectorAll('.quantum-fluctuation');
    fluctuations.forEach(fluctuation => {
        const size = fluctuation.getAttribute('data-size');
        fluctuation.style.setProperty('--fluctuation-size', `${5 + parseInt(size)}px`);
        fluctuation.style.animationDelay = `${Math.random() * 5}s`;
    });
}

// CMB Radiation
function initCMBRadiation() {
    const cmb = document.querySelector('.cmb-radiation');
    if (cmb) {
        // Create CMB static effect
        setInterval(() => {
            const noise = generateNoisePattern();
            cmb.style.backgroundImage = `radial-gradient(circle, transparent 50%, ${noise})`;
        }, 100);
    }
}

// Gamma Ray Bursts
function initGammaRayBursts() {
    const bursts = document.querySelectorAll('.gamma-ray-burst');
    bursts.forEach(burst => {
        const direction = burst.getAttribute('data-direction');
        burst.style.setProperty('--burst-angle', `${parseInt(direction) * 36}deg`);
        burst.style.animationDelay = `${Math.random() * 15}s`;
    });
}

// Superclusters
function initSuperclusters() {
    const clusters = document.querySelectorAll('.supercluster');
    clusters.forEach(cluster => {
        const size = cluster.getAttribute('data-size');
        cluster.style.setProperty('--cluster-size', `${100 + parseInt(size) * 50}px`);
        cluster.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Cosmic Voids
function initCosmicVoids() {
    const voids = document.querySelectorAll('.cosmic-void');
    voids.forEach(voidEl => {
        const size = voidEl.getAttribute('data-size');
        voidEl.style.setProperty('--void-size', `${50 + parseInt(size) * 30}px`);
        voidEl.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Intergalactic Medium
function initIntergalacticMedium() {
    const mediums = document.querySelectorAll('.intergalactic-medium');
    mediums.forEach(medium => {
        const density = medium.getAttribute('data-density');
        medium.style.setProperty('--medium-density', `${0.1 + parseInt(density) * 0.05}`);
        medium.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Galactic Currents
function initGalacticCurrents() {
    const currents = document.querySelectorAll('.galactic-current');
    currents.forEach(current => {
        const direction = current.getAttribute('data-direction');
        current.style.setProperty('--current-angle', `${parseInt(direction) * 36}deg`);
        current.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Inflation Fields
function initInflationFields() {
    const fields = document.querySelectorAll('.inflation-field');
    fields.forEach(field => {
        const rate = field.getAttribute('data-rate');
        field.style.setProperty('--inflation-rate', `${1 + parseInt(rate) * 0.2}`);
        field.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Baryon Acoustic Oscillations
function initBAOEffects() {
    const baos = document.querySelectorAll('.bao');
    baos.forEach(bao => {
        const scale = bao.getAttribute('data-scale');
        bao.style.setProperty('--bao-scale', `${1 + parseInt(scale) * 0.2}`);
        bao.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Reionization Bubbles
function initReionizationBubbles() {
    const bubbles = document.querySelectorAll('.reionization-bubble');
    bubbles.forEach(bubble => {
        const era = bubble.getAttribute('data-era');
        bubble.style.setProperty('--bubble-era', era);
        bubble.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Primordial Black Holes
function initPrimordialBlackHoles() {
    const pbhs = document.querySelectorAll('.primordial-black-hole');
    pbhs.forEach(pbh => {
        const mass = pbh.getAttribute('data-mass');
        pbh.style.setProperty('--pbh-mass', mass);
        pbh.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Cosmic Neutrino Background
function initCNBEffects() {
    const cnb = document.querySelector('.cnb');
    if (cnb) {
        // Create neutrino flicker effect
        setInterval(() => {
            const intensity = Math.random();
            cnb.style.boxShadow = `0 0 ${10 + intensity * 20}px rgba(0, 191, 255, ${intensity * 0.3})`;
        }, 300);
    }
}

// WIMP Annihilation
function initWIMPAnnihilation() {
    const wimps = document.querySelectorAll('.wimp-annihilation');
    wimps.forEach(wimp => {
        const intensity = wimp.getAttribute('data-intensity');
        wimp.style.setProperty('--wimp-intensity', intensity);
        wimp.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Axion Oscillations
function initAxionOscillations() {
    const axions = document.querySelectorAll('.axion');
    axions.forEach(axion => {
        const frequency = axion.getAttribute('data-frequency');
        axion.style.setProperty('--axion-frequency', frequency);
        axion.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Cosmic Defects
function initCosmicDefects() {
    const defects = document.querySelectorAll('.cosmic-defect');
    defects.forEach(defect => {
        const type = defect.getAttribute('data-type');
        defect.style.setProperty('--defect-type', type);
        defect.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Extra Dimensions
function initExtraDimensions() {
    const extras = document.querySelectorAll('.extra-dimension');
    extras.forEach(extra => {
        const number = extra.getAttribute('data-number');
        extra.style.setProperty('--dimension-number', number);
        extra.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Brane Worlds
function initBraneWorlds() {
    const branes = document.querySelectorAll('.brane');
    branes.forEach(brane => {
        const number = brane.getAttribute('data-number');
        brane.style.setProperty('--brane-number', number);
        brane.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Holographic Pixels
function initHolographicPixels() {
    const pixels = document.querySelectorAll('.holographic-pixel');
    pixels.forEach(pixel => {
        const position = pixel.getAttribute('data-position');
        pixel.style.setProperty('--pixel-position', position);
        pixel.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// AdS/CFT Boundary
function initAdSCFTBoundary() {
    const boundary = document.querySelector('.ads-cft-boundary');
    if (boundary) {
        // Create boundary ripple effect
        setInterval(() => {
            const hue = Math.floor(Math.random() * 360);
            boundary.style.boxShadow = `0 0 50px 10px hsl(${hue}, 100%, 50%)`;
        }, 3000);
    }
}

// Firewall Paradox
function initFirewallParadox() {
    const firewalls = document.querySelectorAll('.firewall');
    firewalls.forEach(firewall => {
        const intensity = firewall.getAttribute('data-intensity');
        firewall.style.setProperty('--firewall-intensity', intensity);
        firewall.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// ER=EPR Bridges
function initEREPRBridges() {
    const bridges = document.querySelectorAll('.er-epr-bridge');
    bridges.forEach(bridge => {
        const length = bridge.getAttribute('data-length');
        bridge.style.setProperty('--bridge-length', length);
        bridge.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Cosmic Censorship
function initCosmicCensorship() {
    const horizons = document.querySelectorAll('.censorship-horizon');
    horizons.forEach(horizon => {
        const type = horizon.getAttribute('data-type');
        horizon.style.setProperty('--horizon-type', type);
        horizon.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Information Paradox
function initInformationParadox() {
    const infoElements = document.querySelectorAll('.information');
    infoElements.forEach(info => {
        const state = info.getAttribute('data-state');
        info.style.setProperty('--info-state', state);
        info.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Footer Effects
function initFooterEffects() {
    const footerElements = document.querySelectorAll('.footer-element');
    footerElements.forEach(el => {
        const type = el.getAttribute('data-type');
        el.style.setProperty('--footer-type', type);
        el.style.animationDelay = `${Math.random() * 10}s`;
    });
}

// Animation Loop
function animate(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    frameCount++;
    
    // Update particles
    updateParticles(deltaTime);
    updateQuantumParticles(deltaTime);
    updateEnergyBalls(deltaTime);
    updateCosmicStrings(deltaTime);
    updateDimensions(deltaTime);
    updatePortals(deltaTime);
    updateBlackHoles(deltaTime);
    updateWormholes(deltaTime);
    
    // Apply gravity to particles
    applyGravity();
    
    // Apply quantum effects
    applyQuantumEffects();
    
    // Continue animation loop
    requestAnimationFrame(animate);
}

// Helper Functions
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${1 + Math.random() * 3}px`;
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = getRandomColor();
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    universe.appendChild(particle);
    
    particles.push({
        element: particle,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: parseFloat(particle.style.width),
        life: 1000 + Math.random() * 3000
    });
}

function createQuantumParticle() {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    const pair = Math.floor(Math.random() * 3) + 1;
    particle.setAttribute('data-pair', pair);
    particle.setAttribute('data-id', Math.random().toString(36).substr(2, 9));
    particle.style.width = `${3 + Math.random() * 5}px`;
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = getRandomColor();
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    universe.appendChild(particle);
    
    quantumParticles.push({
        element: particle,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: parseFloat(particle.style.width),
        pair: pair,
        entangled: false
    });
}

function createOrbitingParticle(parent) {
    const particle = document.createElement('div');
    particle.className = 'orbiting-particle';
    particle.style.width = `${1 + Math.random() * 2}px`;
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = getRandomColor();
    parent.appendChild(particle);
    
    return {
        element: particle,
        angle: Math.random() * Math.PI * 2,
        distance: 50 + Math.random() * 100,
        speed: 0.01 + Math.random() * 0.05
    };
}

function updateParticles(deltaTime) {
    particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= deltaTime;
        
        // Wrap around screen edges
        if (p.x > window.innerWidth) p.x = 0;
        if (p.x < 0) p.x = window.innerWidth;
        if (p.y > window.innerHeight) p.y = 0;
        if (p.y < 0) p.y = window.innerHeight;
        
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
        
        // Flicker effect
        if (frameCount % 10 === 0) {
            p.element.style.opacity = 0.5 + Math.random() * 0.5;
        }
        
        // Remove dead particles
        if (p.life <= 0) {
            p.element.remove();
            particles.splice(i, 1);
            createParticle();
        }
    });
}

function updateQuantumParticles(deltaTime) {
    quantumParticles.forEach((qp, i) => {
        qp.x += qp.vx;
        qp.y += qp.vy;
        
        // Quantum tunneling effect
        if (Math.random() < 0.001) {
            qp.x = Math.random() * window.innerWidth;
            qp.y = Math.random() * window.innerHeight;
        }
        
        // Wrap around screen edges
        if (qp.x > window.innerWidth) qp.x = 0;
        if (qp.x < 0) qp.x = window.innerWidth;
        if (qp.y > window.innerHeight) qp.y = 0;
        if (qp.y < 0) qp.y = window.innerHeight;
        
        qp.element.style.left = `${qp.x}px`;
        qp.element.style.top = `${qp.y}px`;
        
        // Entanglement effect
        if (!qp.entangled && Math.random() < 0.0005) {
            const partner = quantumParticles.find(p => 
                p.pair === qp.pair && p !== qp && !p.entangled);
            if (partner) {
                qp.entangled = true;
                partner.entangled = true;
                qp.vx = partner.vx = (qp.vx + partner.vx) / 2;
                qp.vy = partner.vy = (qp.vy + partner.vy) / 2;
            }
        }
        
        // Quantum decoherence
        if (qp.entangled && Math.random() < 0.0001) {
            qp.entangled = false;
        }
    });
}

function updateEnergyBalls(deltaTime) {
    energyBalls.forEach(ball => {
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.phase += 0.01;
        
        // Bounce off edges
        if (ball.x > window.innerWidth - ball.size || ball.x < 0) {
            ball.vx *= -1;
        }
        if (ball.y > window.innerHeight - ball.size || ball.y < 0) {
            ball.vy *= -1;
        }
        
        // Pulsing effect
        const scale = 0.8 + Math.sin(ball.phase) * 0.2;
        ball.element.style.transform = `translate(${ball.x}px, ${ball.y}px) scale(${scale})`;
        
        // Color shift
        if (frameCount % 60 === 0) {
            ball.element.style.boxShadow = `0 0 ${20 + Math.random() * 10}px ${getRandomColor()}`;
        }
    });
}

function updateCosmicStrings(deltaTime) {
    cosmicStrings.forEach(string => {
        string.phase += 0.01;
        const wave = Math.sin(string.phase * string.frequency) * string.amplitude;
        string.element.style.transform = `rotate(${wave}deg)`;
    });
}

function updateDimensions(deltaTime) {
    dimensions.forEach(dim => {
        dim.phase += 0.01;
        const pulse = 0.7 + Math.sin(dim.phase * dim.frequency) * 0.3;
        dim.element.style.opacity = pulse.toString();
    });
}

function updatePortals(deltaTime) {
    portals.forEach(portal => {
        portal.phase += 0.01;
        const pulse = 0.5 + Math.sin(portal.phase * portal.frequency) * 0.5;
        portal.element.style.boxShadow = `0 0 ${20 * pulse}px ${pulse * 10}px rgba(0, 255, 255, ${pulse})`;
    });
}

function updateBlackHoles(deltaTime) {
    blackHoles.forEach(bh => {
        // Rotate accretion disk
        const disk = bh.element.querySelector('.accretion-disk');
        if (disk) {
            const rotation = parseFloat(disk.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
            disk.style.transform = `rotate(${(rotation + 0.2) % 360}deg)`;
        }
    });
}

function updateWormholes(deltaTime) {
    wormholes.forEach(wh => {
        // Pulsate wormhole
        const pulse = 0.5 + Math.sin(Date.now() * 0.001) * 0.5;
        wh.element.style.boxShadow = `0 0 ${30 * pulse}px ${10 * pulse}px ${wh.type === 'entrance' ? '#9400d3' : '#ff4500'}`;
    });
}

function applyGravity() {
    // Apply black hole gravity to particles
    particles.forEach(p => {
        blackHoles.forEach(bh => {
            const dx = bh.x - p.x;
            const dy = bh.y - p.y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            const force = bh.mass / distSq;
            
            if (dist > 50) { // Don't apply if too close
                p.vx += (dx / dist) * force * 0.001;
                p.vy += (dy / dist) * force * 0.001;
            } else {
                // Particle consumed by black hole
                p.x = Math.random() * window.innerWidth;
                p.y = Math.random() * window.innerHeight;
                p.vx = (Math.random() - 0.5) * 0.5;
                p.vy = (Math.random() - 0.5) * 0.5;
            }
        });
    });
}

function applyQuantumEffects() {
    // Quantum entanglement effects
    quantumParticles.forEach(qp => {
        if (qp.entangled) {
            const partner = quantumParticles.find(p => 
                p.pair === qp.pair && p !== qp && p.entangled);
            if (partner) {
                // Mirror movements
                const dx = partner.x - qp.x;
                const dy = partner.y - qp.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 200) { // Maintain quantum connection
                    qp.vx = partner.vx = (qp.vx + partner.vx) / 2;
                    qp.vy = partner.vy = (qp.vy + partner.vy) / 2;
                }
            }
        }
    });
}

function createExplosion(x, y) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = getRandomColor();
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        universe.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        
        setTimeout(() => {
            let frame = 0;
            const animateExplosion = () => {
                frame++;
                const dist = frame * speed;
                particle.style.left = `${x + Math.cos(angle) * dist}px`;
                particle.style.top = `${y + Math.sin(angle) * dist}px`;
                particle.style.opacity = `${1 - frame / 60}`;
                
                if (frame < 60) {
                    requestAnimationFrame(animateExplosion);
                } else {
                    particle.remove();
                }
            };
            animateExplosion();
        }, 0);
    }
}

function createSingularityExplosion(x, y) {
    const singularity = document.createElement('div');
    singularity.className = 'singularity-explosion';
    singularity.style.left = `${x}px`;
    singularity.style.top = `${y}px`;
    universe.appendChild(singularity);
    
    let radius = 0;
    const maxRadius = 500;
    const animateSingularity = () => {
        radius += 5;
        singularity.style.width = `${radius * 2}px`;
        singularity.style.height = `${radius * 2}px`;
        singularity.style.marginLeft = `-${radius}px`;
        singularity.style.marginTop = `-${radius}px`;
        singularity.style.opacity = `${1 - radius / maxRadius}`;
        
        if (radius < maxRadius) {
            requestAnimationFrame(animateSingularity);
        } else {
            singularity.remove();
        }
    };
    animateSingularity();
    
    // Warp space-time
    document.querySelectorAll('.particle, .quantum-particle').forEach(p => {
        const px = p.offsetLeft + p.offsetWidth / 2;
        const py = p.offsetTop + p.offsetHeight / 2;
        const dx = px - x;
        const dy = py - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxRadius) {
            const force = (maxRadius - distance) / maxRadius;
            const angle = Math.atan2(dy, dx);
            const warpDistance = force * 100;
            
            p.style.transition = 'all 1s ease-out';
            p.style.transform = `translate(${Math.cos(angle) * warpDistance}px, ${Math.sin(angle) * warpDistance}px)`;
            
            setTimeout(() => {
                p.style.transition = 'none';
                p.style.transform = 'translate(0, 0)';
            }, 1000);
        }
    });
}

function activateControl(controlNum) {
    const color = getRandomColor();
    const effect = document.createElement('div');
    effect.className = 'control-effect';
    effect.style.backgroundColor = color;
    effect.style.boxShadow = `0 0 50px ${color}`;
    document.body.appendChild(effect);
    
    // Animate effect
    let scale = 0;
    const animateEffect = () => {
        scale += 0.1;
        effect.style.transform = `scale(${scale})`;
        effect.style.opacity = `${1 - scale / 10}`;
        
        if (scale < 10) {
            requestAnimationFrame(animateEffect);
        } else {
            effect.remove();
        }
    };
    animateEffect();
    
    // Different effects for different controls
    switch(controlNum) {
        case '1':
            // Warp speed
            document.querySelectorAll('.particle, .quantum-particle').forEach(p => {
                p.style.transition = 'all 1s ease-in-out';
                p.style.transform = 'translateX(100px)';
                setTimeout(() => {
                    p.style.transition = 'none';
                    p.style.transform = 'translateX(0)';
                }, 1000);
            });
            break;
        case '2':
            // Time dilation
            document.querySelector('.time-dilation-field').style.animationDuration = '2s';
            setTimeout(() => {
                document.querySelector('.time-dilation-field').style.animationDuration = '10s';
            }, 2000);
            break;
        case '3':
            // Quantum fluctuation
            quantumParticles.forEach(qp => {
                qp.x = Math.random() * window.innerWidth;
                qp.y = Math.random() * window.innerHeight;
            });
            break;
        case '4':
            // Gravity shift
            blackHoles.forEach(bh => {
                bh.x = Math.random() * window.innerWidth;
                bh.y = Math.random() * window.innerHeight;
            });
            break;
        case '5':
            // Dimension merge
            dimensions.forEach(dim => {
                dim.element.style.boxShadow = `0 0 50px ${getRandomColor()}`;
            });
            break;
    }
}

function activateDimension(dimensionNum) {
    // Highlight the selected dimension portal
    const portal = document.querySelector(`.dimensional-portal[data-dimension="${dimensionNum}"]`);
    if (portal) {
        portal.style.animation = 'portalActive 0.5s ease-in-out infinite alternate';
        setTimeout(() => {
            portal.style.animation = 'portalFlicker 5s ease-in-out infinite';
        }, 2000);
    }
    
    // Change universe background based on dimension
    const hue = parseInt(dimensionNum) * 30;
    document.querySelector('.universe').style.background = 
        `radial-gradient(ellipse at center, hsl(${hue}, 80%, 10%) 0%, #000000 100%)`;
    
    // Transform particles
    particles.forEach(p => {
        p.element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    });
    
    // Play dimension transition sound (would be implemented with Howler.js or similar)
    // playSound('dimension_transition');
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

function generateNoisePattern() {
    let noise = '';
    for (let i = 0; i < 10; i++) {
        const alpha = Math.random() * 0.1;
        noise += `rgba(255, 255, 255, ${alpha}) ${i * 10}%, `;
    }
    return `linear-gradient(to right, ${noise.slice(0, -2)})`;
}

// Start the cosmic animation
initCosmicScene();
