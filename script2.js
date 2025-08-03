// Main Initialization Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initStars();
    initNebulas();
    initPlanets();
    initPortal();
    initTitleAnimation();
    initSpaceObjects();
    initGridSystem();
    initInteractiveElements();
    initInfoCards();
    initControlPanel();
    initParticleSystems();
    initWormholes();
    initTimeDilation();
    initGravitationalWaves();
    initBlackHole();
    initPulsars();
    initQuantumFoam();
    initCosmicStrings();
    initDarkMatter();
    initSupernovaRemnants();
    initGalacticFilaments();
    initNavigation();
    initDimensionalPortals();
    initQuantumEntanglement();
    initHolographicDisplay();
    initCosmicClock();
    initFractalGenerator();
    initCosmicWeather();
    initSpaceDust();
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
    initBAO();
    initReionizationBubbles();
    initPrimordialBlackHoles();
    initCNB();
    initWIMPAnnihilation();
    initAxionOscillations();
    initCosmicDefects();
    initExtraDimensions();
    initBraneWorlds();
    initHolographicPrinciple();
    initAdSCFT();
    initFirewallParadox();
    initEREPRBridges();
    initCosmicCensorship();
    initInformationParadox();
    initFooterElements();

    // Start animation loop
    requestAnimationFrame(animate);
});

// Animation Loop
let lastTime = 0;
function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    updateStars(deltaTime);
    updateNebulas(deltaTime);
    updatePlanets(deltaTime);
    updatePortal(deltaTime);
    updateTitleAnimation(deltaTime);
    updateSpaceObjects(deltaTime);
    updateGridSystem(deltaTime);
    updateInteractiveElements(deltaTime);
    updateInfoCards(deltaTime);
    updateControlPanel(deltaTime);
    updateParticleSystems(deltaTime);
    updateWormholes(deltaTime);
    updateTimeDilation(deltaTime);
    updateGravitationalWaves(deltaTime);
    updateBlackHole(deltaTime);
    updatePulsars(deltaTime);
    updateQuantumFoam(deltaTime);
    updateCosmicStrings(deltaTime);
    updateDarkMatter(deltaTime);
    updateSupernovaRemnants(deltaTime);
    updateGalacticFilaments(deltaTime);
    updateNavigation(deltaTime);
    updateDimensionalPortals(deltaTime);
    updateQuantumEntanglement(deltaTime);
    updateHolographicDisplay(deltaTime);
    updateCosmicClock(deltaTime);
    updateFractalGenerator(deltaTime);
    updateCosmicWeather(deltaTime);
    updateSpaceDust(deltaTime);
    updateAlienFlora(deltaTime);
    updateCrystalFormations(deltaTime);
    updateEnergyVortexes(deltaTime);
    updateSpacetimeRipples(deltaTime);
    updateBinaryStarSystem(deltaTime);
    updateQuasar(deltaTime);
    updateCosmicWeb(deltaTime);
    updateMultiversePortal(deltaTime);
    updateNebulaClouds(deltaTime);
    updateDarkEnergyFields(deltaTime);
    updateQuantumFluctuations(deltaTime);
    updateCMBRadiation(deltaTime);
    updateGammaRayBursts(deltaTime);
    updateSuperclusters(deltaTime);
    updateCosmicVoids(deltaTime);
    updateIntergalacticMedium(deltaTime);
    updateGalacticCurrents(deltaTime);
    updateInflationFields(deltaTime);
    updateBAO(deltaTime);
    updateReionizationBubbles(deltaTime);
    updatePrimordialBlackHoles(deltaTime);
    updateCNB(deltaTime);
    updateWIMPAnnihilation(deltaTime);
    updateAxionOscillations(deltaTime);
    updateCosmicDefects(deltaTime);
    updateExtraDimensions(deltaTime);
    updateBraneWorlds(deltaTime);
    updateHolographicPrinciple(deltaTime);
    updateAdSCFT(deltaTime);
    updateFirewallParadox(deltaTime);
    updateEREPRBridges(deltaTime);
    updateCosmicCensorship(deltaTime);
    updateInformationParadox(deltaTime);
    updateFooterElements(deltaTime);

    requestAnimationFrame(animate);
}

