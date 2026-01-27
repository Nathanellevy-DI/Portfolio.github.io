import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform, Raycast, Vec2 } from 'ogl';
import type { OGLRenderingContext } from 'ogl';
import { useEffect, useRef } from 'react';
import './CircularGallery.css';

// ... (previous imports and types remain similar, but adding Raycast to imports)

interface CircularGalleryProps {
    items?: { image: string; text: string; id?: string }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    onItemClick?: (index: number) => void;
}

// ... (Keep helper functions like debounce, lerp, autoBind, createTextTexture, Title class same)

// Update Media class to hold the mesh for raycasting
class Media {
    // ... items
    mesh: Mesh; // Alias for plane to make it clear
    // ... existing properties

    constructor({ geometry, gl, image, index, length, renderer, scene, screen, text, viewport, bend, textColor, borderRadius, font }: any) {
        // ... existing assignments
        this.geometry = geometry;
        this.gl = gl;
        // ...
        this.createShader();
        this.createMesh();
        this.createTitle();
        this.onResize();
    }

    // ... createShader ...

    createMesh() {
        this.plane = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
        this.mesh = this.plane; // Expose as mesh
    }

    // ... rest of Media class
}

class App {
    // ... existing properties
    raycast: Raycast;
    mouse: Vec2;
    onItemClick?: (index: number) => void;

    constructor(
        container: HTMLElement,
        {
            items,
            bend,
            textColor = '#ffffff',
            borderRadius = 0,
            font = 'bold 30px Figtree',
            scrollSpeed = 2,
            scrollEase = 0.05,
            onItemClick
        }: any = {}
    ) {
        // ... existing init
        this.onItemClick = onItemClick;
        this.mouse = new Vec2();
        // ...
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.raycast = new Raycast(this.gl); // Init raycast

        this.onResize();
        this.createGeometry();
        this.createMedias(items, bend, textColor, borderRadius, font);
        this.update();
        this.addEventListeners();
    }

    // ... createRenderer, createCamera, createScene, createGeometry, createMedias ...

    // Update addEventListeners to track mouse/touch for raycast
    addEventListeners() {
        this.boundOnResize = this.onResize.bind(this);
        this.boundOnWheel = this.onWheel.bind(this);
        this.boundOnTouchDown = this.onTouchDown.bind(this);
        this.boundOnTouchMove = this.onTouchMove.bind(this);
        this.boundOnTouchUp = this.onTouchUp.bind(this);

        // Add click listener
        this.gl.canvas.addEventListener('click', this.onClick.bind(this));

        window.addEventListener('resize', this.boundOnResize);
        // ... other listeners
        window.addEventListener('mousedown', this.boundOnTouchDown);
        window.addEventListener('mousemove', this.boundOnTouchMove);
        window.addEventListener('mouseup', this.boundOnTouchUp);
        window.addEventListener('touchstart', this.boundOnTouchDown);
        window.addEventListener('touchmove', this.boundOnTouchMove);
        window.addEventListener('touchend', this.boundOnTouchUp);
    }

    onClick(e: MouseEvent | TouchEvent) {
        if (!this.onItemClick) return;

        // Calculate mouse position in normalized device coordinates
        const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
        const y = (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;

        // Account for canvas position
        const rect = this.gl.canvas.getBoundingClientRect();
        this.mouse.set(
            2.0 * ((x - rect.left) / this.gl.canvas.width) - 1.0,
            2.0 * ((1.0 - (y - rect.top) / this.gl.canvas.height)) - 1.0
        );

        // Update raycaster
        this.raycast.castMouse(this.camera, this.mouse);

        // Find intersecting meshes
        // We need an array of meshes from medias
        const meshes = this.medias.map(m => m.plane);
        const hits = this.raycast.intersectBounds(meshes);

        if (hits.length) {
            // Find which media corresponds to the hit mesh
            const hitMesh = hits[0];
            const mediaIndex = this.medias.findIndex(m => m.plane === hitMesh);

            // Map back to original item index (since we double the array for infinite scroll)
            // mediasImages is galleryItems.concat(galleryItems)
            // So if mediaIndex >= half, it's the duplicate
            const originalLength = this.medias.length / 2;
            const trueIndex = mediaIndex % originalLength;

            this.onItemClick(trueIndex);
        }
    }

    // ... rest of class
}

export default function CircularGallery({
    items,
    bend = 3,
    textColor = '#ffffff',
    borderRadius = 0.05,
    font = 'bold 30px Figtree',
    scrollSpeed = 2,
    scrollEase = 0.05,
    onItemClick
}: CircularGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const app = new App(containerRef.current, {
            items,
            bend,
            textColor,
            borderRadius,
            font,
            scrollSpeed,
            scrollEase,
            onItemClick
        });
        return () => {
            app.destroy();
        };
    }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, onItemClick]);
    return <div className="circular-gallery" ref={containerRef} />;
}
