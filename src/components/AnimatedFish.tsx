import React, { useEffect, useState, useRef } from 'react';

interface FishProps {
  id: number;
  initialX: number;
  initialY: number;
}

const Fish = ({ id, initialX, initialY }: FishProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [heading, setHeading] = useState(Math.random() * Math.PI * 2); // Direction fish is facing
  const [targetHeading, setTargetHeading] = useState(0);
  const [speed, setSpeed] = useState(0.8 + Math.random() * 0.4);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = Math.min((currentTime - lastTimeRef.current) / 16.67, 2);
      lastTimeRef.current = currentTime;

      setPosition(prev => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const fishWidth = 55;
        const fishHeight = 40;
        const avoidanceZone = 120;

        // Calculate current forward direction (where fish is pointing)
        const forwardX = Math.cos(heading);
        const forwardY = Math.sin(heading);

        // Check distances to edges in the forward direction
        const distToLeft = prev.x;
        const distToRight = screenWidth - prev.x - fishWidth;
        const distToTop = prev.y;
        const distToBottom = screenHeight - prev.y - fishHeight;

        let newTargetHeading = targetHeading;
        let needsNewDirection = false;

        // If approaching edges, calculate escape angle
        if ((distToLeft < avoidanceZone && forwardX < 0) || 
            (distToRight < avoidanceZone && forwardX > 0) ||
            (distToTop < avoidanceZone && forwardY < 0) ||
            (distToBottom < avoidanceZone && forwardY > 0)) {
          
          // Calculate safe direction away from nearest edge
          let escapeAngle = 0;
          
          if (distToLeft < avoidanceZone && forwardX < 0) {
            // Too close to left, turn right (towards positive X)
            escapeAngle = Math.random() * Math.PI - Math.PI/2; // -90° to +90°
          } else if (distToRight < avoidanceZone && forwardX > 0) {
            // Too close to right, turn left (towards negative X)  
            escapeAngle = Math.PI/2 + Math.random() * Math.PI; // 90° to 270°
          } else if (distToTop < avoidanceZone && forwardY < 0) {
            // Too close to top, turn down (towards positive Y)
            escapeAngle = Math.random() * Math.PI; // 0° to 180°
          } else if (distToBottom < avoidanceZone && forwardY > 0) {
            // Too close to bottom, turn up (towards negative Y)
            escapeAngle = Math.PI + Math.random() * Math.PI; // 180° to 360°
          }
          
          newTargetHeading = escapeAngle;
          needsNewDirection = true;
        }

        // Random course corrections for natural swimming
        if (!needsNewDirection && Math.random() < 0.004) {
          const courseChange = (Math.random() - 0.5) * Math.PI * 0.5; // Max 90° change
          newTargetHeading = heading + courseChange;
        }

        // Speed variations
        if (Math.random() < 0.006) {
          setSpeed(0.6 + Math.random() * 0.8);
        }

        setTargetHeading(newTargetHeading);

        // Smooth heading adjustment (turn gradually towards target)
        let headingDiff = newTargetHeading - heading;
        
        // Always take shortest rotation path
        while (headingDiff > Math.PI) headingDiff -= 2 * Math.PI;
        while (headingDiff < -Math.PI) headingDiff += 2 * Math.PI;
        
        // Gradual turning - fish can't turn instantly
        const turnRate = needsNewDirection ? 0.05 : 0.02;
        const newHeading = heading + headingDiff * turnRate * deltaTime;
        setHeading(newHeading);

        // Move forward in current heading direction
        const moveSpeed = speed * deltaTime;
        const velocityX = Math.cos(newHeading) * moveSpeed;
        const velocityY = Math.sin(newHeading) * moveSpeed;

        // Update position
        let newX = prev.x + velocityX;
        let newY = prev.y + velocityY;

        // Safety boundaries (should rarely be needed)
        newX = Math.max(5, Math.min(screenWidth - fishWidth - 5, newX));
        newY = Math.max(5, Math.min(screenHeight - fishHeight - 5, newY));

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [heading, targetHeading, speed]);

  // Visual representation - fish body always faces movement direction
  const headingDegrees = (heading * 180) / Math.PI;

  const fishStyle = {
    transform: `translate(${position.x}px, ${position.y}px) rotate(${headingDegrees}deg) scaleX(-1)`,
    filter: 'drop-shadow(0 3px 8px rgba(255, 215, 0, 0.25)) drop-shadow(0 1px 3px rgba(184, 134, 11, 0.4))',
    transformOrigin: '50% 50%'
  };

  // Tail swimming animation
  const tailWave = Math.sin(Date.now() * 0.008 + id * 2) * 3;
  const finWave = Math.sin(Date.now() * 0.012 + id * 1.5) * 1.5;

  return (
    <div 
      className="fixed pointer-events-none z-10"
      style={fishStyle}
    >
      <svg width="55" height="40" viewBox="0 0 55 40" fill="none">
        <defs>
          <linearGradient id={`bodyGradient${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#FFA500" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#FF8C00" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#DAA520" stopOpacity="0.8" />
          </linearGradient>
          
          <radialGradient id={`highlight${id}`} cx="25%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FFFACD" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#FFD700" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#DAA520" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id={`finGradient${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.65" />
          </linearGradient>

          <filter id={`glow${id}`} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Body shadow */}
        <ellipse 
          cx="23" 
          cy="21" 
          rx="15" 
          ry="8" 
          fill="#DAA520" 
          opacity="0.15"
        />
        
        {/* Main body - head pointing right (forward direction) */}
        <ellipse 
          cx="22" 
          cy="20" 
          rx="15" 
          ry="8" 
          fill={`url(#bodyGradient${id})`}
          stroke="#B8860B" 
          strokeWidth="0.3"
          filter={`url(#glow${id})`}
        />
        
        {/* Body highlight */}
        <ellipse 
          cx="20" 
          cy="18" 
          rx="12" 
          ry="6" 
          fill={`url(#highlight${id})`}
        />
        
        {/* Animated tail fin - moves with swimming motion */}
        <g transform={`translate(0, ${tailWave}) rotate(${tailWave * 0.5} 38 20)`}>
          <path 
            d="M38 20L50 12C51 13 51 15 49 17L52 20L49 23C51 25 51 27 50 28L38 20Z" 
            fill={`url(#finGradient${id})`}
            stroke="#B8860B" 
            strokeWidth="0.4"
            opacity="0.9"
          />
        </g>
        
        {/* Dorsal fin with subtle animation */}
        <g transform={`translate(0, ${finWave * 0.5})`}>
          <path 
            d="M18 12C18 12 24 7 27 12C25 14 21 14 18 12Z" 
            fill={`url(#finGradient${id})`}
            stroke="#B8860B" 
            strokeWidth="0.3"
            opacity="0.8"
          />
        </g>
        
        {/* Ventral fin */}
        <g transform={`translate(0, ${-finWave * 0.3})`}>
          <path 
            d="M18 28C18 28 24 33 27 28C25 26 21 26 18 28Z" 
            fill={`url(#finGradient${id})`}
            stroke="#B8860B" 
            strokeWidth="0.3"
            opacity="0.8"
          />
        </g>
        
        {/* Pectoral fins */}
        <ellipse 
          cx="15" 
          cy="25" 
          rx="4" 
          ry="2" 
          fill={`url(#finGradient${id})`}
          opacity="0.7"
          transform={`rotate(25 15 25) translate(0, ${finWave * 0.3})`}
        />
        
        {/* Eye - positioned at front (head area) */}
        <circle cx="12" cy="17" r="2.5" fill="white" stroke="#DAA520" strokeWidth="0.2" />
        <circle cx="12" cy="17" r="1.8" fill="#2c3e50" />
        <circle cx="12.6" cy="16.4" r="0.6" fill="white" />
        <circle cx="11.8" cy="17.3" r="0.2" fill="white" opacity="0.9" />
        
        {/* Gill cover */}
        <path 
          d="M8 18C8 18 11 16 12 20C11 24 8 22 8 18Z" 
          fill="#B8860B"
          opacity="0.5"
        />
        
        {/* Scale pattern */}
        <g opacity="0.35">
          <circle cx="16" cy="18" r="0.7" fill="#B8860B" />
          <circle cx="20" cy="20" r="0.7" fill="#B8860B" />
          <circle cx="24" cy="19" r="0.7" fill="#B8860B" />
          <circle cx="22" cy="22" r="0.7" fill="#B8860B" />
          <circle cx="18" cy="23" r="0.7" fill="#B8860B" />
        </g>
        
        {/* Lateral line */}
        <path 
          d="M10 20C10 20 24 19.5 36 20" 
          stroke="#B8860B" 
          strokeWidth="0.4" 
          fill="none" 
          opacity="0.5"
        />
        
        {/* Mouth */}
        <ellipse 
          cx="7" 
          cy="19" 
          rx="1.5" 
          ry="0.8" 
          fill="#DAA520" 
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

const AnimatedFish = () => {
  const [fishes, setFishes] = useState<FishProps[]>([]);

  useEffect(() => {
    const fishCount = 3;
    const newFishes = Array.from({ length: fishCount }, (_, i) => {
      return {
        id: i,
        initialX: 150 + Math.random() * (window.innerWidth - 400),
        initialY: 150 + Math.random() * (window.innerHeight - 400)
      };
    });
    setFishes(newFishes);

    const handleResize = () => {
      setFishes(prevFishes => 
        prevFishes.map(fish => ({
          ...fish,
          initialX: Math.min(fish.initialX, window.innerWidth - 150),
          initialY: Math.min(fish.initialY, window.innerHeight - 150)
        }))
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.45 }}>
      {fishes.map(fish => (
        <Fish 
          key={fish.id} 
          id={fish.id} 
          initialX={fish.initialX} 
          initialY={fish.initialY} 
        />
      ))}
    </div>
  );
};

export default AnimatedFish;