// Star System
function initStars() {
    const starsContainer = document.querySelector('.stars');
    const smallStarsContainer = document.querySelector('.stars.small');
    const tinyStarsContainer = document.querySelector('.stars.tiny');

    // Create additional stars dynamically
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.borderRadius = '50%';
        star.style.boxShadow = `0 0 ${Math.random() * 10}px white`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${5 + Math.random() * 10}s ease-in-out infinite`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        
        if (i < 70) {
            starsContainer.appendChild(star);
        } else if (i < 140) {
            smallStarsContainer.appendChild(star);
        } else {
            tinyStarsContainer.appendChild(star);
        }
    }
}

function updateStars(deltaTime) {
    // Update star positions and effects
    const stars = document.querySelectorAll('.star-particle');
    stars.forEach(star => {
        const speed = parseFloat(star.style.width) * 0.1;
        const currentTop = parseFloat(star.style.top);
        star.style.top = `${(currentTop + speed * deltaTime * 0.01) % 100}%`;
    });
}

// Nebula System
function initNebulas() {
    const nebulas = document.querySelectorAll('.nebula');
    nebulas.forEach(nebula => {
        // Randomize initial position and size slightly
        const sizeVariation = 0.8 + Math.random() * 0.4;
        nebula.style.width = `${parseFloat(nebula.style.width) * sizeVariation}px`;
        nebula.style.height = `${parseFloat(nebula.style.height) * sizeVariation}px`;
        
        // Add subtle sub-nebulas
        for (let i = 0; i < 3; i++) {
            const subNebula = document.createElement('div');
            subNebula.className = 'sub-nebula';
            subNebula.style.position = 'absolute';
            subNebula.style.width = `${30 + Math.random() * 70}%`;
            subNebula.style.height = subNebula.style.width;
            subNebula.style.borderRadius = '50%';
            subNebula.style.filter = 'blur(30px)';
            subNebula.style.opacity = 0.3 + Math.random() * 0.3;
            
            if (nebula.classList.contains('purple')) {
                subNebula.style.background = `radial-gradient(circle, rgba(${Math.floor(138 + Math.random() * 50)}, ${Math.floor(43 + Math.random() * 50)}, ${Math.floor(226 + Math.random() * 50)}, 0.5) 0%, transparent 70%)`;
            } else if (nebula.classList.contains('blue')) {
                subNebula.style.background = `radial-gradient(circle, rgba(${Math.floor(30 + Math.random() * 50)}, ${Math.floor(144 + Math.random() * 50)}, ${Math.floor(255 + Math.random() * 50)}, 0.5) 0%, transparent 70%)`;
            } else {
                subNebula.style.background = `radial-gradient(circle, rgba(${Math.floor(255 + Math.random() * 50)}, ${Math.floor(105 + Math.random() * 50)}, ${Math.floor(180 + Math.random() * 50)}, 0.5) 0%, transparent 70%)`;
            }
            
            subNebula.style.left = `${Math.random() * 100}%`;
            subNebula.style.top = `${Math.random() * 100}%`;
            subNebula.style.animation = `subNebulaFloat ${30 + Math.random() * 30}s ease-in-out infinite`;
            subNebula.style.animationDelay = `${Math.random() * 10}s`;
            
            nebula.appendChild(subNebula);
        }
    });
}

function updateNebulas(deltaTime) {
    const nebulas = document.querySelectorAll('.nebula');
    nebulas.forEach(nebula => {
        const currentLeft = parseFloat(nebula.style.left);
        const currentTop = parseFloat(nebula.style.top);
        const speed = 0.1 + Math.random() * 0.2;
        
        // Gentle drifting movement
        nebula.style.left = `${currentLeft + Math.sin(Date.now() * 0.0001) * speed}px`;
        nebula.style.top = `${currentTop + Math.cos(Date.now() * 0.0001) * speed}px`;
        
        // Update sub-nebulas
        const subNebulas = nebula.querySelectorAll('.sub-nebula');
        subNebulas.forEach(sub => {
            const subSpeed = 0.05 + Math.random() * 0.1;
            const subLeft = parseFloat(sub.style.left);
            const subTop = parseFloat(sub.style.top);
            
            sub.style.left = `${subLeft + Math.sin(Date.now() * 0.0002) * subSpeed}%`;
            sub.style.top = `${subTop + Math.cos(Date.now() * 0.0002) * subSpeed}%`;
        });
    });
}

// Planet System
function initPlanets() {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        // Add surface details
        const surface = document.createElement('div');
        surface.className = 'planet-surface';
        surface.style.position = 'absolute';
        surface.style.width = '100%';
        surface.style.height = '100%';
        surface.style.borderRadius = '50%';
        
        // Create random surface patterns
        let surfaceGradient = '';
        if (planet.classList.contains('mega')) {
            surfaceGradient = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                #ff7f50, #8b4513 ${Math.random() * 30 + 20}%, 
                #5d2906 ${Math.random() * 30 + 50}%, 
                #8b4513)`;
        } else if (planet.classList.contains('large')) {
            surfaceGradient = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                #4169e1, #191970 ${Math.random() * 30 + 20}%, 
                #000080 ${Math.random() * 30 + 50}%, 
                #191970)`;
        } else if (planet.classList.contains('medium')) {
            surfaceGradient = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                #9370db, #4b0082 ${Math.random() * 30 + 20}%, 
                #483d8b ${Math.random() * 30 + 50}%, 
                #4b0082)`;
        } else if (planet.classList.contains('small')) {
            surfaceGradient = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                #20b2aa, #008080 ${Math.random() * 30 + 20}%, 
                #2f4f4f ${Math.random() * 30 + 50}%, 
                #008080)`;
        } else {
            surfaceGradient = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                #ff6347, #b22222 ${Math.random() * 30 + 20}%, 
                #8b0000 ${Math.random() * 30 + 50}%, 
                #b22222)`;
        }
        
        surface.style.background = surfaceGradient;
        planet.appendChild(surface);
        
        // Add atmospheric glow
        const atmosphere = document.createElement('div');
        atmosphere.className = 'planet-atmosphere';
        atmosphere.style.position = 'absolute';
        atmosphere.style.width = '120%';
        atmosphere.style.height = '120%';
        atmosphere.style.left = '-10%';
        atmosphere.style.top = '-10%';
        atmosphere.style.borderRadius = '50%';
        atmosphere.style.background = 'transparent';
        atmosphere.style.boxShadow = `inset 0 0 50px rgba(255, 255, 255, 0.1), 0 0 50px rgba(255, 255, 255, 0.1)`;
        atmosphere.style.opacity = '0.5';
        atmosphere.style.animation = `pulse ${5 + Math.random() * 10}s ease-in-out infinite`;
        planet.appendChild(atmosphere);
        
        // Add moons for larger planets
        if (planet.classList.contains('mega') || planet.classList.contains('large')) {
            const moonCount = planet.classList.contains('mega') ? 3 : 2;
            for (let i = 0; i < moonCount; i++) {
                const moon = document.createElement('div');
                moon.className = 'planet-moon';
                moon.style.position = 'absolute';
                moon.style.width = `${10 + Math.random() * 10}px`;
                moon.style.height = moon.style.width;
                moon.style.borderRadius = '50%';
                moon.style.background = `radial-gradient(circle, #d3d3d3, #a9a9a9)`;
                moon.style.boxShadow = `inset -2px -2px 10px rgba(0, 0, 0, 0.5)`;
                moon.style.animation = `moonOrbit ${20 + Math.random() * 40}s linear infinite`;
                moon.style.animationDelay = `${Math.random() * 10}s`;
                
                // Position moons randomly around planet
                const orbitRadius = 50 + Math.random() * 50;
                const angle = Math.random() * Math.PI * 2;
                moon.style.left = `${50 + Math.cos(angle) * orbitRadius}px`;
                moon.style.top = `${50 + Math.sin(angle) * orbitRadius}px`;
                moon.style.transformOrigin = `${-Math.cos(angle) * orbitRadius}px ${-Math.sin(angle) * orbitRadius}px`;
                
                planet.appendChild(moon);
            }
        }
    });
}

function updatePlanets(deltaTime) {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        // Update planet rotation
        const rotationSpeed = 0.1 + Math.random() * 0.2;
        const currentRotation = planet.style.transform ? 
            parseFloat(planet.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0 : 0;
        planet.style.transform = `rotate(${currentRotation + rotationSpeed}deg)`;
        
        // Update atmospheric glow
        const atmosphere = planet.querySelector('.planet-atmosphere');
        if (atmosphere) {
            const currentOpacity = parseFloat(atmosphere.style.opacity);
            atmosphere.style.opacity = `${0.4 + Math.sin(Date.now() * 0.001) * 0.1}`;
        }
        
        // Update moons
        const moons = planet.querySelectorAll('.planet-moon');
        moons.forEach(moon => {
            const currentRotation = moon.style.transform ? 
                parseFloat(moon.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0 : 0;
            moon.style.transform = `rotate(${currentRotation + 1}deg)`;
        });
    });
}

