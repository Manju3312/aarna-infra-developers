'use client';

import React, { useEffect, useRef } from 'react';
import type { Vector3 } from 'three';

export default function LuxuryRealEstateBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    // Use requestIdleCallback or 400ms timeout so the main thread, DOM, and fonts
    // hydrate with 100% priority in <30ms with ZERO thread competition
    const initDeferred = () => {
      if (typeof window === 'undefined' || disposed) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const schedule =
        (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
          .requestIdleCallback || ((cb: () => void) => setTimeout(cb, 400));

      schedule(async () => {
        if (disposed || !container) return;

        try {
          const THREE = await import('three');
          if (disposed || !mountRef.current) return;

          let width = window.innerWidth;
          let height = window.innerHeight;

          // 1. Scene & Camera Setup
          const scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0xfafcfa, 0.0018);

          const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1200);
          camera.position.set(0, 75, 260);
          camera.lookAt(0, 20, 0);

          // 2. High-Performance WebGL Renderer with Alpha
          const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'low-power',
          });
          renderer.setSize(width, height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
          renderer.setClearColor(0x000000, 0);
          renderer.domElement.style.pointerEvents = 'none';
          renderer.domElement.style.position = 'absolute';
          renderer.domElement.style.top = '0';
          renderer.domElement.style.left = '0';
          renderer.domElement.style.width = '100%';
          renderer.domElement.style.height = '100%';
          container.appendChild(renderer.domElement);

          // Architectural Color Palette
          const pineMaterial = new THREE.LineBasicMaterial({
            color: 0x183323,
            transparent: true,
            opacity: 0.12,
          });

          const boldPineMaterial = new THREE.LineBasicMaterial({
            color: 0x183323,
            transparent: true,
            opacity: 0.22,
          });

          const goldMaterial = new THREE.LineBasicMaterial({
            color: 0xd4af37,
            transparent: true,
            opacity: 0.35,
          });

          const maroonMaterial = new THREE.LineBasicMaterial({
            color: 0x800000,
            transparent: true,
            opacity: 0.25,
          });

          // 3. 3D Architectural City Skyline
          const buildingsGroup = new THREE.Group();
          const spirePoints: Vector3[] = [];

          const towerConfigs = [
            { x: -280, z: -220, w: 35, d: 35, h: 120, spires: 1 },
            { x: -210, z: -180, w: 28, d: 28, h: 95, spires: 0 },
            { x: -150, z: -260, w: 42, d: 42, h: 155, spires: 1 },
            { x: -95, z: -200, w: 30, d: 30, h: 110, spires: 0 },
            { x: -40, z: -290, w: 45, d: 45, h: 180, spires: 1 },
            { x: 30, z: -230, w: 32, d: 32, h: 130, spires: 1 },
            { x: 90, z: -270, w: 38, d: 38, h: 165, spires: 1 },
            { x: 160, z: -210, w: 26, d: 26, h: 105, spires: 0 },
            { x: 220, z: -250, w: 40, d: 40, h: 145, spires: 1 },
            { x: 285, z: -190, w: 30, d: 30, h: 90, spires: 0 },
            { x: -180, z: -100, w: 22, d: 22, h: 55, spires: 0 },
            { x: -70, z: -120, w: 25, d: 25, h: 65, spires: 0 },
            { x: 80, z: -110, w: 24, d: 24, h: 60, spires: 0 },
            { x: 190, z: -90, w: 22, d: 22, h: 50, spires: 0 },
          ];

          towerConfigs.forEach((t) => {
            const boxGeo = new THREE.BoxGeometry(t.w, t.h, t.d);
            const edges = new THREE.EdgesGeometry(boxGeo);
            const line = new THREE.LineSegments(edges, pineMaterial);
            line.position.set(t.x, t.h / 2, t.z);
            buildingsGroup.add(line);

            const floorSteps = 6;
            for (let f = 1; f < floorSteps; f++) {
              const floorY = (t.h / floorSteps) * f;
              const floorGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(-t.w / 2, floorY, -t.d / 2),
                new THREE.Vector3(t.w / 2, floorY, -t.d / 2),
                new THREE.Vector3(t.w / 2, floorY, t.d / 2),
                new THREE.Vector3(-t.w / 2, floorY, t.d / 2),
                new THREE.Vector3(-t.w / 2, floorY, -t.d / 2),
              ]);
              const floorLine = new THREE.Line(floorGeo, pineMaterial);
              floorLine.position.set(t.x, 0, t.z);
              buildingsGroup.add(floorLine);
            }

            if (t.spires) {
              const spireH = 28;
              const spireGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(t.x, t.h, t.z),
                new THREE.Vector3(t.x, t.h + spireH, t.z),
              ]);
              const spireLine = new THREE.Line(spireGeo, goldMaterial);
              buildingsGroup.add(spireLine);
              spirePoints.push(new THREE.Vector3(t.x, t.h + spireH, t.z));
            }
          });
          scene.add(buildingsGroup);

          // Golden Beacons
          if (spirePoints.length > 0) {
            const beaconGeo = new THREE.BufferGeometry().setFromPoints(spirePoints);
            const beaconMat = new THREE.PointsMaterial({
              color: 0xd4af37,
              size: 4,
              transparent: true,
              opacity: 0.8,
            });
            const beaconMesh = new THREE.Points(beaconGeo, beaconMat);
            scene.add(beaconMesh);
          }

          // 4. Cadastral Survey Land Parcel Grid
          const plotsGroup = new THREE.Group();
          const surveyPins: Vector3[] = [];

          const plotCols = 10;
          const plotRows = 7;
          const plotWidth = 24;
          const plotDepth = 32;
          const roadWidth = 10;

          for (let c = -plotCols / 2; c < plotCols / 2; c++) {
            for (let r = -plotRows / 2; r < plotRows / 2; r++) {
              const px = c * (plotWidth + roadWidth);
              const pz = r * (plotDepth + roadWidth) + 40;

              const plotGeo = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(px - plotWidth / 2, 0.5, pz - plotDepth / 2),
                new THREE.Vector3(px + plotWidth / 2, 0.5, pz - plotDepth / 2),
                new THREE.Vector3(px + plotWidth / 2, 0.5, pz + plotDepth / 2),
                new THREE.Vector3(px - plotWidth / 2, 0.5, pz + plotDepth / 2),
                new THREE.Vector3(px - plotWidth / 2, 0.5, pz - plotDepth / 2),
              ]);

              const mat = (c + r) % 3 === 0 ? boldPineMaterial : pineMaterial;
              const plotLine = new THREE.Line(plotGeo, mat);
              plotsGroup.add(plotLine);

              if ((c + r) % 2 === 0) {
                surveyPins.push(
                  new THREE.Vector3(px - plotWidth / 2, 1, pz - plotDepth / 2),
                  new THREE.Vector3(px + plotWidth / 2, 1, pz + plotDepth / 2)
                );
              }
            }
          }
          scene.add(plotsGroup);

          const pinsGeo = new THREE.BufferGeometry().setFromPoints(surveyPins);
          const pinsMat = new THREE.PointsMaterial({
            color: 0x0d5c2c,
            size: 2.5,
            transparent: true,
            opacity: 0.45,
          });
          const pinsMesh = new THREE.Points(pinsGeo, pinsMat);
          scene.add(pinsMesh);

          // 5. Arterial Highway Vector Corridors
          const highwayGroup = new THREE.Group();

          const nh44Curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-180, 2, 180),
            new THREE.Vector3(-90, 2, 80),
            new THREE.Vector3(-15, 2, -20),
            new THREE.Vector3(10, 2, -140),
            new THREE.Vector3(30, 2, -320),
          ]);
          const nh44Geo = new THREE.BufferGeometry().setFromPoints(nh44Curve.getPoints(60));
          const nh44Line = new THREE.Line(nh44Geo, goldMaterial);
          highwayGroup.add(nh44Line);

          const rrrCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-340, 2, -40),
            new THREE.Vector3(-200, 2, 40),
            new THREE.Vector3(0, 2, 70),
            new THREE.Vector3(220, 2, 30),
            new THREE.Vector3(350, 2, -50),
          ]);
          const rrrGeo = new THREE.BufferGeometry().setFromPoints(rrrCurve.getPoints(60));
          const rrrLine = new THREE.Line(rrrGeo, maroonMaterial);
          highwayGroup.add(rrrLine);

          scene.add(highwayGroup);

          // 6. Highway Transit Pulse Beams
          const pulseCount = 10;
          const pulsePositions = new Float32Array(pulseCount * 3);
          const pulseColors = new Float32Array(pulseCount * 3);

          for (let i = 0; i < pulseCount; i++) {
            pulseColors[i * 3] = 0.83;
            pulseColors[i * 3 + 1] = 0.68;
            pulseColors[i * 3 + 2] = 0.21;
          }

          const pulseGeo = new THREE.BufferGeometry();
          pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));
          pulseGeo.setAttribute('color', new THREE.BufferAttribute(pulseColors, 3));

          const pulseMat = new THREE.PointsMaterial({
            size: 4.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
          });
          const pulsePointsMesh = new THREE.Points(pulseGeo, pulseMat);
          scene.add(pulsePointsMesh);

          // 7. Interactive Parallax & Subtle Drift
          let mouseX = 0;
          let mouseY = 0;
          let targetX = 0;
          let targetY = 0;
          let scrollY = 0;

          const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
          };

          const handleScroll = () => {
            scrollY = window.scrollY || 0;
          };

          window.addEventListener('mousemove', handleMouseMove, { passive: true });
          window.addEventListener('scroll', handleScroll, { passive: true });

          const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
          };
          window.addEventListener('resize', handleResize);

          // 8. Animation Render Loop (CPU & GPU friendly: Pauses when document is hidden)
          let animationFrameId: number;
          let time = 0;

          const animate = () => {
            if (disposed) return;

            // Pause Three.js render loop when tab is hidden to save 100% CPU
            if (document.hidden) {
              animationFrameId = requestAnimationFrame(animate);
              return;
            }

            time += 0.005;

            targetX += (mouseX * 40 - targetX) * 0.04;
            targetY += (mouseY * 18 - targetY) * 0.04;

            const scrollOffset = Math.min(scrollY * 0.08, 120);

            camera.position.x = targetX;
            camera.position.y = 75 + targetY - scrollOffset * 0.15;
            camera.position.z = 260 - scrollOffset;
            camera.lookAt(targetX * 0.3, 20, -100 - scrollOffset);

            const positions = pulseGeo.attributes.position.array as Float32Array;
            for (let i = 0; i < pulseCount; i++) {
              const offset = (i / pulseCount + time * 0.18) % 1;
              const curve = i % 2 === 0 ? nh44Curve : rrrCurve;
              const pt = curve.getPointAt(offset);

              positions[i * 3] = pt.x;
              positions[i * 3 + 1] = pt.y + 1;
              positions[i * 3 + 2] = pt.z;
            }
            pulseGeo.attributes.position.needsUpdate = true;

            plotsGroup.position.y = Math.sin(time * 0.8) * 0.5;

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
          };

          animate();

          // Cleanup callback
          cleanup = () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

            scene.traverse((obj) => {
              if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
                obj.geometry?.dispose();
                if (Array.isArray(obj.material)) {
                  obj.material.forEach((m) => m?.dispose());
                } else {
                  obj.material?.dispose();
                }
              }
            });

            renderer.dispose();
            if (container && renderer.domElement && container.contains(renderer.domElement)) {
              container.removeChild(renderer.domElement);
            }
          };
        } catch (err) {
          console.warn('3D Background initialization deferred:', err);
        }
      });
    };

    initDeferred();

    return () => {
      disposed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full overflow-hidden"
      style={{ pointerEvents: 'none', opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
