import type { CSSProperties } from 'react'
import './FloatingShapes.css'

type ShapeType = 'square' | 'circle' | 'triangle'

interface ShapeConfig {
    type: ShapeType
    left: number
    top: number
    size: number
    duration: number
    delay: number
    rotate: number
    accent: boolean
    filled: boolean
}

const SHAPES: ShapeConfig[] = [
    { type: 'square',   left: 6,  top: 12, size: 100, duration: 38, delay: 0,   rotate: 45,  accent: false, filled: true  },
    { type: 'circle',   left: 82, top: 8,  size: 140, duration: 46, delay: -12, rotate: 0,   accent: true,  filled: false },
    { type: 'triangle', left: 70, top: 34, size: 110, duration: 42, delay: -5,  rotate: 20,  accent: false, filled: false },
    { type: 'square',   left: 90, top: 58, size: 76,  duration: 34, delay: -20, rotate: 15,  accent: true,  filled: true  },
    { type: 'circle',   left: 12, top: 44, size: 90,  duration: 40, delay: -8,  rotate: 0,   accent: false, filled: true  },
    { type: 'triangle', left: 4,  top: 72, size: 130, duration: 50, delay: -25, rotate: -15, accent: true,  filled: false },
    { type: 'square',   left: 38, top: 86, size: 110, duration: 44, delay: -15, rotate: 30,  accent: false, filled: false },
    { type: 'circle',   left: 62, top: 78, size: 170, duration: 52, delay: -30, rotate: 0,   accent: false, filled: true  },
    { type: 'triangle', left: 26, top: 22, size: 84,  duration: 36, delay: -18, rotate: 60,  accent: false, filled: true  },
    { type: 'square',   left: 52, top: 6,  size: 64,  duration: 32, delay: -3,  rotate: 10,  accent: true,  filled: false },
    { type: 'circle',   left: 94, top: 86, size: 96,  duration: 39, delay: -22, rotate: 0,   accent: false, filled: false },
    { type: 'triangle', left: 48, top: 56, size: 100, duration: 48, delay: -10, rotate: -40, accent: true,  filled: true  },
]

function Shape({ type, left, top, size, duration, delay, rotate, accent, filled }: ShapeConfig) {
    const style = {
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        '--rot': `${rotate}deg`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
    } as CSSProperties

    const className = `shape shape--${type}${accent ? ' shape--accent' : ''}${filled ? ' shape--filled' : ''}`

    if (type === 'triangle') {
        return (
            <svg className={className} style={style} viewBox="0 0 100 100">
                <polygon points="50,8 94,90 6,90" />
            </svg>
        )
    }
    return <div className={className} style={style} />
}

export default function FloatingShapes() {
    return (
        <div className="floating-shapes" aria-hidden="true">
            {SHAPES.map((s, i) => (
                <Shape key={i} {...s} />
            ))}
        </div>
    )
}