// Portal System
function initPortal() {
    const portal = document.querySelector('.cosmic-portal');
    const rings = document.querySelectorAll('.portal-ring');
    const core = document.querySelector('.portal-core');
    
    // Add portal particles
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'portal-particle';
        particle.style.position = 'absolute';
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.boxShadow = `0 0 ${5 + Math.random() * 10}px currentColor`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particle.style.animation = `portalParticle ${3 + Math.random() * 7}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        portal.appendChild(particle);
    }
    
    // Add portal glow
    const portalGlow = document.createElement('div');
    portalGlow.className = 'portal-glow';
    portalGlow.style.position = 'absolute';
    portalGlow.style.width = '120%';
    portalGlow.style.height = '120%';
    portalGlow.style.left = '-10%';
    portalGlow.style.top = '-10%';
    portalGlow.style.borderRadius = '50%';
    portalGlow.style.background = 'transparent';
    portalGlow.style.boxShadow = `0 0 100px 50px rgba(138, 43, 226, 0.3)`;
    portalGlow.style.filter = 'blur(10px)';
    portalGlow.style.opacity = '0';
    portalGlow.style.animation = 'portalGlowPulse 3s ease-in-out infinite alternate';
    portal.appendChild(portalGlow);
    
    // Add interactive effect
    portal.addEventListener('mousemove', (e) => {
        const rect = portal.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update core position slightly
        core.style.transform = `translate(calc(-50% + ${(x - rect.width/2) * 0.05}px), calc(-50% + ${(y - rect.height/2) * 0.05}px))`;
        
        // Intensify glow near mouse
        portalGlow.style.boxShadow = `0 0 120px 60px rgba(138, 43, 226, 0.4)`;
    });
    
    portal.addEventListener('mouseleave', () => {
        core.style.transform = 'translate(-50%, -50%)';
        portalGlow.style.boxShadow = '0 0 100px 50px rgba(138, 43, 226, 0.3)';
    });
}

function updatePortal(deltaTime) {
    const portal = document.querySelector('.cosmic-portal');
    const rings = document.querySelectorAll('.portal-ring');
    const core = document.querySelector('.portal-core');
    
    // Update ring effects
    rings.forEach((ring, i) => {
        const currentScale = ring.style.transform ? 
            parseFloat(ring.style.transform.match(/scale\(([0-9.]+)\)/)[1]) || 1 : 1;
        const scaleVariation = 0.02;
        const newScale = 1 + Math.sin(Date.now() * 0.001 + i) * scaleVariation;
        ring.style.transform = `translate(-50%, -50%) scale(${newScale})`;
    });
    
    // Update core effects
    const corePulse = Math.sin(Date.now() * 0.002) * 0.1 + 1;
    core.style.transform = `translate(-50%, -50%) scale(${corePulse})`;
    
    // Update particles
    const particles = document.querySelectorAll('.portal-particle');
    particles.forEach(particle => {
        const animationDuration = parseFloat(particle.style.animationDuration) || 5;
        const progress = ((Date.now() / 1000) % animationDuration) / animationDuration;
        
        if (progress < 0.1) {
            particle.style.opacity = `${progress * 10}`;
        } else if (progress > 0.9) {
            particle.style.opacity = `${(1 - progress) * 10}`;
        } else {
            particle.style.opacity = '1';
        }
    });
}

// Title Animation System
function initTitleAnimation() {
    const title = document.querySelector('.cosmic-title');
    const subtitle = document.querySelector('.cosmic-subtitle');
    
    // Add hover effects to letters
    const letters = document.querySelectorAll('.cosmic-title .letter');
    letters.forEach(letter => {
        letter.addEventListener('mouseover', () => {
            letter.style.transform = 'translateY(-10px) scale(1.2)';
            letter.style.textShadow = `0 0 20px #fff, 0 0 40px ${getRandomColor()}`;
        });
        
        letter.addEventListener('mouseout', () => {
            letter.style.transform = '';
            letter.style.textShadow = '';
        });
    });
    
    // Add hover effects to words
    const words = document.querySelectorAll('.cosmic-subtitle .word');
    words.forEach(word => {
        word.addEventListener('mouseover', () => {
            word.style.transform = 'scale(1.2)';
            word.style.color = getRandomColor();
        });
        
        word.addEventListener('mouseout', () => {
            word.style.transform = '';
            word.style.color = '';
        });
    });
    
    // Add periodic title pulse
    setInterval(() => {
        title.style.transform = 'translate(-50%, -50%) scale(1.05)';
        setTimeout(() => {
            title.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);
    }, 10000);
}

function updateTitleAnimation(deltaTime) {
    const letters = document.querySelectorAll('.cosmic-title .letter');
    letters.forEach((letter, i) => {
        const offset = i * 0.1;
        const floatAmount = Math.sin(Date.now() * 0.001 + offset) * 5;
        letter.style.transform = `translateY(${floatAmount}px)`;
    });
    
    const words = document.querySelectorAll('.cosmic-subtitle .word');
    words.forEach((word, i) => {
        const offset = i * 0.2;
        const glowIntensity = 0.7 + Math.sin(Date.now() * 0.001 + offset) * 0.3;
        word.style.opacity = glowIntensity;
    });
}

// Space Objects System
function initSpaceObjects() {
    const spaceObjects = document.querySelectorAll('.space-object');
    
    spaceObjects.forEach(obj => {
        // Add unique details based on type
        if (obj.classList.contains('asteroid-1') || 
            obj.classList.contains('asteroid-2') || 
            obj.classList.contains('asteroid-3')) {
            
            // Add asteroid craters
            const craterCount = obj.classList.contains('asteroid-1') ? 8 : 
                               obj.classList.contains('asteroid-2') ? 5 : 3;
            
            for (let i = 0; i < craterCount; i++) {
                const crater = document.createElement('div');
                crater.className = 'asteroid-crater';
                crater.style.position = 'absolute';
                crater.style.width = `${10 + Math.random() * 20}%`;
                crater.style.height = crater.style.width;
                crater.style.borderRadius = '50%';
                crater.style.background = 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%)';
                crater.style.left = `${Math.random() * 80}%`;
                crater.style.top = `${Math.random() * 80}%`;
                obj.appendChild(crater);
            }
            
            // Add rotation animation
            obj.style.animation = `asteroidRotate ${20 + Math.random() * 40}s linear infinite`;
            
        } else if (obj.classList.contains('comet')) {
            // Add comet tail particles
            for (let i = 0; i < 30; i++) {
                const tailParticle = document.createElement('div');
                tailParticle.className = 'comet-tail-particle';
                tailParticle.style.position = 'absolute';
                tailParticle.style.width = `${1 + Math.random() * 3}px`;
                tailParticle.style.height = `${20 + Math.random() * 50}px`;
                tailParticle.style.background = 'linear-gradient(to bottom, rgba(173,216,230,1) 0%, rgba(173,216,230,0) 100%)';
                tailParticle.style.left = `${-20 - Math.random() * 50}px`;
                tailParticle.style.top = `${Math.random() * 20}px`;
                tailParticle.style.opacity = '0';
                tailParticle.style.animation = `cometTailParticle ${1 + Math.random() * 2}s linear infinite`;
                tailParticle.style.animationDelay = `${Math.random() * 2}s`;
                obj.appendChild(tailParticle);
            }
        } else if (obj.classList.contains('satellite')) {
            // Add satellite details
            const solarPanel = document.createElement('div');
            solarPanel.className = 'satellite-panel';
            solarPanel.style.position = 'absolute';
            solarPanel.style.width = '30px';
            solarPanel.style.height = '5px';
            solarPanel.style.background = 'linear-gradient(to right, #a9a9a9, #d3d3d3)';
            solarPanel.style.right = '5px';
            solarPanel.style.top = '2px';
            obj.appendChild(solarPanel);
            
            // Add flashing light
            const light = document.createElement('div');
            light.className = 'satellite-light';
            light.style.position = 'absolute';
            light.style.width = '3px';
            light.style.height = '3px';
            light.style.borderRadius = '50%';
            light.style.background = 'red';
            light.style.right = '2px';
            light.style.top = '3px';
            light.style.boxShadow = '0 0 5px red';
            light.style.animation = 'satelliteBlink 1s linear infinite';
            obj.appendChild(light);
        } else if (obj.classList.contains('ufo')) {
            // Add ufo details
            const dome = document.createElement('div');
            dome.className = 'ufo-dome';
            dome.style.position = 'absolute';
            dome.style.width = '80%';
            dome.style.height = '60%';
            dome.style.borderRadius = '50%';
            dome.style.background = 'radial-gradient(circle, rgba(0,255,0,0.3) 0%, rgba(0,100,0,0.7) 100%)';
            dome.style.left = '10%';
            dome.style.top = '-30%';
            dome.style.border = '1px solid rgba(0,255,0,0.5)';
            obj.appendChild(dome);
            
            // Add ufo lights
            for (let i = 0; i < 5; i++) {
                const light = document.createElement('div');
                light.className = 'ufo-light';
                light.style.position = 'absolute';
                light.style.width = '6px';
                light.style.height = '6px';
                light.style.borderRadius = '50%';
                light.style.background = `hsl(${Math.random() * 60 + 100}, 100%, 50%)`;
                light.style.bottom = '2px';
                light.style.left = `${10 + i * 20}%`;
                light.style.boxShadow = `0 0 5px currentColor`;
                light.style.animation = `ufoLightPulse ${1 + Math.random() * 2}s ease-in-out infinite alternate`;
                light.style.animationDelay = `${i * 0.2}s`;
                obj.appendChild(light);
            }
        }
    });
}

