import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { X, RotateCcw, Play, Pause, Sparkles, Box } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ThreeDBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  coverImagePath: string;
}

export default function ThreeDBookModal({
  isOpen,
  onClose,
  coverImagePath,
}: ThreeDBookModalProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const autoRotateRef = useRef(true);

  useEffect(() => {
    autoRotateRef.current = isAutoRotating;
  }, [isAutoRotating]);

  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    bookMesh: THREE.Mesh;
    animationFrameId: number;
  } | null>(null);

  useEffect(() => {
    if (!isOpen || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup with clean, elegant light white background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#FAFAFA");

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(2.6, 1.1, 3.6);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.8;
    controls.maxDistance = 6.0;

    // 5. Studio Lighting for bright white pop-up presentation
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Main Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.95);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Warm Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0xf5eae0, 0.4);
    fillLight.position.set(-4, 2, -2);
    scene.add(fillLight);

    // Top Rim Light
    const rimLight = new THREE.DirectionalLight(0xd9c5b2, 0.3);
    rimLight.position.set(0, 5, -4);
    scene.add(rimLight);

    // Subtle Ground Shadow Plane
    const shadowPlaneGeo = new THREE.PlaneGeometry(10, 10);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.08 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.15;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 6. Book Geometry
    const bookWidth = 1.35;
    const bookHeight = 2.05;
    const bookThickness = 0.16;
    const geometry = new THREE.BoxGeometry(bookWidth, bookHeight, bookThickness);

    // Default burgundy placeholder material
    const defaultCoverMat = new THREE.MeshStandardMaterial({
      color: "#4A0E17",
      roughness: 0.35,
      metalness: 0.05,
    });
    const materialsArray: THREE.Material[] = Array(6).fill(defaultCoverMat);

    const bookMesh = new THREE.Mesh(geometry, materialsArray);
    bookMesh.castShadow = true;
    bookMesh.receiveShadow = true;
    scene.add(bookMesh);

    // Load Image and map without distortion
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = coverImagePath;

    img.onload = () => {
      const w = img.naturalWidth || 800;
      const h = img.naturalHeight || 1200;
      const aspectRatio = w / h;

      // Cream Pages Texture
      const canvasPage = document.createElement("canvas");
      canvasPage.width = 128;
      canvasPage.height = 512;
      const ctxPage = canvasPage.getContext("2d")!;
      ctxPage.fillStyle = "#FBF9F5";
      ctxPage.fillRect(0, 0, 128, 512);
      ctxPage.strokeStyle = "#E8DFD5";
      ctxPage.lineWidth = 1;
      for (let y = 0; y < 512; y += 4) {
        ctxPage.beginPath();
        ctxPage.moveTo(0, y);
        ctxPage.lineTo(128, y);
        ctxPage.stroke();
      }

      const createTex = (srcCanvas: HTMLCanvasElement | HTMLImageElement) => {
        const tex = new THREE.CanvasTexture(srcCanvas as HTMLCanvasElement);
        tex.minFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        return tex;
      };

      const pTex = createTex(canvasPage);

      if (aspectRatio > 1.2) {
        // It's a full flat jacket spread (back + spine + front)
        const spineLeft = 0.465;
        const spineRight = 0.535;

        const cut1 = w * spineLeft;
        const cut2 = w * spineRight;

        const canvasBack = document.createElement("canvas");
        canvasBack.width = Math.max(cut1, 100);
        canvasBack.height = h;
        canvasBack.getContext("2d")!.drawImage(img, 0, 0, cut1, h, 0, 0, canvasBack.width, h);

        const canvasSpine = document.createElement("canvas");
        const spineW = Math.max(cut2 - cut1, 40);
        canvasSpine.width = spineW;
        canvasSpine.height = h;
        canvasSpine.getContext("2d")!.drawImage(img, cut1, 0, spineW, h, 0, 0, spineW, h);

        const canvasFront = document.createElement("canvas");
        const frontW = Math.max(w - cut2, 100);
        canvasFront.width = frontW;
        canvasFront.height = h;
        canvasFront.getContext("2d")!.drawImage(img, cut2, 0, frontW, h, 0, 0, frontW, h);

        const fTex = createTex(canvasFront);
        const sTex = createTex(canvasSpine);
        const bTex = createTex(canvasBack);

        bookMesh.material = [
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Right (Pages)
          new THREE.MeshStandardMaterial({ map: sTex, roughness: 0.35, metalness: 0.05 }), // Left (Spine)
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Top (Pages)
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Bottom (Pages)
          new THREE.MeshStandardMaterial({ map: fTex, roughness: 0.3, metalness: 0.05 }), // Front Cover
          new THREE.MeshStandardMaterial({ map: bTex, roughness: 0.3, metalness: 0.05 }), // Back Cover
        ];
      } else {
        // It's a clean front cover image - display Front Cover 100% crisp without distortion!
        const frontTexture = new THREE.Texture(img);
        frontTexture.needsUpdate = true;
        frontTexture.minFilter = THREE.LinearFilter;

        // Create matching dark burgundy spine canvas
        const canvasSpine = document.createElement("canvas");
        canvasSpine.width = 120;
        canvasSpine.height = 800;
        const ctxSpine = canvasSpine.getContext("2d")!;
        ctxSpine.fillStyle = "#3D0B12";
        ctxSpine.fillRect(0, 0, 120, 800);
        ctxSpine.fillStyle = "#E0C8B1";
        ctxSpine.font = "bold 28px serif";
        ctxSpine.textAlign = "center";
        ctxSpine.translate(60, 400);
        ctxSpine.rotate(-Math.PI / 2);
        ctxSpine.fillText("CUT, PAN, ZOOM", 0, 10);
        const sTex = createTex(canvasSpine);

        // Create matching dark burgundy back cover
        const canvasBack = document.createElement("canvas");
        canvasBack.width = 600;
        canvasBack.height = 800;
        const ctxBack = canvasBack.getContext("2d")!;
        ctxBack.fillStyle = "#3D0B12";
        ctxBack.fillRect(0, 0, 600, 800);
        ctxBack.fillStyle = "rgba(224, 200, 177, 0.4)";
        ctxBack.font = "20px serif";
        ctxBack.textAlign = "center";
        ctxBack.fillText("CUT, PAN, ZOOM", 300, 400);
        ctxBack.fillText("FILM TERMS HANDBOOK", 300, 430);
        const bTex = createTex(canvasBack);

        bookMesh.material = [
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Right (Pages)
          new THREE.MeshStandardMaterial({ map: sTex, roughness: 0.35, metalness: 0.05 }), // Left (Spine)
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Top (Pages)
          new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 }), // Bottom (Pages)
          new THREE.MeshStandardMaterial({ map: frontTexture, roughness: 0.3, metalness: 0.05 }), // Front Cover (Crisp)
          new THREE.MeshStandardMaterial({ map: bTex, roughness: 0.35, metalness: 0.05 }), // Back Cover
        ];
      }
    };

    // 7. Animation Loop
    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotateRef.current) {
        bookMesh.rotation.y += 0.005;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    sceneRef.current = {
      scene,
      camera,
      renderer,
      controls,
      bookMesh,
      animationFrameId: animId,
    };

    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      sceneRef.current.camera.aspect = w / h;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  }, [isOpen, coverImagePath]);

  const resetCamera = () => {
    if (sceneRef.current) {
      sceneRef.current.camera.position.set(2.6, 1.1, 3.6);
      sceneRef.current.controls.target.set(0, 0, 0);
      sceneRef.current.bookMesh.rotation.set(0, 0, 0);
      sceneRef.current.controls.update();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
        {/* Backdrop overlay click to close */}
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Box Window with Clean White Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-xl bg-white border border-black/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] sm:h-[560px]"
          id="3d-book-modal-box"
        >
          {/* White Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-deep-burgundy/10 text-deep-burgundy border border-deep-burgundy/20">
                <Box className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold tracking-wide text-soft-cream flex items-center gap-2">
                  Cut, Pan, Zoom
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-deep-burgundy/10 text-deep-burgundy border border-deep-burgundy/20">
                    3D View
                  </span>
                </h3>
                <p className="text-[11px] font-mono text-soft-cream/60">
                  Interactive 3D Book Experience
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-soft-cream/70 hover:text-soft-cream transition duration-200 cursor-pointer border border-black/10"
              title="Close Modal"
              id="close-3d-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 3D Canvas Area (Clean light studio rendering) */}
          <div className="relative flex-1 w-full bg-[#FAFAFA]">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Interactive hint floating badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[10px] font-mono uppercase tracking-widest text-soft-cream shadow-md flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-deep-burgundy" />
              <span>Drag to rotate • Scroll to zoom</span>
            </div>
          </div>

          {/* White Footer Controls Bar */}
          <div className="px-6 py-3.5 border-t border-black/10 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition cursor-pointer border ${
                  isAutoRotating
                    ? "bg-deep-burgundy/10 border-deep-burgundy/30 text-deep-burgundy"
                    : "bg-black/5 border-black/10 text-soft-cream/70 hover:bg-black/10"
                }`}
              >
                {isAutoRotating ? (
                  <>
                    <Pause className="h-3.5 w-3.5" />
                    <span>Pause Rotation</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" />
                    <span>Auto Rotate</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={resetCamera}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-black/5 hover:bg-black/10 text-soft-cream/70 hover:text-soft-cream transition cursor-pointer border border-black/10"
                title="Reset Camera Angle"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset View</span>
              </button>
            </div>

            <p className="text-[10px] font-mono text-soft-cream/50 hidden sm:block">
              20 Pages • Interactive Inspection
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