function updateSpaceObjects(deltaTime) {
    const spaceObjects = document.querySelectorAll('.space-object');
    
    spaceObjects.forEach(obj => {
        // Update comet tail particles
        if (obj.classList.contains('comet')) {
            const tailParticles = obj.querySelectorAll('.comet-tail-particle');
            tailParticles.forEach(particle => {
                const animationDuration = parseFloat(particle.style.animationDuration) || 1.5;
                const progress = ((Date.now() / 1000) % animationDuration) / animationDuration;
                
                if (progress < 0.2) {
                    particle.style.opacity = `${progress * 5}`;
                } else if (progress > 0.8) {
                    particle.style.opacity = `${(1 - progress) * 5}`;
                } else {
                    particle.style.opacity = '1';
                }
            });
        }
        
        // Update UFO light colors
        if (obj.classList.contains('ufo')) {
            const ufoLights = obj.querySelectorAll('.ufo-light');
            ufoLights.forEach(light => {
                if (Math.random() < 0.01) {
                    light.style.background = `hsl(${Math.random() * 60 + 100}, 100%, 50%)`;
                }
            });
        }
    });
}

// Grid System
function initGridSystem() {
    const grid = document.querySelector('.cosmic-grid');
    
    // Add diagonal grid lines
    for (let i = 0; i < 4; i++) {
        const diagLine = document.createElement('div');
        diagLine.className = 'grid-line diagonal';
        diagLine.style.position = 'absolute';
        diagLine.style.width = '200%';
        diagLine.style.height = '1px';
        diagLine.style.background = 'rgba(0, 255, 255, 0.05)';
        diagLine.style.transformOrigin = 'left center';
        diagLine.style.transform = `rotate(${30 + i * 30}deg)`;
        diagLine.style.left = '0';
        diagLine.style.top = '0';
        diagLine.style.animation = `gridPulse ${5 + i}s ease-in-out infinite alternate`;
        diagLine.style.animationDelay = `${i * 0.5}s`;
        grid.appendChild(diagLine);
    }
    
    // Add grid intersection points
    const horizontalLines = document.querySelectorAll('.grid-line.horizontal');
    const verticalLines = document.querySelectorAll('.grid-line.vertical');
    
    horizontalLines.forEach(hLine => {
        verticalLines.forEach(vLine => {
            const hPos = parseFloat(hLine.style.top);
            const vPos = parseFloat(vLine.style.left);
            
            const intersection = document.createElement('div');
            intersection.className = 'grid-intersection';
            intersection.style.position = 'absolute';
            intersection.style.width = '6px';
            intersection.style.height = '6px';
            intersection.style.borderRadius = '50%';
            intersection.style.background = 'rgba(0, 255, 255, 0.3)';
            intersection.style.left = `${vPos}%`;
            intersection.style.top = `${hPos}%`;
            intersection.style.transform = 'translate(-50%, -50%)';
            intersection.style.animation = `intersectionPulse ${3 + Math.random() * 4}s ease-in-out infinite alternate`;
            intersection.style.animationDelay = `${Math.random() * 5}s`;
            grid.appendChild(intersection);
        });
    });
}

function updateGridSystem(deltaTime) {
    const gridLines = document.querySelectorAll('.grid-line');
    const intersections = document.querySelectorAll('.grid-intersection');
    
    // Update grid line glow
    gridLines.forEach(line => {
        const pulseIntensity = 0.5 + Math.sin(Date.now() * 0.001) * 0.5;
        line.style.boxShadow = `0 0 ${pulseIntensity * 5}px rgba(0, 255, 255, ${pulseIntensity * 0.2})`;
    });
    
    // Update intersection points
    intersections.forEach(point => {
        if (Math.random() < 0.01) {
            point.style.background = `rgba(0, 255, 255, ${0.2 + Math.random() * 0.3})`;
            point.style.boxShadow = `0 0 ${5 + Math.random() * 10}px rgba(0, 255, 255, 0.5)`;
        }
    });
}

// Interactive Elements System
function initInteractiveElements() {
    const energyBalls = document.querySelectorAll('.energy-ball');
    
    energyBalls.forEach(ball => {
        // Add click effect
        ball.addEventListener('click', () => {
            ball.style.transform = 'scale(1.5)';
            ball.style.boxShadow = `0 0 40px ${ball.style.background.split(' ')[0]}`;
            
            // Create explosion effect
            const explosion = document.createElement('div');
            explosion.className = 'energy-explosion';
            explosion.style.position = 'absolute';
            explosion.style.width = '100px';
            explosion.style.height = '100px';
            explosion.style.borderRadius = '50%';
            explosion.style.background = `radial-gradient(circle, ${ball.style.background.split(' ')[0]}, transparent 70%)`;
            explosion.style.left = '50%';
            explosion.style.top = '50%';
            explosion.style.transform = 'translate(-50%, -50%)';
            explosion.style.opacity = '1';
            explosion.style.animation = 'energyExplosion 1s ease-out forwards';
            
            ball.appendChild(explosion);
            
            setTimeout(() => {
                ball.style.transform = 'scale(1.2)';
                ball.style.boxShadow = `0 0 20px ${ball.style.background.split(' ')[0]}`;
                explosion.remove();
            }, 1000);
        });
        
        // Add hover effect
        ball.addEventListener('mouseover', () => {
            ball.style.cursor = 'pointer';
            ball.style.filter = 'brightness(1.5)';
        });
        
        ball.addEventListener('mouseout', () => {
            ball.style.filter = 'brightness(1)';
        });
    });
}

function updateInteractiveElements(deltaTime) {
    const energyBalls = document.querySelectorAll('.energy-ball');
    
    energyBalls.forEach(ball => {
        // Random color shift
        if (Math.random() < 0.01) {
            const hue = Math.floor(Math.random() * 60) + 10; // Warm colors
            ball.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 50%), hsl(${hue + 20}, 100%, 40%))`;
            ball.style.boxShadow = `0 0 20px hsl(${hue}, 100%, 50%)`;
        }
        
        // Gentle floating motion
        const floatAmount = Math.sin(Date.now() * 0.001 + parseInt(ball.style.animationDelay || '0')) * 10;
        ball.style.transform = `translateY(${floatAmount}px) scale(1.2)`;
    });
}

// Info Cards System
function initInfoCards() {
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseover', () => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1.05)';
            
            // Highlight related elements
            const cardNum = card.getAttribute('data-card');
            const relatedElements = document.querySelectorAll(`[data-relates-to="${cardNum}"]`);
            relatedElements.forEach(el => {
                el.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
                el.style.transform = 'scale(1.1)';
            });
        });
        
        card.addEventListener('mouseout', () => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(1)';
            
            // Unhighlight related elements
            const cardNum = card.getAttribute('data-card');
            const relatedElements = document.querySelectorAll(`[data-relates-to="${cardNum}"]`);
            relatedElements.forEach(el => {
                el.style.boxShadow = '';
                el.style.transform = '';
            });
        });
        
        // Add click effect
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(0) scale(1.1)';
            card.style.boxShadow = '0 0 40px rgba(0, 255, 255, 0.9)';
            
            setTimeout(() => {
                card.style.transform = 'translateY(0) scale(1.05)';
                card.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.7)';
            }, 300);
        });
    });
}

function updateInfoCards(deltaTime) {
    // Cards are mostly updated via event handlers
}

// Control Panel System
function initControlPanel() {
    const controlPanel = document.querySelector('.control-panel');
    const buttons = document.querySelectorAll('.control-button');
    const slider = document.querySelector('.control-slider');
    const switchBtn = document.querySelector('.control-switch');
    
    // Button click effects
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.9)';
            button.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.9)';
            
            // Trigger different effects based on button
            const buttonNum = button.getAttribute('data-control');
            triggerControlEffect(buttonNum);
            
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
            }, 300);
        });
    });
    
    // Slider interaction
    let isDragging = false;
    slider.addEventListener('mousedown', () => {
        isDragging = true;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const rect = slider.getBoundingClientRect();
            let pos = (e.clientX - rect.left) / rect.width;
            pos = Math.max(0, Math.min(1, pos));
            
            const knob = slider.querySelector('::before');
            knob.style.left = `${pos * 100}%`;
            
            // Update universe effects based on slider position
            updateUniverseSpeed(pos);
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Switch interaction
    switchBtn.addEventListener('click', () => {
        const isOn = switchBtn.classList.toggle('on');
        
        if (isOn) {
            switchBtn.querySelector('::before').style.left = 'calc(100% - 18px)';
            switchBtn.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
            activateUniverseEffects();
        } else {
            switchBtn.querySelector('::before').style.left = '2px';
            switchBtn.style.boxShadow = 'none';
            deactivateUniverseEffects();
        }
    });
}

function updateControlPanel(deltaTime) {
    const buttons = document.querySelectorAll('.control-button');
    
    // Randomly highlight buttons
    buttons.forEach(button => {
        if (Math.random() < 0.01) {
            button.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.9)';
            setTimeout(() => {
                button.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
            }, 500);
        }
    });
}

// Particle Systems
function initParticleSystems() {
    const particleSystems = document.querySelectorAll('.particle-system');
    
    particleSystems.forEach(system => {
        // Create particles based on type
        const particleCount = system.getAttribute('data-type') === '1' ? 50 : 
                            system.getAttribute('data-type') === '2' ? 30 : 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = `${2 + Math.random() * 4}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            
            if (system.getAttribute('data-type') === '1') {
                particle.style.background = `rgba(0, ${Math.floor(150 + Math.random() * 105)}, 255, 0.7)`;
            } else if (system.getAttribute('data-type') === '2') {
                particle.style.background = `rgba(255, ${Math.floor(50 + Math.random() * 100)}, 0, 0.7)`;
            } else {
                particle.style.background = `rgba(255, 255, 0, 0.7)`;
            }
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = '0';
            particle.style.animation = `particleFloat ${5 + Math.random() * 10}s linear infinite`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            
            system.appendChild(particle);
        }
    });
}

function updateParticleSystems(deltaTime) {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        // Update particle opacity based on animation progress
        const animationDuration = parseFloat(particle.style.animationDuration) || 7.5;
        const progress = ((Date.now() / 1000) % animationDuration) / animationDuration;
        
        if (progress < 0.2) {
            particle.style.opacity = `${progress * 5}`;
        } else if (progress > 0.8) {
            particle.style.opacity = `${(1 - progress) * 5}`;
        } else {
            particle.style.opacity = '0.7';
        }
    });
}

// Wormhole System
function initWormholes() {
    const wormholes = document.querySelectorAll('.wormhole');
    
    wormholes.forEach(wormhole => {
        // Add accretion disk
        const disk = document.createElement('div');
        disk.className = 'wormhole-disk';
        disk.style.position = 'absolute';
        disk.style.width = '200%';
        disk.style.height = '200%';
        disk.style.left = '-50%';
        disk.style.top = '-50%';
        disk.style.borderRadius = '50%';
        
        if (wormhole.classList.contains('entrance')) {
            disk.style.background = `conic-gradient(
                from 0deg,
                #9400d3 0%,
                #4b0082 25%,
                #0000ff 50%,
                #4b0082 75%,
                #9400d3 100%
            )`;
        } else {
            disk.style.background = `conic-gradient(
                from 0deg,
                #ff4500 0%,
                #ff8c00 25%,
                #ff0000 50%,
                #ff8c00 75%,
                #ff4500 100%
            )`;
        }
        
        disk.style.animation = `wormholeSpin ${20 + Math.random() * 20}s linear infinite`;
        wormhole.appendChild(disk);
        
        // Add inner glow
        const glow = document.createElement('div');
        glow.className = 'wormhole-glow';
        glow.style.position = 'absolute';
        glow.style.width = '50%';
        glow.style.height = '50%';
        glow.style.left = '25%';
        glow.style.top = '25%';
        glow.style.borderRadius = '50%';
        glow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)';
        glow.style.filter = 'blur(10px)';
        wormhole.appendChild(glow);
        
        // Add particle funnel
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'wormhole-particle';
            particle.style.position = 'absolute';
            particle.style.width = `${2 + Math.random() * 4}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            
            if (wormhole.classList.contains('entrance')) {
                particle.style.background = `rgba(148, 0, 211, ${0.5 + Math.random() * 0.5})`;
            } else {
                particle.style.background = `rgba(255, 69, 0, ${0.5 + Math.random() * 0.5})`;
            }
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `wormholeParticle ${3 + Math.random() * 7}s linear infinite`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            wormhole.appendChild(particle);
        }
    });
}

function updateWormholes(deltaTime) {
    const wormholes = document.querySelectorAll('.wormhole');
    
    wormholes.forEach(wormhole => {
        // Update particle effects
        const particles = wormhole.querySelectorAll('.wormhole-particle');
        particles.forEach(particle => {
            const animationDuration = parseFloat(particle.style.animationDuration) || 5;
            const progress = ((Date.now() / 1000) % animationDuration) / animationDuration;
            
            if (progress < 0.3) {
                // Particle entering wormhole
                const scale = 1 - progress * 3;
                particle.style.transform = `scale(${scale})`;
                particle.style.opacity = '1';
            } else if (progress > 0.7) {
                // Particle exiting wormhole
                const scale = (progress - 0.7) * 3.33;
                particle.style.transform = `scale(${scale})`;
                particle.style.opacity = `${(1 - progress) * 3.33}`;
            } else {
                // Particle inside wormhole (not visible)
                particle.style.transform = 'scale(0)';
                particle.style.opacity = '0';
            }
        });
        
        // Connect entrance and exit wormholes
        if (wormhole.classList.contains('entrance')) {
            const exit = document.querySelector('.wormhole.exit');
            if (exit) {
                // Create connection line (visible in dev tools)
                wormhole.style.setProperty('--exit-x', `${exit.getBoundingClientRect().left + exit.offsetWidth/2}px`);
                wormhole.style.setProperty('--exit-y', `${exit.getBoundingClientRect().top + exit.offsetHeight/2}px`);
            }
        }
    });
}

// Time Dilation System
function initTimeDilation() {
    const timeField = document.querySelector('.time-dilation-field');
    
    // Add time warp effect
    const warpEffect = document.createElement('div');
    warpEffect.className = 'time-warp-effect';
    warpEffect.style.position = 'absolute';
    warpEffect.style.width = '100%';
    warpEffect.style.height = '100%';
    warpEffect.style.borderRadius = '50%';
    warpEffect.style.background = 'conic-gradient(from 0deg, transparent 0%, rgba(0, 255, 255, 0.1) 10%, transparent 20%)';
    warpEffect.style.animation = 'timeWarpSpin 10s linear infinite';
    timeField.appendChild(warpEffect);
    
    // Add time particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'time-particle';
        particle.style.position = 'absolute';
        particle.style.width = `${1 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(0, 255, 255, 0.7)';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `timeParticle ${5 + Math.random() * 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        timeField.appendChild(particle);
    }
}

function updateTimeDilation(deltaTime) {
    const timeField = document.querySelector('.time-dilation-field');
    const particles = timeField.querySelectorAll('.time-particle');
    
    // Update particle speeds based on distance from center
    particles.forEach(particle => {
        const rect = timeField.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const particleX = parseFloat(particle.style.left) / 100 * rect.width + rect.left;
        const particleY = parseFloat(particle.style.top) / 100 * rect.height + rect.top;
        
        const dx = particleX - centerX;
        const dy = particleY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = rect.width / 2;
        
        // Time dilation effect - particles move slower near center
        const timeFactor = distance / maxDistance;
        particle.style.animationDuration = `${5 + timeFactor * 10}s`;
    });
}

// Gravitational Waves System
function initGravitationalWaves() {
    const waves = document.querySelectorAll('.gravitational-wave');
    
    waves.forEach(wave => {
        // Add interference pattern
        const pattern = document.createElement('div');
        pattern.className = 'wave-pattern';
        pattern.style.position = 'absolute';
        pattern.style.width = '100%';
        pattern.style.height = '100%';
        pattern.style.borderRadius = '50%';
        pattern.style.background = 'radial-gradient(circle, transparent 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%)';
        wave.appendChild(pattern);
    });
}

function updateGravitationalWaves(deltaTime) {
    const waves = document.querySelectorAll('.gravitational-wave');
    
    waves.forEach(wave => {
        // Update wave distortion effect
        const progress = ((Date.now() / 1000) % 8) / 8;
        const distortion = Math.sin(progress * Math.PI * 2) * 5;
        wave.style.transform = `translate(-50%, -50%) scale(${1 + progress * 0.2})`;
        wave.style.filter = `blur(${distortion}px)`;
    });
}

// Black Hole System
function initBlackHole() {
    const blackHole = document.querySelector('.black-hole');
    const accretionDisk = blackHole.querySelector('.accretion-disk');
    
    // Add disk turbulence
    const turbulence = document.createElement('div');
    turbulence.className = 'disk-turbulence';
    turbulence.style.position = 'absolute';
    turbulence.style.width = '100%';
    turbulence.style.height = '100%';
    turbulence.style.borderRadius = '50%';
    turbulence.style.background = 'radial-gradient(circle, transparent 70%, rgba(0, 0, 0, 0.7) 100%)';
    turbulence.style.animation = 'diskTurbulence 10s linear infinite';
    accretionDisk.appendChild(turbulence);
    
    // Add jet streams
    const jetStream1 = document.createElement('div');
    jetStream1.className = 'jet-stream';
    jetStream1.style.position = 'absolute';
    jetStream1.style.width = '20px';
    jetStream1.style.height = '300px';
    jetStream1.style.background = 'linear-gradient(to top, rgba(0, 255, 255, 0.8) 0%, transparent 100%)';
    jetStream1.style.left = '50%';
    jetStream1.style.bottom = '100%';
    jetStream1.style.transform = 'translateX(-50%)';
    jetStream1.style.animation = 'jetStreamFlow 3s linear infinite';
    blackHole.appendChild(jetStream1);
    
    const jetStream2 = document.createElement('div');
    jetStream2.className = 'jet-stream';
    jetStream2.style.position = 'absolute';
    jetStream2.style.width = '20px';
    jetStream2.style.height = '300px';
    jetStream2.style.background = 'linear-gradient(to bottom, rgba(0, 255, 255, 0.8) 0%, transparent 100%)';
    jetStream2.style.left = '50%';
    jetStream2.style.top = '100%';
    jetStream2.style.transform = 'translateX(-50%)';
    jetStream2.style.animation = 'jetStreamFlow 3s linear infinite';
    blackHole.appendChild(jetStream2);
    
    // Add lensing effect
    const lensing = document.createElement('div');
    lensing.className = 'black-hole-lensing';
    lensing.style.position = 'absolute';
    lensing.style.width = '500%';
    lensing.style.height = '500%';
    lensing.style.left = '-200%';
    lensing.style.top = '-200%';
    lensing.style.borderRadius = '50%';
    lensing.style.background = 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.1) 100%)';
    lensing.style.animation = 'blackHoleLensing 10s linear infinite';
    blackHole.appendChild(lensing);
}

function updateBlackHole(deltaTime) {
    const blackHole = document.querySelector('.black-hole');
    const accretionDisk = blackHole.querySelector('.accretion-disk');
    const singularity = blackHole.querySelector('.singularity');
    
    // Update disk rotation speed
    const currentRotation = parseFloat(accretionDisk.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0;
    accretionDisk.style.transform = `rotate(${currentRotation + 0.5}deg)`;
    
    // Update singularity pulse
    const pulseIntensity = 0.5 + Math.sin(Date.now() * 0.001) * 0.5;
    singularity.style.boxShadow = `0 0 ${10 + pulseIntensity * 20}px rgba(255, 255, 255, ${0.1 + pulseIntensity * 0.1})`;
    
    // Update jet streams
    const jetStreams = blackHole.querySelectorAll('.jet-stream');
    jetStreams.forEach(jet => {
        const height = parseFloat(jet.style.height);
        const newHeight = height + (Math.random() - 0.5) * 10;
        jet.style.height = `${Math.max(200, Math.min(400, newHeight))}px`;
    });
}

// Pulsars System
function initPulsars() {
    const pulsars = document.querySelectorAll('.pulsar');
    
    pulsars.forEach(pulsar => {
        // Add beam effect
        const beam = document.createElement('div');
        beam.className = 'pulsar-beam';
        beam.style.position = 'absolute';
        beam.style.width = '2px';
        beam.style.height = '500px';
        beam.style.background = 'linear-gradient(to bottom, rgba(0, 255, 255, 0.8) 0%, transparent 100%)';
        beam.style.left = '50%';
        beam.style.top = '50%';
        beam.style.transformOrigin = 'center top';
        beam.style.transform = 'translateX(-50%) rotate(0deg)';
        beam.style.opacity = '0';
        pulsar.appendChild(beam);
        
        // Add second beam at 180 degrees
        const beam2 = beam.cloneNode();
        beam2.style.transform = 'translateX(-50%) rotate(180deg)';
        pulsar.appendChild(beam2);
    });
}

function updatePulsars(deltaTime) {
    const pulsars = document.querySelectorAll('.pulsar');
    
    pulsars.forEach(pulsar => {
        const beams = pulsar.querySelectorAll('.pulsar-beam');
        const animationDuration = pulsar.getAttribute('data-speed') === 'fast' ? 1 : 
                                pulsar.getAttribute('data-speed') === 'medium' ? 2 : 3;
        
        const progress = ((Date.now() / 1000) % animationDuration) / animationDuration;
        
        beams.forEach((beam, i) => {
            if (progress < 0.1) {
                // Beam on
                beam.style.opacity = '1';
                beam.style.height = '500px';
                beam.style.transform = `translateX(-50%) rotate(${i * 180 + progress * 360 * 5}deg)`;
            } else {
                // Beam off
                beam.style.opacity = '0';
            }
        });
    });
}

// Quantum Foam System
function initQuantumFoam() {
    const quantumFoam = document.querySelector('.quantum-foam');
    
    // Add virtual particles
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.position = 'absolute';
        particle.style.width = `${1 + Math.random() * 2}px`;
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(255, 255, 255, 0.7)';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particle.style.animation = `quantumFluctuate ${1 + Math.random() * 4}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        quantumFoam.appendChild(particle);
    }
}

function updateQuantumFoam(deltaTime) {
    const particles = document.querySelectorAll('.quantum-particle');
    
    particles.forEach(particle => {
        // Randomly create particle-antiparticle pairs
        if (Math.random() < 0.001 && particle.style.opacity === '0') {
            particle.style.opacity = '1';
            
            // Create antiparticle
            const antiparticle = particle.cloneNode();
            antiparticle.style.left = `${(parseFloat(particle.style.left) + (Math.random() - 0.5) * 2)}%`;
            antiparticle.style.top = `${(parseFloat(particle.style.top) + (Math.random() - 0.5) * 2)}%`;
            antiparticle.style.animationDelay = '0s';
            particle.parentNode.appendChild(antiparticle);
            
            // Both particles will annihilate after short time
            setTimeout(() => {
                particle.style.opacity = '0';
                if (antiparticle.parentNode) {
                    antiparticle.style.opacity = '0';
                }
            }, 300);
        }
    });
}

// Cosmic Strings System
function initCosmicStrings() {
    const strings = document.querySelectorAll('.cosmic-string');
    
    strings.forEach(string => {
        // Add vibration points
        for (let i = 0; i < 5; i++) {
            const point = document.createElement('div');
            point.className = 'string-vibration-point';
            point.style.position = 'absolute';
            point.style.width = '4px';
            point.style.height = '4px';
            point.style.borderRadius = '50%';
            point.style.background = '#00ffff';
            point.style.left = `${i * 20}%`;
            point.style.top = '50%';
            point.style.transform = 'translate(-50%, -50%)';
            point.style.boxShadow = '0 0 5px #00ffff';
            point.style.animation = `stringVibratePoint ${2 + Math.random() * 3}s ease-in-out infinite`;
            point.style.animationDelay = `${i * 0.2}s`;
            string.appendChild(point);
        }
    });
}

function updateCosmicStrings(deltaTime) {
    const strings = document.querySelectorAll('.cosmic-string');
    
    strings.forEach(string => {
        // Update string tension
        const tension = Math.sin(Date.now() * 0.001) * 5;
        string.style.transform = `rotate(${tension}deg)`;
    });
}

// Dark Matter System
function initDarkMatter() {
    const darkMatter = document.querySelector('.dark-matter-halo');
    
    // Add dark matter particles (invisible but detectable through gravity)
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'dark-matter-particle';
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(0, 0, 0, 0.01)';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `darkMatterOrbit ${20 + Math.random() * 40}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        darkMatter.appendChild(particle);
        
        // Add gravitational influence indicator
        const influence = document.createElement('div');
        influence.className = 'gravitational-influence';
        influence.style.position = 'absolute';
        influence.style.width = '30px';
        influence.style.height = '30px';
        influence.style.borderRadius = '50%';
        influence.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%)';
        influence.style.left = '50%';
        influence.style.top = '50%';
        influence.style.transform = 'translate(-50%, -50%)';
        influence.style.opacity = '0';
        influence.style.animation = `gravityPulse ${5 + Math.random() * 10}s linear infinite`;
        particle.appendChild(influence);
    }
}

function updateDarkMatter(deltaTime) {
    const particles = document.querySelectorAll('.dark-matter-particle');
    
    particles.forEach(particle => {
        // Occasionally show gravitational influence
        if (Math.random() < 0.005) {
            const influence = particle.querySelector('.gravitational-influence');
            influence.style.opacity = '1';
            setTimeout(() => {
                influence.style.opacity = '0';
            }, 1000);
        }
    });
}

// Supernova Remnants System
function initSupernovaRemnants() {
    const remnants = document.querySelectorAll('.supernova-remnant');
    
    remnants.forEach(remnant => {
        // Add shockwave rings
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('div');
            ring.className = 'shockwave-ring';
            ring.style.position = 'absolute';
            ring.style.width = '100%';
            ring.style.height = '100%';
            ring.style.borderRadius = '50%';
            ring.style.border = '1px solid rgba(0, 255, 255, 0.3)';
            ring.style.left = '0';
            ring.style.top = '0';
            ring.style.transform = 'scale(0)';
            ring.style.animation = `shockwaveExpand ${5 + i * 2}s linear infinite`;
            ring.style.animationDelay = `${i * 1.5}s`;
            remnant.appendChild(ring);
        }
        
        // Add central pulsar
        const pulsar = document.createElement('div');
        pulsar.className = 'remnant-pulsar';
        pulsar.style.position = 'absolute';
        pulsar.style.width = '20px';
        pulsar.style.height = '20px';
        pulsar.style.borderRadius = '50%';
        pulsar.style.background = 'radial-gradient(circle, #ffffff, #00ffff)';
        pulsar.style.left = '50%';
        pulsar.style.top = '50%';
        pulsar.style.transform = 'translate(-50%, -50%)';
        pulsar.style.boxShadow = '0 0 20px #00ffff';
        pulsar.style.animation = 'pulsarPulse 2s ease-in-out infinite';
        remnant.appendChild(pulsar);
    });
}

function updateSupernovaRemnants(deltaTime) {
    const remnants = document.querySelectorAll('.supernova-remnant');
    
    remnants.forEach(remnant => {
        // Update expansion speed based on age
        const age = parseFloat(remnant.style.width) / 100;
        const rings = remnant.querySelectorAll('.shockwave-ring');
        rings.forEach(ring => {
            ring.style.animationDuration = `${5 / age}s`;
        });
    });
}

// Galactic Filaments System
function initGalacticFilaments() {
    const filaments = document.querySelectorAll('.galactic-filament');
    
    filaments.forEach(filament => {
        // Add galaxy clusters along filament
        for (let i = 0; i < 5; i++) {
            const cluster = document.createElement('div');
            cluster.className = 'galaxy-cluster';
            cluster.style.position = 'absolute';
            cluster.style.width = '20px';
            cluster.style.height = '20px';
            cluster.style.borderRadius = '50%';
            cluster.style.background = 'radial-gradient(circle, rgba(138, 43, 226, 0.8), rgba(75, 0, 130, 0.8))';
            cluster.style.left = `${i * 20}%`;
            cluster.style.top = '50%';
            cluster.style.transform = 'translate(-50%, -50%)';
            cluster.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.8)';
            cluster.style.animation = `clusterPulse ${3 + Math.random() * 4}s ease-in-out infinite`;
            cluster.style.animationDelay = `${i * 0.3}s`;
            filament.appendChild(cluster);
        }
    });
}

function updateGalacticFilaments(deltaTime) {
    const filaments = document.querySelectorAll('.galactic-filament');
    
    filaments.forEach(filament => {
        // Update filament glow based on cosmic time
        const timeFactor = (Date.now() * 0.0001) % 1;
        filament.style.boxShadow = `0 0 ${5 + timeFactor * 10}px rgba(138, 43, 226, ${0.3 + timeFactor * 0.2})`;
    });
}

// Navigation System
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animate transition to dimension
            const dimension = link.getAttribute('data-section');
            activateDimension(dimension);
            
            // Pulse all links
            navLinks.forEach(l => {
                l.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    l.style.transform = '';
                }, 300);
            });
            
            // Highlight selected link
            link.style.background = 'rgba(0, 255, 255, 0.3)';
            link.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.7)';
        });
    });
}

function updateNavigation(deltaTime) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Randomly pulse navigation links
    navLinks.forEach(link => {
        if (Math.random() < 0.01) {
            link.style.transform = 'scale(1.1)';
            link.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.7)';
            setTimeout(() => {
                link.style.transform = '';
                link.style.boxShadow = '';
            }, 500);
        }
    });
}

// Dimensional Portals System
function initDimensionalPortals() {
    const portals = document.querySelectorAll('.dimensional-portal');
    
    portals.forEach(portal => {
        // Add portal vortex
        const vortex = document.createElement('div');
        vortex.className = 'portal-vortex';
        vortex.style.position = 'absolute';
        vortex.style.width = '100%';
        vortex.style.height = '100%';
        vortex.style.borderRadius = '50%';
        vortex.style.background = 'conic-gradient(from 0deg, transparent 0%, currentColor 50%, transparent 100%)';
        vortex.style.animation = `portalVortexSpin ${5 + Math.random() * 10}s linear infinite`;
        portal.appendChild(vortex);
        
        // Add portal glow
        const glow = document.createElement('div');
        glow.className = 'portal-glow';
        glow.style.position = 'absolute';
        glow.style.width = '120%';
        glow.style.height = '120%';
        glow.style.left = '-10%';
        glow.style.top = '-10%';
        glow.style.borderRadius = '50%';
        glow.style.background = 'transparent';
        glow.style.boxShadow = '0 0 30px currentColor';
        glow.style.filter = 'blur(5px)';
        glow.style.opacity = '0.7';
        portal.appendChild(glow);
        
        // Add hover effect
        portal.addEventListener('mouseover', () => {
            vortex.style.animationDuration = '1s';
            glow.style.boxShadow = '0 0 50px currentColor';
        });
        
        portal.addEventListener('mouseout', () => {
            vortex.style.animationDuration = `${5 + Math.random() * 10}s`;
            glow.style.boxShadow = '0 0 30px currentColor';
        });
    });
}

function updateDimensionalPortals(deltaTime) {
    const portals = document.querySelectorAll('.dimensional-portal');
    
    portals.forEach(portal => {
        // Update portal energy fluctuations
        const color = portal.style.borderColor || getComputedStyle(portal).borderColor;
        const hue = parseInt(color.split(',')[0].split('(')[1]);
        const newHue = (hue + deltaTime * 0.01) % 360;
        portal.style.borderColor = `hsl(${newHue}, 100%, 50%)`;
    });
}

// Quantum Entanglement System
function initQuantumEntanglement() {
    const entanglement = document.querySelector('.quantum-entanglement');
    const particles = entanglement.querySelectorAll('.quantum-particle');
    
    // Connect entangled pairs
    particles.forEach(particle => {
        const pairNum = particle.getAttribute('data-pair');
        const pairParticle = entanglement.querySelector(`.quantum-particle[data-pair="${pairNum}"]:not([style*="left: ${particle.style.left}"])`);
        
        if (pairParticle) {
            // Create connection line
            const connection = document.createElement('div');
            connection.className = 'entanglement-connection';
            connection.style.position = 'absolute';
            connection.style.height = '1px';
            connection.style.background = 'linear-gradient(to right, transparent, #ff00ff, transparent)';
            connection.style.transformOrigin = 'left center';
            connection.style.opacity = '0.5';
            connection.style.animation = 'entanglementPulse 3s ease-in-out infinite';
            entanglement.appendChild(connection);
            
            // Update connection position in animation loop
            particle.dataset.connectionId = connection.id = `connection-${pairNum}`;
        }
        
        // Add spin animation
        particle.style.animation = `quantumSpin ${2 + Math.random() * 3}s linear infinite`;
    });
}

function updateQuantumEntanglement(deltaTime) {
    const entanglement = document.querySelector('.quantum-entanglement');
    const particles = entanglement.querySelectorAll('.quantum-particle');
    
    particles.forEach(particle => {
        // Update particle spin
        const currentRotation = particle.style.transform ? 
            parseFloat(particle.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0 : 0;
        particle.style.transform = `rotate(${currentRotation + 2}deg)`;
        
        // Update connection lines
        const pairNum = particle.getAttribute('data-pair');
        const connection = document.getElementById(`connection-${pairNum}`);
        const pairParticle = entanglement.querySelector(`.quantum-particle[data-pair="${pairNum}"]:not([style*="left: ${particle.style.left}"])`);
        
        if (connection && pairParticle) {
            const rect1 = particle.getBoundingClientRect();
            const rect2 = pairParticle.getBoundingClientRect();
            
            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.top + rect1.height / 2;
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top + rect2.height / 2;
            
            const dx = x2 - x1;
            const dy = y2 - y1;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            connection.style.width = `${distance}px`;
            connection.style.left = `${x1}px`;
            connection.style.top = `${y1}px`;
            connection.style.transform = `rotate(${angle}deg)`;
            
            // Change color when particles are in same state
            const rotation1 = parseFloat(particle.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0;
            const rotation2 = parseFloat(pairParticle.style.transform.match(/rotate\(([0-9]+)deg\)/)[1]) || 0;
            
            if (Math.abs(rotation1 - rotation2) % 180 < 10) {
                connection.style.background = 'linear-gradient(to right, transparent, #00ffff, transparent)';
            } else {
                connection.style.background = 'linear-gradient(to right, transparent, #ff00ff, transparent)';
            }
        }
    });
}

// Holographic Display System
function initHolographicDisplay() {
    const display = document.querySelector('.holographic-display');
    const holograms = display.querySelectorAll('.hologram');
    
    holograms.forEach((hologram, i) => {
        // Add hologram content based on type
        const content = document.createElement('div');
        content.className = 'hologram-content';
        content.style.position = 'absolute';
        content.style.width = '100%';
        content.style.height = '100%';
        content.style.borderRadius = '50%';
        
        if (hologram.getAttribute('data-hologram') === '1') {
            // Planetary system hologram
            content.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
            
            // Add central star
            const star = document.createElement('div');
            star.className = 'hologram-star';
            star.style.position = 'absolute';
            star.style.width = '20px';
            star.style.height = '20px';
            star.style.borderRadius = '50%';
            star.style.background = 'radial-gradient(circle, #ffff00, #ff8c00)';
            star.style.left = '50%';
            star.style.top = '50%';
            star.style.transform = 'translate(-50%, -50%)';
            star.style.boxShadow = '0 0 20px #ffff00';
            content.appendChild(star);
            
            // Add planets
            for (let j = 0; j < 5; j++) {
                const planet = document.createElement('div');
                planet.className = 'hologram-planet';
                planet.style.position = 'absolute';
                planet.style.width = `${5 + j * 2}px`;
                planet.style.height = planet.style.width;
                planet.style.borderRadius = '50%';
                planet.style.background = `hsl(${j * 60}, 70%, 50%)`;
                planet.style.left = '50%';
                planet.style.top = '50%';
                planet.style.transform = `translate(-50%, -50%) translateX(${30 + j * 15}px) rotate(${j * 72}deg)`;
                planet.style.transformOrigin = 'left center';
                planet.style.animation = `hologramOrbit ${10 + j * 5}s linear infinite`;
                content.appendChild(planet);
            }
        } else if (hologram.getAttribute('data-hologram') === '2') {
            // DNA helix hologram
            content.style.background = 'radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)';
            
            // Add DNA strands
            for (let j = 0; j < 20; j++) {
                const basePair = document.createElement('div');
                basePair.className = 'dna-base-pair';
                basePair.style.position = 'absolute';
                basePair.style.width = '2px';
                basePair.style.height = '10px';
                basePair.style.background = j % 2 === 0 ? '#00ffff' : '#ff00ff';
                basePair.style.left = '50%';
                basePair.style.top = `${j * 5}%`;
                basePair.style.transform = `translate(-50%,
